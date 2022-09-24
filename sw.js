var cacheName = 'SoundBoard';
var filesToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/color-game/assets/css/opening-screen.css',
  '/color-game/assets/css/game.css',
  '/color-game/assets/css/reset.css',
  '/clicker-game/assets/css/opening-screen.css',
  '/clicker-game/assets/css/game.css',
  '/clicker-game/assets/css/reset.css',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});