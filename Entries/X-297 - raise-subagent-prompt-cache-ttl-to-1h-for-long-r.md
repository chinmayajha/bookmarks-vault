---
uid: "X-297"
title: "Raise subagent prompt-cache TTL to 1h for long-running Claude subagents"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Claude Code cache tuning"
author: "alex getman"
date: "2026-10-09"
url: "https://x.com/alexgetmancom/status/2108858155153117618"
engagement: "90 replies · 99 reposts · 1.6K likes · 3K bookmarks · 158K views"
followup: "high"
media: "none"
links: []
tags: ["claude-code", "subagents", "prompt-caching", "cost-optimization", "twitter", "ai-llm"]
---

# Raise subagent prompt-cache TTL to 1h for long-running Claude subagents

**[Open original ↗](https://x.com/alexgetmancom/status/2108858155153117618)** · `alex getman` · 2026-10-09 · 90 replies · 99 reposts · 1.6K likes · 3K bookmarks · 158K views · ⭐ high follow-up

## 💬 Essence

alex getman says Claude Code's main agent enjoys a 1-hour prompt-cache TTL but subagents default to 5 minutes, so long-running subagents should get subagentPromptCacheTtl 1h in ~/.claude/settings.json - wondering why it is not the default. Replies push back hard: leeovery calls it awful blind advice since a 1h cache costs more for 2-minute subagents, the author concedes it depends on workload (5+ minute gaps between calls expire the cache), CesarMilagent says ask Claude first, and mooroobee notes 5 minutes is between turns so an active subagent is normally fine. 90 replies, 1,637 likes, 2,991 bookmarks.

## 💡 Takeaway

A one-line cost/latency lever for subagent-heavy setups - but read the counterarguments before applying it blindly.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 claude-code, subagents, prompt-caching, cost-optimization, twitter, ai-llm
