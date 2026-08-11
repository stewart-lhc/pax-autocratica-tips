import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages } from '../src/data/site.ts';

const lockedTdh = {
  guide: ['Pax Autocratica Guide – Beginner Tips & How to Play', 'New to Pax Autocratica? This guide covers how to play, first-hour setup, core mechanics and 15 pro tips to rule your empire from day one.', 'Pax Autocratica Guide – How to Play & Beginner Tips'],
  'tier-list': ['Pax Autocratica Tier List – Best Buildings & Policies', 'Ranked tier list of every building, weapon and policy in Pax Autocratica – S-tier picks, upgrade priorities and which options to skip.', 'Pax Autocratica Tier List'],
  strategy: ['Pax Autocratica Strategy Guide – How to Win', 'Winning Pax Autocratica strategies: optimal openings, policy choices, economy management and military tips from hours of play.', 'Pax Autocratica Strategy Guide'],
  walkthrough: ['Pax Autocratica Walkthrough – Full Campaign Guide', 'Step-by-step Pax Autocratica walkthrough covering every chapter, objective and boss fight. Complete campaign guide with checkpoints and loot.', 'Pax Autocratica Walkthrough'],
  review: ['Pax Autocratica Review – Is It Worth Buying?', 'Our Pax Autocratica review: gameplay, replay value, performance and verdict after 20+ hours. Should you buy the full release?', 'Pax Autocratica Review – Should You Buy It?'],
  multiplayer: ['Pax Autocratica Multiplayer Guide – Co-op Explained', 'How multiplayer works in Pax Autocratica: co-op setup, crossplay, matchmaking and common connection issues, solved.', 'Pax Autocratica Multiplayer Guide'],
  wiki: ['Pax Autocratica Wiki – Buildings, Weapons & More', 'Community-built Pax Autocratica wiki: complete lists of buildings, weapons, policies and NPCs with stats, costs and unlock conditions.', 'Pax Autocratica Wiki – Complete Database']
};

const pageBySlug = Object.fromEntries(pages.map((page) => [page.slug, page]));
for (const [slug, [title, description, h1]] of Object.entries(lockedTdh)) {
  assert.deepEqual([pageBySlug[slug].title, pageBySlug[slug].description, pageBySlug[slug].h1], [title, description, h1], `${slug}: locked TDH changed`);
}

const homepage = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
for (const value of [
  'Pax Autocratica Guide – Tips, Walkthrough & Strategy',
  'Complete Pax Autocratica guide hub: beginner tips, building tier list, full walkthrough, strategy guides and launch review. Everything a new ruler needs.',
  'Pax Autocratica Guide – Everything New Players Need'
]) assert.ok(homepage.includes(value), `homepage: locked TDH value missing: ${value}`);

for (const key of ['slug', 'title', 'h1']) {
  const values = pages.map((page) => page[key]);
  assert.equal(new Set(values).size, values.length, `${key} values must be unique`);
}

for (const page of pages) {
  assert.ok(page.description.length >= 100, `${page.slug}: description is too short`);
  assert.ok(page.description.length <= 170, `${page.slug}: description is too long`);
  assert.ok(page.sections.length >= 2, `${page.slug}: needs at least two useful sections`);
  const domains = new Set(page.sources.map((source) => new URL(source.url).hostname));
  assert.ok(domains.size >= 2, `${page.slug}: needs two independent source domains`);
  assert.ok(page.related.length >= 3, `${page.slug}: needs three onward paths`);
}

assert.equal(pages.some((page) => page.slug === 'beginner-guide'), false, 'duplicate beginner intent must stay merged into /guide/');
console.log(`Content contract passed: ${pages.length} evidence-backed pages checked.`);
