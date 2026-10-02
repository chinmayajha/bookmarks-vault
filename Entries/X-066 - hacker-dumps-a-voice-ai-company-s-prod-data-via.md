---
uid: "X-066"
title: "Hacker dumps a Voice AI company's prod data via IDOR and BAC"
platform: "Twitter"
category: "Other"
subcategory: "security disclosure IDOR BAC"
author: "Archie Sengupta"
date: "2026-03-07"
url: "https://x.com/archiexzzz/status/2030144621003878586"
engagement: "131 replies · 96 reposts · 2.2K likes · 348.6K views · 1.7K bookmarks"
followup: "medium"
media: "image"
links: []
tags: ["security", "idor", "supabase", "rls", "vulnerability", "twitter", "other"]
---

# Hacker dumps a Voice AI company's prod data via IDOR and BAC

**[Open original ↗](https://x.com/archiexzzz/status/2030144621003878586)** · `Archie Sengupta` · 2026-03-07 · 131 replies · 96 reposts · 2.2K likes · 348.6K views · 1.7K bookmarks

## 💬 Essence

Archie Sengupta claims he hacked a VC-funded Voice AI company and now has its prod data: medical information of customers, call recordings, phone numbers and contact names, emails, all system prompts for their agents, API keys and secrets, org data, OAuth provider IDs and webhook events - mostly via IDOR and BAC attacks, retrieving table columns first and bypassing from there. His thread says he's sending a detailed Sev0 report to their engineering team, thanks Supabase for 'another bounty', and challenges doubters while advising founders and devs to take anon keys seriously and just enable RLS. Replies warn that blurred screenshots are still extractable, ask for a how-to-avoid blog, and note IDOR keeps getting easy to find in misconfigured, vibe-coded products; 2,232 likes and 1,742 bookmarks.

## 💡 Takeaway

A vivid case study in Supabase anon-key and RLS misconfiguration risk for AI-startup backends.

**Filed in:** [[Other]] · [[Home]]

🏷 security, idor, supabase, rls, vulnerability, twitter, other
