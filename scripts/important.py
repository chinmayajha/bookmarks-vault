from datetime import date

NO_DEADLINE = "9999-12-31"

def active_important(rows, today=None):
    today = (today or date.today()).isoformat()
    picked = [r for r in rows
              if r.get("important") and (r["important"].get("deadline") or NO_DEADLINE) >= today]
    return sorted(picked, key=lambda r: (r["important"].get("deadline") or NO_DEADLINE, r["uid"]))

def deadline_label(r):
    d = r["important"].get("deadline")
    return f" · ⏳ by {d}" if d else ""
