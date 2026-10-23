import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { SITE_URL, STATIC_ROUTES } from "./src/lib/site";

const here = path.dirname(fileURLToPath(import.meta.url));

const attr = (value: string) => value.replace(/"/g, "&quot;");

const swap = (html: string, pattern: RegExp, replacement: string, label: string) => {
  if (!pattern.test(html)) throw new Error(`route-metadata: ${label} not found in index.html`);
  return html.replace(pattern, replacement);
};

/**
 * Writes a copy of the built index.html per route (dist/privacy/index.html) with
 * that route's title, description, canonical and Open Graph values, so crawlers
 * that do not run JavaScript still receive route-appropriate metadata.
 */
function routeMetadata() {
  return {
    name: "route-metadata",
    apply: "build" as const,
    closeBundle() {
      const out = path.resolve(here, "dist");
      let html: string;
      try {
        html = readFileSync(path.resolve(out, "index.html"), "utf8");
      } catch {
        return;
      }
      for (const meta of STATIC_ROUTES) {
        const url = `${SITE_URL}${meta.path}`;
        let page = html;
        page = swap(page, /<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`, "title");
        page = swap(
          page,
          /<meta name="description" content="[^"]*"/,
          `<meta name="description" content="${attr(meta.description)}"`,
          "description"
        );
        page = swap(
          page,
          /<meta property="og:title" content="[^"]*"/,
          `<meta property="og:title" content="${attr(meta.title)}"`,
          "og:title"
        );
        page = swap(
          page,
          /<meta property="og:description" content="[^"]*"/,
          `<meta property="og:description" content="${attr(meta.description)}"`,
          "og:description"
        );
        page = swap(
          page,
          /<meta property="og:url" content="[^"]*"/,
          `<meta property="og:url" content="${url}"`,
          "og:url"
        );
        page = swap(
          page,
          /<meta name="twitter:title" content="[^"]*"/,
          `<meta name="twitter:title" content="${attr(meta.title)}"`,
          "twitter:title"
        );
        page = swap(
          page,
          /<meta name="twitter:description" content="[^"]*"/,
          `<meta name="twitter:description" content="${attr(meta.description)}"`,
          "twitter:description"
        );
        page = swap(
          page,
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${url}" />`,
          "canonical link"
        );
        const dir = path.resolve(out, meta.path.replace(/^\/+|\/+$/g, ""));
        mkdirSync(dir, { recursive: true });
        writeFileSync(path.resolve(dir, "index.html"), page);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    routeMetadata(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
