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
    "revision": "3cb1a4a15d944fbfe59d125134c2b732"
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
    "url": "assets/js/10.65b9176e.js",
    "revision": "e1465889728b3cca19d002232e095482"
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
    "url": "assets/js/4.6c24a313.js",
    "revision": "4614d7f2e3da889d9eef30a74cceaf52"
  },
  {
    "url": "assets/js/5.1fe7cd21.js",
    "revision": "b21082d7652d1758f322213aadf55317"
  },
  {
    "url": "assets/js/6.72f956af.js",
    "revision": "d505f1bc7e74788009011d5de04f7c54"
  },
  {
    "url": "assets/js/7.5a991f32.js",
    "revision": "ce6c967287a9f12aced993fc004c4663"
  },
  {
    "url": "assets/js/8.65354ec0.js",
    "revision": "f647868ad651c7d63a13ea9e7b994bea"
  },
  {
    "url": "assets/js/9.53467015.js",
    "revision": "bd13e1353d14c6d1b92de8a104e2783e"
  },
  {
    "url": "assets/js/app.a6a0b199.js",
    "revision": "3a2747ff4d7d12d78a13d50d1421952d"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "366f3e95fc4d9ef5f2d8db545d95a2fa"
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
