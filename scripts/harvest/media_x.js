const fs = await import("node:fs/promises");
const OUT = "/Users/inno/bookmarks_extraction/x_media.json";
const MAX_STEPS = Number(process.env.MAX_STEPS || 200);
const STEP_WAIT = Number(process.env.STEP_WAIT || 700);
const SCAN_WAIT = Number(process.env.SCAN_WAIT || 0);
const SCROLL_PX = Number(process.env.SCROLL_PX || 1800);
const REWIND = process.env.REWIND === "1";

let store = {};
try {
  store = JSON.parse(await fs.readFile(OUT, "utf8"));
} catch (e) {
  store = {};
}
console.log("start with", Object.keys(store).length, "existing entries");

const task = await taskSpace("media rescan");
const page = task.page("p1");

await page.evaluate(() => {
  function pick() {
    let el = document.activeElement;
    const col = document.querySelector('div[data-testid="primaryColumn"]');
    let n = col ? col.querySelector("article") : null;
    if (n) {
      let p = n;
      while (p && p !== document.documentElement) {
        const st = getComputedStyle(p);
        if ((st.overflowY === "auto" || st.overflowY === "scroll") && p.scrollHeight > p.clientHeight + 200) return p;
        p = p.parentElement;
      }
    }
    if (col) {
      for (const d of col.querySelectorAll("div")) {
        const st = getComputedStyle(d);
        if ((st.overflowY === "auto" || st.overflowY === "scroll") && d.scrollHeight > d.clientHeight + 500) return d;
      }
    }
    return document.scrollingElement;
  }
  window.__pick = pick;
});

let empty = 0;
let steps = 0;
let totalNew = 0;

if (REWIND) {
  const r = await page.evaluate(() => {
    const s = window.__pick ? window.__pick() : document.scrollingElement;
    if (!s) return null;
    s.scrollTo(0, 0);
    return { tag: s.tagName, top: s.scrollTop, h: s.scrollHeight };
  });
  console.log("rewound to top", r);
  await page.waitForTimeout(2500);
}

const HARVEST = () => {
  const out = {};
  const arts = [...document.querySelectorAll('article[data-testid="tweet"]')];
  for (const a of arts) {
    const t = a.querySelector("time");
    const link = t ? t.closest('a[href*="/status/"]') : null;
    if (!link) continue;
    let href = link.getAttribute("href") || "";
    let statusUrl;
    if (href.startsWith("http")) statusUrl = href;
    else if (href.startsWith("/")) statusUrl = "https://x.com" + href;
    else statusUrl = "https://x.com/" + href;
    statusUrl = statusUrl.split("#")[0].split("?")[0];
    if (!/\/status\/\d+/.test(statusUrl)) continue;

    let hasVideo = false;
    if (a.querySelector("video")) hasVideo = true;
    if (a.querySelector('[data-testid="videoPlayer"]')) hasVideo = true;
    if (a.querySelector('[data-testid="videoComponent"]')) hasVideo = true;
    if (a.querySelector('img[src*="video_thumb"]')) hasVideo = true;
    if (a.querySelector('img[src*="twimg.com/video_thumb"]')) hasVideo = true;
    if (a.querySelector('[aria-label*="Play"]')) hasVideo = true;
    if (a.querySelector('[aria-label*="play"]')) hasVideo = true;
    // background-image based lazy players
    for (const el of a.querySelectorAll("div,span")) {
      const bi = el.style && el.style.backgroundImage;
      if (bi && bi.includes("video_thumb")) { hasVideo = true; break; }
    }

    let videoPoster = null;
    const v = a.querySelector("video");
    if (v && v.getAttribute("poster")) videoPoster = v.getAttribute("poster");
    if (!videoPoster) {
      const vt = a.querySelector('img[src*="video_thumb"]');
      if (vt) videoPoster = vt.getAttribute("src");
    }

    const imageUrls = [];
    const seenImg = new Set();
    for (const img of a.querySelectorAll("img")) {
      const src = img.getAttribute("src") || "";
      if (!src.includes("/media/")) continue;
      if (src.includes("profile_images")) continue;
      if (seenImg.has(src)) continue;
      seenImg.add(src);
      imageUrls.push(src);
    }

    let hasGif = false;
    for (const el of a.querySelectorAll("img,video,source")) {
      const s = (el.getAttribute("src") || "") + "|" + (el.getAttribute("poster") || "");
      if (s.includes("animated_gif")) { hasGif = true; break; }
    }
    if (!hasGif) {
      const html = a.innerHTML || "";
      if (html.includes("animated_gif")) hasGif = true;
    }

    const prev = out[statusUrl];
    if (prev) {
      prev.hasVideo = prev.hasVideo || hasVideo;
      prev.hasGif = prev.hasGif || hasGif;
      if (!prev.videoPoster && videoPoster) prev.videoPoster = videoPoster;
      for (const u of imageUrls) if (!prev.imageUrls.includes(u)) prev.imageUrls.push(u);
    } else {
      out[statusUrl] = { hasVideo, videoPoster, imageUrls, hasGif };
    }
  }
  return out;
};

while (steps < MAX_STEPS) {
  steps++;
  let batch = {};
  try {
    batch = await page.evaluate(HARVEST);
  } catch (e) {
    console.log("evaluate error:", String(e).slice(0, 200));
    break;
  }
  let n = 0;
  for (const [k, v] of Object.entries(batch)) {
    const prev = store[k];
    if (!prev) { store[k] = v; n++; totalNew++; }
    else {
      const before = JSON.stringify(prev);
      prev.hasVideo = prev.hasVideo || v.hasVideo;
      prev.hasGif = prev.hasGif || v.hasGif;
      if (!prev.videoPoster && v.videoPoster) prev.videoPoster = v.videoPoster;
      for (const u of v.imageUrls) if (!prev.imageUrls.includes(u)) prev.imageUrls.push(u);
      if (JSON.stringify(prev) !== before) n++;
    }
  }
  if (n > 0) empty = 0;
  else empty++;
  if (n >= 15 || steps % 10 === 0 || empty >= 8) {
    await fs.writeFile(OUT, JSON.stringify(store));
  }
  if (steps % 10 === 0 || empty > 0) {
    const vv = Object.values(store).filter((x) => x.hasVideo).length;
    const ii = Object.values(store).filter((x) => x.imageUrls.length).length;
    console.log(`step=${steps} new=${n} empty=${empty} total=${Object.keys(store).length} video=${vv} img=${ii}`);
  }
  if (empty >= 8) { console.log("no new items for 8 steps -> stop"); break; }

  const scrolled = await page.evaluate((px) => {
    const s = window.__pick ? window.__pick() : document.scrollingElement;
    if (!s) return null;
    const before = s.scrollTop;
    s.scrollBy(0, px);
    return { tag: s.tagName, before, after: s.scrollTop, max: s.scrollHeight - s.clientHeight };
  }, SCROLL_PX);
  if (scrolled && scrolled.before === scrolled.after && empty >= 3) {
    // try the window scroller as a fallback
    await page.evaluate(() => { window.scrollBy(0, 1800); });
  }
  await page.waitForTimeout(SCAN_WAIT || STEP_WAIT);
}

await fs.writeFile(OUT, JSON.stringify(store));
const vals = Object.values(store);
console.log("DONE chunk", {
  steps,
  totalNew,
  total: Object.keys(store).length,
  video: vals.filter((x) => x.hasVideo).length,
  gif: vals.filter((x) => x.hasGif).length,
  withImg: vals.filter((x) => x.imageUrls.length).length,
});
