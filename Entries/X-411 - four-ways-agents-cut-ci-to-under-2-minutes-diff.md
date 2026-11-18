---
uid: "X-411"
title: "Four ways agents cut CI to under 2 minutes: diff-aware tests, shards, parallel jobs, all cores"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "CI speed"
author: "Pontus Abrahamsson"
date: "2026-11-14"
url: "https://x.com/pontusab/status/2121982070193058191"
engagement: "111 replies · 169 reposts · 4.4K likes · 7.9K bookmarks · 546.4K views"
followup: "high"
media: "none"
links: ["https://github.com/oxc-project/tsrs", "https://oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs", "https://github.com/dblock/already-tested", "https://x.com/pontusab/status/2121990184816484483", "https://x.com/DanielLockyer/status/2122715245927973261", "https://x.com/wizardashwin/status/2122582910385709253"]
tags: ["ci", "github-actions", "vitest", "oxlint", "sharding", "prompts", "twitter", "dev-tools-productivity"]
---

# Four ways agents cut CI to under 2 minutes: diff-aware tests, shards, parallel jobs, all cores

**[Open original ↗](https://x.com/pontusab/status/2121982070193058191)** · `Pontus Abrahamsson` · 2026-11-14 · 111 replies · 169 reposts · 4.4K likes · 7.9K bookmarks · 546.4K views · ⭐ high follow-up

## 💬 Essence

Pontus Abrahamsson says his frontend CI is under 2 minutes. He moved tsc to bun check, turned on every Oxlint rule, filled shards by recorded test time, ran only the tests the diff can reach, and ran lint, typecheck, build and tests in parallel. In replies, Vitest --changed against the merge base runs a test only if it imports a changed file. Lockfile, config or generated-client changes force a full run, and the merge queue and main always run everything. A runtime map was the biggest win. Three related bookmarks add prompts. One is his follow-up post about the instructions he used. Daniel Lockyer's prompt tells the agent to check the runner CPU core count and use every core (public ubuntu-latest runners have 4 cores). Ashwin's trimmed prompt took a CI from 10 to 25 minutes to under 2. It ran benchmarks locally, used native per-architecture Docker builds with no QEMU, and ran all 14 test groups at once. Replies add tsrs (Rust type checker from Oxc), Oxlint's typeCheck option, dblock's already-tested (skip CI that agents already ran), and warnings about E2E tests, peak memory and CI cost.

## 💡 Takeaway

Copy the CI prompt and the diff-aware test idea. Check peak memory and total CI cost before you give every core a worker.

## 🔗 Try it

- [https://github.com/oxc-project/tsrs](https://github.com/oxc-project/tsrs)
- [https://oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs](https://oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs)
- [https://github.com/dblock/already-tested](https://github.com/dblock/already-tested)
- [https://x.com/pontusab/status/2121990184816484483](https://x.com/pontusab/status/2121990184816484483)
- [https://x.com/DanielLockyer/status/2122715245927973261](https://x.com/DanielLockyer/status/2122715245927973261)
- [https://x.com/wizardashwin/status/2122582910385709253](https://x.com/wizardashwin/status/2122582910385709253)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 ci, github-actions, vitest, oxlint, sharding, prompts, twitter, dev-tools-productivity
