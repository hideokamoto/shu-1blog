var keyName = '20180306-5'
self.addEventListener('install', function(event) {
  var saving = caches.open(keyName)
    .then(function(cache) {
      return cache.addAll([
        '/service-worker.js',
        '/assets/js/commn.js',
        '/assets/css/style.css',
        '/assets/images/common/logo.svg',
        '/assets/images/item/screen-schot.png',
        '/assets/images/user/conti.png',
        '/assets/images/icons/sns-user-tw.svg',
        '/assets/images/icons/tag.svg',
        '/assets/images/icons/blog-home.svg',
        '/assets/images/user/yoshipan.png',
        '/assets/images/icons/sns-user-tw.svg',
        '/assets/images/icons/tag.svg',
        '/assets/images/icons/blog-home.svg',
        '/assets/images/user/msms.png',
        '/assets/images/icons/sns-user-tw.svg',
        '/assets/images/icons/tag.svg',
        '/assets/images/icons/blog-home.svg',
        '/assets/images/icons/share-icon-tw.svg',
        '/assets/images/icons/share-icon-fb.svg',
        '/index.html'
      ])
    })
  event.waitUntil(saving)
})

self.addEventListener('fetch', event => {
  var url = event.request.url;
  if (!url.endsWith('.html') && !url.endsWith('.svg') && !url.endsWith('.png')&& !url.endsWith('.js')&& !url.endsWith('.css'))
    return;
  var fetching = caches.open(keyName).then(function(cache) {
    return cache.match(event.request).then(function(response) {
      return response || fetch(event.request.clone())
      })
    })
  event.respondWith(fetching)
})
