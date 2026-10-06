---
uid: "X-275"
title: "Leviathan: open-source indexer lets agents search 1M records in ~436 tokens"
platform: "Twitter"
category: "AI & LLM"
subcategory: "agent search and retrieval"
author: "joshua"
date: "2026-10-05"
url: "https://x.com/joshuagunnn/status/2107108554192941493"
engagement: "72 replies · 179 reposts · 2.5K likes · 116.7K views · 3.8K bookmarks"
followup: "high"
media: "image"
links: ["https://github.com/elstongun/leviathan"]
tags: ["ai-agents", "rag", "search", "rust", "mcp", "databases", "twitter", "ai-llm"]
---

# Leviathan: open-source indexer lets agents search 1M records in ~436 tokens

**[Open original ↗](https://x.com/joshuagunnn/status/2107108554192941493)** · `joshua` · 2026-10-05 · 72 replies · 179 reposts · 2.5K likes · 116.7K views · 3.8K bookmarks · ⭐ high follow-up

## 💬 Essence

joshua (@joshuagunnn) open-sources Leviathan (github.com/elstongun/leviathan): one Rust binary so agents search any-size databases without reading them — point at JSONL, CSV or SQLite, or pipe Postgres, MySQL, DuckDB or Mongo; it infers the schema, builds a full-text index and returns short cited cards at ~450 tokens whether 10K or 1M rows. Self-thread: agents reason over five records but drown in a million (grep, paging APIs, dumping whole history into context); at 1M rows 99% of questions get a relevant record in the top 5 with 33ms median, worst case 602 tokens versus grep's 9.7M; under ~100K rows grep is honestly fine. CLI first, MCP optional, because MCP schemas tax every session while a skill file costs zero tokens until called; works with Claude Code, Codex, Cursor. Replies: skeptic snow flags it as just FTS5/BM25, nothing new (fair prior-art caution); mbrochh asks for folder and docs indexing beyond DBs; badguyty asks about NoSQL and log streams; OP floats a $10/month hosted auto-index version. 72 replies, 179 reposts, 2.5K likes, 3.7K bookmarks.

## 💡 Takeaway

Save for agent-plus-large-data work; the token math (436 vs 107K) and CLI-first-over-MCP rule are the keepers — verify BM25/FTS limits before adopting.

## 🔗 Try it

- [https://github.com/elstongun/leviathan](https://github.com/elstongun/leviathan)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 ai-agents, rag, search, rust, mcp, databases, twitter, ai-llm
