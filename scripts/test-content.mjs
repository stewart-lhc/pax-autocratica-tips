import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages } from '../src/data/site.ts';

const lockedTdh = {
  guide: ['Pax Autocratica Guide – Beginner Tips & How to Play', 'New to Pax Autocratica? Follow a 6-step first-hour route covering Victory Square, policy research, worker assignments, expedition prep and capture.', 'Pax Autocratica Guide – How to Play & Beginner Tips'],
  'tier-list': ['Pax Autocratica Tier List – Launch Core Watchlist', 'A versioned Pax Autocratica tier-list watchlist for 3 readable launch-build core fragments, with verified effects, synergies and testing priorities.', 'Pax Autocratica Tier List'],
  strategy: ['Pax Autocratica Strategy Guide – How to Win', 'A 4-step Pax Autocratica strategy framework for colony automation, mission squads, safer captures and core synergies, based on confirmed mechanics.', 'Pax Autocratica Strategy Guide'],
  walkthrough: ['Pax Autocratica Walkthrough – Opening Objectives', 'A launch-build Pax Autocratica walkthrough for 2 opening colony directives and 3 Auryto sector objectives, with unverified boss details clearly marked.', 'Pax Autocratica Walkthrough'],
  review: ['Pax Autocratica Review – Is It Worth Buying?', 'An evidence-based Pax Autocratica Early Access buyer guide covering the gameplay loop, current features, trade-offs and who should wait for updates.', 'Pax Autocratica Review – Should You Buy It?'],
  multiplayer: ['Pax Autocratica Multiplayer Guide – Co-op Explained', 'Pax Autocratica is currently single-player on Steam. Co-op is planned during Early Access; no public ETA, crossplay or matchmaking details are confirmed.', 'Pax Autocratica Multiplayer Guide'],
  wiki: ['Pax Autocratica Wiki – Buildings, Cores & Weapons', 'A source-checked Pax Autocratica wiki with 9 launch-build work sites, 3 readable core fragments, one weapon record and clearly labelled unknowns.', 'Pax Autocratica Wiki – Source-Checked Database'],
  requirements: ['Pax Autocratica System Requirements & PC Checklist', 'Official Pax Autocratica minimum and recommended PC requirements, plus a practical launch checklist for Windows, storage, GPU memory and controller support.', 'Can your PC run Pax Autocratica?'],
  updates: ['Pax Autocratica Updates – Early Access Patch Tracker', 'A concise Pax Autocratica update tracker connecting official patch notes to the guides, systems and strategies they change.', 'Updates that change how you play'],
  'official-links': ['Pax Autocratica Official Links, Community & Scam Warning', 'Verified Pax Autocratica official website, Steam, Discord, YouTube and community links, plus the developer’s warning about an impersonation domain.', 'Official links, with the fake removed'],
  about: ['About The Autocrat’s Index – Editorial & Source Policy', 'How this independent Pax Autocratica fan Wiki verifies gameplay facts, labels Early Access changes, credits media and corrects mistakes.', 'A fan guide with receipts']
};

const pageBySlug = Object.fromEntries(pages.map((page) => [page.slug, page]));
const expectedSlugs = ['guide', 'wiki', 'strategy', 'tier-list', 'walkthrough', 'review', 'multiplayer', 'requirements', 'updates', 'official-links', 'about'];
assert.deepEqual(pages.map((page) => page.slug), expectedSlugs, 'public slug set/order changed');
for (const [slug, [title, description, h1]] of Object.entries(lockedTdh)) {
  assert.ok(pageBySlug[slug], `${slug}: expected public page missing`);
  assert.deepEqual([pageBySlug[slug].title, pageBySlug[slug].description, pageBySlug[slug].h1], [title, description, h1], `${slug}: locked TDH changed`);
}

const stepCount = (slug, heading) => pageBySlug[slug].sections.find((section) => section.type === 'steps' && section.heading === heading)?.items.length;
const rowCount = (slug, heading) => pageBySlug[slug].sections.find((section) => section.type === 'table' && section.heading === heading)?.rows.length;
assert.equal(stepCount('guide', 'A sane first-hour order'), 6, 'guide: TDH count must match the 6 published steps');
assert.equal(rowCount('wiki', 'Buildings and work sites visible at launch'), 9, 'wiki: TDH count must match the 9 published work sites');
assert.equal(rowCount('wiki', 'Core fragments with readable launch values'), 3, 'wiki: TDH count must match the 3 readable core fragments');
assert.equal(stepCount('strategy', 'The loop that actually matters'), 4, 'strategy: TDH count must match the 4 published strategy steps');
assert.equal(stepCount('walkthrough', 'Opening colony directives'), 2, 'walkthrough: TDH count must match the 2 opening directives');
assert.equal(stepCount('walkthrough', 'Auryto sector objective chain'), 3, 'walkthrough: TDH count must match the 3 Auryto objectives');

const homepage = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
for (const value of [
  'Pax Autocratica Guide – Tips, Walkthrough & Strategy',
  'Source-checked Pax Autocratica guide hub with a 6-step beginner route, opening walkthrough, core watchlist, strategy, co-op status and PC requirements.',
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
