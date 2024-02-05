import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: true,
        },
      });

      locomotiveScroll.scrollTo(0, { duration: 100 });
    })();

    let anchorlinks: any = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      item.addEventListener('click', (e: any) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
        });
        e.preventDefault();
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
