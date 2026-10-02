const fs = await import("node:fs/promises");

const OUT = "/Users/inno/bookmarks_extraction/x_bookmarks.json";
const LOG = "/Users/inno/bookmarks_extraction/harvest.log";

const task = await taskSpace(15);
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

const u0 = await page.url();
if (!u0.includes("/i/history")) {
  await page.goto("https://x.com/i/bookmarks");
  await page.waitForTimeout(4000);
}
log("start url=" + (await page.url()));

const map = new Map();
let empty = 0;
const STEP_CAP = 600;
let rateStreak = 0;
let halted = "";
let step = 0;

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
      const name = hi > 0 ? lines[hi - 1] : "";
      const time = a.querySelector("time");
      const createdAt = time ? time.getAttribute("datetime") : null;
      const tt = a.querySelector('div[data-testid="tweetText"]');
      const tweetText = tt ? tt.innerText : "";

      const groups = [...a.querySelectorAll('[role="group"]')];
      const g = groups.find((x) => (x.getAttribute("aria-label") || "").toLowerCase().includes("view")) || groups[0];
      const metricsLabel = g ? g.getAttribute("aria-label") : null;

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
      const hasVideo = !!(videoEl || vp);

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
        statusUrl,
        name,
        handle,
        createdAt,
        tweetText,
        metricsLabel,
        quote,
        media,
        hasVideo,
        videoPoster,
        extLinks: [...new Set(ext)],
        tcoLinks: [...new Set(tco)],
        cardText: card ? card.innerText : null,
        showThread: /Show this thread/i.test(articleText),
        replyingTo: /Replying to/i.test(articleText) ? (articleText.match(/Replying to[^\n]*/) || [null])[0] : null,
        articleText,
      });
    } catch (e) {
      out.push({ statusUrl: null, error: String(e) });
    }
  }
  return out;
};

const PAGE_STATE = () => {
  const t = document.body.innerText || "";
  return {
    rateLimit: t.includes("Rate limit exceeded"),
    somethingWrong: t.includes("Something went wrong"),
    tweetCount: document.querySelectorAll('article[data-testid="tweet"]').length,
  };
};

async function scrollStep() {
  await page.evaluate(() => {
    const pc = document.querySelector('[data-testid="primaryColumn"]');
    let el = null;
    if (pc) {
      if (pc.scrollHeight > pc.clientHeight + 50) el = pc;
      else {
        for (const d of pc.querySelectorAll("div")) {
          if (d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300) { el = d; break; }
        }
      }
    }
    if (el) el.scrollTop += 1800;
    else window.scrollBy(0, 1800);
  });
}

function writeOut(tag) {
  const arr = [...map.values()];
  for (const it of arr) it.counts = parseCounts(it.metricsLabel);
  return fs.writeFile(OUT, JSON.stringify(arr, null, 1)).then(() => log("wrote " + OUT + " n=" + arr.length + " " + tag));
}

for (step = 0; step < STEP_CAP && empty < 8; step++) {
  const state = await page.evaluate(PAGE_STATE);
  if (state.rateLimit || state.somethingWrong) {
    rateStreak++;
    log("WARN rate/something-wrong streak=" + rateStreak);
    if (rateStreak >= 5) { halted = "rate-limited"; break; }
    await page.waitForTimeout(15000);
    if (state.rateLimit) { await page.reload(); await page.waitForTimeout(5000); }
    continue;
  }
  rateStreak = 0;

  const items = await page.evaluate(EXTRACT);
  let newCount = 0;
  for (const it of items) {
    if (!it.statusUrl) continue;
    if (!map.has(it.statusUrl)) { map.set(it.statusUrl, it); newCount++; }
    else {
      const prev = map.get(it.statusUrl);
      if (!prev.tweetText && it.tweetText) map.set(it.statusUrl, { ...prev, ...it });
    }
  }
  if (newCount === 0) empty++;
  else empty = 0;

  if (step % 10 === 0) log("step=" + step + " domArticles=" + items.length + " new=" + newCount + " total=" + map.size + " emptyStreak=" + empty);
  if (step === 300) await writeOut("(midway)");

  await scrollStep();
  await page.waitForTimeout(700);
}

await writeOut("(final step=" + step + ")");
log("DONE total=" + map.size + " steps=" + step + " halted=" + halted);

const kept = await task.finish({ keep: [] });
log("finish=" + JSON.stringify(kept));
