import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from "next/head"
import NextNProgress from "nextjs-progressbar";
import Footer from '../components/Footer';
import * as gtag from '../lib/gtag'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps}) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return( 
  <>
   <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  <Head>
    <title>Manuscripts</title>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5303359554216037"
     crossOrigin="anonymous"></script>
  </Head>
  <Navbar/>
  <NextNProgress
  color="#eeeee4"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
  />
  <Component {...pageProps}  />
  <Footer/>
  </>
  )
}

export default MyApp
