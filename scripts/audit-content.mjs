import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const failures = [];
const titles = new Map();

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
    const html = await readFile(path, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const h1Count = (html.match(/<h1[ >]/g) || []).length;
    if (!title) failures.push(`${path}: missing title`);
    if (h1Count !== 1) failures.push(`${path}: expected one h1, found ${h1Count}`);
    if (!html.includes('name="description"')) failures.push(`${path}: missing description`);
    if (!html.includes('UNOFFICIAL FAN ARCHIVE')) failures.push(`${path}: missing fan-site disclosure`);
    if (title) titles.set(title, [...(titles.get(title) || []), path]);
  }
}

await walk(root);
for (const [title, files] of titles) if (files.length > 1) failures.push(`duplicate title ${title}: ${files.join(', ')}`);
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Content audit passed: ${titles.size} HTML pages checked.`);
