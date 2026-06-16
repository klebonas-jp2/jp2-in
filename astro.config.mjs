import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://klebonas-jp2.github.io/jp2-in/',
  base: '/jp2-in/',
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
