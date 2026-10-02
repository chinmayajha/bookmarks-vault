---
uid: "X-160"
title: "How McIlroy fit a 250kB dictionary into 64kB of RAM"
platform: "Twitter"
category: "Programming & CS Learning"
subcategory: "McIlroy dictionary compression"
author: "Abhinav Upadhyay"
date: "2025-01-18"
url: "https://x.com/abhi9u/status/1880527449471217844"
engagement: "44 replies · 3.6K likes · 355.6K views"
followup: "high"
media: "image"
links: ["http://golf.horse/wordle/"]
tags: ["compression", "unix-history", "algorithms", "systems-design", "twitter", "programming-cs-learning"]
---

# How McIlroy fit a 250kB dictionary into 64kB of RAM

**[Open original ↗](https://x.com/abhi9u/status/1880527449471217844)** · `Abhinav Upadhyay` · 2025-01-18 · 44 replies · 3.6K likes · 355.6K views · ⭐ high follow-up

## 💬 Essence

OP tells the story of Douglas McIlroy's 1970s Unix spell-checker: fitting a 250kB dictionary into 64kB with fast lookups when even gzip -9 only reaches 85kB - instead of generic compression, McIlroy analysed the data distribution and built an algorithm just 0.03 bits from the theoretical limit, still unbeaten, framed as a lesson in designing to constraints. The self-thread links his article and clarifies that the successive hash differences (not the codes) were geometrically distributed; replies call it a sign that constraints bred creativity, nitpick where the theoretical limit of 13.57 bits/word comes from, and link a similar Wordle word-list compression golf challenge.

## 💡 Takeaway

Great engineering short-story with article link; the clarification replies make it rigorous.

## 🔗 Try it

- [http://golf.horse/wordle/](http://golf.horse/wordle/)

**Filed in:** [[Programming & CS Learning]] · [[Home]]

🏷 compression, unix-history, algorithms, systems-design, twitter, programming-cs-learning
