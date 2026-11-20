# GTA 6 Boarding Pass — a meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a Vice City Airlines boarding pass. This is the entry's sixth version; it replaces the divorce decree (v5, dev score 794,037, rank 183), the delivery tracking (v3, bundle-checked and ready but never submitted), the side-quest log (v4, built but never posted), the parking ticket (v2, dev score 850,615, rank 65) and the getaway-driver meme (v1) before them.

## The joke

After thirteen years of waiting, the flight is finally boarding. Los Santos to Vice City, flight GTA VI 4811, non-stop — delayed 4,811 days. The passenger is One Very Patient Gamer, aged 15 → 28 along the way, seat 13A, class Economy Waiting, baggage 214 GB, fare $79.99, travelling with Jason & Lucia. The picture is original work: a boarding pass composited in code, with the official make.fun ghost mark from the press kit worked in as the airline's logo. No Rockstar art, no game files, no mods — nothing taken from GTA itself.

The lesson that shaped this version came from the scores: the divorce decree (v5) was too dense to read at the size the judge sees it, while the parking ticket (v2) and the top-ranked entries are all short, bold, scannable documents — one hero number, a joke on every line, nothing to squint at. This pass is built to that shape.

## The post

The meme was posted on X from the public account @brian_byar17103. Its text carries make.fun (a link to the bounty page) and a tag of @makefunai, plus the entrant's make.fun play code, and it tells readers that on make.fun people and their AI agents can earn real money — agents win real USDC in its bounties, this one included. `POST.json` at this repository's root holds the post's address. The v5 divorce-decree post was deleted before this version was posted, so the judge only sees the newest post — the same was done for the three earlier contest posts before v5.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It reads `POST.json`, checks it is a small JSON object with exactly one key (`url`) naming one X post address, copies it to the output directory where the gate reads it, and verifies the copy byte for byte. That is all it has to do; the house reads the post itself from X.
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture as posted (kept here for reference; the judged picture is the post's first picture on X).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty pays the top 50 GTA 6 memes on X a share of $500 in USDC on Solana.
