---
uid: "X-335"
title: "FSearch 0.2: 150x faster grep on just-edited files and a 74% smaller index"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "File search"
author: "Noah"
date: "2026-10-12"
url: "https://x.com/itsnoahd/status/2109675745408930191"
engagement: "19 replies · 22 reposts · 487 likes · 235 bookmarks · 17.5K views"
followup: "medium"
media: "video"
links: ["https://github.com/noahdunnagan/fsearch"]
tags: ["file-search", "macos", "indexing", "finder", "performance", "twitter", "dev-tools-productivity"]
---

# FSearch 0.2: 150x faster grep on just-edited files and a 74% smaller index

**[Open original ↗](https://x.com/itsnoahd/status/2109675745408930191)** · `Noah` · 2026-10-12 · 19 replies · 22 reposts · 487 likes · 235 bookmarks · 17.5K views · 🎬

## 💬 Essence

Noah shipped FSearch 0.2, a macOS Finder replacement with a much smaller and faster index: 150x faster to grep a file you just edited, a 74% smaller index (1.5 GB to 388 MB for him), 35% more files covered, 65% less daemon memory on Chromium and 32% less peak memory while indexing. He is explicit that raw speed is not the goal - some areas regress by 0.4x - and that the focus is system impact and coverage, which is why he calls comparisons to fff apples-to-oranges. The repo is public, and the demo videos were made by asking Claude to record them. Replies ask about Homebrew and Windows support, and one makes the sharp point that reading edited files while the index catches up is the feature that actually matters.

## 💡 Takeaway

A Finder replacement optimized for low system cost and fresh-file search, not benchmark bragging rights; the small index with broader coverage is the interesting trade.

## 🔗 Try it

- [https://github.com/noahdunnagan/fsearch](https://github.com/noahdunnagan/fsearch)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 file-search, macos, indexing, finder, performance, twitter, dev-tools-productivity
