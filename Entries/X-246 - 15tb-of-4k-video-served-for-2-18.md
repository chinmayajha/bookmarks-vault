---
uid: "X-246"
title: "15TB of 4K video served for $2.18"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "cheap video delivery stack"
author: "Steve Tenuto"
date: "2024-11-08"
url: "https://x.com/steve_tenuto/status/1854919704483434763"
engagement: "160 replies · 6.3K likes · 1.1M views"
followup: "high"
media: "image"
links: ["https://gist.github.com/stenuto/9ff19ce89f07c7419a8d0976736ebe12"]
tags: ["video-delivery", "hls", "cloudflare-r2", "ffmpeg", "cdn-costs", "twitter", "dev-tools-productivity"]
---

# 15TB of 4K video served for $2.18

**[Open original ↗](https://x.com/steve_tenuto/status/1854919704483434763)** · `Steve Tenuto` · 2024-11-08 · 160 replies · 6.3K likes · 1.1M views · ⭐ high follow-up

## 💬 Essence

OP claims they served over 15 terabytes of 4K video last month for just $2.18 and shares the method: adaptive bitrate streaming via HLS - encode the video at multiple resolutions and bitrates, split into chunks, and let the player switch to lower-bitrate chunks as the connection changes to avoid buffering - encoded with ffmpeg (the exact script is shared as a gist) and then uploaded from local disk to a Cloudflare R2 bucket using rclone. No reply digest was captured despite 160 replies.

## 💡 Takeaway

Concrete cost-saving media-delivery recipe (ffmpeg + HLS + rclone + R2) with the script included.

## 🔗 Try it

- [https://gist.github.com/stenuto/9ff19ce89f07c7419a8d0976736ebe12](https://gist.github.com/stenuto/9ff19ce89f07c7419a8d0976736ebe12)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 video-delivery, hls, cloudflare-r2, ffmpeg, cdn-costs, twitter, dev-tools-productivity
