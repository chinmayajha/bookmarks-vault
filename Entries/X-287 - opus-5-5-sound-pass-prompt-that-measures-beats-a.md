---
uid: "X-287"
title: "Opus 5.5 sound pass: prompt that measures beats and mixes to -16 LUFS"
platform: "Twitter"
category: "AI & LLM"
subcategory: "AI video sound-design prompt"
author: "Vox"
date: "2026-10-11"
url: "https://x.com/Voxyz_ai/status/2109358372873183564"
engagement: "14 replies · 26 reposts · 579 likes · 973 bookmarks · 24K views"
followup: "high"
media: "image"
links: []
tags: ["opus", "ai-video", "sound-design", "prompt-engineering", "ffmpeg", "librosa", "twitter", "ai-llm"]
---

# Opus 5.5 sound pass: prompt that measures beats and mixes to -16 LUFS

**[Open original ↗](https://x.com/Voxyz_ai/status/2109358372873183564)** · `Vox` · 2026-10-11 · 14 replies · 26 reposts · 579 likes · 973 bookmarks · 24K views · ⭐ high follow-up

## 💬 Essence

Vox shares a copy-paste sound pass for Opus 5.5 motion videos so they stop sounding like cheap electronic beeps: tell the model it cannot hear so it must measure every step (install ffmpeg + librosa first); use licensed music only (a supplied track or Mixkit free license, with source noted, never synthesized); find beats with librosa but verify against a sub-120Hz waveform plot and shift the grid if kicks misalign (he caught a 0.22s off-beat this way); land cuts and title moves on beats (edit the animation or move the music start); attach one ready-made SFX per move (whoosh/pop/click/typing, prefer the project library like HyperFrames); keep voiceover loudest with music ducked, targeting -16 LUFS with peaks below -4 dBFS measured on the exported MP4 via ffmpeg ebur128 (not the WAV) so it survives AAC and phone-mono playback; then grab pre/post frames per cue, plot waveforms, and return 5 timestamps for headphone checks without claiming it sounds good. Replies praise the LUFS/phone detail, call the prompt a QA pipeline disguised as a brief, and plug @audioascode; 14 replies, 579 likes, 973 bookmarks.

## 💡 Takeaway

A reusable audio post-production prompt for AI motion video - the librosa off-beat check and MP4-only loudness measurement are the save-worthy bits.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 opus, ai-video, sound-design, prompt-engineering, ffmpeg, librosa, twitter, ai-llm
