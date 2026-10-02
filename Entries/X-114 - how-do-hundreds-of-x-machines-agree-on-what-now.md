---
uid: "X-114"
title: "How do hundreds of X machines agree on what 'now' means?"
platform: "Twitter"
category: "Programming & CS Learning"
subcategory: "distributed systems clocks"
author: "Tusharsingh Baghel"
date: "2025-11-02"
url: "https://x.com/tusharamasingh/status/1984857822538985891"
engagement: "1 repost · 4 likes · 690 views · 2 bookmarks"
followup: "medium"
media: "image"
links: []
tags: ["distributed-systems", "ddia", "clocks", "system-design", "twitter", "programming-cs-learning"]
---

# How do hundreds of X machines agree on what 'now' means?

**[Open original ↗](https://x.com/tusharamasingh/status/1984857822538985891)** · `Tusharsingh Baghel` · 2025-11-02 · 1 repost · 4 likes · 690 views · 2 bookmarks

## 💬 Essence

Tusharsingh asks what 11:09 even means for the hundreds of machines running X - each node has its own sense of time, some late, some in the future, yet they all somehow agree on 'now' - and links the thread he wrote on how it happens. The quoted post shows it's Day 16 of breaking down system design components from Kleppmann's Designing Data-Intensive Applications: Chapter 8, The Trouble with Distributed Systems Part 2 on unreliable clocks - if networks lie about who's alive, clocks lie about when things happened (an 8-part thread). No discussion was captured (original discussion unavailable: tweet thread fetch failed); 4 likes and 2 bookmarks.

## 💡 Takeaway

Part of a solid DDIA chapter-by-chapter series - the clock-sync explainer is the keepable piece.

**Filed in:** [[Programming & CS Learning]] · [[Home]]

🏷 distributed-systems, ddia, clocks, system-design, twitter, programming-cs-learning
