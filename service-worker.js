"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","12b08515f1e566cebdda0ea0759e74c4"],["static/css/main.d21a4f33.css","140eec3c7dd4e1e3f0ea7d53d06973d9"],["static/js/main.74881f5a.js","18d945f0c52320ceca44d3c1583bedfe"],["static/media/JosefinSans-Bold.307d4e04.ttf","307d4e040e451c1b1b7b11360fdca97e"],["static/media/JosefinSans-Italic.d3bed1a7.ttf","d3bed1a789347c543a594a62ad1127fe"],["static/media/JosefinSans-Regular.673965c5.ttf","673965c55e0656d563fb1ff8200bbf86"],["static/media/JuliusSansOne-Regular.0c044b4b.ttf","0c044b4b8615ea1f1094f45c0d9d98b1"],["static/media/Montserrat-Bold.b1bc919c.otf","b1bc919c743e73d2b1925fcbe24d60c0"],["static/media/Montserrat-ExtraLight.0db10313.otf","0db103133168238cd408be896f916f86"],["static/media/Montserrat-Light.2321dc98.otf","2321dc98b6f9d0746aacace73b7c81f6"],["static/media/Montserrat-Medium.8193d262.otf","8193d2621f9394d8503bf7669a6b95b2"],["static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["static/media/Montserrat-Thin.85332c68.otf","85332c68522ec1841e4022cdb4337368"],["static/media/MontserratAlternates-Bold.8eec60d6.otf","8eec60d6efe1d7a381e040da2133528b"],["static/media/MontserratAlternates-Light.67122d4d.otf","67122d4dc26e1d4f56bd364b79ff5196"],["static/media/MontserratAlternates-Regular.4d17c0b5.otf","4d17c0b5e95c89be0e1894ba27c78a36"],["static/media/MontserratAlternates-Thin.06c44910.otf","06c44910d021c4a6f8f245775c80c7df"],["static/media/OpenSans-Regular.d7d5d458.ttf","d7d5d4588a9f50c99264bc12e4892a7c"],["static/media/crypto-elevation-home.264c3a36.jpg","264c3a362e16ebc37df773662167964c"],["static/media/crypto-elevation-logo.e3784e02.jpg","e3784e02df3d05dd64b214ed5250d036"],["static/media/if_three-bars_298879.29c920f8.svg","29c920f8447ecf51986955118909e3bc"],["static/media/j_create_it-logo.392a17d4.jpg","392a17d4040db4adb74dc3d1eaea9e8e"],["static/media/jcreateit-jcube-blue-darker.c2f93eb9.svg","c2f93eb9e6386ed675bb4771943484c3"],["static/media/orange-mockup-light-226x144-word-lower-min.3bc13bbb.jpg","3bc13bbb001c7cbeb63e7c22ef6880ca"],["static/media/slc-min-blue12-min.a41e77e4.jpg","a41e77e405404c30a276c228aa03cc05"],["static/media/utah-plastic-surgery-society-home.14e99758.jpg","14e9975870adcab7a91daa16fef91e0e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/jcreateit/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});