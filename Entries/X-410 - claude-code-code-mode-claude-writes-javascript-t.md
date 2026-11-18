---
uid: "X-410"
title: "Claude Code Code Mode: Claude writes JavaScript to run many tool calls in one step"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Claude Code workflows"
author: "Daniel San"
date: "2026-11-15"
url: "https://x.com/dani_avila7/status/2121789088499933223"
engagement: "167 replies · 102 reposts · 2K likes · 1.9K bookmarks · 270.6K views"
followup: "high"
media: "image"
links: ["https://code.claude.com/docs/en/code-mode"]
tags: ["claude-code", "code-mode", "tool-calls", "experimental", "javascript", "twitter", "dev-tools-productivity"]
---

# Claude Code Code Mode: Claude writes JavaScript to run many tool calls in one step

**[Open original ↗](https://x.com/dani_avila7/status/2121789088499933223)** · `Daniel San` · 2026-11-15 · 167 replies · 102 reposts · 2K likes · 1.9K bookmarks · 270.6K views · ⭐ high follow-up

## 💬 Essence

Daniel San reports that Code Mode is available as an experiment in Claude Code 2.1.325. Claude writes JavaScript that runs several tool calls in one step. It can run commands in parallel, chain steps and filter results before it returns them to the model. Enable it with CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 or with npx claude-code-templates@latest --setting environment/code-mode, then restart. In his demo with Fable 5.2, Claude ran 13 tool calls in 2 model turns and found all 3 broken Markdown links. Ctrl+O shows the generated code, and permissions and hooks still apply. A reply quotes the docs pitfalls: it works only in the interactive terminal, not with -p, the Agent SDK, the VS Code panel or Desktop, and you must keep it on when you resume a session. Skeptics ask why tools need scripts, and one says it copies Pi Codemode.

## 💡 Takeaway

Try it on multi-step tasks and press Ctrl+O to inspect the code. It is interactive-terminal only, so it does not fit scripted runs.

## 🔗 Try it

- [https://code.claude.com/docs/en/code-mode](https://code.claude.com/docs/en/code-mode)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 claude-code, code-mode, tool-calls, experimental, javascript, twitter, dev-tools-productivity
