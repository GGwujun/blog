/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0fd2c169a6a2e8e718d1e6f89d9d73ea"
  },
  {
    "url": "assets/css/0.styles.1643b586.css",
    "revision": "d9cd73a79cb98a687d5591c01f2e5d6a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a64a8cf3.js",
    "revision": "9dbf07e5d4cf729cbd86fe2258377b3e"
  },
  {
    "url": "assets/js/11.d0207ed7.js",
    "revision": "b85fb8f261d52ccf4b3644949ede41e3"
  },
  {
    "url": "assets/js/2.b895fd40.js",
    "revision": "5c121de490a4b52f0e545f5369a00f24"
  },
  {
    "url": "assets/js/3.f065d146.js",
    "revision": "c5f8eac9ae3b490af493160b0b0b3919"
  },
  {
    "url": "assets/js/4.e04d1358.js",
    "revision": "bdcecd372d04b31d2a28c7c2b3a380cf"
  },
  {
    "url": "assets/js/5.1fe7cd21.js",
    "revision": "b21082d7652d1758f322213aadf55317"
  },
  {
    "url": "assets/js/6.10cf8c6b.js",
    "revision": "67cb48d119d109f007b9d745b033ed65"
  },
  {
    "url": "assets/js/7.b2409cfc.js",
    "revision": "2cc80995a79f81ca265f4d5be63a767c"
  },
  {
    "url": "assets/js/8.d5d8da41.js",
    "revision": "c9eb4a35f7f3098825b0c8fbc953d4ef"
  },
  {
    "url": "assets/js/9.8ac19bf5.js",
    "revision": "5ed723f22cebfe98ff9d5a79186ad4ed"
  },
  {
    "url": "assets/js/app.72bf4c2e.js",
    "revision": "5b09cbcfbd2759f9a36e51187d9ff1f9"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "index.html",
    "revision": "90b67c525e162a660edc80e41bc128dd"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "c6b0c57a291f680941ebbb9f4435e022"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
