---
uid: "X-019"
title: "Ansh's AGENTS.md rules: never write unit tests after code, prefer E2E"
platform: "Twitter"
category: "AI & LLM"
subcategory: "AGENTS.md testing rules"
author: "Ansh Nanda"
date: "2026-09-19"
url: "https://x.com/anshnanda/status/2101627891721371971"
engagement: "83 replies · 281 reposts · 5.6K likes · 1.3M views · 8.8K bookmarks"
followup: "high"
media: "none"
links: []
tags: ["agents-md", "testing", "e2e", "ai-coding", "prompting", "twitter", "ai-llm"]
---

# Ansh's AGENTS.md rules: never write unit tests after code, prefer E2E

**[Open original ↗](https://x.com/anshnanda/status/2101627891721371971)** · `Ansh Nanda` · 2026-09-19 · 83 replies · 281 reposts · 5.6K likes · 1.3M views · 8.8K bookmarks · ⭐ high follow-up

## 💬 Essence

Ansh Nanda posts the rules at the top of his AGENTS.md: never write unit tests after writing code, highly prefer E2E tests as the sole testing mechanism with a verifiable repeatable artifact at the end, and for isolation testing first write all the ways it could fail, then write the code - quoting dex's joke about Opus adding 10 unit tests to a constant string. His thread adds follow-ups: use medium/hard E2E scenarios, video for UI changes or a script with definitive output for backend, and that it works because he only uses the best models. Replies add detail - don't pick the simplest scenario, this cut test rewrites, the failure-modes step is the key - while skeptics say models ignore AGENTS.md anyway and one jokes 'gitignore your unittest folder'; 5,559 likes, 8,787 bookmarks, 1.25M views.

## 💡 Takeaway

The origin post of the E2E-first testing policy that spawned several clones in this feed - the reference version.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 agents-md, testing, e2e, ai-coding, prompting, twitter, ai-llm
