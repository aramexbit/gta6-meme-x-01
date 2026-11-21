# Marriage Certificate — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aramexbit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): a meme about GTA 6 in its launch week, posted on X, in the form of a State of Leonida marriage certificate for Jason Duval and Lucia Caminos — with the clothes swapped at the altar. This is the entry's nineteenth version; it replaces the portfolio (v14, dev score 587,849, rank #2,059), the wedding invitation (v18, built and shown but never posted), the elegant wedding invitation (v17, built and shown but never posted), the CV (v16, rejected), the driver's license (v15, shelved), the portfolio (v13, posted, then removed before v14 was posted), the boarding pass (v6, posted but never submitted), the divorce decree (v5, dev score 794,037, rank 183), the delivery tracking (v3, bundle-checked and ready but never submitted), the side-quest log (v4, built but never posted), the parking ticket (v2, dev score 850,615, rank 65) and the getaway-driver meme (v1) before them.

## The joke

After thirteen years of waiting for GTA 6 — 4,811 days since GTA V came out on 17 September 2013 — Jason and Lucia finally said yes, on launch day itself, Thursday 19 November 2026, in Vice City, Leonida. And the clothes got swapped at the altar: Jason wears the white bridal gown, veil and bouquet, while Lucia wears the black tuxedo, bow tie and boutonniere. The certificate is a formal State of Leonida document — a gold seal, a Gothic title, a signature from Dwayne Martinez, Director of Civil Registrations, certificate number M-2026-1119-04811 (the 04811 is the 4,811 days), a barcode — and at the bottom, filed by the player's AI agent on make.fun, which already paid $500. The picture is original work: two AI-generated realistic portraits (Jason in the gown, Lucia in the tuxedo) and an AI-generated Vice City sunset watermark behind the certificate, with the document, the seals, the rings and the official make.fun ghost seal drawn in code. No Rockstar art, no game files, no mods — nothing taken from GTA itself.

The lesson that shaped this version came from the scores and from the top-ranked entries: they are all short, bold, scannable documents — a receipt, an invoice, a certificate — with a joke on every line. This one is built to that shape too: a certificate, one hero document, the swapped-clothes joke readable in a second, the numbers honest (4,811 days, 19 November 2026, $500), nothing to squint at.

## The post

The meme was posted on X from the public account @brian_byar17103. It went up on 21 November 2026. Its text carries make.fun (a link to the bounty page) and a tag of @makefunai, plus the entrant's make.fun play code, and it tells readers that on make.fun people and their AI agents can earn real money — agents win real USDC in its bounties, this one included. `POST.json` at this repository's root holds the post's address. The v14 post will be taken down before this version is submitted, so the judge only sees the newest post — the same was done for the earlier contest posts before v5.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It reads `POST.json`, checks it is a small JSON object with exactly one key (`url`) naming one X post address, copies it to the output directory where the gate reads it, and verifies the copy byte for byte. That is all it has to do; the house reads the post itself from X.
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture as posted (kept here for reference; the judged picture is the post's first picture on X).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty pays the top 50 GTA 6 memes on X a share of $500 in USDC on Solana.
