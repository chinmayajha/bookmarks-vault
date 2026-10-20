---
uid: "X-313"
title: "Object storage benchmark: Railway/Tigris fastest, Neon slowest and priciest"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Object storage benchmarks"
author: "Leo"
date: "2026-10-15"
url: "https://x.com/leodev/status/2110874163066159383"
engagement: "67 replies · 49 reposts · 823 likes · 671 bookmarks · 135.6K views"
followup: "high"
media: "none"
links: ["https://github.com/opencoredev/storage-bench", "https://storage-bench.vercel.app/"]
tags: ["object-storage", "benchmark", "railway", "cloudflare-r2", "s3", "twitter", "dev-tools-productivity"]
---

# Object storage benchmark: Railway/Tigris fastest, Neon slowest and priciest

**[Open original ↗](https://x.com/leodev/status/2110874163066159383)** · `Leo` · 2026-10-15 · 67 replies · 49 reposts · 823 likes · 671 bookmarks · 135.6K views · ⭐ high follow-up

## 💬 Essence

Leo benchmarked S3, Cloudflare R2, Railway Buckets, Backblaze B2 and Neon Object Storage from six locations using the Files SDK for fairness. Railway was fastest on time-to-first-byte and 100 MB downloads from every location; R2 was fastest for 1 MB uploads overall but slowest from Virginia; Railway was also cheapest, while S3 and Neon were expensive. The benchmark code and site are open source. Replies congratulate Neon on being both slowest and most expensive, note that Railway's S3 is Tigris under the hood, and ask for Tigris itself to be tested.

## 💡 Takeaway

Rare public, reproducible storage numbers - Railway/Tigris look like the value pick, but rerun the benchmark for your own regions and file sizes.

## 🔗 Try it

- [https://github.com/opencoredev/storage-bench](https://github.com/opencoredev/storage-bench)
- [https://storage-bench.vercel.app/](https://storage-bench.vercel.app/)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 object-storage, benchmark, railway, cloudflare-r2, s3, twitter, dev-tools-productivity
