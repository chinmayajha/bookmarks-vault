---
uid: "X-083"
title: "'x': describe shell commands in English, it runs them after confirming"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "natural language shell tool"
author: "Arpit Bhayani"
date: "2026-01-20"
url: "https://x.com/arpit_bhayani/status/2013598645615255960"
engagement: "55 replies · 27 reposts · 590 likes · 57K views · 278 bookmarks"
followup: "medium"
media: "none"
links: []
tags: ["cli", "natural-language", "shell", "open-source", "ai-tooling", "twitter", "dev-tools-productivity"]
---

# 'x': describe shell commands in English, it runs them after confirming

**[Open original ↗](https://x.com/arpit_bhayani/status/2013598645615255960)** · `Arpit Bhayani` · 2026-01-20 · 55 replies · 27 reposts · 590 likes · 57K views · 278 bookmarks

## 💬 Essence

Arpit built a small utility called x for people who don't remember shell commands: type a plain-English request after it ('x kill process running on port 21079', 'x get all the git branches', 'x grep all errors from ~/access.log') and it generates the shell command and executes it only after your confirmation. It's a pure bash script with no external dependencies beyond curl or wget, supports OpenAI, Gemini and Anthropic behind one API key, installs in a single command, and is open-sourced. His thread drops the repo and says if an LLM can do it, why bother memorizing; replies teach the manual sudo lsof -i :21079 equivalent, others say they'd never trust an LLM to run shell commands ('the horrors of allowing super user access to an LLM'), with a counterpoint that it confirms first; 590 likes and 278 bookmarks.

## 💡 Takeaway

A minimal natural-language shell wrapper with a built-in confirmation step - and the trust debate that comes with it.

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 cli, natural-language, shell, open-source, ai-tooling, twitter, dev-tools-productivity
