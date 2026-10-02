// Build compact unified index records from raw extraction files.
const fs = require("fs");
const path = "/Users/inno/bookmarks_extraction/";
const read = (f) => JSON.parse(fs.readFileSync(path + f, "utf8"));
const trunc = (s, n) => {
  if (!s) return "";
  s = String(s).replace(/\s+/g, " ").trim();
  return s.length > n ? s.slice(0, n) + " …" : s;
};
const isPlatformLink = (u) =>
  /x\.com|twitter\.com|t\.co\/|reddit\.com|linkedin\.com|licdn\.co/i.test(u);

// ---------- TWITTER ----------
function loadJson(f, fallback) {
  try { return read(f); } catch (e) { return fallback; }
}
function buildX() {
  const bm = read("x_bookmarks.json");
  const th = read("x_threads.json");
  let repair = {};
  try { repair = read("x_threads_repair.json"); } catch (e) {}
  const media = loadJson("x_media.json", {});
  // extras from the completion pass: records for bookmarks the fast scrolls missed
  const extraBm = loadJson("x_extra_bookmarks.json", []);
  const extraTh = loadJson("x_extra_threads.json", {});
  const extraMedia = (loadJson("x_extra.json", {}).media) || {};
  const idOf = (u) => ((u || "").match(/status\/(\d+)/) || [])[1];
  const baseIds = new Set(bm.map((b) => idOf(b.statusUrl)));
  const missingBm = extraBm.filter((b) => !baseIds.has(idOf(b.statusUrl)));
  const allBm = [...bm, ...missingBm];
  Object.assign(media, extraMedia);
  const out = [];
  allBm.forEach((b, i) => {
    const key = b.statusUrl;
    let t = th[key] || extraTh[key] || {};
    const r = repair[key];
    if (r && r.repaired) t = { ...t, ...r };
    const focus = t.focus || {};
    const mainText = focus.text || b.tweetText || "";
    const threadText = (t.selfThread || [])
      .map((x) => x.text).filter(Boolean).join("\n\n");
    const replies = (t.replies || [])
      .map((x) => `${x.name || x.handle || "?"}: ${trunc(x.text, 220)}`)
      .slice(0, 8).join("\n—\n");
    const counts = b.counts || {};
    const links = [...new Set([...(b.extLinks || []), ...(b.tcoLinks || [])])]
      .filter((u) => u && !isPlatformLink(u));
    const m = media[key] || {};
    const imageCount = (m.imageUrls && m.imageUrls.length) || (b.media || []).length;
    out.push({
      uid: "X-" + String(i + 1).padStart(3, "0"),
      platform: "Twitter",
      url: key,
      author: focus.name || b.name || "",
      handle: focus.handle || b.handle || "",
      date: focus.createdAt || b.createdAt || "",
      title: trunc(mainText, 120),
      mainText: trunc(mainText, 900),
      threadText: trunc(threadText, 900),
      discussion: trunc(replies, 1400),
      replyCount: (t.replies || []).length,
      conversationTweets: t.conversationArticleCount || 0,
      extraReplyCount: t.extraReplyCount || 0,
      stats: b.metricsLabel || "",
      counts,
      quote: trunc(b.quote && (b.quote.text || b.quote), 400),
      hasVideo: !!(m.hasVideo || b.hasVideo),
      imageCount,
      videoPoster: m.videoPoster || b.videoPoster || null,
      links,
      cardText: trunc(b.cardText, 300),
      detailMissing: !!(t.focusNotFound || (r && !r.repaired && !focus.text)),
      diagnosis: (r && r.diagnosis) || null,
      context: "r/" + (b.subreddit || ""),
    });
  });
  // include any repair-only entries (bookmarks that disappeared from list): skip
  return out;
}

