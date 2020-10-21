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
    "revision": "853487e6e105ea0c17df987f7bcd5f8c"
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
    "url": "assets/js/11.451cb182.js",
    "revision": "aa97ba1d6f1538150d2bb4befdace991"
  },
  {
    "url": "assets/js/12.5f6b247e.js",
    "revision": "306662acb0d26b3cef59c4a1436fb2d9"
  },
  {
    "url": "assets/js/13.f6ead21a.js",
    "revision": "6561407bd3b24224d7e5c6abc0619bc7"
  },
  {
    "url": "assets/js/14.728a264a.js",
    "revision": "d345b10e0a5f58bb6b3dd86852932add"
  },
  {
    "url": "assets/js/15.ed9a8897.js",
    "revision": "c28b8997123fd73882a5588b02a19fd4"
  },
  {
    "url": "assets/js/16.f2f6b594.js",
    "revision": "f8e9112d16e79aec3196b9de01feb7d5"
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
    "url": "assets/js/3.2b0161e2.js",
    "revision": "657eb72d5e06ef904823f409a6717bbd"
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
    "url": "assets/js/6.5db6eb2b.js",
    "revision": "14e98a1e756fd1a357e26d3f85c95449"
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
    "url": "assets/js/app.4409b126.js",
    "revision": "4cfbb4c3be79920152df6cc124109d38"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "index.html",
    "revision": "838566f0996a972538101b89a7b67ce4"
  },
  {
    "url": "logger/index.html",
    "revision": "f84052e512b2e795a85c0e74ab215df7"
  },
  {
    "url": "react性能调优/FPS.html",
    "revision": "d74a8a9b2848939e3d5428775f81cfb0"
  },
  {
    "url": "react性能调优/index.html",
    "revision": "262dee32fdcf9b4005a923ee152ee19b"
  },
  {
    "url": "react性能调优/PERFORMACE.html",
    "revision": "be1ff641bd59df343fd2a29dd453fea3"
  },
  {
    "url": "react性能调优/REACT.html",
    "revision": "a5b328c0a3802c4f2081c4a1e5cec434"
  },
  {
    "url": "webpack/index.html",
    "revision": "fbcd91f4b4a9a7c231b08582a0b327af"
  },
  {
    "url": "webpack/webpack-babel/index.html",
    "revision": "73b4cddeae6af6592b69889d1a30a17a"
  },
  {
    "url": "webpack/webpack-css/index.html",
    "revision": "869df38c4d8a6f6238a8b3a4ee5c5f13"
  },
  {
    "url": "webpack/webpack-js/index.html",
    "revision": "e8630e61bdbbe7697e0e7fe14ce423a9"
  },
  {
    "url": "webpack/webpack-modules/index.html",
    "revision": "94744618454ca4b588082c7a92e104ca"
  },
  {
    "url": "webpack/webpack-splitChunks/index.html",
    "revision": "1478c2d208206631787e74053789c9fe"
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
