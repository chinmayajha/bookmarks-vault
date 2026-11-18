---
uid: "X-394"
title: "everystate: a Rust TLA+ model checker so agents can find race conditions without Java"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Formal verification for agents"
author: "Matt Carey"
date: "2026-11-17"
url: "https://x.com/mattzcarey/status/2122815603841040517"
engagement: "24 replies · 24 reposts · 370 likes · 442 bookmarks · 15K views"
followup: "medium"
media: "image"
links: ["https://github.com/mattzcarey/everystate", "https://feynman.leostera.dev/", "https://x.com/mattzcarey/status/2122821279107428487"]
tags: ["tla-plus", "formal-verification", "rust", "model-checking", "agents", "twitter", "dev-tools-productivity"]
---

# everystate: a Rust TLA+ model checker so agents can find race conditions without Java

**[Open original ↗](https://x.com/mattzcarey/status/2122815603841040517)** · `Matt Carey` · 2026-11-17 · 24 replies · 24 reposts · 370 likes · 442 bookmarks · 15K views

## 💬 Essence

Matt Carey releases everystate, an experimental TLA+ model checker written in Rust for coding agents. It aims for full TLC compatibility and needs no Java, which earlier TLA+ tools required. He says it proves that an agent did what you expected, and you can use it from the CLI or from code. He builds the states from code and English descriptions. Follow-up posts say it is quicker than the Java engine on all his examples, with a faster 0.4.0 to come. A second bookmarked post gives the prompt to use: tell your agent to use the repo's formal verification skill to find race conditions. Replies point to Feynman (feynman.leostera.dev), which implements most of TLA and an integer core checker. Others ask for performance numbers and why he did not use Quint.

## 💡 Takeaway

Try it on code with sync or concurrency logic. The tool is experimental, so treat a pass as a strong hint and not as proof.

## 🔗 Try it

- [https://github.com/mattzcarey/everystate](https://github.com/mattzcarey/everystate)
- [https://feynman.leostera.dev/](https://feynman.leostera.dev/)
- [https://x.com/mattzcarey/status/2122821279107428487](https://x.com/mattzcarey/status/2122821279107428487)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 tla-plus, formal-verification, rust, model-checking, agents, twitter, dev-tools-productivity
