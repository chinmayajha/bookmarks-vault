---
uid: "X-383"
title: "Cloudflare security-audit skill finds bugs even with cheap models"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Security audit skill"
author: "Juraj Bednar🏴💛🌘"
date: "2026-10-21"
url: "https://x.com/jurbed/status/2112973191157252103"
engagement: "133 replies · 802 reposts · 8.7K likes · 16.2K bookmarks · 608.7K views"
followup: "high"
media: "none"
links: ["https://github.com/cloudflare/security-audit-skill"]
tags: ["security", "audit", "claude-skills", "cloudflare", "vercel", "twitter", "dev-tools-productivity"]
---

# Cloudflare security-audit skill finds bugs even with cheap models

**[Open original ↗](https://x.com/jurbed/status/2112973191157252103)** · `Juraj Bednar🏴💛🌘` · 2026-10-21 · 133 replies · 802 reposts · 8.7K likes · 16.2K bookmarks · 608.7K … · ⭐ high follow-up

## 💬 Essence

Juraj recommends Cloudflare's security-audit skill (cloudflare/security-audit-skill): run it on all your software, even after a model has audited it, and it works in any agent harness. He says it works with Opus 5.5, then corrects himself that it does not work with GPT models. With free Minimax M3.1 it found critical bugs that Opus, Fable and Astra missed. He ends a run by writing 'fix all, commit, push, deploy', and tells you to have the agent reproduce each finding to verify it. Replies warn about the cost and limits: it eats a lot of tokens, frontier models can stop halfway when they find a real vulnerability, and one user asks how false positives are handled across repos. A related reply, on bookmark X-384, from Guillermo Rauch says Vercel Security Reviews found 6,817 vulnerabilities in 24 hours (580 critical or high, 1,411 patched by an agent) and were 100% free until 10 Nov. That free offer ended on 10 Nov 2026, so check Vercel's current price. See the earlier security-audit-skill entry.

## 💡 Takeaway

Run it on your own repos with a cheap model, and verify each finding. The Vercel free window ended on 10 Nov 2026.

## 🔗 Try it

- [https://github.com/cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 security, audit, claude-skills, cloudflare, vercel, twitter, dev-tools-productivity
