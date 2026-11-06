---
uid: "X-346"
title: "Copy-paste prompt makes a Hermes Agent build a four-profile HackerOne bounty pipeline"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Agent automation"
author: "vulnix"
date: "2026-11-06"
url: "https://x.com/vulnix0x4/status/2118502357332054281"
engagement: "0 replies · 0 reposts · 46 likes · 112 bookmarks · 1.4K views"
followup: "low"
media: "none"
links: []
tags: ["hermes-agent", "bug-bounty", "hackerone", "kanban", "agent-automation", "twitter", "ai-llm"]
---

# Copy-paste prompt makes a Hermes Agent build a four-profile HackerOne bounty pipeline

**[Open original ↗](https://x.com/vulnix0x4/status/2118502357332054281)** · `vulnix` · 2026-11-06 · 0 replies · 0 reposts · 46 likes · 112 bookmarks · 1.4K views

## 💬 Essence

vulnix posts a very long prompt for a fresh Hermes Agent session. It asks the agent to really build an authorized bug-bounty system for HackerOne programs: profiles, a workspace, validators, a Kanban board named bug-bounty, scheduler scripts, cron jobs and tests, then run an offline smoke test. Four isolated profiles do the work: bounty-scout (public directory and policy research only), bounty (researcher), bounty-reviewer (tries to reject each finding and reruns the proof) and bounty-submitter (revalidates and submits through the official form only after every gate passes). All four use deepseek-v4.1-flash through the opencode-go provider, and risky commands run inside Bubblewrap. Hard rules: only policy-authorized scope, paid programs only, no CAPTCHA or authentication bypass, no DoS, no fabricated evidence, a harmless local PoC for every finding, duplicate searches before handoff, and submit exactly once. A human is needed only for login or CAPTCHA at the submission step. An hourly scout script and a five-minute progress watcher send short alerts. No replies were captured.

## 💡 Takeaway

A full reference prompt for an unattended bounty pipeline with strict scope and human-only submission gates. Read the safety rules before you reuse any part.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 hermes-agent, bug-bounty, hackerone, kanban, agent-automation, twitter, ai-llm
