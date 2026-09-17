// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yedidyaWeksler.github.io',
  base: '/weksler_institute',
  vite: {
    plugins: [tailwindcss()]
  }
});
