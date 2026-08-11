import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const publicSite = process.env.PUBLIC_SITE_URL || 'https://paxautocraticatips.com';

export default defineConfig({
  site: publicSite,
  integrations: [sitemap()],
  build: { format: 'directory' },
  vite: {
    build: { cssMinify: true }
  }
});
