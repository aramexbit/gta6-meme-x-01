# GTA 6 Delivery Tracking — a meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a Leonida Express order-tracking page. This is the entry's third version; it replaces the parking-ticket meme (which reached rank 65 in the dev round) and the getaway-driver meme before it.

## The joke

GTA VI was ordered the day GTA V was finished — and the delivery took 4,811 days. The tracking page tells the whole thirteen years as a shipment: ordered 17 Sep 2013, shipped 2015 (first trailer watched 87 times), delayed 2023 (postponed, fee waived, again), delayed again 2025 (map of Leonida memorised), out for delivery 19 Nov 2026 (driver is 15 → 28 now), delivered by the Ghost from make.fun, signed with thirteen years of patience. The delivery was paid by the entrant's AI agent on make.fun — "+$500 USDC bounty payout, real money, not store credit." Estimated: 2013. Delivered: 2026. Worth every day.

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
