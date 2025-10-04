const CACHE_NAME = "chattyu-cache-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./chat.png",
  "./receive.mp3",
  "./send.mp3",
  "./chat_logo.png",
  "./firebase-config.js",
  "./logo.png",
  // add other static assets like "./style.css", "./app.js"
];

// INSTALL — cache core assets
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Activate new SW immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ACTIVATE — clear old caches and take control
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH — network-first for dynamic data, cache-first for static
self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  
  // 👇 always fetch chat/message data live
  if (url.includes("/messages") || url.includes("/api/")) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }
  
  // Default: cache-first for static assets
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchRes.clone());
            return fetchRes;
          });
        }).catch(() => caches.match("./index.html"))
      );
    })
  );
});