---
uid: "X-359"
title: "Claude Code with Opus 5.5 edited a 10-minute vlog from 58 minutes of clips"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Claude Code workflows"
author: ""
date: "2026-11-01"
url: "https://x.com/levelsio/status/2116959423117857026"
engagement: "111 replies · 199 reposts · 2.1K likes · 3K bookmarks · 205.8K views"
followup: "high"
media: "none"
links: []
tags: ["claude-code", "video-editing", "whisper", "opencv", "opus-5-5", "twitter", "ai-llm"]
---

# Claude Code with Opus 5.5 edited a 10-minute vlog from 58 minutes of clips

**[Open original ↗](https://x.com/levelsio/status/2116959423117857026)** · 2026-11-01 · 111 replies · 199 reposts · 2.1K likes · 3K bookmarks · 205.8K views · ⭐ high follow-up

## 💬 Essence

levelsio copied DJI clips into a folder, opened Claude Code there and asked for a 10-minute vlog for X and YouTube. It cut 58 minutes across 14 clips down to 10, with a few manual fixes. He did not ask for the method and learned it only when Sam Parr asked how he edited. The agent transcribed speech with mlx-whisper (Whisper large-v3-turbo on the MacBook GPU through MLX), pulled video frames every few seconds into contact-sheet grids so it could see each clip, used a SpeechBrain ECAPA voice-matching model to tell his voice from others, and made thumbnails with OpenCV and the YuNet face detector. The edit is a JSON list of cuts (clip, start, end) picked from transcripts and frame grids. Captions for the first minute came from Pillow. He pays 100 dollars a month for Claude across all his sites, so a vlog costs about 10 cents. Replies suggest Remotion, and one person edits in CapCut with Codex computer use.

## 💡 Takeaway

A concrete recipe for agent video editing from local models and a JSON cut list. See the related ffmpeg-skill and Opus video entries.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 claude-code, video-editing, whisper, opencv, opus-5-5, twitter, ai-llm
