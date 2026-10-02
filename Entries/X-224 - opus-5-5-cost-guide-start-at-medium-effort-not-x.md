---
uid: "X-224"
title: "Opus 5.5 cost guide: start at medium effort, not xhigh"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Claude Code cost tuning"
author: "Vox"
date: "2026-09-25"
url: "https://x.com/Voxyz_ai/status/2103552376380457454"
engagement: "23 replies · 1.1K likes · 628.9K views"
followup: "high"
media: "none"
links: []
tags: ["claude-code", "opus", "token-costs", "prompt-caching", "cost-optimization", "twitter", "ai-llm"]
---

# Opus 5.5 cost guide: start at medium effort, not xhigh

**[Open original ↗](https://x.com/Voxyz_ai/status/2103552376380457454)** · `Vox` · 2026-09-25 · 23 replies · 1.1K likes · 628.9K views · ⭐ high follow-up

## 💬 Essence

Quoting ClaudeDevs' numbers (Opus 5.5 is 20% cheaper per input/output token and 60% cheaper on cache reads than Opus 5, with a calculator at /usage), OP explains the catch: at the same effort level Opus 5.5 thinks more per turn, most of all at xhigh and max, thinking is billed as output, and an output token costs 100 times a cache read - so do not carry over your Opus 5 effort level; start at medium and save xhigh and max for work where you have measured a gain. He supplies a prompt that makes Opus 5.5 read Anthropic's cost guide and audit your Claude Code setup (user and project settings, subagents in ~/.claude/agents and .claude/agents, CLAUDE.md, MCP servers). Replies reinforce the trap - compare the same task at /usage before promoting effort level, keep cheap search/test subagents low - and one warns grepping your config for xhigh since a single setting can triple bills on routine edits.

## 💡 Takeaway

Directly actionable Claude Code cost-control advice plus a ready-made audit prompt to reuse.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 claude-code, opus, token-costs, prompt-caching, cost-optimization, twitter, ai-llm
