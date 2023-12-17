// Import the Workbox library
import { Workbox } from 'workbox-sw';

// Create a new Workbox instance
const wb = new Workbox();

// Register the navigation preload route
wb.router.registerRoute('^/$', ({ url }) => wb.strategies.networkFirst().handle({ url }));

// Register the asset caching route
wb.router.registerRoute('^(?!/icons/android-chrome-192x192.png$).*', ({ url }) => wb.strategies.cacheFirst().handle({ url }));

// Start the Workbox service worker
wb.addEventListener('activated', () => wb.activate());


 