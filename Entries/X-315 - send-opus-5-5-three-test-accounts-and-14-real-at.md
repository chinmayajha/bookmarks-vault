---
uid: "X-315"
title: "Send Opus 5.5 three test accounts and 14 real attacks before shipping"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent security testing"
author: "Vox"
date: "2026-10-16"
url: "https://x.com/Voxyz_ai/status/2111079716832886886"
engagement: "99 replies · 224 reposts · 3.4K likes · 7.8K bookmarks · 229.3K views"
followup: "high"
media: "none"
links: []
tags: ["security", "red-teaming", "claude-code", "subagents", "vibe-coding", "twitter", "ai-llm"]
---

# Send Opus 5.5 three test accounts and 14 real attacks before shipping

**[Open original ↗](https://x.com/Voxyz_ai/status/2111079716832886886)** · `Vox` · 2026-10-16 · 99 replies · 224 reposts · 3.4K likes · 7.8K bookmarks · 229.3K views · ⭐ high follow-up

## 💬 Essence

Vox turns a vibe-coded app's pre-launch security review into a concrete red-team script: three subagents with three accounts (A, B, admin) run 14 attacks across impersonation, limit bypass and outside access, collect proof, then fix everything in one pass. The attacks are specific - query every table with the public key, swap A's id for B's, inject role: admin into a profile update, reuse a password-reset link, call APIs past the UI and credit limits, test open redirects with // and @, XSS in usernames and Markdown, SSRF against localhost and 169.254.169.254, cache leakage between accounts, unauthenticated preview links, and prompt injection through uploaded documents. Every item must actually run, and a fix only counts if the attack succeeds with protection off and fails with it on. The replies are a warning label: several users say this pattern gets Claude accounts flagged or downgraded, and recommend local models instead.

## 💡 Takeaway

A reusable, unusually concrete security checklist for agent-built apps - but run it against your own test environment, not a production account you care about.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 security, red-teaming, claude-code, subagents, vibe-coding, twitter, ai-llm
