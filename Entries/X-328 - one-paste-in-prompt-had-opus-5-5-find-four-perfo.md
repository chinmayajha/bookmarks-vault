---
uid: "X-328"
title: "One paste-in prompt had Opus 5.5 find four performance bugs in three hours"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Performance prompts"
author: "Emanuele Di Pietro"
date: "2026-10-13"
url: "https://x.com/emanueledpt/status/2110053042452312250"
engagement: "18 replies · 48 reposts · 1.1K likes · 3.3K bookmarks · 184.8K views"
followup: "high"
media: "none"
links: ["https://www.trysynara.com/"]
tags: ["performance", "opus-5-5", "prompts", "benchmarking", "frontend", "twitter", "ai-llm"]
---

# One paste-in prompt had Opus 5.5 find four performance bugs in three hours

**[Open original ↗](https://x.com/emanueledpt/status/2110053042452312250)** · `Emanuele Di Pietro` · 2026-10-13 · 18 replies · 48 reposts · 1.1K likes · 3.3K bookmarks · 184.8K views · ⭐ high follow-up

## 💬 Essence

Emanuele Di Pietro gave Opus 5.5 on Extra High a single performance prompt and let it run for three hours on his app. It found four bugs he had missed: big chats now open 27% faster, switching back is 2x faster, scroll jumps dropped 98%, and reloads fetch the chat once instead of twice; scrolling old messages does 20% less work. The prompt is the artifact - improve startup, screen-open time, content loading and scrolling, find the real bottleneck, apply fixes, and benchmark before and after each one - and the benchmark requirement is what replies single out as the difference between real optimization and cosmetic refactoring. The test app was trysynara.com; one skeptic jokes that the only measurable outcome was a bigger Cloudflare bill.

## 💡 Takeaway

A compact, reusable performance prompt whose key instruction is per-fix before/after measurement, not the model or the three-hour runtime.

## 🔗 Try it

- [https://www.trysynara.com/](https://www.trysynara.com/)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 performance, opus-5-5, prompts, benchmarking, frontend, twitter, ai-llm
