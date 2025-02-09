// filepath: /home/facu/portfolio/astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://facumruiz.github.io',
  base: 'portfolio',
});