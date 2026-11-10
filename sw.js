/* Blockverse Service Worker – bei Änderungen an Icons/Manifest VERSION erhöhen */
const VERSION="bv-v1",SHELL=["./","index.html","manifest.webmanifest","favicon.ico","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/apple-touch-icon.png","icons/favicon-32.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;
if(r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(VERSION).then(ca=>ca.put("index.html",c))}return res}).catch(()=>caches.match("index.html").then(m=>m||caches.match("./"))));return}
e.respondWith(caches.match(r).then(m=>{const net=fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(VERSION).then(ca=>ca.put(r,c))}return res}).catch(()=>m);return m||net}))});
