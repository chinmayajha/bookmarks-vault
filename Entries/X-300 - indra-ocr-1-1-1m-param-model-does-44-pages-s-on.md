---
uid: "X-300"
title: "Indra OCR 1.1: 1M-param model does 44 pages/s on CPU and adds 80+ languages"
platform: "Twitter"
category: "AI & LLM"
subcategory: "OCR models"
author: "Vik Paruchuri"
date: "2026-10-19"
url: "https://x.com/VikParuchuri/status/2112216762767085883"
engagement: "37 replies · 112 reposts · 1.1K likes · 987 bookmarks · 31.7K views"
followup: "high"
media: "video"
links: ["https://huggingface.co/datalab-to/indra-ocr", "https://github.com/datalab-to/indra", "https://www.datalab.to/blog/indra-ocr-1-1", "https://huggingface.co/datasets/datalab-to/omni_parse_bench"]
tags: ["ocr", "indra", "datalab", "cpu-inference", "open-models", "twitter", "ai-llm"]
---

# Indra OCR 1.1: 1M-param model does 44 pages/s on CPU and adds 80+ languages

**[Open original ↗](https://x.com/VikParuchuri/status/2112216762767085883)** · `Vik Paruchuri` · 2026-10-19 · 37 replies · 112 reposts · 1.1K likes · 987 bookmarks · 31.7K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Datalab's 1.1 update keeps the 1M-parameter main OCR model and claims 44 pages/s on CPU, within four points of the 3.4B-parameter DeepSeek OCR 2 on OmniParseBench, 15x faster than Tesseract, and support for 80+ languages plus limited handwriting. The --math flag swaps in a larger math model for 12M total parameters. Changes from 1.0 are better language coverage, mostly-English handwriting, and fixes for rotation and layout. Replies ask for Indic languages and Hebrew (Hebrew is not in this version), report skewed pages still failing, and one developer already ported it to WASM and runs it in production.

## 💡 Takeaway

A meaningful speed/coverage bump for CPU OCR - best for high-volume ingestion where a tiny model's accuracy ceiling is acceptable.

## 🔗 Try it

- [https://huggingface.co/datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)
- [https://github.com/datalab-to/indra](https://github.com/datalab-to/indra)
- [https://www.datalab.to/blog/indra-ocr-1-1](https://www.datalab.to/blog/indra-ocr-1-1)
- [https://huggingface.co/datasets/datalab-to/omni_parse_bench](https://huggingface.co/datasets/datalab-to/omni_parse_bench)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 ocr, indra, datalab, cpu-inference, open-models, twitter, ai-llm
