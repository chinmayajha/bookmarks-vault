---
uid: "R-009"
title: "My dad's full phone storage issue became my first open-source project"
platform: "Reddit"
category: "Dev Tools & Productivity"
subcategory: "Android storage analyzer tool"
author: "u/Cuber2113"
date: "2026-06-16"
url: "https://www.reddit.com/r/Btechtards/comments/1u76u1t/my_dads_phone_storage_issue_accidentally_turned/"
engagement: "↑66 · 14 comments"
followup: "medium"
media: "none"
links: ["https://github.com/VishnuSrivatsava/SocketSweep"]
tags: ["android", "open-source", "mtp", "rust-tauri", "dev-tool", "reddit", "dev-tools-productivity"]
---

# My dad's full phone storage issue became my first open-source project

**[Open original ↗](https://www.reddit.com/r/Btechtards/comments/1u76u1t/my_dads_phone_storage_issue_accidentally_turned/)** · `u/Cuber2113` · 2026-06-16 · ↑66 · 14 comments

## 💬 Essence

OP's dad asked him to free up Android storage; watching OpenMTP take four minutes just to show folder sizes annoyed him enough to investigate, and SocketSweep was born — a tool that skips MTP entirely by pushing a native C++ daemon over ADB, scanning the filesystem directly and visualizing results in a Rust/Tauri desktop app, architecture inspired by scrcpy; it's around 50 GitHub stars. Replies validate the pain ('MTP is such a pain'), ask if it runs without Developer Mode (no — ADB/USB debugging required), and discuss how he got stars (shared in communities plus organic finds from equally frustrated MTP users) and overlap with SD Maid (on-device vs his desktop-first approach). Commenters praise it as the mark of a real engineer solving a real problem.

## 💡 Takeaway

A concrete pattern for finding open-source ideas: take a daily annoyance, delete the legacy protocol (MTP), and ship a cross-language tool people already search for.

## 🔗 Try it

- [https://github.com/VishnuSrivatsava/SocketSweep](https://github.com/VishnuSrivatsava/SocketSweep)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 android, open-source, mtp, rust-tauri, dev-tool, reddit, dev-tools-productivity
