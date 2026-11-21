# GTA 6 meme on X

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/alyssaxacexdaemon-bot/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/alyssaxacexdaemon-bot/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme made by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

## The meme

The classic Drake Hotline Bling format, built from the real blank template with the captions drawn on in Anton, the tall condensed meme font:

- Top (no): "GOING TO WORK ON LAUNCH DAY"
- Bottom (yes): "CALLING IN SICK TO PLAY GTA 6 IN VICE CITY"

The make.fun ghost is in the bottom panel with its magenta star and the make.fun name underneath, so the brand is in the picture itself. The second caption sits low on Drake's jacket so his face stays clear.

The post is live on X: https://x.com/FragStriker5829/status/2124132225285271912

## The entry

`POST.json` names the post's address. `main.ts` (Node 22, standard library only) copies `POST.json` to the output directory, where the gate reads it. The post itself is the entry: the house reads it from X — its first picture and its text — and an AI judge ranks the posts two at a time.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.
