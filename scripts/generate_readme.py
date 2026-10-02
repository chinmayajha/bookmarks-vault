#!/usr/bin/env python3
"""Generate README.md — a browsable, categorized view of the bookmarks vault.

Reads the categorized row JSONs + taxonomy and emits a README with:
stats, a category index, highlights, and one collapsed section per category
containing every entry (title/link, essence, takeaway, product links, tags).
"""
import json
import os
import re
from collections import Counter, OrderedDict

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")

ROW_FILES = [
    "categorized_x_1.json", "categorized_x_2.json",
    "categorized_x_3.json", "categorized_rl.json",
]

def load_rows():
    rows, seen = [], set()
    for f in ROW_FILES:
        p = os.path.join(DATA, "categorized", f)
        with open(p) as fh:
            for r in json.load(fh):
                uid = r.get("uid")
                if uid and uid not in seen:
                    seen.add(uid)
                    rows.append(r)
    return rows

def one_line(s, cap=None):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    if cap and len(s) > cap:
        cut = s[:cap]
        # word boundary
        if " " in cut[-40:]:
            cut = cut[:cut.rfind(" ")]
        s = cut.rstrip(",;:—-") + " …"
    return s

def esc(s):
    return (s or "").replace("[", "\\[").replace("]", "\\]")

