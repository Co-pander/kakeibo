/* =========================================================
   Service Worker — オフライン対応・キャッシュ管理
   方針: ネットワーク優先（常に最新を取得）、失敗時のみキャッシュ
   → 「古い画面が表示され続ける」問題を構造的に防ぐ
========================================================= */
const CACHE_NAME = 'kakeibo-v3.16.42';
// 古いキャッシュの掃除は「自分の系列だけ」に限定する。
// キャッシュ領域はサイト単位で、co-pander.github.io には他のアプリ（買い物リスト・購入記録・
// お買い物メモ・発音メーカー・パスワード管理）も同居している。「自分以外を全部消す」と
// 更新のたびに他アプリのオフライン用データまで消してしまうため、接頭辞で絞る。
const CACHE_PREFIX = CACHE_NAME.replace(/[0-9.]+$/, '');
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './app-icons/icon-512.png',
  './app-icons/icon-maskable-512.png',
  './app-icons/apple-touch-icon.png',
  './app-icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(hit => hit || caches.match('./index.html'))
      )
  );
});
