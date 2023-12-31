import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";

import react from "@astrojs/react";

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  styleOverrides: {
    codeFontSize: "1rem",
    codeFontFamily: "Menlo, monospace",
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://senrobo.github.io/",
  integrations: [
    expressiveCode(astroExpressiveCodeOptions),
    mdx(),
    sitemap(),
    tailwind(),
    react(),
  ],
});
