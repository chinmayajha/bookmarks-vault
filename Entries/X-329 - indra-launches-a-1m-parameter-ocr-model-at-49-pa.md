---
uid: "X-329"
title: "Indra launches a 1M-parameter OCR model at 49 pages/s on CPU"
platform: "Twitter"
category: "AI & LLM"
subcategory: "OCR models"
author: "Vik Paruchuri"
date: "2026-10-13"
url: "https://x.com/VikParuchuri/status/2110058905875460393"
engagement: "129 replies · 295 reposts · 2.9K likes · 2.8K bookmarks · 147.2K views"
followup: "high"
media: "video"
links: ["https://huggingface.co/datalab-to/indra-ocr", "https://github.com/datalab-to/indra", "https://www.datalab.to/blog/indra-ocr", "https://huggingface.co/datalab-to/chandra-ocr-2"]
tags: ["ocr", "indra", "datalab", "cpu-inference", "open-models", "twitter", "ai-llm"]
---

# Indra launches a 1M-parameter OCR model at 49 pages/s on CPU

**[Open original ↗](https://x.com/VikParuchuri/status/2110058905875460393)** · `Vik Paruchuri` · 2026-10-13 · 129 replies · 295 reposts · 2.9K likes · 2.8K bookmarks · 147.2K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Datalab's Indra is a 1M-parameter OCR model built for CPU latency: 49 pages/s, 11x faster than PaddleOCR and 17x faster than Tesseract, with an OmniParseBench text score of 41.3 versus 35.8 and 19.3. It returns full layout and line bounding boxes, covers 60 languages and six scripts (Latin, Cyrillic, Greek, Devanagari, Bengali, Chinese), handles any script present in a PDF text layer, and has a special math mode. The trade-off is explicit: at 1M parameters, handwriting, complex tables and large pages degrade, and Datalab points those cases to Chandra. A pip install plus indra-ocr-viewer gives a local speed/settings tester. Replies ask for Telugu, Arabic and Hebrew, report failures on slightly skewed pages, and one developer has already ported it to WASM and runs it in production.

## 💡 Takeaway

A purpose-built triage/ingestion OCR model: choose it for throughput on clean documents, and route hard pages to a larger model rather than expecting one tiny model to do everything.

## 🔗 Try it

- [https://huggingface.co/datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)
- [https://github.com/datalab-to/indra](https://github.com/datalab-to/indra)
- [https://www.datalab.to/blog/indra-ocr](https://www.datalab.to/blog/indra-ocr)
- [https://huggingface.co/datalab-to/chandra-ocr-2](https://huggingface.co/datalab-to/chandra-ocr-2)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 ocr, indra, datalab, cpu-inference, open-models, twitter, ai-llm
