---
uid: "X-404"
title: "twig: native copy-on-write git worktrees that save disk space for agents"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Git worktrees for agents"
author: "Leo 🏴‍☠️"
date: "2026-11-16"
url: "https://x.com/leostera/status/2122320765530124479"
engagement: "50 replies · 28 reposts · 655 likes · 832 bookmarks · 55.4K views"
followup: "high"
media: "none"
links: ["https://twig.leostera.dev/", "https://github.com/leostera/git-twig"]
tags: ["git", "worktrees", "copy-on-write", "agents", "disk-space", "twitter", "dev-tools-productivity"]
---

# twig: native copy-on-write git worktrees that save disk space for agents

**[Open original ↗](https://x.com/leostera/status/2122320765530124479)** · `Leo 🏴‍☠️` · 2026-11-16 · 50 replies · 28 reposts · 655 likes · 832 bookmarks · 55.4K views · ⭐ high follow-up

## 💬 Essence

Leo Stera releases twig (git-twig), which makes git worktrees for agents with native copy-on-write and verified materialization. His 512 GB disk can finally breathe. He says large repos use about 80% less space on Ubuntu 26, with bigger gains on macOS, and some builds reach 40 GB a day from a clean target folder. Replies raise limits. Worktrees still share Docker containers and databases, Rust builds still take 6 to 12 GB, and one user worries about pnpm junctions on Windows. A detailed reply says the tool falls back to a slow copy when a repo has a text attribute such as * text=auto. Adding * -text to .git/info/attributes fixes it. Leo asks users to have their agent open a GitHub issue.

## 💡 Takeaway

Try it if you run many agent worktrees on a small disk. Check the text attribute issue first.

## 🔗 Try it

- [https://twig.leostera.dev/](https://twig.leostera.dev/)
- [https://github.com/leostera/git-twig](https://github.com/leostera/git-twig)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 git, worktrees, copy-on-write, agents, disk-space, twitter, dev-tools-productivity
