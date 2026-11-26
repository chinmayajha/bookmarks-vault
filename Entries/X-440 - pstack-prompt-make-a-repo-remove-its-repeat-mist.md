---
uid: "X-440"
title: "pstack prompt: make a repo remove its repeat mistakes (13 PRs, 470 comments deleted)"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent repo hardening"
author: "Ray Fernando"
date: "2026-11-21"
url: "https://x.com/RayFernando1337/status/2124222002076733869"
engagement: "40 replies · 105 reposts · 2,054 likes · 5,558 bookmarks · 325.7K views"
followup: "high"
media: "image"
links: []
tags: ["agents", "tla-plus", "testing", "typescript", "code-hygiene", "twitter", "ai-llm"]
---

# pstack prompt: make a repo remove its repeat mistakes (13 PRs, 470 comments deleted)

**[Open original ↗](https://x.com/RayFernando1337/status/2124222002076733869)** · `Ray Fernando` · 2026-11-21 · 40 replies · 105 reposts · 2,054 likes · 5,558 bookmarks · 325.7K … · ⭐ high follow-up

## 💬 Essence

Ray Fernando shares a prompt that asks an agent to use /poteto-mode on a repo. The agent finds the mistakes that agents and humans repeat (git log, past bug fixes, review comments), then makes each one impossible. The order: architecture first, then types, then a lint whose error names the fix, then a test. It deletes comments that restate code, writes formal models that replay past bugs and runs them in CI, and replaces tests that pin implementation with those models plus real DB and e2e tests. It keeps every test that guards security or legal behavior, and ships one verifiable PR per step. He ran it on an e-signature app with Opus 5.5 in Claude Code. Result: 13 PRs. About 470 comments deleted and a CI lint added. 4 TLA+ models found 3 bugs in deletion-notice emails and 2 database deadlocks, all reproduced on real Postgres before the fixes. 10,189 lines of implementation-pinning unit tests deleted (47 files), 36 tests kept. Strict TypeScript flags, a type ratchet, distinct ID and token types, and DB rows parsed on load. Model cost was about $6.60, covered by a Claude Max plan. A reader uses a shorter variant of the prompt. Another asks what to do on a greenfield repo with no past mistakes.

## 💡 Takeaway

One of the most complete prompts for hardening a repo with an agent. It needs a repo with history to mine.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 agents, tla-plus, testing, typescript, code-hygiene, twitter, ai-llm
