---
uid: "X-403"
title: "AGENTS.md rule: agents must start dev servers from their own shell so they end with the session"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Agent instructions"
author: "Dave Kiss"
date: "2026-11-16"
url: "https://x.com/davekiss/status/2122345604252618919"
engagement: "4 replies · 41 likes · 44 bookmarks · 3.7K views"
followup: "medium"
media: "image"
links: []
tags: ["agents-md", "dev-servers", "claude-code", "processes", "rules", "twitter", "dev-tools-productivity"]
---

# AGENTS.md rule: agents must start dev servers from their own shell so they end with the session

**[Open original ↗](https://x.com/davekiss/status/2122345604252618919)** · `Dave Kiss` · 2026-11-16 · 4 replies · 41 likes · 44 bookmarks · 3.7K views

## 💬 Essence

Dave Kiss points out that agents start dev servers and leave them running for days until the laptop fans spin up. Theo's T3 Code AGENTS.md says its servers ran for weeks and filled RAM and swap. So the file tells agents to run dev servers from their own shell, so the servers end with the session. The rule bans nohup, setsid and tmux unless you ask for a server that outlives the session. Replies say a microVM sandbox that reclaims itself removes the problem. Another says an agent left utilities running after it moved out.

## 💡 Takeaway

Copy the rule into your AGENTS.md or CLAUDE.md. It costs nothing and stops stray processes.

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 agents-md, dev-servers, claude-code, processes, rules, twitter, dev-tools-productivity
