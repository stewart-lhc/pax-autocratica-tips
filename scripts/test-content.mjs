import assert from 'node:assert/strict';
import { pages } from '../src/data/site.ts';

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
