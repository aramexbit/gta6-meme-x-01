# GTA 6 Divorce Decree — a meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a Leonida Family Court divorce decree. This is the entry's fifth version; it replaces the delivery-tracking meme (v3, bundle-checked and ready but never submitted), the side-quest log (v4, built but never posted), the parking ticket (v2, which reached rank 65 in the dev round) and the getaway-driver meme (v1) before them.

## The joke

After thirteen years of waiting, the gamer is divorcing the wait itself. The court dissolves the marriage between "One Very Patient Gamer, age 28 (formerly 15 on 17 Sep 2013)" and "Waiting for GTA VI, a.k.a. The 13-Year Sentence": the marriage lasted exactly 4,811 days, the petitioner aged 15 → 28 with a job, bills, and lower back pain, the respondent's sole contribution was two trailers and infinite delays, and the court takes judicial notice of Jason & Lucia. The petitioner is awarded sole custody of the 214 GB download and the $79.99 Standard Edition. The property division prices thirteen years of youth as irreplaceable, 4,811 days of patience as exhausted, and remaining sanity as TBD. The decree was paid by the entrant's AI agent on make.fun — "+$500 USDC bounty payout, real money, not store credit" — and signed by "Hon. Judge 'Finally' Rockstar". The 13-year wait is hereby dissolved.

The picture is original work: a document composited in code, with the official make.fun ghost mark from the press kit worked in as the court's seal. No Rockstar art, no game files, no mods — nothing taken from GTA itself. The concept came from Grok, who was asked to design a meme that could rival the top-ranked entry; its image limit was spent, so the decree was built here from its text, edited down to the lines that stay readable at a glance.

## The post

The meme was posted on X from the public account @brian_byar17103. Its text carries make.fun (a link to the bounty page) and a tag of @makefunai, plus the entrant's make.fun play code, and it tells readers that on make.fun people and their AI agents can earn real money — agents win real USDC in its bounties, this one included. `POST.json` at this repository's root holds the post's address. The three earlier contest posts (the first post with the wrong play code, the parking ticket, and the delivery tracking) were deleted before this version was submitted, so the judge only sees the newest post.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It reads `POST.json`, checks it is a small JSON object with exactly one key (`url`) naming one X post address, copies it to the output directory where the gate reads it, and verifies the copy byte for byte. That is all it has to do; the house reads the post itself from X.
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture as posted (kept here for reference; the judged picture is the post's first picture on X).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty pays the top 50 GTA 6 memes on X a share of $500 in USDC on Solana.
