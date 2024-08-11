/*
 * @Author: Ender-Wiggin
 * @Date: 2024-08-10 00:35:54
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2024-08-11 21:19:58
 * @Description:
 */
import { AppProps } from 'next/app';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';
import '@/styles/arknova.css';
import '@/styles/animals.css';
import '@/styles/odometer.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src='https://umami.ender-wiggin.com/script.js'
        data-website-id='f2a10fa7-5a6f-4329-9bdf-c239f51b6c52'

        // data-website-id='f2a10fa7-5a6f-4329-9bdf-c239f51b6c52'
      ></Script>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-49MVJ63XFT'
      ></Script>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-49MVJ63XFT', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
