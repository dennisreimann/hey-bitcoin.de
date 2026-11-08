import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { generateForSlug, loadEntries, outfileFor } from "./image.mjs";

/**
 * OG-Image batch generator for hey-bitcoin.de
 *
 * Takes all anleitung articles plus the special site pages (FAQ, Glossar, ...)
 * from the AGENTS.md image tables and generates the missing OG images one by
 * one (sequential, to be gentle on the API) using scripts/image.mjs.
 *
 * Usage:
 *   node scripts/missing-images.mjs [--dry]   # --dry only lists what is missing
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const dryRun = process.argv.includes("--dry");

const entries = loadEntries();
const missing = entries
  .filter(({ slug }) => !existsSync(outfileFor(slug)))
  .sort((a, b) => {
    // articles first, then site pages
    return a.type === b.type ? a.slug.localeCompare(b.slug) : a.type === "article" ? -1 : 1;
  });

const articleCount = entries.filter((entry) => entry.type === "article").length;
const siteCount = entries.length - articleCount;

if (!missing.length) {
  console.log(`All ${entries.length} entries (${articleCount} articles, ${siteCount} site pages) have an image. Nothing to do.`);
  process.exit(0);
}

console.log(
  `Missing images for ${missing.length} of ${entries.length} entries ` +
    `(${articleCount} articles, ${siteCount} site pages):`
);
for (const { slug, type } of missing) {
  console.log(`  - ${slug}${type === "site" ? " (site page)" : ""}`);
}

if (dryRun) {
  console.log("\nDry run: nothing was generated. Run without --dry to generate.");
  process.exit(0);
}

console.log("");
const failures = [];

for (const [index, { slug }] of missing.entries()) {
  console.log(`[${index + 1}/${missing.length}] ${slug}`);
  try {
    await generateForSlug(slug);
  } catch (error) {
    console.error(`  FAILED: ${error.message}`);
    failures.push(slug);
  }
  console.log("");
}

if (failures.length) {
  console.log(`Done with errors: ${failures.length} failed — ${failures.join(", ")}`);
  process.exit(1);
}
console.log("Done: all missing images generated.");
