---
uid: "X-059"
title: "Retired interview question: distinct stream items in O(log log N) bits"
platform: "Twitter"
category: "Interviews, OA & DSA"
subcategory: "probabilistic interview question"
author: "Finn Hulse"
date: "2026-03-14"
url: "https://x.com/finn_hulse/status/2032952738720477561"
engagement: "36 replies · 8 reposts · 451 likes · 97.8K views · 890 bookmarks"
followup: "medium"
media: "none"
links: []
tags: ["hyperloglog", "interview-question", "probabilistic-algorithms", "streaming", "twitter", "interviews-oa-dsa"]
---

# Retired interview question: distinct stream items in O(log log N) bits

**[Open original ↗](https://x.com/finn_hulse/status/2032952738720477561)** · `Finn Hulse` · 2026-03-14 · 36 replies · 8 reposts · 451 likes · 97.8K views · 890 bookmarks

## 💬 Essence

Finn Hulse posts his retired favorite technical interview problem: given a stream of N not-necessarily-distinct integers from an O(N) universe, estimate how many distinct integers appear using only O(log(log N)) persistent storage, in 5 lines of pseudocode - and says there was a time he wouldn't work with someone who couldn't answer it. His thread hints that O(log log N) can't even encode N itself, that you use different hashes per iteration, and that hashing is goated. Replies propose the classic trailing-zeros-of-a-random-hash sketch (HyperLogLog territory), others call it esoteric trivia they'd refuse to answer, and one says it filters for memorizers rather than talent; 451 likes and 890 bookmarks.

## 💡 Takeaway

A polarizing interview question that doubles as a HyperLogLog explainer - and a debate on signal versus trivia.

**Filed in:** [[Interviews, OA & DSA]] · [[Home]]

🏷 hyperloglog, interview-question, probabilistic-algorithms, streaming, twitter, interviews-oa-dsa
