---
uid: "X-317"
title: "Earshot gives coding agents ears to judge and generate sound effects"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Audio for coding agents"
author: "Leon Lin"
date: "2026-10-15"
url: "https://x.com/LexnLin/status/2110878517197975717"
engagement: "147 replies · 173 reposts · 2.9K likes · 3.4K bookmarks · 159.2K views"
followup: "high"
media: "video"
links: ["https://github.com/Leonxlnx/earshot"]
tags: ["audio", "mcp", "sound-design", "claude-code", "generative-audio", "twitter", "ai-llm"]
---

# Earshot gives coding agents ears to judge and generate sound effects

**[Open original ↗](https://x.com/LexnLin/status/2110878517197975717)** · `Leon Lin` · 2026-10-15 · 147 replies · 173 reposts · 2.9K likes · 3.4K bookmarks · 159.2K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Leon Lin's earshot is an MCP server and skill that lets a coding agent describe, match and find sound effects, render a visual page of a soundtrack, and critique audio with scores plus timestamped fixes - all locally on CPU. Earshot Forge goes further: the agent writes code to synthesize a sound, listens to it, scores it, rewrites the code and repeats until it is decent, comparing against real recordings because blind tests mislead. Lin's own blind test of 15 real-vs-generated pairs got 8 right, essentially a coin flip, which he admits. Setup is one command: claude mcp add earshot -- python -m earshot mcp. The launch video's entire soundtrack was made in code, but the top replies are blunt that it still sounds like sloppy Claude sound design, which is the problem the tool is meant to fix.

## 💡 Takeaway

A genuinely new modality for coding agents - audio QA and synthesis in one loop - though the demos show taste is still the bottleneck, not generation.

## 🔗 Try it

- [https://github.com/Leonxlnx/earshot](https://github.com/Leonxlnx/earshot)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 audio, mcp, sound-design, claude-code, generative-audio, twitter, ai-llm
