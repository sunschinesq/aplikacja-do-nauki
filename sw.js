// Tryb offline: zapisuje pliki aplikacji na urządzeniu.
// Strategia „najpierw sieć”: gdy jest internet, zawsze pobieramy najnowszą wersję (i odświeżamy kopię),
// a bez internetu (lub przy bardzo wolnym łączu) podajemy zapisaną kopię.
const CACHE = "nauka-offline-v1";
const NETWORK_TIMEOUT_MS = 4000;

// Przy dodaniu nowego pliku z treścią (data/*.js) dopisz go tutaj.
const FILES = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.webmanifest",
  "icon.svg",
  "icon-180.png",
  "icon-512.png",
  "data/osobowosc.js",
  "data/osobowosc-zagadnienia.js",
  "data/metodologia-statystyka100.js",
  "data/metodologia.js",
  "data/diagnostyka.js",
  "data/diagnostyka-zagadnienia.js",
  "data/poznawcze.js",
  "data/pomoc.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fromNetwork(request) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), NETWORK_TIMEOUT_MS);
    fetch(request, { cache: "no-cache" }).then((response) => {
      clearTimeout(timer);
      if (!response || !response.ok) return reject(new Error("bad response"));
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(request, copy));
      resolve(response);
    }, (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;
  if (request.mode === "navigate") {
    return (await cache.match("index.html")) || (await cache.match("./"));
  }
  return Response.error();
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fromNetwork(request).catch(() => fromCache(request)));
});
