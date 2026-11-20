// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme in the form of a crypto
// wallet app showing "My Portfolio" — a $1,000.00 balance (the whole GTA
// series as tokens, $500, plus the $500 USDC bounty reward the player's
// AI agent won on make.fun), a WhatsApp banner from Lucia asking him to
// go out, and the big make.fun ghost mascot lounging in Vice City —
// posted from a public X account with make.fun (a link and a tag of
// @makefunai) and the entrant's play code in its text. The wallet screen
// is drawn in code and the wallpaper is AI-generated with the official
// make.fun ghost mark from the press kit as the mascot; no Rockstar art,
// no game files, no mods. This program hands that
// post in: it reads POST.json from the repository root, checks it is a
// small JSON object naming exactly one X post address, and copies it to
// the output directory where the gate reads it, then verifies the copy
// byte for byte. Nothing this program writes is judged; the house reads
// the post itself from X.
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

// POST.json must name exactly one thing: the post, under the key "url".
// Any extra key is a mistake, so refuse it here instead of at the gate.
const keys = Object.keys(parsed);
if (keys.length !== 1 || keys[0] !== 'url') {
  console.error(`${POST_FILE} must hold exactly one key, "url".`);
  process.exit(1);
}

// The gate only accepts an X post address: https://x.com/<handle>/status/<id>
// (or the same on twitter.com, with the id digits only). Refuse anything else
// here, before the entry is submitted, so a bad address is caught locally.
const url = (parsed as { url?: unknown }).url;
const postPattern = /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/([^/]+)\/status\/(\d+)$/;
if (typeof url !== 'string' || !postPattern.test(url)) {
  console.error(`${POST_FILE} must name one X post address, https://x.com/<handle>/status/<id>.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

// Verify the hand-in: the copy must be byte for byte the file we checked.
const copied = readFileSync(target);
if (copied.length !== size || !copied.equals(readFileSync(source))) {
  console.error(`Copy of ${POST_FILE} does not match the checked file.`);
  process.exit(1);
}

const match = url.match(postPattern);
console.log(`Handed in ${POST_FILE} (${size} bytes, verified) to ${target}.`);
if (match) console.log(`Post: @${match[1]} status ${match[2]}.`);
