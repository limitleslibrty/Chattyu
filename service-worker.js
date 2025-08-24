const CACHE_NAME = "chattyu-cache-v1";
const ASSETS = [
  "./",               // homepage
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./chat.png",
  "./receive.mp3",
  "./send.mp3",
  "./chat_logo.png",
  "./firebase-config.js",
  "./logo.png"
  // add your CSS/JS files here, e.g. "./style.css", "./app.js"
];

// Install event - cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate event - clear old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() =>
          caches.match("./index.html") // fallback when offline
        )
      );
    })
  );
});