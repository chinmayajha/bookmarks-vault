---
uid: "L-008"
title: "Cut Claude Code / Cursor token usage ~60% with a small CLI tool"
platform: "LinkedIn"
category: "AI & LLM"
subcategory: "LLM token-cost auditing"
author: "Daniel Engelhardt"
date: "2026-05-20"
url: "https://www.linkedin.com/feed/update/urn:li:activity:7462777658507051010"
engagement: "♥94 · 37 comments · 5 reposts"
followup: "medium"
media: "none"
links: ["https://github.com/rtk-ai/rtk", "https://github.com/professorpalmer/Puppetmaster", "https://analyzer.spec-kitty.ai/"]
tags: ["claude-code", "token-cost", "ai-tooling", "llm-ops", "context-window", "linkedin", "ai-llm"]
---

# Cut Claude Code / Cursor token usage ~60% with a small CLI tool

**[Open original ↗](https://www.linkedin.com/feed/update/urn:li:activity:7462777658507051010)** · `Daniel Engelhardt` · 2026-05-20 · ♥94 · 37 comments · 5 reposts

## 💬 Essence

Daniel shares that a small open-source CLI (rtk), which rewrites bash commands into compact output before execution, cut his team's Claude Code and Cursor token usage by roughly 60%, and describes his own counter-analysis: a local audit skill over his session logs found about 28% of spend was cuttable, but rtk's output compression covered under 1% of his bill because almost all the money sat in bloated context — sessions crossing 200k into the 2x pricing tier, plus skills and plugins riding along on every request that were never called. He concludes output compression and context hygiene are different layers that stack, and thanks whoever pointed him at the tool. The comment thread is a tool swap: the rtk repo, an analyzer (analyzer.spec-kitty.ai) and another GitHub tool (Puppetmaster) get shared, with people asking if things are on GitHub.

## 💡 Takeaway

Counterintuitive cost data for AI-coding teams: output compression was <1% of the bill, while idle context (200k sessions, unused skills) was the real leak.

## 🔗 Try it

- [https://github.com/rtk-ai/rtk](https://github.com/rtk-ai/rtk)
- [https://github.com/professorpalmer/Puppetmaster](https://github.com/professorpalmer/Puppetmaster)
- [https://analyzer.spec-kitty.ai/](https://analyzer.spec-kitty.ai/)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 claude-code, token-cost, ai-tooling, llm-ops, context-window, linkedin, ai-llm
