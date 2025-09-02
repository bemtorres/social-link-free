import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/tu-repositorio',
  integrations: [tailwind()],
});
