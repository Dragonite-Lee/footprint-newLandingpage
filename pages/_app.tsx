import '../styles/globals.css'
import Layout from '../components/layout'

import type { AppProps } from 'next/app'
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  
  const kakaoInit = () => { // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // console.log(window.Kakao.isInitialized());
  }

  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        defer
        src='https://developers.kakao.com/sdk/js/kakao.js'
        onLoad={kakaoInit} 
      ></Script>
    </Layout>
    
  )
}

export default MyApp
