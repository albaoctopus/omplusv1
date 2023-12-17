import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch(err => {
          console.error('Service Worker registration failed:', err);
        });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