def slug_anchor(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")

def fmt_date(d):
    d = (d or "")[:10]
    return d if re.match(r"^\d{4}-\d{2}-\d{2}$", d) else ""

rows = load_rows()
# media flags: extraction index is authoritative (same rule as build_workbook.py)
try:
    with open(os.path.join(DATA, "index_all.json")) as fh:
        _idx = {i["uid"]: i for i in json.load(fh)}
    for r in rows:
        i = _idx.get(r.get("uid"))
        if i:
            r["hasMedia"] = ("video" if i.get("hasVideo")
                             else ("image" if i.get("imageCount") else ""))
except FileNotFoundError:
    pass
with open(os.path.join(BASE, "category_taxonomy.json")) as fh:
    taxonomy = json.load(fh)["categories"]
CATS = [c["name"] for c in taxonomy]
DESC = {c["name"]: c["desc"] for c in taxonomy}

by_cat = OrderedDict()
for name in CATS:
    by_cat[name] = [r for r in rows if r.get("category") == name]
other = [r for r in rows if r.get("category", "Other") not in CATS]
if other:
    by_cat.setdefault("Other", []).extend(other)

platforms = Counter(r.get("platform") for r in rows)
media = Counter(r.get("hasMedia") or "none" for r in rows)
follow = Counter(r.get("worthFollowUp") for r in rows)
with_links = sum(1 for r in rows if r.get("productLinks"))
with_video = media.get("video", 0)

# ---- highlight picks: high follow-up + product link, max 1 per category ----
highlights = []
for name, items in by_cat.items():
    for r in items:
        if r.get("worthFollowUp") == "high" and r.get("productLinks"):
            highlights.append(r)
            break
    if len(highlights) >= 10:
        break

# ---- entry renderer ---------------------------------------------------------
def render_entry(r, essence_cap=700, compact=False):
    url = r.get("url", "")
    title = esc(one_line(r.get("title"), 100)) or "(untitled)"
    author = one_line(r.get("author"), 40)
    date = fmt_date(r.get("date"))
    eng = one_line(r.get("engagement"), 60)
    badge = ""
    if r.get("hasMedia") == "video":
        badge += " 🎬"
    if r.get("worthFollowUp") == "high":
        badge += " ⭐"

    head = f"- **[{title}]({url})**"
    meta = " · ".join(x for x in [f"`{author}`" if author else "",
                                   f"`{date}`" if date else "",
                                   f"`{eng}`" if eng else ""] if x)
    lines = [f"{head}{badge}" + (f"  \n  {meta}" if meta else "")]
    ess = one_line(r.get("essence"), essence_cap)
    if ess:
        lines.append(f"  - **Essence:** {ess}")
    if not compact:
        summ = one_line(r.get("summary"), 220)
        if summ:
            lines.append(f"  - **Takeaway:** {summ}")
    links = r.get("productLinks") or []
    if links:
        nice = " · ".join(f"[{one_line(l, 60).replace('https://', '').rstrip('/')}]({l})"
                          for l in links[:4])
        lines.append(f"  - **Try it:** {nice}")
    tags = r.get("topicTags") or []
    if tags:
        lines.append(f"  - 🏷 {', '.join(tags[:6])}")
    return "\n".join(lines)

# ---- README -----------------------------------------------------------------
L = []
A = L.append
A("# 📚 Bookmarks Vault")
A("")
A("> Years of saved posts from **X/Twitter, Reddit and LinkedIn** — extracted in full")
A("> (posts *and* their thread discussions), categorized, and summarized into one")
A("> browsable archive. Everything below is the contents of the companion workbook")
A("> [`Bookmarks_Categorized.xlsx`](Bookmarks_Categorized.xlsx).")
A("")
A("## 📊 At a glance")
A("")
A("| | |")
A("|---|---|")
A(f"| **Total entries** | **{len(rows)}** |")
A(f"| **By source** | 🐦 X/Twitter **{platforms.get('Twitter', 0)}** · 💬 Reddit **{platforms.get('Reddit', 0)}** · 💼 LinkedIn **{platforms.get('LinkedIn', 0)}** |")
A(f"| **Categories** | {sum(1 for v in by_cat.values() if v)} |")
A(f"| **With product/tryout links** | {with_links} |")
A(f"| **Video entries** | {with_video} |")
A(f"| **⭐ High follow-up** | {follow.get('high', 0)} (medium {follow.get('medium', 0)} · low {follow.get('low', 0)}) |")
A("")
A("Each entry below shows the **essence of the whole discussion** (main post + thread + top replies)")
A("and a one-line **takeaway** — you shouldn't need to click through to get the point.")
A("")

# category index
A("## 🗂 Category index")
A("")
A("| Category | Items | What's inside |")
A("|---|---:|---|")
for name, items in by_cat.items():
    if not items:
        continue
    a = slug_anchor(name)
    A(f"| [{name}](#{a}) | {len(items)} | {one_line(DESC.get(name, ''), 90)} |")
A("")

# highlights
if highlights:
    A("## 🌟 Start here — high-signal picks")
    A("")
    for r in highlights:
        A(render_entry(r, essence_cap=320, compact=True))
    A("")

# one section per category
for name, items in by_cat.items():
    if not items:
        continue
    A(f'<a id="{slug_anchor(name)}"></a>')
    A("")
    A(f"## {name} ({len(items)})")
    A("")
    A(f"<details><summary><b>Show {len(items)} entries</b> — {one_line(DESC.get(name, ''), 120)}</summary>")
    A("")
    for r in items:
        A(render_entry(r))
    A("")
    A("</details>")
    A("")

# ---- repo guide -------------------------------------------------------------
A("## 📦 What's in this repo")
A("")
A("```")
A("bookmarks-vault/")
A("├── README.md                     ← you are here (generated)")
A("├── Bookmarks_Categorized.xlsx    ← the full workbook: README + Master Index + a sheet per category")
A("├── category_taxonomy.json        ← the fixed category list used for sorting")
A("├── data/")
A("│   ├── index_*.json              ← normalized records (post + discussion digest per item)")
A("│   ├── categorized/*.json        ← final rows behind this README (category, essence, links…)")
A("│   └── raw/                      ← untouched extraction output (X/Reddit/LinkedIn list + thread JSONs)")
A("└── scripts/")
A("    ├── build_index.js            ← raw JSON → normalized index")
A("    ├── build_workbook.py         ← rows → Excel workbook")
A("    ├── generate_readme.py        ← rows → this README")
A("    └── harvest/                  ← original browser-harvest scripts (provenance)")
A("```")
A("")
A("### Column meanings")
A("")
A("| Field | Meaning |")
A("|---|---|")
A("| **Essence** | The whole thread distilled: main claim → author's thread continuation → what replies debate/add, with key numbers & sentiment |")
A("| **Takeaway** | Why it's worth saving, in one or two sentences |")
A("| **Try it** | Direct product / repo / signup links found in the post or its discussion |")
A("| ⭐ / 🎬 | High follow-up · video entry |")
A("")
A("## 🔧 Rebuilding")
A("")
A("```bash")
A("node scripts/build_index.js            # data/raw → data/index_*.json")
A("python scripts/build_workbook.py       # rows → Bookmarks_Categorized.xlsx (needs openpyxl)")
A("python scripts/generate_readme.py      # rows → README.md")
A("```")
A("")
A("_Extraction: Ego browser automation over X Bookmarks, Reddit Saved and LinkedIn Saved Posts._")
A("_Coverage: 272 X bookmarks (5 original tweets now deleted — flagged in their entries), all Reddit")
A("saved items, and all LinkedIn saved posts. Replies captured are the top ~15 per thread._")
A("")

readme = "\n".join(L)
with open(os.path.join(BASE, "README.md"), "w") as fh:
    fh.write(readme)
print(f"README.md written: {len(readme)} chars, {sum(1 for v in by_cat.values() if v)} category sections, {len(rows)} entries")
