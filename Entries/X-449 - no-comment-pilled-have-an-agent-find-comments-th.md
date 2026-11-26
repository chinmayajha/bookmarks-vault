---
uid: "X-449"
title: "No-comment-pilled: have an agent find comments that excuse hacks, then fix the code"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent code hygiene"
author: "BowTiedDevil"
date: "2026-11-18"
url: "https://x.com/BowTiedDevil/status/2123202078239777244"
engagement: "20 replies · 11 reposts · 565 likes · 807 bookmarks · 39.9K views"
followup: "high"
media: "image"
links: ["https://github.com/sandover/ergo"]
tags: ["code-comments", "agents", "refactoring", "code-hygiene", "twitter", "ai-llm"]
---

# No-comment-pilled: have an agent find comments that excuse hacks, then fix the code

**[Open original ↗](https://x.com/BowTiedDevil/status/2123202078239777244)** · `BowTiedDevil` · 2026-11-18 · 20 replies · 11 reposts · 565 likes · 807 bookmarks · 39.9K views · ⭐ high follow-up

## 💬 Essence

BowTiedDevil says poteto convinced him to stop writing comments. He asked an agent to read all code comments and find the ones that describe workarounds, second sources of truth, hacks, ignored errors, hand-rolled retries and reasons to skip documented standards. The agent added 46 cleanups to the backlog. His prompt, for a Rust core: find comments that describe a workaround or special case, fix the code in place, then remove the comment that justified the old design. He says: fix the code first, then delete the comment. His backlog tool is ergo (sandover/ergo). Replies add cautions. One developer ran a similar prompt on a monorepo of about 335K lines. Deleting comments that excuse code was fine, but deleting comments that explain a workaround made the agent break the code in 13 of 15 runs, against 2 of 15 with the comment kept. He suggests you split the findings into those two piles. Another reader says to keep comments that track library issues and browser-specific support. Another ran it one subsystem at a time.

## 💡 Takeaway

A strong prompt, with a tested warning: do not delete comments that explain a real workaround.

## 🔗 Try it

- [https://github.com/sandover/ergo](https://github.com/sandover/ergo)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 code-comments, agents, refactoring, code-hygiene, twitter, ai-llm
