import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
  },
});
