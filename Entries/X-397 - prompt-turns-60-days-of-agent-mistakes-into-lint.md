---
uid: "X-397"
title: "Prompt turns 60 days of agent mistakes into lint rules, tests and types"
platform: "Twitter"
category: "AI & LLM"
subcategory: "CLAUDE.md prompts"
author: "Limestone Digital"
date: "2026-11-17"
url: "https://x.com/LimestoneHQ/status/2122729186083381459"
engagement: "2 replies · 23 likes · 89 bookmarks · 8.1K views"
followup: "high"
media: "none"
links: ["https://thefoundation.limestonedigital.com/ai-transformation-operations"]
tags: ["claude-md", "prompts", "lint-rules", "ci", "agent-mistakes", "twitter", "ai-llm"]
---

# Prompt turns 60 days of agent mistakes into lint rules, tests and types

**[Open original ↗](https://x.com/LimestoneHQ/status/2122729186083381459)** · `Limestone Digital` · 2026-11-17 · 2 replies · 23 likes · 89 bookmarks · 8.1K views · ⭐ high follow-up

## 💬 Essence

Limestone Digital shares a Claude Code prompt that audits your agent's repeat mistakes. It finds agent-authored PRs from the last 60 days (AI co-author trailer, bot author, AI label or a 'Generated with Claude Code' line). It then reads their review comments, reverts, CI failures and fix PRs within 14 days, plus the lines added to CLAUDE.md or AGENTS.md. It groups mistakes seen at least twice. For each group it picks the strongest fix. The order is a type or schema, a lint rule or CI check, a test the agent must run before it says done, a scoped rule with a reason, and last, human review. A fresh subagent acts as judge and re-opens every cited PR. The prompt ends with a table and diffs, then waits for your approval. The thread says long CLAUDE.md files reduce adherence. Run it with claude --permission-mode plan and the GitHub CLI signed in, and approve only the diffs you agree with. The last posts are ads for the firm's services.

## 💡 Takeaway

A reusable audit prompt that makes CLAUDE.md shorter. Read the commands it runs, because it reads PRs through the gh CLI.

## 🔗 Try it

- [https://thefoundation.limestonedigital.com/ai-transformation-operations](https://thefoundation.limestonedigital.com/ai-transformation-operations)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 claude-md, prompts, lint-rules, ci, agent-mistakes, twitter, ai-llm
