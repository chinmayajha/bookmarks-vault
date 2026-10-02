---
uid: "X-022"
title: "Sharing files from a laptop with http.server + a Cloudflare tunnel"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "local file sharing via tunnel"
author: "Vijay"
date: "2026-09-20"
url: "https://x.com/unk_data/status/2101619038732632473"
engagement: "8 replies · 15 reposts · 896 likes · 86.6K views · 678 bookmarks"
followup: "medium"
media: "none"
links: []
tags: ["cloudflare", "tunnels", "python", "file-sharing", "security", "twitter", "dev-tools-productivity"]
---

# Sharing files from a laptop with http.server + a Cloudflare tunnel

**[Open original ↗](https://x.com/unk_data/status/2101619038732632473)** · `Vijay` · 2026-09-20 · 8 replies · 15 reposts · 896 likes · 86.6K views · 678 bookmarks

## 💬 Essence

Vijay quote-tweets the try.cloudflare.com hype with his workflow: python -m http.server plus a quick Cloudflare tunnel, sending people a download link straight from his laptop. His thread recalls ngrok limits from his Colab days and wonders why this is trending now. Replies agree ngrok did this years ago, but Navlio warns http.server serves the whole folder - a project-root .env went out with no auth on the tunnel URL - and others mention wormhole; 896 likes and 678 bookmarks.

## 💡 Takeaway

A popular local file-sharing recipe with a real security caveat (whole directory, unauthenticated URL) worth remembering.

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 cloudflare, tunnels, python, file-sharing, security, twitter, dev-tools-productivity
