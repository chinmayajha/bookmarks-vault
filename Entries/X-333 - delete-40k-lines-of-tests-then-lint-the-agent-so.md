---
uid: "X-333"
title: "Delete 40K lines of tests, then lint the agent so it cannot write them again"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Agent test hygiene"
author: "Kyle Mistele"
date: "2026-10-12"
url: "https://x.com/0xblacklight/status/2109669971148067031"
engagement: "21 replies · 13 reposts · 515 likes · 400 bookmarks · 38K views"
followup: "high"
media: "none"
links: ["https://www.skills.sh/"]
tags: ["testing", "oxlint", "agents", "effect", "code-quality", "twitter", "dev-tools-productivity"]
---

# Delete 40K lines of tests, then lint the agent so it cannot write them again

**[Open original ↗](https://x.com/0xblacklight/status/2109669971148067031)** · `Kyle Mistele` · 2026-10-12 · 21 replies · 13 reposts · 515 likes · 400 bookmarks · 38K views · ⭐ high follow-up

## 💬 Essence

Kyle Mistele deleted 40,000 lines of tests, added a pile of oxlint rules to stop the agent from recreating them, and built a control loop that gardens and prunes what remains. The deleted tests were specific anti-patterns, not all tests: anything that mocks modules instead of using Effect's dependency injection and test layers, plus the usual low-value React unit tests. The control loop is documented as a design-control-loop skill on skills.sh, and he says the full thing will be open-sourced. Replies are mostly people asking for the rules, with one useful counterpoint that agents have already stopped writing obviously vacuous tests and the remaining cases are subtler - which is exactly where lint heuristics get hard.

## 💡 Takeaway

A strong pattern for keeping agent-written test suites from bloating: encode the banned test shapes as lint rules and let a loop prune the rest.

## 🔗 Try it

- [https://www.skills.sh/](https://www.skills.sh/)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 testing, oxlint, agents, effect, code-quality, twitter, dev-tools-productivity
