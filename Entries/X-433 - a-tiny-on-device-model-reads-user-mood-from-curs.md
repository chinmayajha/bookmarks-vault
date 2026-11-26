---
uid: "X-433"
title: "A tiny on-device model reads user mood from cursor movement"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Adaptive UI model"
author: "Jakub Antalik"
date: "2026-11-24"
url: "https://x.com/Jakubantalik/status/2125273238414721460"
engagement: "203 replies · 291 reposts · 4,946 likes · 4,282 bookmarks · 248.5K views"
followup: "medium"
media: "video"
links: ["https://libraries.dev/mood-recognition"]
tags: ["on-device-ai", "adaptive-ui", "react", "user-behavior", "twitter", "ai-llm"]
---

# A tiny on-device model reads user mood from cursor movement

**[Open original ↗](https://x.com/Jakubantalik/status/2125273238414721460)** · `Jakub Antalik` · 2026-11-24 · 203 replies · 291 reposts · 4,946 likes · 4,282 bookmarks · 248.5K … · 🎬

## 💬 Essence

Jakub Antalik built a small on-device model for React that reads user emotion from cursor movement, speed and clicks. It detects confusion, frustration and when a user is lost, and he suggests it for generative or adaptive UI. The beta is free at libraries.dev/mood-recognition. In the thread he says it trains on real user sessions, a test flow that tracked behavior, and simulated data. It does not detect happiness yet, and neutral is the default. Lost-state detection counts visited pages, interactions per page and going back. He says he needs more data. The top reply jokes that jittery mouse movement and spam clicks would confuse it. The post has 4.9K likes and 4.3K bookmarks.

## 💡 Takeaway

A concrete example of behavior signals driving adaptive UI. Limits: small training data and no happy state yet.

## 🔗 Try it

- [https://libraries.dev/mood-recognition](https://libraries.dev/mood-recognition)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 on-device-ai, adaptive-ui, react, user-behavior, twitter, ai-llm
