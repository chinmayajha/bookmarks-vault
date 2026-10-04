#!/usr/bin/env python3
"""Turn the bookmarks vault into an Obsidian vault.

Outputs (all inside the repo, so they live with the data):
  Home.md              — dashboard: stats, category links, highlights
  Categories/<cat>.md  — per-category index linking to entry notes
  Entries/<uid> - ….md — one note per bookmark, YAML frontmatter + tags
"""
import json
import os
import re
from collections import Counter, OrderedDict

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")
ENTRIES = os.path.join(BASE, "Entries")
CATS_DIR = os.path.join(BASE, "Categories")

ROW_FILES = ["categorized_x_1.json", "categorized_x_2.json",
             "categorized_x_3.json", "categorized_rl.json"]

def load_rows():
    rows, seen = [], set()
    for f in ROW_FILES:
        with open(os.path.join(DATA, "categorized", f)) as fh:
            for r in json.load(fh):
                uid = r.get("uid")
                if uid and uid not in seen:
                    seen.add(uid)
                    rows.append(r)
    # media flags: extraction index is authoritative
    with open(os.path.join(DATA, "index_all.json")) as fh:
        idx = {i["uid"]: i for i in json.load(fh)}
    for r in rows:
        i = idx.get(r.get("uid"))
        if i:
            r["hasMedia"] = ("video" if i.get("hasVideo")
                             else ("image" if i.get("imageCount") else ""))
    return rows

def one_line(s, cap=None):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    if cap and len(s) > cap:
        cut = s[:cap]
        if " " in cut[-40:]:
            cut = cut[:cut.rfind(" ")]
        s = cut.rstrip(",;:—-") + " …"
    return s

def slug(s, cap=60):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", (s or "")).strip("-").lower()
    return s[:cap].strip("-") or "entry"

def safe_name(s):
    # characters that break Obsidian filenames / wikilinks
    return re.sub(r'[\\/:*?"<>|#^\[\]]', "-", (s or "")).strip(" -") or "untitled"

def j(s):
    return json.dumps(one_line(s) if isinstance(s, str) else s, ensure_ascii=False)

rows = load_rows()
with open(os.path.join(BASE, "category_taxonomy.json")) as fh:
    tax = json.load(fh)["categories"]
CATS = [c["name"] for c in tax]
DESC = {c["name"]: c["desc"] for c in tax}

by_cat = OrderedDict()
for n in CATS:
    by_cat[n] = [r for r in rows if r.get("category") == n]
extras = [r for r in rows if r.get("category") not in CATS]
if extras:
    by_cat.setdefault("Other", []).extend(extras)

# ---------- entry notes ----------
os.makedirs(ENTRIES, exist_ok=True)
os.makedirs(CATS_DIR, exist_ok=True)

note_of = {}  # uid -> filename (without .md)
for r in rows:
    fname = f'{r["uid"]} - {safe_name(slug(r.get("title"), 48))}'
    note_of[r["uid"]] = fname

for r in rows:
    tags = [slug(t, 40) for t in (r.get("topicTags") or [])]
    tags += [slug(r.get("platform", ""), 20), slug(r.get("category", ""), 40)]
    tags = [t for t in dict.fromkeys(tags) if t]
    links = r.get("productLinks") or []
    date = one_line(r.get("date"))[:10]
    lines = [
        "---",
        f"uid: {j(r.get('uid'))}",
        f"title: {j(r.get('title'))}",
        f"platform: {j(r.get('platform'))}",
        f"category: {j(r.get('category'))}",
        f"subcategory: {j(r.get('subcategory'))}",
        f"author: {j(r.get('author'))}",
        f"date: {j(date)}",
        f"url: {j(r.get('url'))}",
        f"engagement: {j(r.get('engagement'))}",
        f"followup: {j(r.get('worthFollowUp'))}",
        f"media: {j(r.get('hasMedia') or 'none')}",
        f"links: {json.dumps(links, ensure_ascii=False)}",
        f"tags: {json.dumps(tags, ensure_ascii=False)}",
        "---",
        "",
        f"# {one_line(r.get('title'))}",
        "",
        f"**[Open original ↗]({r.get('url', "")})**"
        + (f" · `{one_line(r.get('author'), 40)}`" if r.get("author") else "")
        + (f" · {date}" if date else "")
        + (f" · {one_line(r.get('engagement'), 70)}" if r.get("engagement") else "")
        + (" · 🎬" if r.get("hasMedia") == "video" else "")
        + (" · ⭐ high follow-up" if r.get("worthFollowUp") == "high" else ""),
        "",
    ]
    ess = one_line(r.get("essence"))
    if ess:
        lines += ["## 💬 Essence", "", ess, ""]
    summ = one_line(r.get("summary"))
    if summ:
        lines += ["## 💡 Takeaway", "", summ, ""]
    if links:
        lines += ["## 🔗 Try it", ""]
        lines += [f"- [{l}]({l})" for l in links]
        lines += [""]
    lines += [
        f"**Filed in:** [[{safe_name(r.get('category'))}]] · [[Home]]",
        "",
        f"🏷 {', '.join(tags)}",
        "",
    ]
    with open(os.path.join(ENTRIES, note_of[r["uid"]] + ".md"), "w") as fh:
        fh.write("\n".join(lines))

