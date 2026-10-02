---
uid: "L-003"
title: "Build a compiler to solve Anthropic's interview challenge — 129.9x speedup"
platform: "LinkedIn"
category: "Dev Tools & Productivity"
subcategory: "Anthropic challenge compiler"
author: "Fei Peng"
date: "2026-07-13"
url: "https://www.linkedin.com/feed/update/urn:li:activity:7482483380354207744"
engagement: "♥927 · 10 comments · 21 reposts"
followup: "medium"
media: "none"
links: ["https://github.com/fiigii/ai-comp"]
tags: ["compiler-optimization", "vliw", "anthropic", "interview-challenge", "code-generation", "linkedin", "dev-tools-productivity"]
---

# Build a compiler to solve Anthropic's interview challenge — 129.9x speedup

**[Open original ↗](https://www.linkedin.com/feed/update/urn:li:activity:7482483380354207744)** · `Fei Peng` · 2026-07-13 · ♥927 · 10 comments · 21 reposts

## 💬 Essence

Anthropic published a take-home in Feb 2026 — minimize cycle count for a tree-traversal plus hash workload on a simulated VLIW SIMD machine, intended to be optimized by candidates collaborating with an LLM — and Fei Peng went a different route: he built a general optimizing compiler for that VLIW target, using no benchmark-specific or algorithm-level tricks, just classic loop unrolling, common-subexpression elimination and dead-code elimination. Result: 1137 cycles, a 129.9x speedup over baseline. Replies geek out — one calls it a faithful Larsen-Amarasinghe (superword-level parallelism) implementation, another says they'd have built an LLVM backend for the Python VM — and the post drew 927 reactions and 21 reposts.

## 💡 Takeaway

An elegant 'beat the take-home by generalizing' move: instead of hand-tuning one program, compile the whole machine class — with the full technique write-up on GitHub.

## 🔗 Try it

- [https://github.com/fiigii/ai-comp](https://github.com/fiigii/ai-comp)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 compiler-optimization, vliw, anthropic, interview-challenge, code-generation, linkedin, dev-tools-productivity
