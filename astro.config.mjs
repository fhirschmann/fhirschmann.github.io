import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fhirschmann.github.io',
  // Emit legal.html instead of legal/index.html so the old Jekyll URLs keep working
  build: { format: 'file' },
});
