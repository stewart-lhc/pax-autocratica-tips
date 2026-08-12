import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, sitemapLastmodByPathname } from '../src/data/site.ts';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const site = new URL(process.env.PUBLIC_SITE_URL || 'https://paxautocraticatips.com');
const expectedRoutes = ['/', ...pages.map((page) => `/${page.slug}/`)].sort();
const failures = [];
const titles = new Map();
const htmlRoutes = new Set();

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

    const html = await readFile(path, 'utf8');
    const relativePath = relative(root, path).split(sep).join('/');
    const route = relativePath === 'index.html'
      ? '/'
      : `/${relativePath.replace(/\/index\.html$/, '').replace(/\.html$/, '')}/`;
    htmlRoutes.add(route);

    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const h1Count = (html.match(/<h1[ >]/g) || []).length;
    const canonicalValue = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
    if (!title) failures.push(`${path}: missing title`);
    if (h1Count !== 1) failures.push(`${path}: expected one h1, found ${h1Count}`);
    if (!html.includes('name="description"')) failures.push(`${path}: missing description`);
    if (!html.includes('UNOFFICIAL FAN ARCHIVE')) failures.push(`${path}: missing fan-site disclosure`);
    if (!canonicalValue) failures.push(`${path}: missing canonical`);
    else {
      try {
        const canonical = new URL(canonicalValue);
        if (canonical.host !== site.host || canonical.protocol !== site.protocol) failures.push(`${path}: canonical host/protocol must be ${site.origin}`);
        if (canonical.pathname !== route) failures.push(`${path}: canonical route ${canonical.pathname} does not match ${route}`);
      } catch { failures.push(`${path}: invalid canonical URL ${canonicalValue}`); }
    }
    if (title) titles.set(title, [...(titles.get(title) || []), path]);
  }
}

await walk(root);
for (const route of expectedRoutes) if (!htmlRoutes.has(route)) failures.push(`missing generated route ${route}`);
for (const route of htmlRoutes) if (route !== '/404/' && !expectedRoutes.includes(route)) failures.push(`unexpected generated route ${route}`);

const sitemapIndex = await readFile(join(root, 'sitemap-index.xml'), 'utf8').catch(() => '');
const sitemap = await readFile(join(root, 'sitemap-0.xml'), 'utf8').catch(() => '');
if (!sitemapIndex) failures.push('missing sitemap-index.xml');
if (!sitemap) failures.push('missing sitemap-0.xml');
const sitemapBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
if (sitemapBlocks.length !== expectedRoutes.length) failures.push(`sitemap URL block count ${sitemapBlocks.length} does not match ${expectedRoutes.length}`);
const sitemapRoutes = [];
const seenSitemapRoutes = new Set();
for (const [index, block] of sitemapBlocks.entries()) {
  const locs = [...block.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const lastmods = [...block.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  if (locs.length !== 1) { failures.push(`sitemap URL block ${index + 1}: expected exactly one loc, found ${locs.length}`); continue; }
  if (lastmods.length !== 1) { failures.push(`sitemap URL block ${index + 1}: expected exactly one lastmod, found ${lastmods.length}`); continue; }
  try {
    const url = new URL(locs[0]);
    if (url.host !== site.host || url.protocol !== site.protocol) { failures.push(`sitemap URL block ${index + 1}: invalid loc ${locs[0]}`); continue; }
    const route = url.pathname;
    sitemapRoutes.push(route);
    if (seenSitemapRoutes.has(route)) failures.push(`duplicate sitemap loc ${route}`);
    seenSitemapRoutes.add(route);
    if (!Object.hasOwn(sitemapLastmodByPathname, route)) failures.push(`unexpected sitemap loc ${route}`);
    else {
      const expectedLastmod = new Date(`${sitemapLastmodByPathname[route]}T00:00:00Z`).toISOString();
      if (lastmods[0] !== expectedLastmod) failures.push(`sitemap ${route}: lastmod ${lastmods[0]} does not match ${expectedLastmod}`);
    }
  } catch { failures.push(`sitemap URL block ${index + 1}: invalid loc ${locs[0]}`); }
}
assert.deepEqual([...sitemapRoutes].sort(), expectedRoutes, 'sitemap route set changed');
for (const [title, files] of titles) if (files.length > 1) failures.push(`duplicate title ${title}: ${files.join(', ')}`);
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Content audit passed: ${titles.size} HTML pages checked; ${expectedRoutes.length} routes and sitemap entries preserved.`);