# ---------- category notes ----------
for name, items in by_cat.items():
    if not items:
        continue
    fname = safe_name(name)
    lines = [
        "---",
        f"category: {j(name)}",
        f"count: {len(items)}",
        "tags: [category-index]",
        "---",
        "",
        f"# 🗂 {name}",
        "",
        one_line(DESC.get(name, "")),
        "",
        f"[[Home|← back to dashboard]] · [[README|full archive]]",
        "",
        f"**{len(items)} entries** — click a note for the full essence:",
        "",
    ]
    for r in items:
        badge = " ⭐" if r.get("worthFollowUp") == "high" else ""
        badge += " 🎬" if r.get("hasMedia") == "video" else ""
        lines.append(
            f'- **[[{note_of[r["uid"]]}|{one_line(r.get("title"), 80)}]]**'
            f'{badge} — {one_line(r.get("essence"), 160)}'
        )
    lines.append("")
    with open(os.path.join(CATS_DIR, fname + ".md"), "w") as fh:
        fh.write("\n".join(lines))

# ---------- Home dashboard ----------
platforms = Counter(r.get("platform") for r in rows)
media = Counter(r.get("hasMedia") or "none" for r in rows)
follow = Counter(r.get("worthFollowUp") for r in rows)
with_links = sum(1 for r in rows if r.get("productLinks"))

highlights = []
for name, items in by_cat.items():
    for r in items:
        if r.get("worthFollowUp") == "high" and r.get("productLinks"):
            highlights.append(r)
            break
    if len(highlights) >= 10:
        break

home = [
    "---",
    "tags: [dashboard]",
    "---",
    "",
    "# 📚 Bookmarks Vault",
    "",
    "Your X / Reddit / LinkedIn bookmarks — extracted in full, categorized, summarized.",
    "",
    "## 📊 At a glance",
    "",
    f"**{len(rows)} entries** · 🐦 X {platforms.get('Twitter', 0)}"
    f" · 💬 Reddit {platforms.get('Reddit', 0)}"
    f" · 💼 LinkedIn {platforms.get('LinkedIn', 0)}",
    "",
    f"🏷 {sum(1 for v in by_cat.values() if v)} categories"
    f" · 🔗 {with_links} with product links"
    f" · 🎬 {media.get('video', 0)} videos"
    f" · ⭐ {follow.get('high', 0)} high follow-up",
    "",
    "## 🗓 My plan for the coming months",
    "",
    "**[Inference Engineering Roadmap](https://chinmayajha.github.io/bookmarks-vault/Roadmap.html)**"
    " — six dated phases: PyTorch & transformer foundations → Stanford CS336 → GPUs/CUDA →"
    " inference systems (CS229S, GPU MODE) → vLLM, scheduling & quantization → benchmarking & capstone.",
    "",
    "## 🗂 Categories",
    "",
]
for name, items in by_cat.items():
    if not items:
        continue
    home.append(f"- **[[{safe_name(name)}]]** — {len(items)} items")
home += ["", "## 🌟 Start here — high-signal picks", ""]
for r in highlights:
    home.append(
        f'- **[[{note_of[r["uid"]]}|{one_line(r.get("title"), 80)}]]**'
        f' — {one_line(r.get("essence"), 200)}'
    )
home += [
    "",
    "## 📦 Source files",
    "",
    "- [[README]] — the full browsable archive (314 entries, all details)",
    "- `Bookmarks_Categorized.xlsx` — Excel workbook (Master Index + a sheet per category)",
    "- `data/` — raw + normalized extraction JSON",
    "- `scripts/` — rebuild scripts (`build_index.js`, `build_workbook.py`, `generate_readme.py`, `generate_obsidian.py`)",
    "",
    "> Regenerate with: `python3 scripts/generate_obsidian.py`",
    "",
]
with open(os.path.join(BASE, "Home.md"), "w") as fh:
    fh.write("\n".join(home))

n_cat = sum(1 for v in by_cat.values() if v)
print(f"Obsidian vault: Home.md + {n_cat} category notes + {len(rows)} entry notes")
