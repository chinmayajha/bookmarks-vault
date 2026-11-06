---
uid: "X-355"
title: "Weight-Space Programming: GPT-6 Astra edits 0.016% of Qwen3.5-0.8B weights to lift math"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Research"
author: "Rikiya Takehi"
date: "2026-11-02"
url: "https://x.com/rikiyatakehi/status/2117313742891327994"
engagement: "2.4K replies · 13K reposts · 55.9K likes · 36.3K bookmarks · 9.8M views"
followup: "high"
media: "image"
links: ["https://rikiyat.github.io/blog/weight-space-programming/", "https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming", "https://github.com/RikiyaT/lm_understand-logs"]
tags: ["research", "weights", "interpretability", "qwen", "model-editing", "twitter", "ai-llm"]
---

# Weight-Space Programming: GPT-6 Astra edits 0.016% of Qwen3.5-0.8B weights to lift math

**[Open original ↗](https://x.com/rikiyatakehi/status/2117313742891327994)** · `Rikiya Takehi` · 2026-11-02 · 2.4K replies · 13K reposts · 55.9K likes · 36.3K bookmarks · 9.8M … · ⭐ high follow-up

## 💬 Essence

An MIT CSAIL team (Rikiya Takehi, Jayden Teoh, Alex Zhang, Omar Khattab) reports that a frontier LLM can read and write neural network weights directly. From raw weights alone, GPT-6 Astra named four game policies (Breakout, Pong, Pac-Man, Freeway). Given one failed trace, it fixed a PPO car policy that was stuck on a ramp by editing 3.5% of the weights, reaching 100% success. It wrote a Breakout network from scratch that beat PPO baselines trained for hundreds of millions of steps. Asked to improve Qwen3.5-0.8B at math, it found the reasoning-loop problem that Qwen's own model card warns about and edited 0.016% of the weights, with no gradients and no training. MATH-500 went from 7.9% to 48.1%, and IFEval rose about 3x. The edited model is on the Hub, and a re-run by AK gave 51.0% on MATH-500, with a live demo. Replies include a caution from Sebastian Raschka that Qwen3 models are tricky and the result needs a check on other models and tasks. The team is now building a benchmark and a harness.

## 💡 Takeaway

An early but striking result for model editing without training. Read the blog and wait for the benchmark before you trust the claim on other models.

## 🔗 Try it

- [https://rikiyat.github.io/blog/weight-space-programming/](https://rikiyat.github.io/blog/weight-space-programming/)
- [https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming](https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming)
- [https://github.com/RikiyaT/lm_understand-logs](https://github.com/RikiyaT/lm_understand-logs)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 research, weights, interpretability, qwen, model-editing, twitter, ai-llm
