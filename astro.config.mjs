import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        { "astro-embed": ["YouTube"] }
      ]
    }),
    react(),
    mdx()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      es: 'en'
    }
  }
});