# My Portfolio — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a crypto wallet app showing "My Portfolio". This is the entry's twelfth version; it replaces the boarding pass (v6, posted but never submitted), the divorce decree (v5, dev score 794,037, rank 183), the delivery tracking (v3, bundle-checked and ready but never submitted), the side-quest log (v4, built but never posted), the parking ticket (v2, dev score 850,615, rank 65) and the getaway-driver meme (v1) before them.

## The joke

After thirteen years of waiting for GTA 6, the portfolio is finally worth something — $1,000.00, and half of it is the $500 USDC the player's AI agent won on make.fun. The wallet holds the whole series as tokens: GTA VI $115, GTA V $95, GTA IV $75, San Andreas $65, Vice City $55, GTA III $40, GTA 2 $30 and GTA 1 $25 — $500 of games — plus the $500 USDC bounty reward on top. The numbers are kept honest: every row is price × quantity = value, the values add up to exactly $1,000.00, and the 24h change column is honest too — USDC, a stablecoin pegged to $1, moves only +0.1%, while the games climb like volatile tokens. Meanwhile a WhatsApp banner from Lucia asks him to go out tonight — and he is still sitting there waiting for GTA 6, with the big make.fun ghost mascot lounging in Vice City behind the app. The picture is original work: an AI-generated Vice City sunset wallpaper with the official make.fun ghost from the press kit composited in as the mascot, and the wallet screen drawn in code. No Rockstar art, no game files, no mods — nothing taken from GTA itself.

The lesson that shaped this version came from the scores: the divorce decree (v5) was too dense to read at the size the judge sees it, while the parking ticket (v2) and the top-ranked entries are all short, bold, scannable documents. This one is built to that shape too — a wallet app, one hero number, a joke on every line, nothing to squint at — and it is laid out like a real crypto wallet app, not a boxed poster: centered balance, action buttons, then a full-width token list.

## The post

The meme was posted on X from the public account @brian_byar17103. Its text carries make.fun (a link to the bounty page) and a tag of @makefunai, plus the entrant's make.fun play code, and it tells readers that on make.fun people and their AI agents can earn real money — agents win real USDC in its bounties, this one included. `POST.json` at this repository's root holds the post's address. The v6 boarding-pass post was deleted before this version was posted, so the judge only sees the newest post — the same was done for the earlier contest posts before v5.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It reads `POST.json`, checks it is a small JSON object with exactly one key (`url`) naming one X post address, copies it to the output directory where the gate reads it, and verifies the copy byte for byte. That is all it has to do; the house reads the post itself from X.
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture as posted (kept here for reference; the judged picture is the post's first picture on X).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty pays the top 50 GTA 6 memes on X a share of $500 in USDC on Solana.
