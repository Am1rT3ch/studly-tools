const CACHE = "studlypro-v1";
const ASSETS = [
  "/studly-tools/",
  "/studly-tools/index.html",
  "/studly-tools/pomodoro.html",
  "/studly-tools/exam.html",
  "/studly-tools/degree.html",
  "/studly-tools/assets/logo.png",
  "/studly-tools/assets/logo-192.png",
  "/studly-tools/assets/logo-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((resp) => {
        caches.open(CACHE).then((c) => c.put(e.request, resp.clone()));
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
