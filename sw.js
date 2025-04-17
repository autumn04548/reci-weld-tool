
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('reci-cache-v1').then(cache => {
      return cache.addAll([
        './RECI_整合機型焊接參數查詢工具.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
