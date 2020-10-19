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
    "revision": "918c7174e2f10e5ee382339747fe9dc4"
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
    "url": "assets/js/10.7dcf1c1e.js",
    "revision": "1455331240a54d5a3751608c3975a9fc"
  },
  {
    "url": "assets/js/11.9106cd3f.js",
    "revision": "d582c03e5be14a29945366e2c483cc5b"
  },
  {
    "url": "assets/js/12.5f6b247e.js",
    "revision": "306662acb0d26b3cef59c4a1436fb2d9"
  },
  {
    "url": "assets/js/13.2e533ee9.js",
    "revision": "5fefa960700e4d30b7bf3cc9d9c36072"
  },
  {
    "url": "assets/js/14.5622135a.js",
    "revision": "02d2b07cfdac681334e16c90ac48470e"
  },
  {
    "url": "assets/js/15.ec37644b.js",
    "revision": "07971ac1c176a736a4c6607b7160bb9c"
  },
  {
    "url": "assets/js/16.ecab84a8.js",
    "revision": "a86c2538c1fa837127c2ed24ed709b28"
  },
  {
    "url": "assets/js/17.3de7a029.js",
    "revision": "2abdc0be0db84e1f5cd3b54a6333cb30"
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
    "url": "assets/js/3.f89c6dd4.js",
    "revision": "b8e463871422e7d0ba5c6a2a3446a150"
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
    "url": "assets/js/6.f1bc59a4.js",
    "revision": "59fff0918a978bedf32d29ac9eef194a"
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
    "url": "assets/js/9.04296977.js",
    "revision": "dc3f25f26ec66863726d654cbf08941c"
  },
  {
    "url": "assets/js/app.1bac124f.js",
    "revision": "e0a40616dc8d0a81a0e0ac726128722e"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "index.html",
    "revision": "be22ddfb956d9d298a186dc4b9b981c8"
  },
  {
    "url": "logger/index.html",
    "revision": "be1e3960c398d95ea0f3ad96f400163f"
  },
  {
    "url": "react性能调优/FPS.html",
    "revision": "c44540a496f5be6ff2b4511a16629878"
  },
  {
    "url": "react性能调优/index.html",
    "revision": "b7ad34feb2538c6f94ec767c1848ebfa"
  },
  {
    "url": "react性能调优/PERFORMACE.html",
    "revision": "ac9312bd6a95d05822ebbcbe146e7145"
  },
  {
    "url": "react性能调优/REACT.html",
    "revision": "3a97f8cca44cf90c0a07cf322eadb55a"
  },
  {
    "url": "webpack/index.html",
    "revision": "a12f0af8d088599be5e488809be61f49"
  },
  {
    "url": "webpack/webpack-babel/index.html",
    "revision": "82a2c9b97a9f41f3f2ae687f0ac84ad2"
  },
  {
    "url": "webpack/webpack-css/index.html",
    "revision": "3fcc3d5270d9b3be7289db5c66718118"
  },
  {
    "url": "webpack/webpack-js/index.html",
    "revision": "f5d7988ba5f09f3b59e86141343dbd3e"
  },
  {
    "url": "webpack/webpack-modules/index.html",
    "revision": "727a459698583710e39c28f5950b909f"
  },
  {
    "url": "webpack/webpack-splitChunks/index.html",
    "revision": "bbcc8255c656a93adb0babc5240af96e"
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
