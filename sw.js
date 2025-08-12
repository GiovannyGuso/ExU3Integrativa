
const CACHE = 'espe-pwa-v1';
const APP_SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/soft.pdf',
  './assets/elec.pdf',
  './assets/mec.pdf',
  './assets/espe.jpg' 

];

// Install: cache del App Shell
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL)));
});

// Activate: limpieza de versiones viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

// Fetch: Cache First + runtime cache para lo que no esté cacheado (incluye CDN)
self.addEventListener('fetch', event => {
  const req = event.request;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(res => {
        const resClone = res.clone();
        caches.open(CACHE).then(c => c.put(req, resClone)).catch(()=>{});
        return res;
      }).catch(() => cached); // último recurso: si algo se había cacheado antes
    })
  );
});
