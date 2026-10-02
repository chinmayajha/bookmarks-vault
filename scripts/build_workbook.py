#!/usr/bin/env python3
"""Assemble categorized bookmark rows into a multi-sheet Excel workbook."""
import json
import os
from collections import Counter, OrderedDict

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

BASE = "/Users/inno/bookmarks_extraction"
OUT = os.path.join(BASE, "Bookmarks_Categorized.xlsx")

# ---- load rows -------------------------------------------------------------
rows = []
for f in ("categorized_x_1.json", "categorized_x_2.json", "categorized_x_3.json", "categorized_rl.json"):
    p = os.path.join(BASE, f)
    if os.path.exists(p):
        with open(p) as fh:
            data = json.load(fh)
        rows.extend(data if isinstance(data, list) else data.get("rows", []))
    else:
        print(f"WARNING: missing {f}")

seen = set()
uniq = []
for r in rows:
    uid = r.get("uid")
    if uid and uid not in seen:
        seen.add(uid)
        uniq.append(r)
rows = uniq

# coverage check against the index
idx_path = os.path.join(BASE, "index_all.json")
if os.path.exists(idx_path):
    with open(idx_path) as fh:
        idx = json.load(fh)
    expected = [i["uid"] for i in idx]
    missing = [u for u in expected if u not in seen]
    extra = [u for u in seen if u not in expected]
    print(f"expected {len(expected)}, got {len(rows)}, missing {len(missing)}, extra {len(extra)}")
    if missing:
        print("missing uids:", missing[:40])
    by_uid = {i["uid"]: i for i in idx}
    # media flags: the extraction index is authoritative (categorizers were
    # working from digests that missed X's lazy-loaded video players)
    for r in rows:
        i = by_uid.get(r.get("uid"))
        if i:
            r["hasMedia"] = ("video" if i.get("hasVideo")
                             else ("image" if i.get("imageCount") else ""))
    # fill gaps from the index so the workbook is always complete
    for u in missing:
        i = by_uid[u]
        rows.append({
            "uid": u, "platform": i.get("platform", ""),
            "category": "Other", "subcategory": "uncategorized (index fallback)",
            "title": (i.get("title") or i.get("mainText") or "")[:100],
            "author": i.get("author", ""), "date": (i.get("date") or "")[:10],
            "url": i.get("url", ""), "engagement": i.get("stats", ""),
            "essence": (i.get("mainText") or "")[:600],
            "summary": "", "productLinks": i.get("links", [])[:6],
            "hasMedia": "video" if i.get("hasVideo") else ("image" if i.get("imageCount") else ""),
            "topicTags": [], "worthFollowUp": "medium", "_fallback": True,
        })

# ---- taxonomy order --------------------------------------------------------
with open(os.path.join(BASE, "category_taxonomy.json")) as fh:
    taxonomy = json.load(fh)
CAT_ORDER = [c["name"] for c in taxonomy["categories"]]

def cat_key(c):
    return (CAT_ORDER.index(c), ) if c in CAT_ORDER else (len(CAT_ORDER), )

rows.sort(key=lambda r: (cat_key(r.get("category", "Other")), r.get("platform", ""), r.get("uid", "")))
counts = Counter(r.get("category", "Other") for r in rows)
print("category distribution:", dict(counts))

# ---- styles ----------------------------------------------------------------
HEAD_FONT = Font(name="Arial", size=10, bold=True, color="FFFFFF")
HEAD_FILL = PatternFill("solid", fgColor="1F3864")
BODY_FONT = Font(name="Arial", size=10)
LINK_FONT = Font(name="Arial", size=10, color="0563C1", underline="single")
TITLE_FONT = Font(name="Arial", size=14, bold=True, color="1F3864")
NOTE_FONT = Font(name="Arial", size=10, italic=True, color="595959")
THIN = Side(style="thin", color="BFBFBF")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
WRAP_TOP = Alignment(wrap_text=True, vertical="top")
TOP = Alignment(vertical="top")

HEADERS = [
    ("#", 5), ("Platform", 9), ("Category", 24), ("Subcategory", 22),
    ("Title", 52), ("Author", 20), ("Date", 11), ("Link", 34),
    ("Engagement", 20), ("Discussion Essence", 70), ("Summary / Takeaway", 55),
    ("Product / Tryout Links", 40), ("Media", 7), ("Tags", 24), ("Follow-up", 10),
]

