import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ward3107.github.io',
  base: '/seo-guide-astro',
  build: {
    format: 'directory',
  },
  integrations: [mdx()],
  markdown: {
    shiki: {
      theme: 'github-dark',
      wrap: true,
    },
    rehypePlugins: [],
    remarkPlugins: [],
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
        },
      },
    },
  },
});
