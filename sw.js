self.addEventListener('install', evt => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', evt => {
  evt.respondWith(fetch(evt.request));
});
