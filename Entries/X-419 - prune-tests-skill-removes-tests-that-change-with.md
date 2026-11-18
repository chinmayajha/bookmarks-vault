---
uid: "X-419"
title: "/prune-tests skill removes tests that change with the code or can never fail"
platform: "Twitter"
category: "Dev Tools & Productivity"
subcategory: "Agent test hygiene"
author: "Maze"
date: "2026-11-10"
url: "https://x.com/mazeincoding/status/2122718134679298058"
engagement: "55 replies · 94 reposts · 2.9K likes · 4.3K bookmarks · 133.9K views"
followup: "high"
media: "video"
links: ["https://github.com/caldoai/skills/blob/main/skills/prune-tests/SKILL.md"]
tags: ["skills", "tests", "ai-slop", "claude-code", "mutation-testing", "twitter", "dev-tools-productivity"]
---

# /prune-tests skill removes tests that change with the code or can never fail

**[Open original ↗](https://x.com/mazeincoding/status/2122718134679298058)** · `Maze` · 2026-11-10 · 55 replies · 94 reposts · 2.9K likes · 4.3K bookmarks · 133.9K views · 🎬 · ⭐ high follow-up

## 💬 Essence

Maze releases /prune-tests, a skill that finds and removes tests that change whenever the code changes, check that deleted features are gone, or can never fail. The demo video was made with Opus 5.5. The quoted post, by Samuel Robertson, describes the problem: an agent removes a feature and adds 4,000 lines of tests that assert the feature is gone. Maze says the skill works well in agent reviews and can run on a whole codebase if you have tokens to spend. The skill is in caldoai/skills. One reply says the post text could replace the skill, and Maze says the skill covers more. One user found 19 useless tests on the first run. One reader warns that tests which change with the code often catch regressions. Another suggests mutation tests. See X-013 and X-257.

## 💡 Takeaway

Run it as a review pass and read every deletion. Mutation testing is the safer check for tests that look useless.

## 🔗 Try it

- [https://github.com/caldoai/skills/blob/main/skills/prune-tests/SKILL.md](https://github.com/caldoai/skills/blob/main/skills/prune-tests/SKILL.md)

**Filed in:** [[Dev Tools & Productivity]] · [[Home]]

🏷 skills, tests, ai-slop, claude-code, mutation-testing, twitter, dev-tools-productivity
