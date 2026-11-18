---
uid: "X-406"
title: "codehygiene: a tiny 'model' compiled straight into weights, with no training"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Weight-space models"
author: "brian"
date: "2026-11-15"
url: "https://x.com/brianbellx/status/2121973517273153540"
engagement: "17 replies · 25 reposts · 605 likes · 799 bookmarks · 42.3K views"
followup: "medium"
media: "image"
links: ["https://github.com/brianbell-x/codehygiene", "https://github.com/jkomyno/nits", "https://x.com/brianbellx/status/2122517293582410041", "https://x.com/jkomyno/status/2122419175453032471"]
tags: ["weight-space", "ternary", "code-quality", "skills", "cpu", "twitter", "ai-llm"]
---

# codehygiene: a tiny 'model' compiled straight into weights, with no training

**[Open original ↗](https://x.com/brianbellx/status/2121973517273153540)** · `brian` · 2026-11-15 · 17 replies · 25 reposts · 605 likes · 799 bookmarks · 42.3K views

## 💬 Essence

Brian posts codehygiene, a weight-space compiled model for code readability and hygiene. He says it has 428K ternary (1.58-bit) parameters, no gradients and no training, runs in 10 ms on a CPU, and installs with npx skills add brianbell-x/codehygiene -g. He says the file is 11 KB, and the repo card says 33 KB. A second post says the whole training run is one script, compile.py, which takes 1.5 seconds on a laptop with no dataset and no GPU and writes all 569,662 weights. So retraining means edit, run, eval. The two posts give different parameter counts, so check the repo. Replies ask whether the AI wrote the weights by hand (he says yes). Others say the word model is stretched for a skill. Another asks whether regexes were encoded as convolutions, and posts his own remix, nits (github.com/jkomyno/nits), saying you cannot easily do without parsers.

## 💡 Takeaway

Treat it as a compiled rule set more than a trained model. Read compile.py before you trust the output. See also the weight-editing entry in this batch.

## 🔗 Try it

- [https://github.com/brianbell-x/codehygiene](https://github.com/brianbell-x/codehygiene)
- [https://github.com/jkomyno/nits](https://github.com/jkomyno/nits)
- [https://x.com/brianbellx/status/2122517293582410041](https://x.com/brianbellx/status/2122517293582410041)
- [https://x.com/jkomyno/status/2122419175453032471](https://x.com/jkomyno/status/2122419175453032471)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 weight-space, ternary, code-quality, skills, cpu, twitter, ai-llm
