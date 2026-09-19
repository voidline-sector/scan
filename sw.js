/* ══ R-77'S RETIREMENT WORKER ═════════════════════════════════════════════
   THIS PAGE NEVER REGISTERS THIS FILE, AND NOTHING EVER SHOULD. It exists
   for one population: browsers that used R-77 while R-77 lived at this
   hostname, and still hold its service worker here. Every navigation inside
   that worker's scope makes the browser check this path for a newer version;
   until this file existed the check 404'd and the old worker simply stayed —
   sitting in front of the scan, holding R-77's caches, and keeping R-77's
   push subscriptions alive under an origin R-77 no longer answers on. A
   byte-different file at the same path replaces it, and this is that file.
   On a browser that never held the old worker it is inert, because nothing
   registered it there.

   It names R-77, which the scan otherwise never does. That is a dated
   exception and not a precedent: the old origin was R-77's, so its leftovers
   are R-77's. It can come out once it has had time to reach everyone.

   NO `fetch` HANDLER, AND THERE MUST NEVER BE ONE. A worker without one is
   skipped for every request, so from the moment this activates the scan
   loads straight from the network, exactly as it does for everyone else.

   ON ACTIVATE, IN THIS ORDER:
   1. Unsubscribe push. The sector finds out on its next send, which the push
      service now refuses, and drops this device by itself — so the dead row
      leaves its list without anybody having to pick it out of two identical
      ones.
   2. Delete every cache, and the old app's message history. That history is
      message TEXT from a sector, sitting under a different site's origin.
   3. Say so ONCE, and only to someone who had RELAY on — nobody else lost
      anything to be told about.
   4. Unregister — but only when there is nothing left to click.

   UNREGISTERING FIRST WOULD LEAVE THE CLICK WITH NO HANDLER. The one
   notification opens R-77's /key, and that happens in this worker's
   `notificationclick`; a registration that is already gone receives no
   click. So the worker stays registered — with no fetch handler, no push
   subscription and no caches, which is to say doing nothing — until the
   notification is either clicked or dismissed, and leaves on whichever comes
   first. A dismissal counts: after it no click can ever arrive, and waiting
   for one would keep this registered for good. */

"use strict";

var R77 = "https://r77.voidline.gg";
var KEY_URL = R77 + "/key";
var TAG = "vl-relay-moved";

self.addEventListener("install", function () { self.skipWaiting(); });

self.addEventListener("activate", function (event) { event.waitUntil(retire()); });

async function retire() {
  var hadRelay = false;
  try {
    var sub = await self.registration.pushManager.getSubscription();
    if (sub) { hadRelay = true; await sub.unsubscribe(); }
  } catch (e) { /* no push here, or the push service is unreachable — unregistering ends the subscription too */ }

  try {
    var names = await caches.keys();
    await Promise.all(names.map(function (n) { return caches.delete(n); }));
  } catch (e) { /* nothing to clear */ }
  /* The old worker's expiration index goes with the caches it indexed. */
  await Promise.all([dropDb("vl-chat-history"), dropDb("serwist-expiration")]);

  /* ONE NOTIFICATION, EVER. If this activates again while an earlier one is
     still showing — a later edit to this file would do it — that one has
     already said everything, and its click still needs this registration. */
  if (await showing()) { return; }
  if (!hadRelay) { await self.registration.unregister(); return; }

  /* NOT AWAITED, AND THAT IS LOAD-BEARING. Chrome holds showNotification
     until the registration has finished activating, and activation is
     waiting on this very promise — awaited here, the two wait on each other,
     the worker sits in `activating` for good and nothing is ever shown. So
     the cleanup above is what activation waits for, and the notification
     goes out the moment it is done. If it cannot be shown (permission
     withdrawn), nothing will ever be clicked, so leave then. */
  self.registration.showNotification("RELAY // MOVED", {
    body: "R-77 now answers at r77.voidline.gg — open it to turn RELAY back on.",
    tag: TAG,
    data: { url: KEY_URL }
  }).catch(function () { return self.registration.unregister(); });
}

/* A deletion blocked by a connection that is still open stays queued and
   completes when that connection closes, so blocked is as done as this
   worker needs it to be — and activation must not hang waiting on a tab. */
function dropDb(name) {
  return new Promise(function (done) {
    try {
      var req = indexedDB.deleteDatabase(name);
      req.onsuccess = req.onerror = req.onblocked = function () { done(); };
    } catch (e) { done(); }
  });
}

async function showing() {
  try { return (await self.registration.getNotifications({ tag: TAG })).length > 0; }
  catch (e) { return false; }
}

self.addEventListener("notificationclick", function (event) {
  var n = event.notification;
  n.close();
  if (n.tag === TAG) {
    event.waitUntil(openThenLeave(KEY_URL));
    return;
  }
  /* R-77'S OWN NOTIFICATIONS, still in the tray from before this landed. The
     old worker resolved their links against this origin, which is how a tap
     came to open the scan's 404. Every one of them was a path inside R-77,
     so the path goes to R-77. */
  var raw = n.data && typeof n.data.url === "string" && n.data.url ? n.data.url : "/console";
  var to = R77 + "/";
  try { var u = new URL(raw, R77); to = R77 + u.pathname + u.search + u.hash; } catch (e) {}
  event.waitUntil(self.clients.openWindow(to).catch(function () {}));
});

self.addEventListener("notificationclose", function (event) {
  if (event.notification.tag === TAG) { event.waitUntil(self.registration.unregister()); }
});

/* openWindow is called before anything is awaited, while the click still
   counts as the visitor's own gesture. */
async function openThenLeave(url) {
  try { await self.clients.openWindow(url); } catch (e) { /* no window allowed: they still clicked */ }
  await self.registration.unregister();
}
