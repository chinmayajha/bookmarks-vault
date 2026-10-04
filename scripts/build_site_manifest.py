#!/usr/bin/env python3
"""Generate site-manifest.json — the navigation index for the Pages viewer (index.html).

Walks Home.md, README.md, Categories/*.md and Entries/*.md, pulls the YAML
frontmatter (uid, title, category, followup, tags, count) and emits a compact
manifest the viewer uses for its sidebar, search and wiki-link resolution.

Run from anywhere:  python3 scripts/build_site_manifest.py
"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FRONTMATTER_RE = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n", re.S)
HEADING_RE = re.compile(r"^#\s+(.+)$", re.M)


def parse_frontmatter(text):
    m = FRONTMATTER_RE.match(text)
    if not m:
        return {}
    fm = {}
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        key, _, val = line.partition(":")
        key = key.strip()
        val = val.strip()
        if val.startswith("[") and val.endswith("]"):
            val = [v.strip().strip('"\'') for v in val[1:-1].split(",") if v.strip()]
        else:
            val = val.strip('"\'')
        fm[key] = val
    return fm


def doc_title(text, fallback):
    m = HEADING_RE.search(text)
    return m.group(1).strip() if m else fallback


def read_doc(rel_path, fallback_title):
    with open(os.path.join(BASE, rel_path), encoding="utf-8") as fh:
        text = fh.read()
    return text, parse_frontmatter(text), doc_title(text, fallback_title)


def main():
    docs = []

    text, fm, title = read_doc("Home.md", "Home")
    docs.append({"path": "Home.md", "wiki": "Home", "title": title, "group": "home"})

    text, fm, title = read_doc("README.md", "Archive")
    docs.append({"path": "README.md", "wiki": "README", "title": title, "group": "readme"})

    with open(os.path.join(BASE, "category_taxonomy.json"), encoding="utf-8") as fh:
        taxonomy = json.load(fh)["categories"]

    categories = []
    for cat in taxonomy:
        name = cat["name"]
        rel = f"Categories/{name}.md"
        if not os.path.exists(os.path.join(BASE, rel)):
            continue
        text, fm, title = read_doc(rel, name)
        categories.append({
            "name": name,
            "desc": cat.get("desc", ""),
            "path": rel,
            "wiki": name,
            "title": title,
            "group": "category",
            "count": int(fm.get("count", 0) or 0),
        })
    docs.extend(categories)

    entries = []
    entries_dir = os.path.join(BASE, "Entries")
    for fname in sorted(os.listdir(entries_dir)):
        if not fname.endswith(".md"):
            continue
        rel = f"Entries/{fname}"
        text, fm, title = read_doc(rel, fname[:-3])
        entries.append({
            "path": rel,
            "wiki": fname[:-3],
            "title": fm.get("title") or title,
            "group": "entry",
            "uid": fm.get("uid", ""),
            "platform": fm.get("platform", ""),
            "category": fm.get("category", ""),
            "followup": fm.get("followup", ""),
            "tags": fm.get("tags", []) if isinstance(fm.get("tags"), list) else [],
        })

    def uid_key(e):
        m = re.match(r"([A-Za-z]+)-(\d+)", e["uid"] or e["wiki"])
        return (m.group(1), int(m.group(2))) if m else ("Z", 0)

    entries.sort(key=uid_key)
    docs.extend(entries)

    manifest = {
        "generated_by": "scripts/build_site_manifest.py",
        "docs": docs,
        "categories": categories,
        "entries": entries,
    }
    out = os.path.join(BASE, "site-manifest.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, ensure_ascii=False, indent=1)
        fh.write("\n")
    print(f"wrote {out}: {len(categories)} categories, {len(entries)} entries")


if __name__ == "__main__":
    main()
