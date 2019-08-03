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
    "revision": "584006355ed5fd5cbe41c84cfecfb4b4"
  },
  {
    "url": "about/index.html",
    "revision": "fd574c1d3da1e88b24ecd300677249e7"
  },
  {
    "url": "assets/css/0.styles.e214c3df.css",
    "revision": "de6d251b654f3a6149b4b15894e42863"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.39bac0b1.js",
    "revision": "bc5fb411c991bedf325584308c7162e8"
  },
  {
    "url": "assets/js/100.fd57ed96.js",
    "revision": "6d314e91b45069e2a0dcf7ce5ddced74"
  },
  {
    "url": "assets/js/101.f0b6aa5b.js",
    "revision": "c89f287e4657107beaf36c063503b9bf"
  },
  {
    "url": "assets/js/102.93205558.js",
    "revision": "fb0aab3f3df942b10084924e8b1878cf"
  },
  {
    "url": "assets/js/103.2cc6782c.js",
    "revision": "bd3f8257ea62d1b600b1b1eb6fbaac75"
  },
  {
    "url": "assets/js/104.f255d951.js",
    "revision": "f038aaa2684650f4fa6e09a85ec050ef"
  },
  {
    "url": "assets/js/105.30450a2c.js",
    "revision": "29bb5595e0ba02b8aa7d19a0f6b28e33"
  },
  {
    "url": "assets/js/106.fd065682.js",
    "revision": "f7757ad6c32134c74a7a884b947c1bb3"
  },
  {
    "url": "assets/js/107.485b8ade.js",
    "revision": "86dcd53bf7f2a41f6548c1ef540d4d21"
  },
  {
    "url": "assets/js/108.fec2805b.js",
    "revision": "1fbe0e883cb24dcbb5e13df6a2e50589"
  },
  {
    "url": "assets/js/109.32f99e0e.js",
    "revision": "7c43cb4aa830c4af7d6ec2e73a2046a0"
  },
  {
    "url": "assets/js/11.9d8470e1.js",
    "revision": "70cbd2558e68f508d305ef7587e8b49f"
  },
  {
    "url": "assets/js/110.60e1e5ca.js",
    "revision": "0fc2b7337a3a5dee65fb66aa9ad8540a"
  },
  {
    "url": "assets/js/111.1adc89df.js",
    "revision": "f318af15d71a0d48f510aaeace8f3b0e"
  },
  {
    "url": "assets/js/112.e0ffd5f5.js",
    "revision": "ab441f5d5b7c7cb5ab9dd5b2ae1d2b50"
  },
  {
    "url": "assets/js/113.0a7c42c6.js",
    "revision": "1286d3602625aebbeadf6b836f2cca77"
  },
  {
    "url": "assets/js/114.0ccb917a.js",
    "revision": "ca1b78e7bf047ad6c045ae4af3e68a85"
  },
  {
    "url": "assets/js/115.58d882ed.js",
    "revision": "70f80aa04e84e20c0626e932c59f51d3"
  },
  {
    "url": "assets/js/116.02bf4dfa.js",
    "revision": "9a3f5045d31a00c9ffcdd07c7cf03ffb"
  },
  {
    "url": "assets/js/117.cc9bb604.js",
    "revision": "1d887d338f68eadfa5915cc4e20ba8ac"
  },
  {
    "url": "assets/js/118.290c0997.js",
    "revision": "8198a7cf1dc0aaa6567491c1310c01f3"
  },
  {
    "url": "assets/js/119.345f23d3.js",
    "revision": "218a71526fe62e35358b66b02781bfa5"
  },
  {
    "url": "assets/js/12.69db6e7a.js",
    "revision": "656547a3a8f3abd55098ecccdd4ed6d1"
  },
  {
    "url": "assets/js/120.cad3cc1c.js",
    "revision": "819fa9a0af4a77ada7d3f22e9f7d7666"
  },
  {
    "url": "assets/js/121.3183b4ba.js",
    "revision": "87b94a153294a2eabd6938014d3556f1"
  },
  {
    "url": "assets/js/122.e7c7cd4e.js",
    "revision": "46d6815b3791427796836447349dc32a"
  },
  {
    "url": "assets/js/123.ca0a1008.js",
    "revision": "a6dc7e52292cad0f18bb97a2decf4b3a"
  },
  {
    "url": "assets/js/124.56baffd8.js",
    "revision": "041546763428f70bcebc83aafb56a2cb"
  },
  {
    "url": "assets/js/125.5f1ccc3a.js",
    "revision": "e87a1f6992362f13f2b4362f1f4c6341"
  },
  {
    "url": "assets/js/126.4b49eb83.js",
    "revision": "3e6c5dc60bf6f7315507ab3fd7f2d85f"
  },
  {
    "url": "assets/js/127.eae0256d.js",
    "revision": "d335229e92dcee7a6191fee6105e7e4d"
  },
  {
    "url": "assets/js/128.a5bdf96b.js",
    "revision": "cc24aa905950d5a7852065ed9d3b5c7d"
  },
  {
    "url": "assets/js/129.23920d9c.js",
    "revision": "ee23173b2c13f72b854ffb7fe0cb3e4f"
  },
  {
    "url": "assets/js/13.e7120643.js",
    "revision": "108fd99693dc77a26560324dafd184be"
  },
  {
    "url": "assets/js/130.04eb36b3.js",
    "revision": "e98024c636bc0ff9fd1abc7fc3d5165d"
  },
  {
    "url": "assets/js/131.434cc23c.js",
    "revision": "2ae05336f7f2ac9d0717e239e798dbc4"
  },
  {
    "url": "assets/js/132.c4627d1e.js",
    "revision": "ce26db5f71fb58685f7dd31cad29f632"
  },
  {
    "url": "assets/js/133.2c6e4dfb.js",
    "revision": "ff887b9baa436edf3e7f0092338e7d6c"
  },
  {
    "url": "assets/js/134.6090f7de.js",
    "revision": "a62691597502e39f04cfee2300bf2692"
  },
  {
    "url": "assets/js/135.0b59bb53.js",
    "revision": "aeed210c7135388456fda6308ac1fc50"
  },
  {
    "url": "assets/js/136.778cb385.js",
    "revision": "d2c84d23903d32520aa3a4403789f0fd"
  },
  {
    "url": "assets/js/137.1f77396a.js",
    "revision": "4542541745e945d496ffb348b48d531c"
  },
  {
    "url": "assets/js/138.1ee7876c.js",
    "revision": "1acca29b1b30558671df884a317d1e30"
  },
  {
    "url": "assets/js/139.bc6171bb.js",
    "revision": "3c3b6b9c9fc4585f70ce01ccddf8fe17"
  },
  {
    "url": "assets/js/14.d787716a.js",
    "revision": "35494fa6448b207f9d5723e1060ad0a5"
  },
  {
    "url": "assets/js/15.07cb8854.js",
    "revision": "573b8cff368c51f5be8c9c516978a004"
  },
  {
    "url": "assets/js/16.55631492.js",
    "revision": "db2a15d2d9564f34eb68ad8dafafefbb"
  },
  {
    "url": "assets/js/17.39b44c67.js",
    "revision": "fb5ac60eb1c4f1218fed105f0e8de62c"
  },
  {
    "url": "assets/js/18.730379b2.js",
    "revision": "f4719607ce420ef8e54b46ca3fd6c363"
  },
  {
    "url": "assets/js/19.3348c346.js",
    "revision": "c14d79c079c732c7c127631eeaf85e3a"
  },
  {
    "url": "assets/js/2.15ea491b.js",
    "revision": "b7334aebfeefa17efdda0e1449e55065"
  },
  {
    "url": "assets/js/20.32593131.js",
    "revision": "33c679760828147f8e8f18792c3a4e57"
  },
  {
    "url": "assets/js/21.e7c39bb9.js",
    "revision": "98137bb3241a0d333da319c1b86cc0dd"
  },
  {
    "url": "assets/js/22.025cdbee.js",
    "revision": "392747b6d11eb1e35053032a0b693ee3"
  },
  {
    "url": "assets/js/23.3274e647.js",
    "revision": "1a13403cd8127df881ae920b1a570a39"
  },
  {
    "url": "assets/js/24.973bc691.js",
    "revision": "8561d4f08824e0cda23b013df249c327"
  },
  {
    "url": "assets/js/25.150d6800.js",
    "revision": "2c99f01e74f04a20523c5f379998b4a7"
  },
  {
    "url": "assets/js/26.7c17416c.js",
    "revision": "69e5f23ffc07b894fd641fdfcc1f73ec"
  },
  {
    "url": "assets/js/27.32965f2a.js",
    "revision": "1771382d07e229d6fa4844141fcac58c"
  },
  {
    "url": "assets/js/28.9f663a47.js",
    "revision": "3c0792601c8ff0ff723dc0aade1c0007"
  },
  {
    "url": "assets/js/29.8b84c271.js",
    "revision": "7f6f16062242b0fd5501038e3a86cbf6"
  },
  {
    "url": "assets/js/3.fcfbf359.js",
    "revision": "97467a195f38b00e39de255ce6e2d615"
  },
  {
    "url": "assets/js/30.5cd4125e.js",
    "revision": "0568f848272e6a837e090d36e785e072"
  },
  {
    "url": "assets/js/31.63c70206.js",
    "revision": "635bfca71ef06f2d544b9d83ad75ee14"
  },
  {
    "url": "assets/js/32.2dbfd237.js",
    "revision": "dbf535cc75fa5c1da6592c2e66431fc2"
  },
  {
    "url": "assets/js/33.4e0e61be.js",
    "revision": "803de6a5b34963d670ff18fbcff026cd"
  },
  {
    "url": "assets/js/34.6b0b483b.js",
    "revision": "03c2930e24310cef6357ce0c7e5d05bf"
  },
  {
    "url": "assets/js/35.75ac7c1b.js",
    "revision": "8d6af065cb61ef8bb2f5bc87f1f90857"
  },
  {
    "url": "assets/js/36.0c18ddf2.js",
    "revision": "9efe0d5e304ea0579250c513cdb0e340"
  },
  {
    "url": "assets/js/37.c993e1e1.js",
    "revision": "d110a1a4f44fbbe7e41a0261c733f5e3"
  },
  {
    "url": "assets/js/38.c24f4000.js",
    "revision": "3e45a80f14bfd580053710206097fbbc"
  },
  {
    "url": "assets/js/39.d49313ea.js",
    "revision": "152c31c54fc0f3e3dc5498a4e6497a6a"
  },
  {
    "url": "assets/js/4.f5c89672.js",
    "revision": "bac1b010666919c63ff2466e1b7dcfa0"
  },
  {
    "url": "assets/js/40.9e5329d9.js",
    "revision": "c035189485a95f2fa99e81fd31d596c7"
  },
  {
    "url": "assets/js/41.05020e95.js",
    "revision": "fd0930870f865281a19ebf13604f60a3"
  },
  {
    "url": "assets/js/42.410d449d.js",
    "revision": "e6210a1e705a5db420b3e584e55146dc"
  },
  {
    "url": "assets/js/43.b60931c5.js",
    "revision": "09ada63dbb6e3a1cb131802b32ce7533"
  },
  {
    "url": "assets/js/44.73ee05cc.js",
    "revision": "e59ab033c734567501bd2bca7831cac4"
  },
  {
    "url": "assets/js/45.e5dd79c8.js",
    "revision": "c1f96836d2c0668f081375e29842dd5f"
  },
  {
    "url": "assets/js/46.40c35b80.js",
    "revision": "1160357cedd7e20af977e642719c812c"
  },
  {
    "url": "assets/js/47.e96bc621.js",
    "revision": "b30435692f6e16fb5557bf8d69bfa9a9"
  },
  {
    "url": "assets/js/48.2b8b3908.js",
    "revision": "6ecd3c8c343157271d12a4e4a598b0ab"
  },
  {
    "url": "assets/js/49.b439f61d.js",
    "revision": "4d7664732b78bbbc8bca3277b0a00c1b"
  },
  {
    "url": "assets/js/5.ae989ac8.js",
    "revision": "5e550237b63b928fac2ca1a27ea2d05c"
  },
  {
    "url": "assets/js/50.8e5dfed6.js",
    "revision": "3939fe50e59538e351b862df5a080872"
  },
  {
    "url": "assets/js/51.2d1c36b1.js",
    "revision": "f95a5607c953e25b9e6b0166b089d5a6"
  },
  {
    "url": "assets/js/52.660b2366.js",
    "revision": "b819c9ca6bf8f104e5348ef62a956115"
  },
  {
    "url": "assets/js/53.78a4d656.js",
    "revision": "9038eb805e3d9fdfd8c987687a530297"
  },
  {
    "url": "assets/js/54.56d144b9.js",
    "revision": "73d524da5ed6af79e5d58db6c2c33911"
  },
  {
    "url": "assets/js/55.7c851ed5.js",
    "revision": "e666ec059fcf61006ba0bb94adad59af"
  },
  {
    "url": "assets/js/56.a8752b80.js",
    "revision": "cb81e150b9a093d510bab9fbc6d869ae"
  },
  {
    "url": "assets/js/57.c746b49d.js",
    "revision": "69c67e5bfb4d4c32ed42a05a8e06851b"
  },
  {
    "url": "assets/js/58.cf844bc7.js",
    "revision": "ffb5abe263f513fb3efea1633c0a8f5e"
  },
  {
    "url": "assets/js/59.b72c8894.js",
    "revision": "4eed3736fea7ef741b1bd6255de6e3b9"
  },
  {
    "url": "assets/js/6.48d02ac7.js",
    "revision": "a9283ae8997d801fd3ad8a5b36dd5328"
  },
  {
    "url": "assets/js/60.30569bec.js",
    "revision": "b289a9c15ca29128cc949f1ebdd828c9"
  },
  {
    "url": "assets/js/61.6132f7ca.js",
    "revision": "63b7eb13e5d02e9817fe353c38cfe1fc"
  },
  {
    "url": "assets/js/62.68fedabc.js",
    "revision": "10319aedc4c122861562ac7b237d3de0"
  },
  {
    "url": "assets/js/63.b8f40dcc.js",
    "revision": "2440e3d3af15fbf3112fbb9293db61f3"
  },
  {
    "url": "assets/js/64.878f889f.js",
    "revision": "bdaffb2bf380d7594d88aa221f19334c"
  },
  {
    "url": "assets/js/65.bb38527f.js",
    "revision": "238604623b76097fdfbc7d89d276a635"
  },
  {
    "url": "assets/js/66.59984850.js",
    "revision": "ca96f3ecff4871225dcdf18fdee8c0c6"
  },
  {
    "url": "assets/js/67.e759b917.js",
    "revision": "37918744bd04cbc590b1816729b8a7b6"
  },
  {
    "url": "assets/js/68.37726cee.js",
    "revision": "1435cfff9e0c875097a403da1414d1bb"
  },
  {
    "url": "assets/js/69.491945cb.js",
    "revision": "901a3c73ab0078a0abd230cc6684c7fb"
  },
  {
    "url": "assets/js/7.45a1085e.js",
    "revision": "05eb7800e158cd1c9c59c1ba563ddea0"
  },
  {
    "url": "assets/js/70.fd4eb363.js",
    "revision": "6a8ddffe01be63f4003d09b756d5b9d2"
  },
  {
    "url": "assets/js/71.4c6972ae.js",
    "revision": "33926f6741dc0c61f9e81e49f7042f1c"
  },
  {
    "url": "assets/js/72.d0bba548.js",
    "revision": "e81ee53c305f3e22cbfff86866a6405d"
  },
  {
    "url": "assets/js/73.1f532f8d.js",
    "revision": "4bbb48d3921a9e1f47acaec64cf53113"
  },
  {
    "url": "assets/js/74.c7b62ea7.js",
    "revision": "c581458c5a55c6cbf30727bdba179ad3"
  },
  {
    "url": "assets/js/75.218717d7.js",
    "revision": "67a1c0d3a304332da7596f3c035134c5"
  },
  {
    "url": "assets/js/76.c3af233f.js",
    "revision": "657f6855976c3fce95bf4251fc700c5b"
  },
  {
    "url": "assets/js/77.e71ce0bd.js",
    "revision": "2279de5a5c88b3213abaeeed6f0813da"
  },
  {
    "url": "assets/js/78.4c3f4fcb.js",
    "revision": "3d91004c4f03389de2a5353c9e5132cd"
  },
  {
    "url": "assets/js/79.300a4bc7.js",
    "revision": "bf9302f8b18c567518cce8439c4adf26"
  },
  {
    "url": "assets/js/8.219bbcf2.js",
    "revision": "cc9e51de9a53605ddeef874398cb8e53"
  },
  {
    "url": "assets/js/80.856b02a6.js",
    "revision": "c774e9030255b39257a5bb451ad69c7a"
  },
  {
    "url": "assets/js/81.6fc6b734.js",
    "revision": "1deda63e6881ceb36d856c20449b413d"
  },
  {
    "url": "assets/js/82.749d412d.js",
    "revision": "63c3308f78970c97e2039d8cba15aed3"
  },
  {
    "url": "assets/js/83.41613da2.js",
    "revision": "abeb7db022ececd5e4e71e74153fbdb5"
  },
  {
    "url": "assets/js/84.e621bd7b.js",
    "revision": "a8c14cfaa76368cfda46aa919ab9d525"
  },
  {
    "url": "assets/js/85.d8bfcd9e.js",
    "revision": "6302eb82406aea1f00f8e0df2038bfab"
  },
  {
    "url": "assets/js/86.d805d7f4.js",
    "revision": "105abc28872ef8c16367e941ec630356"
  },
  {
    "url": "assets/js/87.2a899dbc.js",
    "revision": "b1577424860f0b9a2dc4448222780f3b"
  },
  {
    "url": "assets/js/88.d6b2137c.js",
    "revision": "3ab2931a0c1a480d5c7f31e085bb855f"
  },
  {
    "url": "assets/js/89.54824c92.js",
    "revision": "eecda4382561ccdc45514bdacd730b93"
  },
  {
    "url": "assets/js/9.afcea29d.js",
    "revision": "30f0081a92c967f2d850b728a218f972"
  },
  {
    "url": "assets/js/90.6075d856.js",
    "revision": "1266079ff254099954562eb53295500d"
  },
  {
    "url": "assets/js/91.f6557b72.js",
    "revision": "341804785e34fc2522113ed6ddf25187"
  },
  {
    "url": "assets/js/92.070c03a7.js",
    "revision": "8d8504f363bdb53b84f11214d8d16b51"
  },
  {
    "url": "assets/js/93.460de4ea.js",
    "revision": "fff21a57bc9452bda336c65ca1837e5e"
  },
  {
    "url": "assets/js/94.75cbb7d2.js",
    "revision": "68b89faed75e3542101b8c3637451bc0"
  },
  {
    "url": "assets/js/95.f6c99f96.js",
    "revision": "db77152ab2b54a09b50900433fb16441"
  },
  {
    "url": "assets/js/96.cd5208a0.js",
    "revision": "cd2b68b6043ed73801846e9d061e24f6"
  },
  {
    "url": "assets/js/97.ba3f4381.js",
    "revision": "ae58040085f7ac02706b957f61a29751"
  },
  {
    "url": "assets/js/98.3042d54f.js",
    "revision": "786c8d212b1147a04f492b90b4b75b07"
  },
  {
    "url": "assets/js/99.e7085bcb.js",
    "revision": "4d4e178ed69008c7641c4f537e12ced8"
  },
  {
    "url": "assets/js/app.98e72b6c.js",
    "revision": "47210b782257b3c1fc6d01ef88fcb7f5"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "c17083efaf4cc488828c9584b05719c8"
  },
  {
    "url": "friends/index.html",
    "revision": "227056944c421525dc45dc722b9e6555"
  },
  {
    "url": "guide/index.html",
    "revision": "7dc58e9e7ff79f3b8ac65d974e6e4c92"
  },
  {
    "url": "index.html",
    "revision": "8509d7be3207bde0b7a257a79d33d0f9"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "8a2d4ff05de68c640128ea0076adf701"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "1f98ea151f500a1c745b8bb78ea2d802"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "22079cfe56e55186263af0c5a440d818"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "b0308aad4c9887b455df23d949165f2c"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "a55cdf9c6e58dfa39fa53c38d8d1f06f"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "f5625cb8cef6c4191cfdf78d6b0380c0"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "650f6b4157d1a045681e90b611c27b3d"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "ae514dfbf0a2c8ca7d637d4d84d733d3"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "a9c71965d35206b3a12c51e141093cac"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "d5e20fc166fb07eb183f2c6fc5e9eadf"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "de83e0a7669d70c94c1d55f5ed05ae24"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "ff5eb307a15688ba6810ab6d5d47165a"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "d358bc95c23c42e729615106e6dfe111"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "2bc35ff565e63cfa14a0626fab43c78d"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "db40cf755782c653ff78786d3dc52edc"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "76c589eca427ac6f917b0745d9469f32"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "52a4b16c1b61a70f4085e5b5b7613cb7"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "165c8eb9f9caa017990573ae1ff11ed7"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "3634aa7a307117445f290a22e60fc112"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "a2670d70e753e3eec0718a95fb491967"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "33044e8029c037776994eda618e73c52"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "98669abed7b83a9c8269c546e8c78a09"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "f578d1c072f0eae013df5b06231f9707"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "b02dbfa7b01d3549dfd37aa50388c4ee"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "5bacdd8d13c5a6124f75286ceb8ba17f"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "9700b99d3162333fddf87ead07b67aee"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "602df9dea21f36ce10559ebc5c2ba03d"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "0daa4fa11a29178a581a47bc237c6896"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "170d011cea616bb778ebc3ecc4be0eb5"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "3617f30ca68cc4d499a43dfa38bbf7c8"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "391d598707687ceb17c0133b830f3c8d"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "941d461afcf1e417d9f8e6e9494e489c"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "ba5e529b23622061ccfdddc01e40212b"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "3f40cf59f21cfc9a7b25dd539424fe1c"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "9358abaea9b597cd136dc36826ab0126"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "b6927991130329a4c2e69dec2a8667fc"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "9ff44c21673bdaa6f187b7885c0f7d43"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "10b9c821476d7ad648d6b496c0c535e8"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "af013e081af1d12af47c0e24b9daf2c6"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "c540264f26b0ad001a2f516baf2099bd"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "251eb2cfe44fb6ae316a6e56a27ca941"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "599ab1a56fbed359f4c953a0713271dc"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "60b157baa931102e40510e39b7d2ba87"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "168efa9cede3c25b47200a982e65b9e5"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "c05bae30f81f10e19119719ed26678fe"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "25f4b221cc4c7efa16db097be10c62a5"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "533c44d57bfd3ae2769eea351ee9dcd8"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "4e6b98a5a5831b5ba6771835fe10d4e2"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "ac3f6939f2a9083ad30a13e7787c3035"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "3e795c12e674738121b8d3cc8ef563a8"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "d5609ec62cd897451290bb4e80acbdc0"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "04d3890182ccb96d46bfbeb4738515df"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "5e163796bb50886d02a6251f5afb301b"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "8e33dfff46ac61d3beb8b3e57160ef43"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "18fd7fee5dae2b70dbfe8b73391452fd"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "0ed517195a314e32f2c91f54d822bd0c"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "b329b2ecc080fac7b9f09d4b9830533c"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "4637df8ed30a90e3efe3cdef15698b91"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "16b57617dbcf66a6960e7132860da9e6"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "f47aabcf2992263aefa841d3f8083d40"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "4d837ce8d7264a5a062ff1688e771f62"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "bb7b36613ef7684e945bb62941b3f815"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "7ddfef4407110f588a5b5474b5bde46d"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "3375b1a66508fc2666034683845fc78a"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "8e30f8224d3442cdcb68c394ca1b0937"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "19062865430ac88150434ecf1294ef01"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "9a3b0eec2b398eb24f877d49aa325be5"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "eb4c05b163c13ab526f6ecc37ef4330d"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "4ff897c4a16e57eb18318ada30b57d3f"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "b977e368520e8a9ffbb166bded11a8d8"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "41f1ab28432b3c2fdd22ff5b08236147"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "aa6266a2a179262aa777cbd7a313653f"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "f7d169179cd50ffd2e4dc95e0e240782"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "ef083a824ab9388119beb2d185452d20"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "93c9ec5963bbdbe2ffd02f906fad8e9b"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "1fc01817d64189d03719fd79eeea8ecb"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "24b32e2bfaa9be7a0fd1a674a58334c3"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "695c2da5786d98e77bd06cc6bf18847a"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "6ea1d158b3533687aee5a6908589a684"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "70800f82c92adf0818e6e111af2dbf0b"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "47e89dbbcffc2188b4e1a8f55579a191"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "fe00ade7597aa387c0a66aae6aa46d6d"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "8606f197979f1eec047bd3fbf79b0ec0"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "2186ea1e754da337d6dc5d0b0e29ef89"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "79729d89c9892efe1285bc1ded9d52db"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "2644f5537cbb5c6d0d4ea16a257ac8b1"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "486413f4798044f64cdd2a1d11063bd7"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "a342cd64d97bdfcc17084888b7177ff4"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "dd183596a816406978c52c189d5ab491"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "5ab97d958f484bde0ebd9f657bb5ef0e"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "8aff0ca4b6c5d005fd77b81ec7f2215c"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "d8f0474f43759962b8d256455ac5578c"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "7f0ce938aaa28cc0f11fc54c142dcee2"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "df2677759d3d99cb2548044fb54708ef"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "f879545b43a43b15879d934daa6471ea"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "714309536fe9ede8531ba6430f236781"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "0f577a1bfe530b5352c374f92b2b0734"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "e5311c60d6dea8d318d010d7084a8f8b"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "7495c4fe6c9011b19fcf6c84459b5e1c"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "8bb76ea444989823f8647836dfc07a02"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "f1fc05dddf9850a63e95eac3ced9ddb0"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "da62f070845c63e2e6936f71251eb504"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "16b6808fbbb3b7560162dc667c5b983f"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "4e22227cf29400f73fcfb1e14d108ee4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "0e72c7f7f539c20f4f1f81398786f4c5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "4d7f9b8130d9cf5aab9fd03924bda812"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "a07e645f43c88725fda6095286001167"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "0b8fb497f65f26e45f2af8ae018e9f28"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "ae00ab22475ec66e4440fdb6a207662d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "7872d009a5b9fc320a397b3735cae26d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "c48b3b5d61a27603d1ddd39bd2e213e9"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "0a9a2b6b90ef505a78725738396c0869"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "84f330648f5f674c93c47e7ee37a9504"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "6a816408910bdd4b95e11bfd394f2a45"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "c3094517a0d56bd2d5b06d8d223166ea"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "1a9803f6ff0e01397879413edaccbbb1"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "c32a102c5e54ee7f498c5f7e02e2bd72"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "76e1e8af93a8cdd3a48dba3493bca1ff"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "9929728c302d57011d5bd3dfeea8e654"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "443a721c990acf421883bbe62d72888f"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "22ba9dce0bacee30d4acc7617089c8b4"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "97b739f8f0a1c8d252436fd793004f0d"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "d8014c54f8a39bb4b6f171a4a6fdd2aa"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "72b375edc23750fb31629d70bb05c3b3"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "166b4ed92878754bba83abdec1170da1"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "deddf6a34a255c9807bff279c694002e"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "7a254316b9b468c0546e4f614a67906d"
  },
  {
    "url": "设计模式手册/index.html",
    "revision": "9eba8fd17b20fed10ef90ef52ba493a8"
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
