import { copyFileSync, existsSync } from "node:fs";

/**
 * OG-Images per Konvention (siehe auch AGENTS.md):
 *
 * Jede Seite bekommt ihr OG-Image als Datei im Seitenordner:
 *
 * - Anleitungen:   docs/anleitung/<slug>/image.jpg → og:image <host>/anleitung/<slug>/image.jpg
 * - Sonderseiten:  docs/image.jpg (Homepage), docs/faq/image.jpg, docs/glossar/image.jpg,
 *                  docs/links/image.jpg, docs/anleitung/image.jpg (Übersichtsseite)
 *                  → og:image <host>/image.jpg usw.
 *
 * Die Bild-URL entspricht dabei immer dem Pfad der Markdown-Datei, wobei die
 * Markdown-Datei durch `image.jpg` ersetzt wird (z. B. faq/index.md →
 * faq/image.jpg).
 *
 * Nicht referenzierte Quell-Assets werden von VuePress sonst nicht in den
 * Build übernommen — deshalb kopiert onGenerated die Bilder nach dist/
 * (läuft nur beim Build; der Dev-Server liefert die Quelldateien selbst aus).
 *
 * Fallback: Seiten ohne passendes Bild bekommen die seoPlugin-Option
 * `fallBackImage` (volle URL, Dynamik siehe config.ts).
 *
 * Das `banner`-Frontmatter wird nur injiziert, wenn die Datei existiert und
 * nicht bereits explizit gesetzt ist. plugin-seo nutzt `banner` für
 * og:image und aktiviert `twitter:card summary_large_image` automatisch.
 */

type ArticlePage = {
  filePathRelative?: string;
  frontmatter: Record<string, unknown>;
};
type AppLike = {
  pages: ArticlePage[];
  dir: { source: (segment?: string) => string; dest: (segment?: string) => string };
};

/** Seiten, die ein Conventions-Bild erhalten: filePathRelative → true */
const OG_IMAGE_PAGES: Record<string, boolean> = {
  "index.md": true, // Homepage
  "faq/index.md": true,
  "glossar/index.md": true,
  "links/index.md": true,
  "anleitung/README.md": true, // Anleitungs-Übersichtsseite
};

const ANLEITUNG_ARTICLE = /^anleitung\/[a-z0-9-]+\/README\.md$/;

/** filePathRelative → relative Image-Pfad (image.jpg statt Markdown), z. B. faq/index.md → faq/image.jpg */
function imageRelativeTo(relative: string): string | undefined {
  if (OG_IMAGE_PAGES[relative] || ANLEITUNG_ARTICLE.test(relative)) {
    return relative.replace(/[^/]+\.md$/, "image.jpg");
  }
  return undefined;
}

export const ogImagesPlugin = {
  name: "hey-bitcoin-og-images",
  /** inject `banner` frontmatter for pages with a conventional image.jpg */
  onInitialized: (app: AppLike): void => {
    for (const page of app.pages) {
      const relative = page.filePathRelative;
      if (!relative || page.frontmatter.banner) continue;
      const image = imageRelativeTo(relative);
      if (image && existsSync(app.dir.source(image))) {
        page.frontmatter.banner = "/" + image;
      }
    }
  },
  /** images that are not referenced in markdown are not emitted — copy them into dist */
  onGenerated: (app: AppLike): void => {
    for (const page of app.pages) {
      const relative = page.filePathRelative;
      if (!relative) continue;
      const image = imageRelativeTo(relative);
      if (!image || !existsSync(app.dir.source(image))) continue;
      copyFileSync(app.dir.source(image), app.dir.dest(image));
    }
  },
};
