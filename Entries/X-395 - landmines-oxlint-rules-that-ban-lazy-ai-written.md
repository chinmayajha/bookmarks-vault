---
uid: "X-395"
title: "Landmines: Oxlint rules that ban lazy AI-written tests and slop structure"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Agent test hygiene"
author: "Luke Shiels"
date: "2026-11-17"
url: "https://x.com/lukeshiels/status/2122782710414336458"
engagement: "13 replies · 38 reposts · 947 likes · 1.7K bookmarks · 56K views"
followup: "high"
media: "video"
links: ["https://github.com/interfere-inc/landmines"]
tags: ["oxlint", "linting", "ai-tests", "msw", "agents", "twitter", "dev-tools-productivity"]
---

# Landmines: Oxlint rules that ban lazy AI-written tests and slop structure

**[Open original ↗](https://x.com/lukeshiels/status/2122782710414336458)** · `Luke Shiels` · 2026-11-17 · 13 replies · 38 reposts · 947 likes · 1.7K bookmarks · 56K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Luke Shiels open-sources Landmines, a set of Oxlint plugins from Interfere. He says AI mostly writes useless tests and no skill file stops it from taking the lazy path to a green CI. The test rules ban mocks and artificial delays and require MSW for network interception, so you use the real Stripe SDK and not a fake copy. The structure rules require tests next to the code, a semantic suffix for test files, and no global export conditions, which he says speeds up tests a lot. His team went from about 100 PRs a week to over 1,200 a week after the rollout. This number is his own claim. More ban categories are in testing. In a reply he says custom rules work because Oxlint supports that natively.

## 💡 Takeaway

A practical way to enforce test quality with lint rules instead of prose. Treat the 12x PR growth as the author's claim.

## 🔗 Try it

- [https://github.com/interfere-inc/landmines](https://github.com/interfere-inc/landmines)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 oxlint, linting, ai-tests, msw, agents, twitter, dev-tools-productivity
