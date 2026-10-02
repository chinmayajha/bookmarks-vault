---
uid: "X-043"
title: "'Why your local LLM feels dumber': BF16, NVFP4 and the KV cache"
platform: "Twitter"
category: "AI & LLM"
subcategory: "local LLM quantization"
author: "Steeve Morin"
date: "2026-08-23"
url: "https://x.com/steeve/status/2091651649785749838"
engagement: "20 replies · 38 reposts · 529 likes · 39.7K views · 704 bookmarks"
followup: "medium"
media: "none"
links: []
tags: ["quantization", "local-llm", "kv-cache", "bf16", "inference", "twitter", "ai-llm"]
---

# 'Why your local LLM feels dumber': BF16, NVFP4 and the KV cache

**[Open original ↗](https://x.com/steeve/status/2091651649785749838)** · `Steeve Morin` · 2026-08-23 · 20 replies · 38 reposts · 529 likes · 39.7K views · 704 bookmarks

## 💬 Essence

Steeve recommends 'Why your local LLM feels dumber than it is' with the TL;DR: BF16 reigns, NVFP4 lobotomizes, keep the KV cache in BF16; his thread asks whether it's been trained in FP8. The replies turn into a methodology fight - Qwen3.8 is natively FP8 so running it in BF16 wastes electricity, an aggressive DeepSeek IQ2 quant beats BF16 Qwen on a 128GB machine, 8-bit weight plus KV quant is nearly lossless for half the RAM (~0.1% quality loss), others plug calibrated scales, fpX rope and Unsloth quants; 529 likes and 704 bookmarks.

## 💡 Takeaway

The quantization-quality debate in one thread - useful when trading local model precision against RAM.

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 quantization, local-llm, kv-cache, bf16, inference, twitter, ai-llm
