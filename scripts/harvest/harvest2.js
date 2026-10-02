const fs = await import("node:fs/promises");
const OUT = "/Users/inno/bookmarks_extraction/x_bookmarks.json";
const LOG = "/Users/inno/bookmarks_extraction/harvest3.log";

const task = await taskSpace("extract x bookmarks");
const page = task.page("p1");
function log(msg) {
  const line = new Date().toISOString().slice(11, 19) + " " + msg;
  console.log(line);
  fs.appendFile(LOG, line + "\n").catch(() => {});
}

function toNum(s) {
  s = String(s).replace(/,/g, "");
  const m = s.match(/([\d.]+)\s*([KMB])?/i);
  if (!m) return 0;
  let v = parseFloat(m[1]);
  if (m[2]) v *= { k: 1e3, m: 1e6, b: 1e9 }[m[2].toLowerCase()];
  return Math.round(v);
}
function parseCounts(label) {
  const r = { replies: 0, reposts: 0, likes: 0, views: 0, bookmarks: 0 };
  if (!label) return r;
  const pats = [
    ["replies", /([\d.,]+[KMB]?)\s*Repl(?:y|ies)/i],
    ["reposts", /([\d.,]+[KMB]?)\s*(?:Repost|Retweet)/i],
    ["likes", /([\d.,]+[KMB]?)\s*Like/i],
    ["views", /([\d.,]+[KMB]?)\s*View/i],
    ["bookmarks", /([\d.,]+[KMB]?)\s*Bookmark/i],
  ];
  for (const [k, re] of pats) {
    const m = label.match(re);
    if (m) r[k] = toNum(m[1]);
  }
  return r;
}

let arr = [];
try { arr = JSON.parse(await fs.readFile(OUT, "utf8")); } catch (e) {}
const map = new Map(arr.map((x) => [x.statusUrl, x]));
log("loaded existing=" + map.size);

await page.goto("https://x.com/i/bookmarks");
await page.waitForTimeout(4000);

const EXTRACT = () => {
  const out = [];
  const arts = [...document.querySelectorAll('article[data-testid="tweet"]')];
  for (const a of arts) {
    try {
      if (a.querySelector('[data-testid="placementTracking"]')) continue;
      const timeA = a.querySelector("time") ? a.querySelector("time").closest("a") : null;
      let href = timeA ? timeA.getAttribute("href") : null;
      if (!href || !/\/status\/\d+/.test(href)) {
        const anyA = [...a.querySelectorAll('a[href*="/status/"]')]
          .map((x) => x.getAttribute("href"))
          .find((h) => h && /\/\d+/.test(h));
        href = anyA || null;
      }
      const statusUrl = href ? "https://x.com" + href : null;
      const un = a.querySelector('div[data-testid="User-Name"]');
      const lines = (un ? un.innerText : "").split("\n").map((s) => s.trim()).filter(Boolean);
      const handle = lines.find((l) => l.startsWith("@")) || "";
      const hi = lines.indexOf(handle);
      const time = a.querySelector("time");
      const tt = a.querySelector('div[data-testid="tweetText"]');
      const groups = [...a.querySelectorAll('[role="group"]')];
      const g = groups.find((x) => (x.getAttribute("aria-label") || "").toLowerCase().includes("view")) || groups[0];
      let quote = null;
      for (const q of a.querySelectorAll('div[role="link"]')) {
        if (q.closest('[data-testid="card.wrapper"]')) continue;
        const t = q.innerText || "";
        if (!t.includes("@") || t.length < 10) continue;
        const qh = q.querySelector('a[href*="/status/"]');
        quote = { text: t, statusUrl: qh ? "https://x.com" + qh.getAttribute("href") : null };
        break;
      }
      const media = [...a.querySelectorAll('img[src*="/media/"]')]
        .map((i) => i.src)
        .filter((s) => !s.includes("profile_images"));
      const videoEl = a.querySelector("video");
      const vp = a.querySelector('[data-testid="videoPlayer"]');
      let videoPoster = null;
      if (videoEl && videoEl.getAttribute("poster")) videoPoster = videoEl.getAttribute("poster");
      else if (vp) videoPoster = vp.getAttribute("poster") || (vp.querySelector("img") ? vp.querySelector("img").src : null);
      const ext = [], tco = [];
      for (const l of a.querySelectorAll('a[href^="http"]')) {
        const h = l.getAttribute("href");
        if (/x\.com|twitter\.com/.test(h)) continue;
        if (h.indexOf("t.co") >= 0) tco.push(h);
        else ext.push(h);
      }
      const card = a.querySelector('[data-testid="card.wrapper"]');
      const articleText = a.innerText;
      out.push({
        statusUrl, name: hi > 0 ? lines[hi - 1] : "", handle,
        createdAt: time ? time.getAttribute("datetime") : null,
        tweetText: tt ? tt.innerText : "",
        metricsLabel: g ? g.getAttribute("aria-label") : null,
        quote, media, hasVideo: !!(videoEl || vp), videoPoster,
        extLinks: [...new Set(ext)], tcoLinks: [...new Set(tco)],
        cardText: card ? card.innerText : null,
        showThread: /Show this thread/i.test(articleText),
        replyingTo: /Replying to/i.test(articleText) ? (articleText.match(/Replying to[^\n]*/) || [null])[0] : null,
        articleText,
      });
    } catch (e) { out.push({ statusUrl: null, error: String(e) }); }
  }
  return out;
};

