---
uid: "X-257"
title: "OpenClaw cut 400k LOC of tests with a test-audit skill, coverage intact"
platform: "Twitter"
category: "AI & LLM"
subcategory: "AI test bloat audit"
author: "Peter Steinberger 🦞"
date: "2026-09-24"
url: "https://x.com/steipete/status/2103147927313199260"
engagement: "230 replies · 363 reposts · 6,699 likes · 1.3M views · 10.8K bookmarks"
followup: "high"
media: "none"
links: ["https://github.com/openclaw/openclaw"]
tags: ["ai-testing", "code-quality", "claude-skills", "tech-debt", "agents", "twitter", "ai-llm"]
---

# OpenClaw cut 400k LOC of tests with a test-audit skill, coverage intact

**[Open original ↗](https://x.com/steipete/status/2103147927313199260)** · `Peter Steinberger 🦞` · 2026-09-24 · 230 replies · 363 reposts · 6,699 likes · 1.3M views · 10.8K bookmarks · ⭐ high follow-up

## 💬 Essence

Peter Steinberger reports that OpenClaw deleted around 400k LOC of its own tests with almost no change in code coverage, crediting a test-audit skill (linked card: openclaw/.agents/skills/test-audit/SKILL.md). His diagnosis: modern models love writing tests for every tiny change even when those tests aren't useful. The self-thread adds the actual technique - 'If you just tell the agent to clean up, it will stop far too early. Give it an ambitious goal', e.g. 'remove 20% of the least useful tests while maintaining code coverage within 2%' - and five days later he notes 'That /goal is still running.' David Cramer's reply extends the argument: models 'also love rewriting tests when they change code as if the reason for those tests in the first place wasnt to prevent regressions'. Sentiment is broad agreement about AI test bloat. 230 replies, 6,699 likes, 10,791 bookmarks, 1.3M views.

## 💡 Takeaway

Sharpest AI-quality insight in the set: agent-written tests inflate coverage without value, and an audit skill is a cheap way to claw the bloat back.

## 🔗 Try it

- [https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 ai-testing, code-quality, claude-skills, tech-debt, agents, twitter, ai-llm
