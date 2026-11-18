---
uid: "X-409"
title: "Three ways to beat Pangram: Wikipedia sentences, structure transfer, adversarial RL"
platform: "Twitter"
category: "AI & LLM"
subcategory: "AI-text detection"
author: "archivedvideos"
date: "2026-11-15"
url: "https://x.com/archived_videos/status/2121804512272814548"
engagement: "72 replies · 211 reposts · 10.7K likes · 4.9K bookmarks · 469.9K views"
followup: "medium"
media: "none"
links: ["https://writing-scaffold-mcp.google.org.ag/pangram-miss-benchmark.html", "https://github.com/ampdot-io/ai-detection-eval", "https://github.com/EdisonScientific/prime-rl-adversarial-paper/tree/main", "https://x.com/amplifiedamp/status/2122300505951293802", "https://x.com/julianharris/status/2122186120159244746"]
tags: ["pangram", "ai-detection", "writing", "adversarial", "wikipedia", "twitter", "ai-llm"]
---

# Three ways to beat Pangram: Wikipedia sentences, structure transfer, adversarial RL

**[Open original ↗](https://x.com/archived_videos/status/2121804512272814548)** · `archivedvideos` · 2026-11-15 · 72 replies · 211 reposts · 10.7K likes · 4.9K bookmarks · 469.9K views

## 💬 Essence

Three bookmarked posts show weaknesses in AI-text detectors. First, archivedvideos says you can ask Claude to download Wikipedia and write articles using only sentences from it, and Pangram scores the result as 100% human. A reader reproduced it. Critics say it cannot make novel arguments. Second, ampdot releases a writing-scaffold MCP prompt library that uses the structure of another text, such as an NTSB report, as a scaffold. With retries, up to 96% of prompts from WildChat score as Human, Mixed or AI-assisted. The eval exploits the fact that Pangram struggles with text that mixes AI and non-AI parts. The public endpoint logs the topics people use. Third, Julian Harris points to an open-source repo from Edison Scientific (prime-rl-adversarial-paper) that trains a model for writing a detector cannot spot. Replies ask why anyone releases this.

## 💡 Takeaway

Detectors are weak, so do not use one alone for grading or hiring decisions. Read the full report and the eval repo for the method.

## 🔗 Try it

- [https://writing-scaffold-mcp.google.org.ag/pangram-miss-benchmark.html](https://writing-scaffold-mcp.google.org.ag/pangram-miss-benchmark.html)
- [https://github.com/ampdot-io/ai-detection-eval](https://github.com/ampdot-io/ai-detection-eval)
- [https://github.com/EdisonScientific/prime-rl-adversarial-paper/tree/main](https://github.com/EdisonScientific/prime-rl-adversarial-paper/tree/main)
- [https://x.com/amplifiedamp/status/2122300505951293802](https://x.com/amplifiedamp/status/2122300505951293802)
- [https://x.com/julianharris/status/2122186120159244746](https://x.com/julianharris/status/2122186120159244746)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 pangram, ai-detection, writing, adversarial, wikipedia, twitter, ai-llm
