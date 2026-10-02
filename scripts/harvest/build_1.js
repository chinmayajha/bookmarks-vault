const fs = require('fs');
const path = '/Users/inno/bookmarks_extraction';
const index = require(path + '/index_x.json');
const taxonomy = require(path + '/category_taxonomy.json');
const ann = Object.assign({}, require(path + '/_work/ann_a.json'), require(path + '/_work/ann_b.json'));

const allowed = new Set(taxonomy.categories.map(c => c.name));
const mine = index.slice(0, 126);

function fmtNum(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
}
function engagementOf(r) {
  const c = r.counts || {};
  const parts = [];
  if (c.replies) parts.push(fmtNum(c.replies) + (c.replies === 1 ? ' reply' : ' replies'));
  if (c.reposts) parts.push(fmtNum(c.reposts) + (c.reposts === 1 ? ' repost' : ' reposts'));
  if (c.likes) parts.push(fmtNum(c.likes) + ' likes');
  if (c.views) parts.push(fmtNum(c.views) + ' views');
  if (c.bookmarks) parts.push(fmtNum(c.bookmarks) + (c.bookmarks === 1 ? ' bookmark' : ' bookmarks'));
  if (!parts.length) return (r.stats || '').replace(/\s+/g, ' ').trim();
  return parts.join(' · ');
}
function hasMediaOf(r) {
  if (r.hasVideo) return 'video';
  if (r.imageCount && r.imageCount > 0) return 'image';
  return '';
}
function normLink(u) {
  return u.replace(/\s+/g, '');
}
function hostOf(u) {
  try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; }
}
function isForbiddenLink(l) {
  const h = hostOf(l);
  if (!h) return true;
  return h === 'x.com' || h.endsWith('.x.com') || h === 'twitter.com' || h.endsWith('.twitter.com') || h === 't.co' || h.endsWith('.t.co');
}

const errors = [];
const rows = [];
for (const r of mine) {
  const a = ann[r.uid];
  if (!a) { errors.push(r.uid + ': missing annotation'); continue; }
  if (!allowed.has(a.c)) errors.push(r.uid + ': bad category ' + a.c);
  if (!a.t || a.t.length > 100) errors.push(r.uid + ': title length ' + (a.t || '').length);
  if (/[\n\r]/.test(a.t || '')) errors.push(r.uid + ': title has newline');
  const scw = (a.sc || '').trim().split(/\s+/).length;
  if (scw > 5) errors.push(r.uid + ': subcategory ' + scw + ' words -> ' + a.sc);
  if (!a.e || a.e.trim().split(/\s+/).length < 20) errors.push(r.uid + ': essence too short');
  if (!a.s) errors.push(r.uid + ': empty summary');
  if (!['high', 'medium', 'low'].includes(a.w)) errors.push(r.uid + ': bad worthFollowUp ' + a.w);
  if (!Array.isArray(a.tt) || a.tt.length < 3 || a.tt.length > 6) errors.push(r.uid + ': topicTags count ' + (a.tt || []).length);
  if (!r.url) errors.push(r.uid + ': empty url');
  const pl = [];
  for (let l of (a.pl || [])) {
    l = normLink(l);
    try { new URL(l); } catch (e) { errors.push(r.uid + ': unparsable link ' + l); continue; }
    if (isForbiddenLink(l)) { errors.push(r.uid + ': forbidden link ' + l); continue; }
    if (!pl.includes(l)) pl.push(l);
  }
  if (pl.length > 6) errors.push(r.uid + ': too many productLinks');
  const words = (a.e.match(/\S+/g) || []).length;
  if (words > 260) errors.push(r.uid + ': essence very long (' + words + ' words)');
  rows.push({
    uid: r.uid,
    platform: 'Twitter',
    category: a.c,
    subcategory: a.sc,
    title: a.t,
    author: r.author,
    date: /^\d{4}-\d{2}-\d{2}/.test(r.date || '') ? r.date.slice(0, 10) : r.date,
    url: r.url,
    engagement: engagementOf(r),
    essence: a.e,
    summary: a.s,
    productLinks: pl,
    hasMedia: hasMediaOf(r),
    topicTags: a.tt,
    worthFollowUp: a.w
  });
}

if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
}
fs.writeFileSync(path + '/categorized_x_1.json', JSON.stringify(rows, null, 1));
console.log('wrote ' + rows.length + ' rows');
