---
uid: "X-439"
title: "Strict: run GitHub Actions for free on spare Macs and Linux boxes"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Self-hosted CI"
author: "Jeremy Cai"
date: "2026-11-22"
url: "https://x.com/jjeremycai/status/2124550422392086974"
engagement: "18 replies · 5 reposts · 173 likes · 217 bookmarks · 12.4K views"
followup: "medium"
media: "image"
links: ["https://strict.ai/", "https://medium.com/whatnot-engineering/migrating-ios-github-actions-to-self-hosted-m1-macs-runners-f75fbb00ab1b"]
tags: ["ci", "github-actions", "self-hosted", "tailscale", "twitter", "dev-tools-productivity"]
---

# Strict: run GitHub Actions for free on spare Macs and Linux boxes

**[Open original ↗](https://x.com/jjeremycai/status/2124550422392086974)** · `Jeremy Cai` · 2026-11-22 · 18 replies · 5 reposts · 173 likes · 217 bookmarks · 12.4K views

## 💬 Essence

Jeremy Cai kept hitting limits on GitHub Actions and Blacksmith, so he built Strict (strict.ai). It runs CI on spare Macs and Linux machines, locally or over Tailscale, and he claims it is 2-3x faster than cloud runners. It costs $0 a minute. The site says no account is needed, and lists self-healing disk cleanup, auto load-balancing and Tailnet build caching. You manage the fleet from a Mac app, a CLI and a web console. He points to Whatnot's move to self-hosted M1 runners as earlier work. He says Tailscale is optional in the app and helps with device discovery, remote install and privacy. One reader asks why Tailscale is needed, because GitHub runners only make outbound connections. The capture has no answer.

## 💡 Takeaway

Free CI on hardware you already own. Check the Tailscale need and the minimum machine specs first.

## 🔗 Try it

- [https://strict.ai/](https://strict.ai/)
- [https://medium.com/whatnot-engineering/migrating-ios-github-actions-to-self-hosted-m1-macs-runners-f75fbb00ab1b](https://medium.com/whatnot-engineering/migrating-ios-github-actions-to-self-hosted-m1-macs-runners-f75fbb00ab1b)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 ci, github-actions, self-hosted, tailscale, twitter, dev-tools-productivity