const STATE = () => {
  const t = document.body.innerText || "";
  const pc = document.querySelector('[data-testid="primaryColumn"]');
  let sc = null;
  if (pc) {
    if (pc.scrollHeight > pc.clientHeight + 50) sc = pc;
    else for (const d of pc.querySelectorAll("div")) { if (d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300) { sc = d; break; } }
  }
  return {
    rateLimit: t.includes("Rate limit exceeded"),
    wrong: t.includes("Something went wrong"),
    retry: /Retry/.test(t),
    pos: sc ? Math.round(sc.scrollTop) : Math.round(window.scrollY),
    max: sc ? Math.round(sc.scrollHeight - sc.clientHeight) : Math.round(document.body.scrollHeight - window.innerHeight),
  };
};

let empty = 0, rateStreak = 0, halted = "";
for (let step = 0; step < 120; step++) {
  const st = await page.evaluate(STATE);
  if (st.rateLimit || st.wrong) {
    rateStreak++;
    log("WARN rate/wrong streak=" + rateStreak);
    if (rateStreak >= 5) { halted = "rate-limited"; break; }
    await page.waitForTimeout(15000);
    continue;
  }
  rateStreak = 0;
  const items = await page.evaluate(EXTRACT);
  let n = 0;
  for (const it of items) {
    if (!it.statusUrl) continue;
    if (!map.has(it.statusUrl)) { map.set(it.statusUrl, it); n++; }
  }
  if (n === 0) empty++; else empty = 0;
  if (step % 5 === 0) log("step=" + step + " pos=" + st.pos + "/" + st.max + " dom=" + items.length + " new=" + n + " total=" + map.size + " empty=" + empty);
  await page.evaluate(() => {
    const pc = document.querySelector('[data-testid="primaryColumn"]');
    let el = null;
    if (pc) {
      if (pc.scrollHeight > pc.clientHeight + 50) el = pc;
      else for (const d of pc.querySelectorAll("div")) { if (d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300) { el = d; break; } }
    }
    if (el) el.scrollTop += 2500; else window.scrollBy(0, 2500);
  });
  await page.waitForTimeout(1000);
  const st2 = await page.evaluate(STATE);
  if (empty >= 6 && st2.max > 0 && st2.pos >= st2.max - 150) {
    log("at bottom with no new items after " + empty + " steps -> stop");
    break;
  }
  if (empty >= 40) { log("40 consecutive empty steps -> stop"); break; }
}

const final = [...map.values()];
for (const it of final) it.counts = parseCounts(it.metricsLabel);
await fs.writeFile(OUT, JSON.stringify(final, null, 1));
log("DONE total=" + final.length + " halted=" + halted);
const fin = await task.finish({ keep: [] });
log("finish=" + JSON.stringify(fin));