def write_table(ws, data_rows, start=1, show_index=True):
    for col, (name, width) in enumerate(HEADERS, start=1):
        c = ws.cell(row=start, column=col, value=name)
        c.font = HEAD_FONT
        c.fill = HEAD_FILL
        c.alignment = Alignment(wrap_text=True, vertical="center")
        c.border = BORDER
        ws.column_dimensions[get_column_letter(col)].width = width
    ws.row_dimensions[start].height = 26
    for n, r in enumerate(data_rows, start=1):
        row = start + n
        links = r.get("productLinks") or []
        if isinstance(links, str):
            links = [links]
        vals = [
            n,
            r.get("platform", ""),
            r.get("category", ""),
            r.get("subcategory", ""),
            r.get("title", ""),
            r.get("author", ""),
            str(r.get("date", ""))[:10],
            r.get("url", ""),
            r.get("engagement", ""),
            r.get("essence", ""),
            r.get("summary", ""),
            "\n".join(links),
            r.get("hasMedia", ""),
            ", ".join(r.get("topicTags") or []),
            r.get("worthFollowUp", ""),
        ]
        for col, v in enumerate(vals, start=1):
            c = ws.cell(row=row, column=col, value=v)
            c.font = BODY_FONT
            c.border = BORDER
            c.alignment = WRAP_TOP if col in (5, 10, 11, 12, 14) else TOP
            if col == 8 and v:
                c.hyperlink = v
                c.font = LINK_FONT
    last = start + len(data_rows)
    ws.auto_filter.ref = f"A{start}:{get_column_letter(len(HEADERS))}{last}"
    ws.freeze_panes = ws.cell(row=start + 1, column=1)
    return last

wb = Workbook()

# ---- README ----------------------------------------------------------------
ws = wb.active
ws.title = "README"
ws.column_dimensions["A"].width = 34
ws.column_dimensions["B"].width = 14
ws.column_dimensions["C"].width = 90
ws["A1"] = "Bookmarks & Saved Items — Categorized Master Workbook"
ws["A1"].font = TITLE_FONT
ws["A2"] = "Sources: X (Twitter) bookmarks · Reddit saved · LinkedIn saved posts — extracted via Ego browser"
ws["A2"].font = NOTE_FONT
ws["A3"] = "Each category has its own sheet; 'Master Index' holds every row. Counts below are formulas over Master Index."
ws["A3"].font = NOTE_FONT

ws["A5"] = "Category"
ws["B5"] = "Count"
ws["C5"] = "What's inside"
for col in ("A", "B", "C"):
    c = ws[f"{col}5"]
    c.font = HEAD_FONT
    c.fill = HEAD_FILL
    c.border = BORDER
desc_by_name = {c["name"]: c["desc"] for c in taxonomy["categories"]}
r = 6
for name in [c["name"] for c in taxonomy["categories"]] + ["(rows not yet categorized)"]:
    ws.cell(row=r, column=1, value=name).font = BODY_FONT
    if name == "(rows not yet categorized)":
        # rows whose category fell outside the taxonomy (fallback rows)
        ws.cell(row=r, column=2,
                value=f'=COUNTBLANK(\'Master Index\'!$C$2:$C${len(rows)+1})')
    else:
        ws.cell(row=r, column=2,
                value=f'=COUNTIF(\'Master Index\'!$C$2:$C${len(rows)+1},"{name}")')
    ws.cell(row=r, column=3, value=desc_by_name.get(name, "fallback rows")).font = BODY_FONT
    ws.cell(row=r, column=3).alignment = WRAP_TOP
    for col in (1, 2, 3):
        ws.cell(row=r, column=col).border = BORDER
    r += 1
ws.cell(row=r, column=1, value="TOTAL").font = Font(name="Arial", size=10, bold=True)
ws.cell(row=r, column=2, value=f"=SUM(B6:B{r-1})").font = Font(name="Arial", size=10, bold=True)
for col in (1, 2):
    ws.cell(row=r, column=col).border = BORDER

pr = r + 2
ws.cell(row=pr, column=1, value="Column guide").font = Font(name="Arial", size=11, bold=True, color="1F3864")
guide = [
    ("Link", "Opens the original post/thread."),
    ("Discussion Essence", "The whole thread distilled: main claim + what replies add (consensus, debates, numbers)."),
    ("Summary / Takeaway", "Why it's worth saving, in 1-2 sentences."),
    ("Product / Tryout Links", "Direct product, tool, repo or signup links found in the post or its discussion."),
    ("Follow-up", "high = act on it soon · medium = useful reference · low = nice to have."),
    ("Media", "video / image marker for content needing playback."),
]
for i, (k, v) in enumerate(guide):
    ws.cell(row=pr + 1 + i, column=1, value=k).font = Font(name="Arial", size=10, bold=True)
    ws.cell(row=pr + 1 + i, column=3, value=v).font = BODY_FONT

# ---- Master Index ----------------------------------------------------------
ms = wb.create_sheet("Master Index")
write_table(ms, rows)

# ---- category sheets -------------------------------------------------------
for name, n in sorted(counts.items(), key=lambda kv: cat_key(kv[0])):
    sub = [x for x in rows if x.get("category", "Other") == name]
    safe = name[:31]
    cs = wb.create_sheet(safe)
    write_table(cs, sub)

wb.save(OUT)
print("wrote", OUT, "| sheets:", wb.sheetnames)
