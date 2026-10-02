---
uid: "X-013"
title: "Prompt that deletes low-signal unit tests your E2E already covers"
platform: "Twitter"
category: "AI & LLM"
subcategory: "low-signal test cleanup prompt"
author: "Ray Fernando"
date: "2026-09-20"
url: "https://x.com/RayFernando1337/status/2102927565778522610"
engagement: "82 replies · 148 reposts · 3.2K likes · 438.3K views · 6.6K bookmarks"
followup: "high"
media: "none"
links: []
tags: ["ai-testing", "agents-md", "tdd", "e2e", "refactoring", "twitter", "ai-llm"]
---

# Prompt that deletes low-signal unit tests your E2E already covers

**[Open original ↗](https://x.com/RayFernando1337/status/2102927565778522610)** · `Ray Fernando` · 2026-09-20 · 82 replies · 148 reposts · 3.2K likes · 438.3K views · 6.6K bookmarks · ⭐ high follow-up

## 💬 Essence

Ray Fernando says latest models write tons of unit tests that restate the code, always pass, catch almost nothing, break on every refactor and burn agent time; he shares the prompt he adapted from Ansh to clean them out: delete every unit test that wouldn't catch a real bug the E2E tests miss, fan the work out across parallel subagents, then add AGENTS.md rules (never write unit tests after code, prefer E2E as sole mechanism with a verifiable repeatable artifact, write down failure modes before the code). His thread adds that he hates TDD and gets better bugs testing close to customer runtime. Replies fight back: TDD proponents say refactors should be TDD, others ask about the testing pyramid, one links a fix and notes such tests are called tautological; 3,162 likes and 6,590 bookmarks.

## 💡 Takeaway

A reusable cleanup prompt for AI-generated test bloat plus the live counterarguments - high-signal for agent-driven repos.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 ai-testing, agents-md, tdd, e2e, refactoring, twitter, ai-llm
