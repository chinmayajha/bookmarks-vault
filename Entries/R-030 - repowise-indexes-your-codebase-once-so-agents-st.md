---
uid: "R-030"
title: "Repowise indexes your codebase once so agents stop rediscovering it"
platform: "Reddit"
category: "Dev Tools & Productivity"
subcategory: "Codebase intelligence"
author: "u/company_url_finder"
date: "2026-10-08"
url: "https://www.reddit.com/r/BestGitHubRepos/comments/1x0sa3u/repowise_understand_your_codebase_without_paying/"
engagement: "↑615 · 19 comments"
followup: "high"
media: "none"
links: ["https://github.com/repowise-dev/repowise", "https://docs.repowise.dev/setup.md", "https://repowise.dev/"]
tags: ["codebase-index", "mcp", "call-graph", "code-review", "repowise", "reddit", "dev-tools-productivity"]
---

# Repowise indexes your codebase once so agents stop rediscovering it

**[Open original ↗](https://www.reddit.com/r/BestGitHubRepos/comments/1x0sa3u/repowise_understand_your_codebase_without_paying/)** · `u/company_url_finder` · 2026-10-08 · ↑615 · 19 comments · ⭐ high follow-up

## 💬 Essence

Repowise builds a local index of code, call graph, git history, tests, docs and design decisions, then answers the questions agents keep re-deriving: what calls this, what breaks if I change it, what is dead, which tests should run, and why it was built this way. Graph, risk, health, tests and dead-code analysis make zero LLM calls and need no API key; the repo is AGPL-3.0 or commercial, self-hosted, and parses 26 languages. It also generates a wiki per module, checks Markdown references against the tree, mines ADRs and WHY comments with staleness flags, computes bus factor and suggested reviewers, and does symbol-level blast-radius analysis. Setup is an MCP paste-in: read docs.repowise.dev/setup.md. The repo reports 7,203 stars, 788 forks, v0.55.0, 117 contributors and 1,616 commits from Raghav Chamadiya. Comments mostly ask how it differs from codegraph/gortex/JCodeMunch; the answer is that it adds docs, decisions, health and test coverage, and one user says it pairs well with jCodeMunch's exact symbol retrieval.

## 💡 Takeaway

A strong complement to a coding agent's context window: deterministic repo knowledge that is indexed once and reused, not re-read on every prompt.

## 🔗 Try it

- [https://github.com/repowise-dev/repowise](https://github.com/repowise-dev/repowise)
- [https://docs.repowise.dev/setup.md](https://docs.repowise.dev/setup.md)
- [https://repowise.dev/](https://repowise.dev/)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 codebase-index, mcp, call-graph, code-review, repowise, reddit, dev-tools-productivity
