import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hirschmann.blog',
  // Emit legal.html instead of legal/index.html so the old Jekyll URLs keep working
  build: { format: 'file' },
});
