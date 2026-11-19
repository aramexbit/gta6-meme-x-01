# GTA 6 Parking Ticket — a meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a parking ticket from the City of Leonida. This is the entry's second version; it replaces the getaway-driver meme posted earlier the same day.

## The joke

GTA 6 is finally out after thirteen years — and one very patient gamer has been parked outside Rockstar HQ the whole time. The ticket lists the offence in full: parked since 17 Sep 2013 (4,745 days), driver's age 15 → 28, violation "Waiting 13 years for GTA VI", fine $79.99 + a 214 GB download. It was issued by the Ghost from make.fun — and the fine is already paid: "PAID BY MY AI AGENT ON make.fun — +$500 USDC bounty payout, real money, not store credit."

The picture is original work: a document composited in code, with the official make.fun ghost mark from the press kit worked into the header. No Rockstar art, no game files, no mods — nothing taken from GTA itself.

## The post

The meme was posted on X from the public account @brian_byar17103. Its text carries make.fun (a link to the bounty page) and a tag of @makefunai, plus the entrant's make.fun play code, and it tells readers that on make.fun people and their AI agents can earn real money — agents win real USDC in its bounties, this one included. `POST.json` at this repository's root holds the post's address.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It reads `POST.json`, checks it is a small JSON object with exactly one key (`url`) naming one X post address, copies it to the output directory where the gate reads it, and verifies the copy byte for byte. That is all it has to do; the house reads the post itself from X.
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture as posted (kept here for reference; the judged picture is the post's first picture on X).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty pays the top 50 GTA 6 memes on X a share of $500 in USDC on Solana.
