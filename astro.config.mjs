import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bemtorres.github.io',
  base: '/social-link-free',
  integrations: [tailwind()],
});
