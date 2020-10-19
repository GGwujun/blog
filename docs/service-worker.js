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
    "revision": "b706fef7176af6577615f940f65d9422"
  },
  {
    "url": "assets/css/0.styles.1643b586.css",
    "revision": "d9cd73a79cb98a687d5591c01f2e5d6a"
  },
  {
    "url": "assets/img/image-20190712103225511.ea3dc5f9.png",
    "revision": "ea3dc5f9cdeea1c9812c0d07a4ee4c05"
  },
  {
    "url": "assets/img/image-20190712103842979.34228a79.png",
    "revision": "34228a7900a2e82992ff24b26df79ee0"
  },
  {
    "url": "assets/img/image-20190712104735156.83860e67.png",
    "revision": "83860e67e2c54072b4ecee6ed9748b0f"
  },
  {
    "url": "assets/img/image-20190712112256996.b309854f.png",
    "revision": "b309854fa300122a807ba71eefb25939"
  },
  {
    "url": "assets/img/image-20190712112516409.04c00431.png",
    "revision": "04c00431f6d186d429aeb58e64e682d9"
  },
  {
    "url": "assets/img/image-20190712142906704.ca0e7c2a.png",
    "revision": "ca0e7c2a29c9363ac2ee351e029e4d60"
  },
  {
    "url": "assets/img/image-20190712143646386.606de508.png",
    "revision": "606de5085c93d5fc2883d4312310bab8"
  },
  {
    "url": "assets/img/image-20190712143931925.07b3b166.png",
    "revision": "07b3b1664545bb93c2bcef1e1613ce03"
  },
  {
    "url": "assets/img/image-20190712144302473.c9e41cc8.png",
    "revision": "c9e41cc833d073871793747564f1cc50"
  },
  {
    "url": "assets/img/image-20190712144537973.3a1c134c.png",
    "revision": "3a1c134c47507318875440faa6dd66b0"
  },
  {
    "url": "assets/img/image-20190712144816638.9e8d0361.png",
    "revision": "9e8d0361af432f4ce36cc71228484feb"
  },
  {
    "url": "assets/img/image-20190712145434765.e9205573.png",
    "revision": "e920557388be62410c4f2d2505414628"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/v2-19e7de9d2da5510727f0398c7e92756c_hd.31da8075.jpg",
    "revision": "31da80759c17935ccaa1ef2133a22eea"
  },
  {
    "url": "assets/js/10.9c9c0812.js",
    "revision": "84a384858d200976290327698e0e6c25"
  },
  {
    "url": "assets/js/11.b64b60c7.js",
    "revision": "4be967df6d854bdfecdabcaf081577b2"
  },
  {
    "url": "assets/js/12.e319b65a.js",
    "revision": "8fc520819794bf265ad09cce6d5a9882"
  },
  {
    "url": "assets/js/13.aec6aecd.js",
    "revision": "8c2b76893c727370e5c5677f5417bfee"
  },
  {
    "url": "assets/js/14.728a264a.js",
    "revision": "d345b10e0a5f58bb6b3dd86852932add"
  },
  {
    "url": "assets/js/15.ec37644b.js",
    "revision": "07971ac1c176a736a4c6607b7160bb9c"
  },
  {
    "url": "assets/js/16.9ac1404c.js",
    "revision": "0186020069cc2896c7e161bb5bd5de17"
  },
  {
    "url": "assets/js/17.61a6f55d.js",
    "revision": "44d2f7dcabeca99f5d125d45d055ad64"
  },
  {
    "url": "assets/js/18.f7fdc67b.js",
    "revision": "b6e8c5ae4b845e206ff08edd7bea4456"
  },
  {
    "url": "assets/js/19.f170d850.js",
    "revision": "47b1bb710827dafdac83d2f4c3a12970"
  },
  {
    "url": "assets/js/2.825813c5.js",
    "revision": "dd7198e7d08cb71918e0a04f773327d4"
  },
  {
    "url": "assets/js/20.d910e806.js",
    "revision": "3100c13289c80acaa8368e62d39a0cc4"
  },
  {
    "url": "assets/js/21.1b1e8b89.js",
    "revision": "60ba89f9e2918a1e4ab66232dc95caf2"
  },
  {
    "url": "assets/js/3.341b3000.js",
    "revision": "bc4e0a3f1dc66295c3e2e32be73322df"
  },
  {
    "url": "assets/js/4.42b88a55.js",
    "revision": "b66f5390005ada954a82f1bbc8da19f6"
  },
  {
    "url": "assets/js/5.5bd503db.js",
    "revision": "f125776c75fd51fc0f3540a15ae9ecce"
  },
  {
    "url": "assets/js/6.cd1670ea.js",
    "revision": "1e16d4d4d07e4e8d670656c185244010"
  },
  {
    "url": "assets/js/7.1c8f666d.js",
    "revision": "534dc0c4e0177764e5e9384ea78136ed"
  },
  {
    "url": "assets/js/8.32d1b677.js",
    "revision": "eff3ce1f174d406dba1eb53bb9d39f93"
  },
  {
    "url": "assets/js/9.4bc259c1.js",
    "revision": "0e3fd36102ed74a1ae3c7fbace266c68"
  },
  {
    "url": "assets/js/app.18de2dab.js",
    "revision": "120c1b4b0eea392aad332022c2ddf5b1"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "index.html",
    "revision": "93454ba0d1a4bd0bfc172da7a4909f4c"
  },
  {
    "url": "logger/index.html",
    "revision": "e56efda60967ab835b6a3cc0525f7211"
  },
  {
    "url": "react性能调优/FPS.html",
    "revision": "76c848b832d9d419b8e8fe1267c51db3"
  },
  {
    "url": "react性能调优/index.html",
    "revision": "170c0de62ea54192f4dc893482b3df41"
  },
  {
    "url": "react性能调优/PERFORMACE.html",
    "revision": "c3bf57c6d630f431eb823ccf857716be"
  },
  {
    "url": "react性能调优/REACT.html",
    "revision": "2af10eaf9d745ec61e4d8412ebfb3797"
  },
  {
    "url": "webpack/index.html",
    "revision": "c30dea3004f639a9ff9900b5d79d2d28"
  },
  {
    "url": "webpack/webpack-babel/index.html",
    "revision": "0cf8196057cb50955217619ae633bdf4"
  },
  {
    "url": "webpack/webpack-css/index.html",
    "revision": "528a931a479f0e2ba7207d0bde112f98"
  },
  {
    "url": "webpack/webpack-js/index.html",
    "revision": "326f9c1f651fb78cf314e019dbaa85ae"
  },
  {
    "url": "webpack/webpack-modules/index.html",
    "revision": "31008eb638960fee8eeaf69280fbb278"
  },
  {
    "url": "webpack/webpack-splitChunks/index.html",
    "revision": "a3b53dd4281cb535b05272a6a02540e4"
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
