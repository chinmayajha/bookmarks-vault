---
uid: "X-421"
title: "Railway's October 21 breach, explained in a video: how the attacker got to customer variables"
platform: "Twitter"
category: "Tech Industry & News"
subcategory: "Security incident"
author: "Amarnath"
date: "2026-11-10"
url: "https://x.com/amrnth0/status/2120849097871810973"
engagement: "6 replies · 20 reposts · 456 likes · 291 bookmarks · 34.1K views"
followup: "high"
media: "video"
important: "Railway breach (20 to 21 Oct 2026): up to 1.85% of workspaces had environment variables decrypted. If you use Railway, rotate secrets and report AI token charges that you did not make. Checked 18 Nov 2026."
links: ["https://blog.railway.com/p/incident-report-october-security-incident"]
tags: ["railway", "security-incident", "oidc", "secrets", "build-isolation", "twitter", "tech-industry-news"]
---

# Railway's October 21 breach, explained in a video: how the attacker got to customer variables

**[Open original ↗](https://x.com/amrnth0/status/2120849097871810973)** · `Amarnath` · 2026-11-10 · 6 replies · 20 reposts · 456 likes · 291 bookmarks · 34.1K views · 🎬 · ⭐ high follow-up

> ⏰ **Important:** Railway breach (20 to 21 Oct 2026): up to 1.85% of workspaces had environment variables decrypted. If you use Railway, rotate secrets and report AI token charges that you did not make. Checked 18 Nov 2026.

## 💬 Essence

Amarnath posts a video, narrated with ElevenLabs and explained with Fable 5.2, of Railway's incident report. The report (10 Nov) says an attacker escaped build isolation on 20 Oct and stole a build credential. They then copied the codebase, used it to find a bad OIDC binding in a cloud environment, and reached a machine that could decrypt environment variables. At most 1.85% of workspaces, about 100,000, could have had variables decrypted. The attacker looked for AI provider keys and read 353 build histories. Railway rotated credentials, ended every session and token, and works with AI providers on refunds for unauthorised token spend. In replies the author says the report does not explain how the attacker signed up when dummy accounts were blocked, and readers stress defence in depth.

## 💡 Takeaway

If you use Railway, rotate your secrets and report any AI token charges that you did not make.

## 🔗 Try it

- [https://blog.railway.com/p/incident-report-october-security-incident](https://blog.railway.com/p/incident-report-october-security-incident)

**Filed in:** [[Tech Industry & News]] · [[Home]]

🏷 railway, security-incident, oidc, secrets, build-isolation, twitter, tech-industry-news
