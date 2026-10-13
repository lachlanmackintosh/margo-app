/* Offline cache for Margo Program */
const CACHE = 'margo-v11-eatoutfix';
const FILES = [
 "./",
 "./app.js",
 "./data.js",
 "./food-log.js",
 "./eatout.js",
 "./food-plan.js",
 "./index.html",
 "./manifest.webmanifest",
 "./styles.css",
 "./icons/apple-touch-icon.png",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-512.png",
 "./img/Arnold_Dumbbell_Press/0.jpg",
 "./img/Band_Assisted_Pull-Up/0.jpg",
 "./img/Band_Pull_Apart/0.jpg",
 "./img/Barbell_Glute_Bridge/0.jpg",
 "./img/Barbell_Hip_Thrust/0.jpg",
 "./img/Butt_Lift_Bridge/0.jpg",
 "./img/Cable_Seated_Lateral_Raise/0.jpg",
 "./img/Dead_Bug/0.jpg",
 "./img/Dumbbell_Bench_Press/0.jpg",
 "./img/Dumbbell_Incline_Row/0.jpg",
 "./img/Dumbbell_Rear_Lunge/0.jpg",
 "./img/Dumbbell_Shoulder_Press/0.jpg",
 "./img/Dumbbell_Step_Ups/0.jpg",
 "./img/Face_Pull/0.jpg",
 "./img/Glute_Kickback/0.jpg",
 "./img/Good_Morning/0.jpg",
 "./img/Hyperextensions_Back_Extensions/0.jpg",
 "./img/Incline_Push-Up/0.jpg",
 "./img/Leg_Press/0.jpg",
 "./img/Lying_Leg_Curls/0.jpg",
 "./img/One-Legged_Cable_Kickback/0.jpg",
 "./img/Plank/0.jpg",
 "./img/Pull_Through/0.jpg",
 "./img/Romanian_Deadlift/0.jpg",
 "./img/Seated_Cable_Rows/0.jpg",
 "./img/Seated_Leg_Curl/0.jpg",
 "./img/Side_Lateral_Raise/0.jpg",
 "./img/Single_Leg_Glute_Bridge/0.jpg",
 "./img/Smith_Machine_Hip_Raise/0.jpg",
 "./img/Smith_Machine_Squat/0.jpg",
 "./img/Split_Squat_with_Dumbbells/0.jpg",
 "./img/Stiff-Legged_Dumbbell_Deadlift/0.jpg",
 "./img/Sumo_Deadlift/0.jpg",
 "./img/Thigh_Abductor/0.jpg",
 "./img/Wide-Grip_Lat_Pulldown/0.jpg"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('margo-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  // Other origins are not cached.
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error())));
});
