const fs = await import("node:fs/promises");

const BOOK = "/Users/inno/bookmarks_extraction/x_bookmarks.json";
const OUT = "/Users/inno/bookmarks_extraction/x_threads.json";
const LOG = "/Users/inno/bookmarks_extraction/threads.log";

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

const bookmarks = JSON.parse(await fs.readFile(BOOK, "utf8"));
for (const b of bookmarks) b.counts = parseCounts(b.metricsLabel);
const sorted = bookmarks
  .filter((b) => b.statusUrl)
  .sort((a, b) => b.counts.replies - a.counts.replies || b.counts.likes - a.counts.likes);

let results = {};
try { results = JSON.parse(await fs.readFile(OUT, "utf8")); } catch (e) {}
const queue = sorted.filter((b) => !results[b.statusUrl]);
log("bookmarks=" + bookmarks.length + " alreadyDone=" + (sorted.length - queue.length) + " queue=" + queue.length);

const EXTRACT = () => {
  const out = [];
  const arts = [...document.querySelectorAll('article[data-testid="tweet"]')];
  for (const a of arts) {
    try {
      const timeA = a.querySelector("time") ? a.querySelector("time").closest("a") : null;
      let href = timeA ? timeA.getAttribute("href") : null;
      if (!href || !/\/status\/\d+/.test(href)) {
        const anyA = [...a.querySelectorAll('a[href*="/status/"]')]
          .map((x) => x.getAttribute("href"))
          .find((h) => h && /\/\d+/.test(h));
        href = anyA || null;
      }
      const m = href ? href.match(/\/status\/(\d+)/) : null;
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
        statusId: m ? m[1] : null,
        statusUrl: href ? "https://x.com" + href : null,
        name: hi > 0 ? lines[hi - 1] : "",
        handle,
        createdAt: time ? time.getAttribute("datetime") : null,
        text: tt ? tt.innerText : "",
        metricsLabel: g ? g.getAttribute("aria-label") : null,
        quote,
        media,
        hasVideo: !!(videoEl || vp),
        videoPoster,
        extLinks: [...new Set(ext)],
        tcoLinks: [...new Set(tco)],
        cardText: card ? card.innerText : null,
        showThread: /Show this thread/i.test(articleText),
        articleText,
      });
    } catch (e) {
      out.push({ error: String(e) });
    }
  }
  return out;
};

const BODY = () => {
  const t = document.body.innerText || "";
  return {
    rateLimit: t.includes("Rate limit exceeded"),
    wrong: t.includes("Something went wrong"),
    retrying: t.includes("Retrying"),
    articles: document.querySelectorAll('article[data-testid="tweet"]').length,
  };
};

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function writeResults(tag) {
  await fs.writeFile(OUT, JSON.stringify(results, null, 1));
  log("wrote " + OUT + " n=" + Object.keys(results).length + " " + tag);
}

let rateStreak = 0;
let globalRate = 0;
let halted = false;
const LIMIT = queue.length;

for (let i = 0; i < LIMIT; i++) {
  const b = queue[i];
  const statusId = (b.statusUrl.match(/status\/(\d+)/) || [])[1];

  let arts = null;
  let body = null;
  for (let attempt = 0; attempt < 4 && !arts; attempt++) {
    await page.goto(b.statusUrl);
    await page.waitForTimeout(2200);
    try { await page.waitForSelector('article[data-testid="tweet"]', { timeout: 3000 }); } catch (e) {}
    body = await page.evaluate(BODY);
    if (body.rateLimit || body.wrong) {
      rateStreak++;
      globalRate++;
      log("WARN rate/wrong on " + statusId + " streak=" + rateStreak + " global=" + globalRate);
      if (rateStreak >= 5) { halted = true; break; }
      await sleep(12000 + Math.floor(Math.random() * 8000));
      continue;
    }
    rateStreak = 0;
    if (body.articles > 0) {
      arts = await page.evaluate(EXTRACT);
      if (!arts || arts.length === 0) arts = null;
    }
  }

  if (halted) { log("HALTING due to repeated rate limits"); break; }

  if (!arts) {
    results[b.statusUrl] = { bookmark: b, statusId, error: "no-articles", body };
    log("FAIL no articles " + b.statusUrl);
    if ((i + 1) % 10 === 0) await writeResults("(progress " + (i + 1) + "/" + LIMIT + ")");
    continue;
  }

  // one cheap "Show more replies" expansion if few visible replies
  if (arts.length < 6) {
    const clicked = await page.evaluate(() => {
      const els = [...document.querySelectorAll('button, [role="button"], a')];
      const t = els.find((e) => /^(Show more replies|Show more|Show this thread)/i.test((e.innerText || "").trim()));
      if (t) { t.click(); return (t.innerText || "").trim(); }
      return null;
    });
    if (clicked) {
      await sleep(1500);
      const more = await page.evaluate(EXTRACT);
      if (more && more.length > arts.length) arts = more;
    }
  }

  const idx = arts.findIndex((a) => a.statusId === statusId);
  const focusIdx = idx >= 0 ? idx : 0;
  const focus = arts[focusIdx];
  const parents = arts.slice(0, focusIdx);
  const after = arts.slice(focusIdx + 1);
  const selfThread = after.filter((a) => a.handle && a.handle === focus.handle && a.statusId !== statusId).slice(0, 10);
  const replies = after.filter((a) => a.handle !== focus.handle).slice(0, 15);
  const restCount = Math.max(0, after.filter((a) => a.handle !== focus.handle).length - replies.length);

  for (const a of arts) a.counts = parseCounts(a.metricsLabel);
  focus.counts = parseCounts(focus.metricsLabel);
  const brief = (a) => ({
    statusId: a.statusId, statusUrl: a.statusUrl, name: a.name, handle: a.handle,
    createdAt: a.createdAt, text: a.text, counts: a.counts, metricsLabel: a.metricsLabel,
    quote: a.quote, media: a.media, hasVideo: a.hasVideo, videoPoster: a.videoPoster,
    extLinks: a.extLinks, tcoLinks: a.tcoLinks, cardText: a.cardText, showThread: a.showThread,
  });

  results[b.statusUrl] = {
    bookmark: b,
    statusId,
    focusNotFound: idx < 0,
    focus: {
      statusUrl: b.statusUrl,
      name: focus.name, handle: focus.handle, createdAt: focus.createdAt,
      text: focus.text, articleText: focus.articleText, counts: focus.counts,
      metricsLabel: focus.metricsLabel, quote: focus.quote, media: focus.media,
      hasVideo: focus.hasVideo, videoPoster: focus.videoPoster,
      extLinks: focus.extLinks, tcoLinks: focus.tcoLinks, cardText: focus.cardText,
      showThread: focus.showThread,
    },
    parents: parents.map(brief),
    selfThread: selfThread.map(brief),
    replies: replies.map(brief),
    extraReplyCount: restCount,
    conversationArticleCount: arts.length,
    allConversation: arts.map((a) => ({ statusId: a.statusId, handle: a.handle, text: a.text })),
  };

  if ((i + 1) % 10 === 0) log("processed " + (i + 1) + " of " + LIMIT + " (replies " + b.counts.replies + ")");
  if ((i + 1) % 10 === 0) await writeResults("(progress " + (i + 1) + "/" + LIMIT + ")");
}

await writeResults("(final)");
log("DONE deepDived=" + Object.keys(results).length + " rateEvents=" + globalRate);
const fin = await task.finish({ keep: [] });
log("finish=" + JSON.stringify(fin));
