---
uid: "X-304"
title: "agent-browser snapshot --delta cuts form-filling tokens by 73x"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Agent browser automation"
author: "Chris Tate"
date: "2026-10-18"
url: "https://x.com/ctatedev/status/2111930462176432333"
engagement: "44 replies · 52 reposts · 997 likes · 631 bookmarks · 35.5K views"
followup: "high"
media: "video"
links: ["https://github.com/vercel-labs/agent-browser"]
tags: ["agent-browser", "vercel", "browser-automation", "tokens", "agents", "twitter", "dev-tools-productivity"]
---

# agent-browser snapshot --delta cuts form-filling tokens by 73x

**[Open original ↗](https://x.com/ctatedev/status/2111930462176432333)** · `Chris Tate` · 2026-10-18 · 44 replies · 52 reposts · 997 likes · 631 bookmarks · 35.5K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Vercel Labs' agent-browser added 'snapshot --delta', which returns only what changed since the previous snapshot instead of the whole page; the demo shows 73x fewer tokens while filling a form. The thread clarifies that delta state resets between sessions, so for long gaps you should save a baseline and run 'agent-browser diff snapshot --baseline last.txt'. Replies are enthusiastic (Rauch: 'Epic'), but the useful pushback is that 73x is a best-case minimal form, an empty delta is ambiguous between unchanged and never-loaded, and '--full' is worth re-sending after context compaction.

## 💡 Takeaway

A concrete token-cost win for repeated agent/browser loops - use a saved baseline for long-running monitors and treat empty deltas with suspicion.

## 🔗 Try it

- [https://github.com/vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 agent-browser, vercel, browser-automation, tokens, agents, twitter, dev-tools-productivity
