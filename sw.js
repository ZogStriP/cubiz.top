self.addEventListener('install', e => {
  console.log('SW installing...');
  // Cache your assets here
});

self.addEventListener('activate', e => {
  console.log('SW activating...');
  // Delete old caches here
});

self.addEventListener('fetch', e => {
  console.log('Request for:', e.request.url);
  // Handle request
});