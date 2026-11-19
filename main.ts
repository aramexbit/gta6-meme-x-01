// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows the
// make.fun ghost driving a pink convertible through a neon Vice City-style
// sunset, posted from a public X account with make.fun (a link and a tag of
// @makefunai) and the entrant's play code in its text. This program hands
// that post in: it reads POST.json from the repository root, checks it is a
// small JSON object naming one X post address, and copies it to the output
// directory where the gate reads it. Nothing this program writes is judged;
// the house reads the post itself from X.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';
const MAX_BYTES = 16384;

const source = join(BOT_DIR, POST_FILE);
const target = join(OUTPUT_DIR, POST_FILE);

const size = statSync(source).size;
if (size > MAX_BYTES) {
  console.error(`${POST_FILE} is ${size} bytes, over the ${MAX_BYTES} byte cap.`);
  process.exit(1);
}

const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error(`${POST_FILE} must hold a JSON object, not an array or a bare value.`);
  process.exit(1);
}

// The gate only accepts an X post address: https://x.com/<handle>/status/<id>
// (or the same on twitter.com, with the id digits only). Refuse anything else
// here, before the entry is submitted, so a bad address is caught locally.
const url = (parsed as { url?: unknown }).url;
const postPattern = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (typeof url !== 'string' || !postPattern.test(url)) {
  console.error(`${POST_FILE} must name one X post address, https://x.com/<handle>/status/<id>.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
const match = url.match(/^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/([^/]+)\/status\/(\d+)$/);
console.log(`Handed in ${POST_FILE} (${size} bytes) to ${target}.`);
if (match) console.log(`Post: @${match[1]} status ${match[2]}.`);
