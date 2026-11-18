---
uid: "X-418"
title: "Plurai simulation plugin: test an email agent with 27 mock conversations before it goes live"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent testing"
author: "Mehul Mohan"
date: "2026-11-11"
url: "https://x.com/mehulmpt/status/2120551495229939847"
engagement: "10 replies · 2 reposts · 32 likes · 12 bookmarks · 3.3K views"
followup: "high"
media: "none"
links: ["https://www.plurai.ai/"]
tags: ["agent-testing", "simulation", "phishing", "claude-code", "deepseek", "twitter", "ai-llm"]
---

# Plurai simulation plugin: test an email agent with 27 mock conversations before it goes live

**[Open original ↗](https://x.com/mehulmpt/status/2120551495229939847)** · `Mehul Mohan` · 2026-11-11 · 10 replies · 2 reposts · 32 likes · 12 bookmarks · 3.3K views · ⭐ high follow-up

## 💬 Essence

Mehul Mohan tested his business inbox agent before he trusted it. A prompt that said be careful with links did not stop the model from opening a fake Google sign-in link. He used Plurai's Claude Code plugin: add plurai-ai/plurai-plugins, install plurai-simulation, then run /plurai-simulation:simulate. It reads the code, maps every tool and swaps real-world tools such as send_email for mocks. It writes 9 scenarios and runs each 3 times. On DeepSeek V4.1 Flash, 19 of 27 conversations passed and 8 gaps showed up. On DeepSeek V4 Pro, 21 of 27 passed and the phishing scenario passed 3 of 3. After he applied the top three fixes, Flash passed 22 of 27. His real setup opens links in a stripped Chrome in Docker, and the agent can draft but cannot send. The thread ends with an ad for Plurai.

## 💡 Takeaway

A good pattern: mock the tools, run each scenario three times, and keep a human on Send. The vendor benefits from the test.

## 🔗 Try it

- [https://www.plurai.ai/](https://www.plurai.ai/)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 agent-testing, simulation, phishing, claude-code, deepseek, twitter, ai-llm
