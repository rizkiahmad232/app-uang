self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('manajer-uang-v1').then((cache) => cache.addAll([
            './index.html',
            './manifest.json'
            // './icon-192.png', // pastikan file ini ada atau akan error 404
            // './icon-512.png'  // pastikan file ini ada atau akan error 404
        ]))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});