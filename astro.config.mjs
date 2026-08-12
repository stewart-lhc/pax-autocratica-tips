import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitemapLastmodByPathname } from './src/data/site.ts';

const publicSite = process.env.PUBLIC_SITE_URL || 'https://paxautocraticatips.com';

export default defineConfig({
  site: publicSite,
  integrations: [sitemap({
    serialize(item) {
      const pathname = new URL(item.url).pathname;
      const lastmod = sitemapLastmodByPathname[pathname];
      if (!lastmod) throw new Error(`Missing sitemap lastmod mapping for ${pathname}`);
      return { ...item, lastmod };
    }
  })],
  build: { format: 'directory' },
  vite: {
    build: { cssMinify: true }
  }
});
