---
uid: "X-420"
title: "Editing weights instead of training: Deletion Tuning, a decision-model edit and autorsi"
platform: "Twitter"
category: "AI & LLM"
subcategory: "Weight editing"
author: "Jack Lu ✈️ NeurIPS 26"
date: "2026-11-10"
url: "https://x.com/Jacklu_me/status/2120217064073830401"
engagement: "81 replies · 341 reposts · 2.4K likes · 2.3K bookmarks · 165.6K views"
followup: "high"
media: "video"
links: ["https://arxiv.org/abs/2611.10866", "https://github.com/agentic-learning-ai-lab/deleting-weights", "https://huggingface.co/Jacklu0831/deletion-tuning-masks", "https://github.com/geniusgeek/autorsi", "https://www.embedding.in/blog/a-decision-skill-written-into-the-weights", "https://x.com/samuelekpe/status/2120286387081822265", "https://x.com/Nandakishorm1/status/2120053213793845282"]
tags: ["weight-editing", "deletion-tuning", "fine-tuning", "continual-learning", "masks", "twitter", "ai-llm"]
---

# Editing weights instead of training: Deletion Tuning, a decision-model edit and autorsi

**[Open original ↗](https://x.com/Jacklu_me/status/2120217064073830401)** · `Jack Lu ✈️ NeurIPS 26` · 2026-11-10 · 81 replies · 341 reposts · 2.4K likes · 2.3K bookmarks · 165.6K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Three posts on changing a model by editing its weights. Jack Lu's Deletion Tuning (NeurIPS 2026) zeroes under 0.1% of weights. A 30 MB binary mask matches full fine-tuning on a 30B mixture-of-experts model, forgets less than full fine-tuning and LoRA, and works with RL, SFT and self-distillation. Masks can be stored, swapped and possibly merged. Union of masks keeps accuracy in early runs. Paper arxiv 2611.10866, with code and masks on Hugging Face. Nandakishor edited Qwen3.5-0.8B weights directly from a decision model fitted on 300 examples. Tool-use decisions went from 18% to 98% in 3 ms with no training, and maths did not improve. Samuel Ekpe shares autorsi, a library for bounded weight editing with evaluation gates. Replies bet that people will edit weights and not post-train small models, and one points to deltaleague.ai, which hosts competitive edits.

## 💡 Takeaway

Fits the vault's model-internals reading. The deletion paper is the best sourced. Treat the other two claims as author claims.

## 🔗 Try it

- [https://arxiv.org/abs/2611.10866](https://arxiv.org/abs/2611.10866)
- [https://github.com/agentic-learning-ai-lab/deleting-weights](https://github.com/agentic-learning-ai-lab/deleting-weights)
- [https://huggingface.co/Jacklu0831/deletion-tuning-masks](https://huggingface.co/Jacklu0831/deletion-tuning-masks)
- [https://github.com/geniusgeek/autorsi](https://github.com/geniusgeek/autorsi)
- [https://www.embedding.in/blog/a-decision-skill-written-into-the-weights](https://www.embedding.in/blog/a-decision-skill-written-into-the-weights)
- [https://x.com/samuelekpe/status/2120286387081822265](https://x.com/samuelekpe/status/2120286387081822265)
- [https://x.com/Nandakishorm1/status/2120053213793845282](https://x.com/Nandakishorm1/status/2120053213793845282)

**Filed in:** [[AI & LLM]] · [[Home]]

🏷 weight-editing, deletion-tuning, fine-tuning, continual-learning, masks, twitter, ai-llm
