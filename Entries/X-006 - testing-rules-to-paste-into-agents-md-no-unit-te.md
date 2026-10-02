---
uid: "X-006"
title: "Testing rules to paste into AGENTS.md: no unit tests after code"
platform: "Twitter"
category: "AI & LLM"
subcategory: "AGENTS.md testing rules"
author: "Hassan"
date: "2026-09-19"
url: "https://x.com/hassanazharkhan/status/2103167552147128690"
engagement: "7 replies · 20 reposts · 324 likes · 39K views · 544 bookmarks"
followup: "medium"
media: "none"
links: []
tags: ["agents-md", "testing", "e2e", "ai-coding", "twitter", "ai-llm"]
---

# Testing rules to paste into AGENTS.md: no unit tests after code

**[Open original ↗](https://x.com/hassanazharkhan/status/2103167552147128690)** · `Hassan` · 2026-09-19 · 7 replies · 20 reposts · 324 likes · 39K views · 544 bookmarks

## 💬 Essence

Hassan shares a rule set for AGENTS.md so agents test correctly: never write unit tests after writing the code, prefer E2E tests as the main mechanism with a reproducible artifact, list all the ways a system could fail before writing it, use realistic medium/high-complexity E2E scenarios instead of the simplest happy path, avoid tautological tests, and only add regression tests where real gaps exist. The self-thread is just 'Teach me?' against dex's joke about Opus adding 10 unit tests to check a constant string. Replies disagree: dex says it doesn't belong in AGENTS.md and another warns that all-E2E makes failures hard to debug; the post still takes 324 likes and 544 bookmarks.

## 💡 Takeaway

Part of the live E2E-over-unit-tests debate for agents - a paste-ready AGENTS.md policy plus the counterarguments.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 agents-md, testing, e2e, ai-coding, twitter, ai-llm
