'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"version.json": "1b4a0037213ef1b5bf8ec9e6fd4cb070",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "27e614500fca947633357057b2f61c91",
"/": "27e614500fca947633357057b2f61c91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "3dfb6af3c727fcce1a03c7cc1d001a64",
".git/FETCH_HEAD": "f5c2e3feed97f04d962bf4d20a6ab32e",
".git/COMMIT_EDITMSG": "eb369da681e4e11019748bb8bf036785",
".git/index": "0cb638cb36e696f16648125472c72653",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/3e/ae6a520512c45c6d28038b7c94459105c616a1": "7decd888993ea2e8ff77d8d83e805d99",
".git/objects/19/4c8190995fc8e50a6a04b8cd42cb003f2002fd": "7073ecf7de4e2f0badd6ac3fe10b6462",
".git/objects/2e/34ce38a56581d2bfbeb1148c4a153d574411e2": "27b6c0b58a52ca40e7a2cb08b3849630",
".git/objects/ac/97e791cf5a49cfc300748fdde0441c76cfa7ac": "4c27504288bfe3bd5c19185c843dafe2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/82/902ba9b7a72cf85f6597428d00300df28d3105": "390df91b90c85f3c268c1e842de86d63",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/5d/2a4f30223f1abafa2a7a33942d6106b2470d3a": "c3cee4601269b005177b9d2d1c1284e8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f6/a283f5c351b070dd091a2219cf222ca5cc20d8": "f7b33c8ccf90ed4738e76c9b1bc90133",
".git/objects/1d/a43322baec67eb35348ed734f9c6d084f2d957": "ab017d3c45b4cc429722c0d55befb9da",
".git/objects/ae/8b45266c5db101430c8baee326b086503d4397": "7a225996e9f0626e4914de5ff0cafcf6",
".git/objects/99/2f943d5707141d75722df8f2711315e4b3b488": "73964b419fad42ba2aa102c684345dd7",
".git/objects/32/4ed76ef6e5f9ad8fa02617181c237f069b3b10": "a619dc19f3bcab70dde853016b9dc020",
".git/objects/b8/a20a32219e9c02e714795ed23b599e07d0b18a": "f9fca66e9564321f413a0c3351a86032",
".git/objects/b8/0f103669cefbcf87fba9055a8d1db92a167936": "9cf640601b7fba06d83706a23c0e5017",
".git/objects/02/9badea2653a99fa2bd4387c11012b30690e6ea": "d7303f68595e6abbf8ab3c1936316e32",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/92/24aa9c5cc2aa00bbbdc01c2e8adc742c77c1a0": "0b2491a898af92ea91e7d3976b3b9a7c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/41ee4583654d8e9a0b1f574c9baaac7d5daa12": "6a99dbc3c9d0f15ce3fcc0599e4fa9c8",
".git/objects/4d/6a4b772390783b51e3f91798db93d0b6bed2aa": "58946b49806368245404b73804fdce96",
".git/objects/cf/a2475b292c819236c0f6145a319de5fa41e962": "10d6d190348b70104406559adb413b68",
".git/objects/7b/8ee2ce7021857610371270292967e8090351f8": "86f47a0ceb3a06e5d41c99251c234cf1",
".git/objects/42/7dd1e0db950b1e024e2051cc095fa003383498": "9de92832791b0de2c6072d1b69c38e0a",
".git/objects/dd/66f8f07b1ab2d6607daa622b0fa1700f0fbf16": "ec34754d0a5b0bcf6683a8d003f7ee74",
".git/objects/dd/4d3de34bcfe02a2dc86c95ca66a2292284e5cd": "2dd6277aa509a8fceab2a69d1275ddc0",
".git/objects/9d/02150e2073deeded63b9caa1a214b77f31cf68": "fc299dc5081496b1a06fa376f5262dcc",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/c6/08b3780a6798c4f86efe9551a53845fa4c25b0": "0b5fa61933e49572537a21e62ab5e206",
".git/objects/4a/5bc48c8979ba2d8b75b573c499183fb91b13a7": "b0a2a7e4870cc47511d818b2d6dcadeb",
".git/objects/27/e79b3bf9eefb3e377ecf057340cb43a34ed7e3": "30e16688437fcd66184c8f6d4c92fa96",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/eb/fd4e455df30e26c04df30b73b051fdf56da955": "5f2bc11949eca8343a9a5f3e02cac63b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/11/8130c9248e604707ffa90b7af0af152206ca1b": "20dcea82d8c923e54a3b8945a208916c",
".git/objects/6e/9ca2e237bbb9087dd8deba8c615dabd92ec9c6": "232015112c4e02ff2199fa506c9391cb",
".git/objects/09/4f577bc00f7a59e3a4780d77d0c9d463f3f055": "3dd534151bc6eb5afdfc7132fb498a83",
".git/objects/09/9c753d9c52319857b5206f1e83b4613264baa1": "08dd1c6bccf281cd3745585df9623043",
".git/objects/09/9b7b8dd97f65e0a2285bf7ea530ef65519be86": "093227edd72bf70f1cd66dfc8cf3396c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ed/fa9e31e2290cebc920b30a89561da95ea7589a": "ae5cf9a2c18a2a7df97b3df777de5c78",
".git/objects/c2/24ca5e9486f8959be660fbf71f30fc042bfd1c": "a7d489402f93ec1d2e926ec729a28186",
".git/objects/bb/991a2827d4c46fa143c64fc2ce9bd48d9160d3": "4dc83d3d6aa7a82800cec15fcd06d58f",
".git/objects/54/eeba059fca7b09fe558d84da3e45a212ae22a2": "a9a2b0686f6e653ea56e02cbe99a271f",
".git/objects/f3/439e55e74579c0708cbe2e09be17385f92b535": "d43c6f92416563276e90dcc835982805",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/46c5df2b7554b728559d1f86a9bbab6f1b0de2": "2ec1d3b958c76dd5c5b697abfdab01dd",
".git/objects/4c/51535de0e39bddb1ddf02d2c6aafe051a915d1": "81c33e38de4b5a9411e6f3396e2e2e32",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/820bf762f1c4d2bc5d643a6cef37bfc941f69b": "be2a80df7f38f986ab5725705a8ef812",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/79fa35102df1dc62ac67f707764945d02352f7": "46e056e7da5d0550e4763f60ae7ff5d0",
".git/objects/c1/4099c59c45ad335bc312e4524da9bb303842cf": "fb2768d014ecd1d8e4aec00fe7f96bb5",
".git/objects/01/7502d18100ee50d184b6a8a684455bcfa67b1b": "34512c9b12ef65621f4646d7b75b5ef1",
".git/objects/61/c5210b5905ff7f10f13ab086115978a41d531c": "e6f47ac3d899c65fbc9e6ad431628f42",
".git/objects/d3/c4e290f19099e4884145f7a30e4f23f24b42b2": "f293a6706db9bb86802c42457c7cfbc6",
".git/objects/9b/c083c9b636a54bf98ec6a7f763fbb1c433e402": "d69dfa141664a58d017b2a34466eaf0c",
".git/objects/9a/e7c5b23a2b6452af03a500598afb1e57a93c98": "5a1ba40311829ac4c874434298d9f6b6",
".git/objects/24/43f5438f46f84001f4cfcfb6cc9966d26fab1d": "dee3841c72e885ea01c3715465d03e9e",
".git/objects/24/3d16e5881b2bf39df70166f094dd0c118dd7a7": "589f58793decce41ce0a6edc86bd6414",
".git/objects/24/9eb6611408ee44be44b9a7d4caad9a499590aa": "9e106600aa795311d74a2e69d27fb2f4",
".git/objects/39/3e514da4c0cc8da22c1461bd971582460faedf": "05eac9eb61621b9217ea72ce1d952b8b",
".git/objects/67/1285b6ed29c1c89694f5e4dba39d045b90282c": "bea63e7aafde807b8df6d79989ac6d4c",
".git/objects/85/24979b105d31d9da72d33fcdda3ec187e6e8f7": "9225ab30637061ff596af11ac609a703",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/06/4a771bd3960823f5e8ab289dae39c2c1f71373": "0dfeb7c1313565e28215218c5997a1ec",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/62/807944dc3a25246235b5d3574c3f27f4d3131e": "75ea87a2e2d066dbef4ed484c5f51b6f",
".git/objects/62/b71a7585758d69aefce2378d8e62daeb370c25": "81b7dd0f1754f95deed969eb0df0f41e",
".git/objects/f7/df94bc77673965f34776c8b72cefa345ddadc2": "f3dd64b2c64a0322e25db965a5b89680",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/refs/remotes/origin/main": "13e8b1fb83ed15a4c987940e4169f1fe",
".git/refs/heads/main": "db348cdbd47f594b2a8533f246270eeb",
".git/logs/HEAD": "a2f859fed64461dade5a1a8793d2bd58",
".git/logs/refs/remotes/origin/main": "a6d534af8d21730d87f05abb264dc6e8",
".git/logs/refs/heads/main": "819033079ef5c2db3c35414101ca28d5",
"manifest.json": "3de5f110d10bbc02a4b8040c801c4576",
"assets/FontManifest.json": "7c14da87392e16871580825732b0b3af",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b3e3e6d3043cb843f0bddeb25910d1eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/packages/flutter_slimy_card/assets/flare/bottomSlime.flr": "ca03aa3f1540b6ddc0711f153f02ae8b",
"assets/packages/flutter_slimy_card/assets/flare/topSlime.flr": "65ff491b065af4abfb7379c91edad2f7",
"assets/AssetManifest.json": "074169158ddffa16a2de591298405a6a",
"assets/shaders/ink_sparkle.frag": "73554ef5cfee507d43acbc2655d2f0c7",
"assets/assets/images/red_android.png": "9f50af77d8168f88847af8069e05a534",
"assets/assets/images/vivo.jpeg": "11133c32aef56f85615ffa4a7dc24934",
"assets/assets/images/iphoneViolet.jpg": "f251ae8f4b2bb92a6e44d3f19638e6c4",
"assets/assets/images/iPhone.png": "b01b8a73a8b500006c145282126d2ed1",
"assets/assets/images/smartWatch.jpg": "f46c3577e634a3461c88c67c625b67eb",
"assets/assets/images/headsetWired.png": "68dc0852bd88bcee3b94e6db7239ddea",
"assets/assets/images/Xiaomi.jpeg": "4194ee1a411848fec32507ec1a532e46",
"assets/assets/images/MainImage.png": "dbadd6633703f3b9c02358a9eec5835e",
"assets/assets/images/redmi-earbuds.jpg": "a87859ca278b5f9dc9ef7aa02d80f879",
"assets/assets/images/Huawei.png": "a0523e32474e455571c83e2a1d476285",
"assets/assets/images/click.jpg": "d841ddaf9d98bfcc9f5776f262451a78",
"assets/assets/images/navy_iphone.png": "2080f57e20744915af4da2dbc8f75bdc",
"assets/assets/images/keyValues.png": "94a7a22157c5107fc3657cfe6919f852",
"assets/assets/images/SmartWatch1.jpeg": "6c6911c0a8af22b0f1bfa49ae54114fc",
"assets/assets/images/htc.png": "0339b867420db4697d9d806fd0b1c6ac",
"assets/assets/images/iphone_with_earPod.png": "d0452dca0f90d90585a824c7c38f846b",
"assets/assets/images/black_android.png": "cb314e3e80b5f0a8b9a8fe6705ac9307",
"assets/assets/images/iPhone_black.png": "f98b72137d05570fa1bc9e66f9346c18",
"assets/assets/images/Realme.jpeg": "f9f87a813890c77cd0af78cf87f9caad",
"assets/assets/images/aboutUs.png": "8a9849cbf7e6f84ac3f4e27fb883eda9",
"assets/assets/images/SamsungFullWidth.png": "178c868213fb6151a077a3559467eaa8",
"assets/assets/images/apple.jpeg": "6049545c36cc5b20b3ac164947acb592",
"assets/assets/images/aboutImage.jpg": "c78c377da0fafa2927d21a16dc019ba0",
"assets/assets/images/iphone_smart_wath.png": "ba5053701305557d9530c82e28bc700c",
"assets/assets/images/partsMobile.png": "2095819abd34152cd3b13659d361f8d8",
"assets/assets/images/clickHere.png": "f2f2ba7a0e6613503d4a39edc993fb53",
"assets/assets/images/black_iphones.jpg": "e6f503770b2810671bbaf4a050e08788",
"assets/assets/images/oppo.jpeg": "073c491d7d06c86eb9d72f96f3799bd8",
"assets/assets/images/Samsung.png": "b8954655cdfcbbde4289c16ad2be7ac0",
"assets/assets/images/Sony.jpeg": "12a055bdfff285ed09cdadf71306b175",
"assets/assets/images/SomanyMobiles.png": "6c50ea4dbddb528fe08904ed13f26306",
"main.dart.js": "56d961049c454696a1bda66ecc8b1c33"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
