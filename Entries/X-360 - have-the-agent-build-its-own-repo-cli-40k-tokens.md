---
uid: "X-360"
title: "Have the agent build its own repo CLI: 40k tokens and 30s down to 2k tokens and 5s"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent workflows"
author: "Jean-Michel Lemieux"
date: "2026-10-31"
url: "https://x.com/jmwind/status/2116513031077384391"
engagement: "51 replies · 38 reposts · 1.2K likes · 2.1K bookmarks · 77.4K views"
followup: "high"
media: "image"
links: []
tags: ["agents", "cli", "token-cost", "agents-md", "workflow", "twitter", "ai-llm"]
---

# Have the agent build its own repo CLI: 40k tokens and 30s down to 2k tokens and 5s

**[Open original ↗](https://x.com/jmwind/status/2116513031077384391)** · `Jean-Michel Lemieux` · 2026-10-31 · 51 replies · 38 reposts · 1.2K likes · 2.1K bookmarks · 77.4K views · ⭐ high follow-up

## 💬 Essence

Jean-Michel Lemieux says his agent built its own CLI. Getting oriented used to cost about 40k tokens, 6 file reads and 30 seconds. It now costs one command, 2k tokens and 5 seconds. The image holds the prompt: review all session transcripts for the repo, list the questions, lookups, file reads and commands repeated across sessions, then build ./bin/agent-cli, a tiny CLI that answers them from one place. Every script or command run more than once becomes a subcommand with its own --help, terse output written for the agent, a --json flag and no new dependencies. Add a line to agents.md to use agent-cli first, and show a before and after list. In the thread he says new commands are added on demand and a weekly task reruns the prompt. He warns you need a cleanup pass for the clutter and comments it adds. Replies worry the CLI will drift from the repo, and one user ended up with 5,185 new commands.

## 💡 Takeaway

A cheap, repeatable way to cut orientation cost. Keep it fresh with the weekly rerun and prune the leftovers.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 agents, cli, token-cost, agents-md, workflow, twitter, ai-llm
