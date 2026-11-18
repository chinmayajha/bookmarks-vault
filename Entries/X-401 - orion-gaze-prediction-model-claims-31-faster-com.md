---
uid: "X-401"
title: "Orion: gaze-prediction model claims 31% faster computer use and 2x more UX bugs found"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Computer-use efficiency"
author: "Ryan Lin"
date: "2026-11-16"
url: "https://x.com/_ryanlin10/status/2122374141131002087"
engagement: "61 replies · 123 reposts · 2.2K likes · 2.1K bookmarks · 75.5K views"
followup: "medium"
media: "video"
links: ["https://app.paradigmmachines.ai/", "https://app.paradigmmachines.ai/docs/api"]
tags: ["gaze", "computer-use", "vlm", "ux-bugs", "prompt-injection", "twitter", "ai-llm"]
---

# Orion: gaze-prediction model claims 31% faster computer use and 2x more UX bugs found

**[Open original ↗](https://x.com/_ryanlin10/status/2122374141131002087)** · `Ryan Lin` · 2026-11-16 · 61 replies · 123 reposts · 2.2K likes · 2.1K bookmarks · 75.5K views · 🎬

## 💬 Essence

Ryan Lin introduces Orion, a foundation model that predicts where a person looks. It trains on real eye-tracking data, 20x more than earlier saliency models. His thread gives these claims: it finds twice as many UX bugs as frontier models when you connect PostHog session replays at app.paradigmmachines.ai. It cuts computer-use model call time by 31% and image tokens by 66% by magnifying the predicted gaze area and shrinking the rest, with no measurable loss in task success. It triples decision rate in a VLM drone control task, which finished a drone race. It also helps auto-zoom in launch videos and flags dashcam hazards. It cuts computer-use prompt-injection attacks by 96% by flagging messages in areas with low predicted gaze. An API doc page exists. Replies ask whether the model can run without session-replay data.

## 💡 Takeaway

Interesting for cutting screenshot tokens in computer-use agents. All figures come from the authors, so test on your own tasks.

## 🔗 Try it

- [https://app.paradigmmachines.ai/](https://app.paradigmmachines.ai/)
- [https://app.paradigmmachines.ai/docs/api](https://app.paradigmmachines.ai/docs/api)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 gaze, computer-use, vlm, ux-bugs, prompt-injection, twitter, ai-llm