// ---------- REDDIT ----------
function buildReddit() {
  const saved = read("reddit_saved.json");
  const threads = read("reddit_threads.json");
  const out = [];
  saved.forEach((s, i) => {
    const key = (s.kind === "comment" ? "comment_" : "post_") + s.id;
    const th = threads[key] || threads["post_" + s.id] || threads["comment_" + s.id] || {};
    const comments = (th.top_comments || []).map((c) => {
      let block = `${c.author || "?"} (↑${c.score ?? "?"}): ${trunc(c.body, 240)}`;
      const nested = (c.replies || []).slice(0, 2)
        .map((r) => `   ↳ ${r.author || "?"} (↑${r.score ?? "?"}): ${trunc(r.body, 140)}`)
        .join("\n");
      return nested ? block + "\n" + nested : block;
    }).slice(0, 10).join("\n\n");
    const mainText = s.kind === "post" ? (th.op_body || s.selftext || "") : (s.body || "");
    const title = s.kind === "post" ? (s.title || "") : trunc(s.body, 100);
    const links = [];
    if (s.url && !isPlatformLink(s.url)) links.push(s.url);
    const bodyLinks = (mainText.match(/https?:\/\/[^\s)>\]]+/g) || [])
      .filter((u) => !isPlatformLink(u));
    out.push({
      uid: "R-" + String(i + 1).padStart(3, "0"),
      platform: "Reddit",
      url: s.kind === "comment"
        ? (s.permalink && s.permalink.startsWith("http") ? s.permalink : "https://www.reddit.com" + s.permalink)
        : (s.permalink && s.permalink.startsWith("http") ? s.permalink : "https://www.reddit.com" + s.permalink),
      author: s.kind === "post" ? (th.op_author || s.author || "") : (s.author || ""),
      handle: "u/" + (s.author || ""),
      date: s.created_utc ? new Date(s.created_utc * 1000).toISOString() : "",
      title: trunc(title, 140),
      mainText: trunc(mainText, 900),
      threadText: "",
      discussion: trunc(comments, 1600),
      replyCount: s.num_comments ?? (th.top_comments || []).length,
      conversationTweets: 0,
      extraReplyCount: 0,
      stats: `↑${s.score ?? "?"} · ${s.num_comments ?? "?"} comments`,
      counts: { likes: s.score, replies: s.num_comments },
      quote: "",
      hasVideo: !!(th.op_media && th.op_media.is_video),
      imageCount: th.op_media && th.op_media.is_gallery
        ? (th.op_media.gallery_count || 3)
        : th.op_media && th.op_media.thumbnail ? 1 : 0,
      videoPoster: null,
      links: [...new Set([...links, ...bodyLinks])].slice(0, 8),
      cardText: "",
      detailMissing: false,
      diagnosis: null,
      context: "r/" + (s.subreddit || "") + (s.kind === "comment" ? " (saved comment)" : ""),
      externalUrl: s.url || null,
      isComment: s.kind === "comment",
      parentTitle: s.link_title || "",
    });
  });
  return out;
}

// ---------- LINKEDIN ----------
function buildLinkedIn() {
  const saved = read("linkedin_saved.json");
  const posts = read("linkedin_posts.json");
  const lmedia = loadJson("linkedin_media.json", {});
  const byId = {};
  for (const p of posts) {
    byId[p.activityId || p.activityUrl] = p;
    if (p.activityUrl) byId[p.activityUrl] = p;
  }
  const out = [];
  saved.forEach((s, i) => {
    const key = s.activityUrl || s.activityId;
    const p = byId[key] || byId[s.activityId] || posts[i] || {};
    const comments = (p.comments || []).map((c) =>
      `${c.author || "?"}${c.likes ? " (♥" + c.likes + ")" : ""}: ${trunc(c.text, 260)}`
    ).slice(0, 10).join("\n—\n");
    const mainText = p.fullText || s.previewText || "";
    const links = [...new Set([...(p.externalLinksInPost || []), ...(p.externalLinks || [])])]
      .filter((u) => u && !isPlatformLink(u));
    out.push({
      uid: "L-" + String(i + 1).padStart(3, "0"),
      platform: "LinkedIn",
      url: (s.activityUrl || "").split("?")[0] || s.activityUrl,
      author: p.authorName || s.authorName || "",
      handle: trunc(s.authorHeadline || p.authorHeadline || "", 120),
      date: p.postedAt || s.timeText || "",
      title: trunc(mainText, 140),
      mainText: trunc(mainText, 1200),
      threadText: "",
      discussion: trunc(comments, 1600),
      replyCount: (p.comments || []).length,
      conversationTweets: 0,
      extraReplyCount: 0,
      stats: p.engagement
        ? `♥${p.engagement.reactions || "?"} · ${p.engagement.comments || "?"} comments · ${p.engagement.reposts || "?"} reposts`
        : "",
      counts: p.engagement || {},
      quote: "",
      hasVideo: !!(lmedia[key] && lmedia[key].hasVideo),
      imageCount: ((lmedia[key] && lmedia[key].imageUrls && lmedia[key].imageUrls.length)
        || (s.imageUrls || []).length) || 0,
      videoPoster: null,
      links: [...new Set(links)].slice(0, 8),
      cardText: "",
      detailMissing: false,
      diagnosis: null,
      context: /\/pulse\//.test(s.activityUrl || "") ? "Article" : "Post",
    });
  });
  return out;
}

const x = buildX(), r = buildReddit(), l = buildLinkedIn();
fs.writeFileSync(path + "index_x.json", JSON.stringify(x, null, 1));
fs.writeFileSync(path + "index_reddit.json", JSON.stringify(r, null, 1));
fs.writeFileSync(path + "index_linkedin.json", JSON.stringify(l, null, 1));
const all = [...x, ...r, ...l];
fs.writeFileSync(path + "index_all.json", JSON.stringify(all, null, 1));
console.log("built:", { x: x.length, reddit: r.length, linkedin: l.length, total: all.length });
console.log("x with detail:", x.filter((v) => !v.detailMissing).length,
  "| x missing:", x.filter((v) => v.detailMissing).length);
