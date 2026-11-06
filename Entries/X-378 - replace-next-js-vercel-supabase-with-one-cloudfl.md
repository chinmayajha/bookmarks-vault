---
uid: "X-378"
title: "Replace Next.js + Vercel + Supabase with one Cloudflare Worker for about $5 a month"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Cloudflare stack"
author: "ibo"
date: "2026-10-24"
url: "https://x.com/ibothinks/status/2113955968010563974"
engagement: "153 replies · 177 reposts · 2.4K likes · 2.6K bookmarks · 237.5K views"
followup: "high"
media: "image"
links: []
tags: ["cloudflare", "workers", "d1", "r2", "durable-objects", "twitter", "dev-tools-productivity"]
---

# Replace Next.js + Vercel + Supabase with one Cloudflare Worker for about $5 a month

**[Open original ↗](https://x.com/ibothinks/status/2113955968010563974)** · `ibo` · 2026-10-24 · 153 replies · 177 reposts · 2.4K likes · 2.6K bookmarks · 237.5K views · ⭐ high follow-up

## 💬 Essence

ibo says you no longer need Next.js, Vercel and Supabase. The mapping: Next.js to TanStack Start or vinext, Vercel to Workers, Supabase Postgres to D1, Supabase Auth to Better Auth on D1, Supabase Storage to R2, realtime to Durable Objects, Redis to KV, and background jobs to Queues plus Cron Triggers. One worker, one bill, about 5 dollars a month. In the thread he says a product of his runs on this stack, tells you to have the AI avoid N+1 queries, and says anyone who hits the 10 GB limit is making enough money to migrate (with a link to a write-up on outgrowing D1). Replies push back: Theo says D1 makes the post hard to take seriously, others say each D1 database is capped at 10 GB, one fears bill spikes without spend limits, and others suggest keeping Postgres, using PlanetScale with Hyperdrive, or note D1 quirks.

## 💡 Takeaway

A useful map from the usual stack to Cloudflare primitives. Check D1's 10 GB cap and spend alerts before you commit.

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 cloudflare, workers, d1, r2, durable-objects, twitter, dev-tools-productivity
