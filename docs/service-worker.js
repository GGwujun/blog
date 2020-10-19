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
    "revision": "a109c73f1a44998dd701f7ddce1256a2"
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
    "url": "assets/js/10.d78061a6.js",
    "revision": "9deed78b3246a1e18b5b1b780c8a14c4"
  },
  {
    "url": "assets/js/11.dcaa09e2.js",
    "revision": "f99b1a4dfdf53b988e982c6d28c44d05"
  },
  {
    "url": "assets/js/12.0617c897.js",
    "revision": "001378a6a6173fef3393c6b0723cdac2"
  },
  {
    "url": "assets/js/2.764ab68d.js",
    "revision": "6822ab2cba26b6fb7defb1a729b74321"
  },
  {
    "url": "assets/js/3.1a9c8d89.js",
    "revision": "ebe92e5bcba3f4ac0ee0d69c8c33c749"
  },
  {
    "url": "assets/js/4.2c7e45e7.js",
    "revision": "91bce4ca5486d1ee934a61263dc205b6"
  },
  {
    "url": "assets/js/5.1fe7cd21.js",
    "revision": "b21082d7652d1758f322213aadf55317"
  },
  {
    "url": "assets/js/6.71005afc.js",
    "revision": "d1ece33bb5d336238d0457ff8f42c594"
  },
  {
    "url": "assets/js/7.f8cda127.js",
    "revision": "2cc80995a79f81ca265f4d5be63a767c"
  },
  {
    "url": "assets/js/8.476f773a.js",
    "revision": "33445b3d1c29a4e151ff990c3386de7a"
  },
  {
    "url": "assets/js/9.c1259d40.js",
    "revision": "1cea704737aa2330649d432373b0d845"
  },
  {
    "url": "assets/js/app.491724aa.js",
    "revision": "2e0270a972c533dea04007790c0494d5"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "index.html",
    "revision": "438f3a30a153a9eabd0d9f762e7bfba7"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "1d600a2ddfa5dab478228e0c7f4d2de9"
  },
  {
    "url": "webpack/index.html",
    "revision": "0c1fd46122ea7c2d498b33c52705f1d4"
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
