// GTA 6 meme on X (gta6-meme-x-01), built for Ace's entry: a Drake Hotline Bling meme
// about calling in sick on GTA 6 launch day, with the make.fun ghost in the picture.
// The post itself is the entry — this program only hands its address to the gate.
//
// Before copying, it checks POST.json really names an X post (a url string on
// x.com or twitter.com). A placeholder or a mistyped address fails here, in the
// open, instead of passing the gate a dead link and scoring nothing.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
  const url = typeof post === 'object' && post !== null ? post.url : undefined;
  if (typeof url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+/.test(url)) {
    console.error(
      `POST.json does not name an X post URL (expected https://x.com/<handle>/status/<id>, got: ${String(url)})`,
    );
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
