---
uid: "X-234"
title: "check-if-email-exists: verify emails without sending mail"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "email validation library"
author: "Tom Dörr"
date: "2026-02-02"
url: "https://x.com/tom_doerr/status/2018349566802743552"
engagement: "26 replies · 1.6K likes · 141.6K views"
followup: "high"
media: "image"
links: ["https://github.com/reacherhq/check-if-email-exists", "https://mailscan-vxd1.dartup.dev"]
tags: ["email-validation", "open-source", "cold-outreach", "deliverability", "library", "twitter", "dev-tools-productivity"]
---

# check-if-email-exists: verify emails without sending mail

**[Open original ↗](https://x.com/tom_doerr/status/2018349566802743552)** · `Tom Dörr` · 2026-02-02 · 26 replies · 1.6K likes · 141.6K views · ⭐ high follow-up

## 💬 Essence

OP shares the open-source reacherhq/check-if-email-exists repository for verifying email addresses without sending messages. The replies turn it into a technical review: one corrects the claim - the code does open an SMTP connection, citing core/src/smtp/verif_method.rs - another warns ISPs will likely block your IPs for those requests, a reader offers a deployed instance to try, and others praise it for pre-send validation in registration flows, cleaning lists before campaigns and cutting cold-outreach bounces, while noting SMTP verification is increasingly blocked and an HTTPS backend approach is clutch.

## 💡 Takeaway

Useful OSS email-validation library - read the SMTP/IP-blocking caveats before relying on it.

## 🔗 Try it

- [https://github.com/reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists)
- [https://mailscan-vxd1.dartup.dev](https://mailscan-vxd1.dartup.dev)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 email-validation, open-source, cold-outreach, deliverability, library, twitter, dev-tools-productivity
