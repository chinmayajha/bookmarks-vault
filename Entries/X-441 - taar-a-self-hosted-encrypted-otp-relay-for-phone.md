---
uid: "X-441"
title: "Taar: a self-hosted, encrypted OTP relay for phones and family devices"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Self-hosted tools"
author: "Nikhil Bafna"
date: "2026-11-22"
url: "https://x.com/zodvik/status/2124439810333122754"
engagement: "76 replies · 58 reposts · 1,078 likes · 929 bookmarks · 83.6K views"
followup: "medium"
media: "image"
links: ["https://github.com/midplane/taar"]
tags: ["otp", "self-hosted", "cloudflare-workers", "android", "twitter", "dev-tools-productivity"]
---

# Taar: a self-hosted, encrypted OTP relay for phones and family devices

**[Open original ↗](https://x.com/zodvik/status/2124439810333122754)** · `Nikhil Bafna` · 2026-11-22 · 76 replies · 58 reposts · 1,078 likes · 929 bookmarks · 83.6K views

## 💬 Essence

Nikhil Bafna built Taar (तार), an open-source private line for the home. An OTP that lands on his phone shows up at once on his laptop and his wife's phone, with no WhatsApp forwarding. It is encrypted and self-hosted, and the relay runs on a Cloudflare Worker on the free tier. It works on Android only. He says iOS does not allow SMS reads and Shortcuts might help. Auto-share is optional, and he compares the risk to a password manager. Replies raise risk: access to one device exposes the OTPs, it may defeat the purpose of an OTP, and one reader says to host it inside a tailnet. Another reader asks for a per-device key and a revoke button. One reader says Airtel switched off SMS for NRIs without an international plan, so this helps them. He guesses that Android API 37 limits some SMS reads to messages with an app hash.

## 💡 Takeaway

A neat N=1 tool, but it moves a second factor onto more devices. Read the replies on risk before use.

## 🔗 Try it

- [https://github.com/midplane/taar](https://github.com/midplane/taar)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 otp, self-hosted, cloudflare-workers, android, twitter, dev-tools-productivity
