
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

// Limpa caches antigos
cleanupOutdatedCaches();

// Precache dos assets gerados pelo Vite
precacheAndRoute(self.__WB_MANIFEST);

// Cache para imagens com estratégia Cache First
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      {
        cacheKeyWillBeUsed: async ({ request }) => {
          // Cache tanto WebP quanto PNG da mesma imagem
          return request.url;
        },
      },
    ],
  })
);

// Cache para páginas principais com estratégia Stale While Revalidate
registerRoute(
  ({ url }) => {
    const routes = ['/', '/blog', '/portfolio', '/pneumatica'];
    return routes.includes(url.pathname);
  },
  new StaleWhileRevalidate({
    cacheName: 'pages-cache',
  })
);

// Cache para assets estáticos
registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Evento de instalação
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

// Evento de ativação
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(self.clients.claim());
});
