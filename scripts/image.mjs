import { execFile } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const runExiftool = promisify(execFile);

/**
 * OG-Image generator for hey-bitcoin.de
 *
 * Usage: node scripts/image.mjs <article-slug> [outfile]
 *
 * Example: node scripts/image.mjs tails-os-sparrow-wallet
 *
 * Both the base prompt (the ```text block containing "SCENE: {SCENE}") and
 * the per-article scene description (the "{SCENE}" column of the article
 * table) are read from AGENTS.md — a single source of truth for the site-wide
 * style. By convention the image is written to docs/anleitung/<slug>/image.jpg.
 *
 * Also usable as a module: import { generateForSlug } from "./image.mjs".
 */

// Config --------------------------------------------------------------------

// Nano Banana cannot produce the exact OG ratio 1.91:1; 16:9 (1200x675) is the
// closest landscape format that social networks display without weird crops.
const RATIO = "16:9";
const RESOLUTION = "1K";
const MODEL = "nano-banana-2-1";
const FILENAME = "image.jpg";

// API-backends disagree on the aspect-ratio parameter: some support OpenRouter
// style image_config.aspect_ratio, some OpenAI style size. We try variants in
// order and remember which one succeeded (note: variant 1 yields exact "16:9",
// variant 2 maps to the closest available ratio of that backend, typically 3:2
// landscape — pick the variant that gives you consistent results and stick with
// it via VARIANT below).
const VARIANT = 0; // 0 = auto (try all), or 1 / 2 / 3 to force one
const VARIANTS = [
  ["image_config", { aspect_ratio: RATIO, resolution: RESOLUTION }],
  ["size", { size: "1536x1024", resolution: RESOLUTION }],
  ["none", { resolution: RESOLUTION }],
];

// Files ----------------------------------------------------------------------

const __dirname = dirname(fileURLToPath(import.meta.url));
const agentsPath = resolve(__dirname, "../AGENTS.md");
const agentsMd = readFileSync(agentsPath, "utf8");

function loadPromptTemplate() {
  const matches = [...agentsMd.matchAll(/```text\n([\s\S]*?)```/g)];
  for (const [, block] of matches) {
    if (block.includes("SCENE: {SCENE}")) return block;
  }
  throw new Error(
    'No prompt template found in AGENTS.md (expected a ```text block containing "SCENE: {SCENE}").'
  );
}

/**
 * Extract "| **slug** ... | scene |" rows from the AGENTS.md image tables.
 * Rows under a "### Sonderseiten" heading are site pages (og key in
 * docs/.vuepress/public/og/), everything else an anleitung article.
 */
function loadEntries() {
  const entries = [];
  let section = "";
  for (const line of agentsMd.split("\n")) {
    section = line.match(/^### (.+)$/)?.[1] ?? section;
    const match = line.match(/^\| \*\*([a-z0-9-]+)\*\* \|.+.\| (.+) \|$/);
    if (match) {
      entries.push({
        slug: match[1],
        type: /^Sonderseiten/.test(section) ? "site" : "article",
        scene: match[2],
      });
    }
  }
  return entries;
}

function loadSlugs() {
  return loadEntries().map((entry) => entry.slug);
}

function loadEntry(slug) {
  const entry = loadEntries().find((candidate) => candidate.slug === slug);
  if (!entry) {
    throw new Error(
      `No article "${slug}" found in the AGENTS.md image tables.\nAvailable slugs:\n  ${loadSlugs().join("\n  ")}`
    );
  }
  return entry;
}

function loadScene(slug) {
  return loadEntry(slug).scene;
}

// Konventionspfade der Sonderseiten — muss zu docs/.vuepress/plugins/ogImages.ts passen
const SITE_PAGE_IMAGES = {
  index: "image.jpg",
  faq: "faq/image.jpg",
  glossar: "glossar/image.jpg",
  links: "links/image.jpg",
  anleitung: "anleitung/image.jpg",
};

/** Artikel → docs/anleitung/<slug>/image.jpg; Sonderseiten → Ordner der Seite */
function outfileFor(slug) {
  const entry = loadEntry(slug);
  return entry.type === "site"
    ? resolve(__dirname, `../docs/${SITE_PAGE_IMAGES[slug]}`)
    : resolve(__dirname, `../docs/anleitung/${slug}/${FILENAME}`);
}

const defaultOutfile = outfileFor; // kept for backwards compatibility

/**
 * Strip all metadata (incl. C2PA/AI provenance tags, if any) from the image
 * via exiftool. Fail-soft: if exiftool is not installed, we only warn.
 */
async function stripMetadata(file) {
  try {
    await runExiftool("exiftool", ["-overwrite_original", "-all=", file]);
    console.log(`Stripped metadata from ${file}`);
  } catch (error) {
    if (error?.code === "ENOENT") {
      console.warn(`Warning: exiftool not found — metadata of ${file} was not stripped.`);
    } else {
      console.warn(`Warning: metadata strip failed for ${file}: ${error?.message ?? error}`);
    }
  }
}

// Generation -----------------------------------------------------------------

async function generateForSlug(slug, outfile = defaultOutfile(slug)) {
  const { PPQ_API_KEY } = process.env;
  if (!PPQ_API_KEY) {
    throw new Error("PPQ_API_KEY environment variable is not set.");
  }

  const template = loadPromptTemplate();
  const prompt = template.replace(
    "SCENE: {SCENE}",
    `SCENE: ${loadScene(slug).trim()}`
  );
  console.log(`Generating OG image for "${slug}" (${outfile}) ...`);

  const variants = VARIANT === 0 ? VARIANTS : [VARIANTS[VARIANT - 1] ?? VARIANTS[0]];

  for (const [label, extra] of variants) {
    const response = await fetch("https://api.ppq.ai/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PPQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        prompt,
        n: 1,
        ...extra,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Variant "${label}" failed: HTTP ${response.status} ${body}`);
      continue;
    }

    const result = await response.json();
    const image = result?.data?.[0];

    if (image?.b64_json) {
      writeFileSync(outfile, Buffer.from(image.b64_json, "base64"));
      console.log(`Saved ${outfile} (variant "${label}")`);
      await stripMetadata(outfile);
      return outfile;
    }

    if (!image?.url) {
      console.error(`Variant "${label}" returned no image:`, JSON.stringify(result).slice(0, 500));
      continue;
    }

    const imgRes = await fetch(image.url);
    if (!imgRes.ok) {
      throw new Error(`Download failed: HTTP ${imgRes.status} for ${image.url}`);
    }
    writeFileSync(outfile, Buffer.from(await imgRes.arrayBuffer()));
    console.log(`Saved ${outfile} (variant "${label}")\nURL (valid 24h): ${image.url}`);
    await stripMetadata(outfile);
    return outfile;
  }

  throw new Error("All aspect-ratio variants failed. Check the error messages above.");
}

// CLI ------------------------------------------------------------------------

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  const [slug, ...outArgs] = process.argv.slice(2);
  const outfile = outArgs[0] || (slug ? defaultOutfile(slug) : null);

  if (!slug) {
    console.error(
      "Usage: node scripts/image.mjs <article-slug> [outfile]" +
        '\nExample: node scripts/image.mjs tails-os-sparrow-wallet' +
        "\n\nAvailable article slugs in AGENTS.md:" +
        "\n  " + loadSlugs().join("\n  ")
    );
    process.exit(1);
  }

  try {
    await generateForSlug(slug, outfile);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export { generateForSlug, loadEntries, loadSlugs, loadScene, outfileFor, stripMetadata };
