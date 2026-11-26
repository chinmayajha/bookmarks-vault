---
uid: "X-443"
title: "emulate adds local OpenAI and Anthropic API mocks for deterministic agent tests"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Mock API services"
author: "Lahfir"
date: "2026-11-20"
url: "https://x.com/lahfir/status/2123598225756262681"
engagement: "20 replies · 36 reposts · 318 likes · 311 bookmarks · 58.4K views"
followup: "high"
media: "video"
links: ["https://github.com/vercel-labs/emulate", "https://emulate.dev/docs/ai"]
tags: ["testing", "mock-api", "openai", "anthropic", "ci", "twitter", "dev-tools-productivity"]
---

# emulate adds local OpenAI and Anthropic API mocks for deterministic agent tests

**[Open original ↗](https://x.com/lahfir/status/2123598225756262681)** · `Lahfir` · 2026-11-20 · 20 replies · 36 reposts · 318 likes · 311 bookmarks · 58.4K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Lahfir adds local OpenAI and Anthropic APIs to emulate. They give scripted, deterministic replies, so you can test AI apps with no API keys, no network and no token spend. Run npx emulate --service ai. It covers OpenAI Responses and Chat and Anthropic Messages, and you swap one baseURL while you keep the real SDK. It supports tool loops, structured output and reasoning. You can inject 429s with retry-after, set stream timing, and force stalls and cuts. Seeded variants repeat the same order every run. In tests use createEmulator(), assert on calls at /_ai/calls and change rules at /_ai/rules. It runs next to 14 other local services such as GitHub, Slack, Stripe and AWS. Multi-modality is next. For Codex or Claude, point the base URL in the config at the emulate server. One reader says 429s are easy to script, but the model's changing answers are not.

## 💡 Takeaway

A way to test retry, stream and tool-loop code without spending tokens. It does not fix non-deterministic real models.

## 🔗 Try it

- [https://github.com/vercel-labs/emulate](https://github.com/vercel-labs/emulate)
- [https://emulate.dev/docs/ai](https://emulate.dev/docs/ai)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 testing, mock-api, openai, anthropic, ci, twitter, dev-tools-productivity
