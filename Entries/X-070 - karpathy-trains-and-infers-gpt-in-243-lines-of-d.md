---
uid: "X-070"
title: "Karpathy trains and infers GPT in 243 lines of dependency-free Python"
platform: "Twitter"
category: "AI & LLM"
subcategory: "minimal GPT implementation"
author: "Andrej Karpathy"
date: "2026-02-11"
url: "https://x.com/karpathy/status/2021694437152157847"
engagement: "639 replies · 3.7K reposts · 24.8K likes · 5.2M views · 28.8K bookmarks"
followup: "high"
media: "none"
links: ["https://karpathy.ai/microgpt.html"]
tags: ["gpt", "from-scratch", "autograd", "education", "llm-internals", "twitter", "ai-llm"]
---

# Karpathy trains and infers GPT in 243 lines of dependency-free Python

**[Open original ↗](https://x.com/karpathy/status/2021694437152157847)** · `Andrej Karpathy` · 2026-02-11 · 639 replies · 3.7K reposts · 24.8K likes · 5.2M views · 28.8K … · ⭐ high follow-up

## 💬 Essence

Karpathy's new art project: train and inference GPT in 243 lines of pure, dependency-free Python - the full algorithmic content of what is needed, with everything else just efficiency ('I cannot simplify this any further'). His thread explains the trick: strip the architecture and loss down to atomic ops (+, *, **, log, exp) and let a tiny scalar autograd engine (micrograd) compute gradients with Adam, published at karpathy.ai/microgpt.html - and he then realized it could be simplified further to ~200 lines by returning local gradients per op. Replies quip the entire AI industry is 243 lines of math plus a trillion dollars of marketing; 24,802 likes, 28,795 bookmarks and 5.2M views.

## 💡 Takeaway

The definitive 'LLMs are not magic' artifact - 243 lines to teach or demo the whole training stack.

## 🔗 Try it

- [https://karpathy.ai/microgpt.html](https://karpathy.ai/microgpt.html)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 gpt, from-scratch, autograd, education, llm-internals, twitter, ai-llm
