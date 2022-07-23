import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from "next/head"
import NextNProgress from "nextjs-progressbar";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps}) {
  return( 
  <>
  <Head>
    <title>Manuscripts</title>
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
