import '../styles/globals.css'
import Layout from '../components/layout'

import type { AppProps } from 'next/app'
import Script from 'next/script';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as fbq from '../lib/fpixel'

declare global {
  interface Window {
    Kakao: any;
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  
  const router = useRouter()

  const kakaoInit = () => { // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // console.log(window.Kakao.isInitialized());
  }

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        defer
        src='https://developers.kakao.com/sdk/js/kakao.js'
        onLoad={kakaoInit} 
      ></Script>
      <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${fbq.FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
    </Layout>
    
  )
}

export default MyApp
