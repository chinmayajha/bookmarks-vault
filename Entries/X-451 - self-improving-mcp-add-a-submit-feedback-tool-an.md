---
uid: "X-451"
title: "Self-improving MCP: add a submit_feedback tool and let Claude open the PR"
platform: "Twitter"
category: "AI & LLM"
subcategory: "MCP"
author: "Matt Ambrogi"
date: "2026-11-17"
url: "https://x.com/matt_ambrogi/status/2122722680784687600"
engagement: "86 replies · 84 reposts · 1,295 likes · 1,903 bookmarks · 174.9K views"
followup: "high"
media: "image"
links: []
tags: ["mcp", "feedback-loop", "slack", "claude", "agents", "twitter", "ai-llm"]
---

# Self-improving MCP: add a submit_feedback tool and let Claude open the PR

**[Open original ↗](https://x.com/matt_ambrogi/status/2122722680784687600)** · `Matt Ambrogi` · 2026-11-17 · 86 replies · 84 reposts · 1,295 likes · 1,903 bookmarks · 174.9K views · ⭐ high follow-up

## 💬 Essence

Matt Ambrogi explains how to make an MCP server improve itself. Add a submit_feedback tool to your MCP. The agent that uses your MCP writes a detailed issue with a proposed fix. Send it to an internal Slack channel. Tag Claude in that channel to open a PR when you agree with the change. He says the reports are usually plain, such as 'you can't filter X by Y', and you can choose to ignore them. The tool is only a function that you expose. Replies add experience: Upstash does the same, another team added a goal field so they can see what the user tried to do, and one MCP has received over 75 feedback requests. Others warn about risk. A feedback gate still opens a door for prompt injection into a coding agent with prod access. Another reader says models work around issues and do not report them.

## 💡 Takeaway

A cheap feedback loop for MCP servers. Add a goal field, and gate the PR step against prompt injection.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 mcp, feedback-loop, slack, claude, agents, twitter, ai-llm
