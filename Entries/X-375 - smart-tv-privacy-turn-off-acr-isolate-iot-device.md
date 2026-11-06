---
uid: "X-375"
title: "Smart TV privacy: turn off ACR, isolate IoT devices and filter DNS with NextDNS"
platform: "Twitter"
category: "Tech Industry & News"
subcategory: "Smart TV privacy"
author: "Tristan"
date: "2026-10-21"
url: "https://x.com/Tristan0x/status/2114311011561812476"
engagement: "348 replies · 3.6K reposts · 22.6K likes · 28.6K bookmarks · 1.5M views"
followup: "high"
media: "image"
links: ["https://nextdns.io/", "https://arxiv.org/abs/2409.06203"]
tags: ["privacy", "smart-tv", "acr", "nextdns", "iot", "twitter", "tech-industry-news"]
---

# Smart TV privacy: turn off ACR, isolate IoT devices and filter DNS with NextDNS

**[Open original ↗](https://x.com/Tristan0x/status/2114311011561812476)** · `Tristan` · 2026-10-21 · 348 replies · 3.6K reposts · 22.6K likes · 28.6K bookmarks · 1.5M … · ⭐ high follow-up

## 💬 Essence

Tristan summarizes why smart TVs are cheap. A researcher (log4j) rooted a 2025 Samsung TV and found an always-on microphone, automatic content recognition (ACR), geolocation, network mapping and ad profiling shared with hundreds of partners. ACR screenshots the screen and sends fingerprints home: Samsung about every 500 ms, LG every 10 ms, and it can fingerprint HDMI inputs from laptops and consoles. Step 1: turn ACR off (Samsung: Terms and Privacy, Viewing Information Services; LG: Live Plus; Vizio: Viewing Data; Roku: Use info from TV inputs; Sony and Google TV: Samba Interactive TV), opt out of interest-based ads, reset the advertising ID and turn off voice. Step 2: put TVs, cameras, speakers and vacuums on a guest or IoT network. Step 3: use NextDNS (free tier) with the OISD blocklist and tracking protection, or Pi-hole, and block outbound port 53 except to your router. The thread adds that Samsung may not honour ACR opt-outs, that Vizio made 115.8M dollars from ads and data against a 6.7M dollar hardware loss in Q3 2024, and that Texas sued TV makers over ACR. Replies suggest never connecting the TV to Wi-Fi and using a streaming box without a microphone.

## 💡 Takeaway

A practical home-network privacy checklist. The simplest fix is to keep the TV offline and use a separate streaming device.

## 🔗 Try it

- [https://nextdns.io/](https://nextdns.io/)
- [https://arxiv.org/abs/2409.06203](https://arxiv.org/abs/2409.06203)

**Filed in:** [[Tech Industry & News]] · [[Home]]

🏷 privacy, smart-tv, acr, nextdns, iot, twitter, tech-industry-news
