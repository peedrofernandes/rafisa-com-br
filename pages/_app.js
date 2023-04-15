import '../styles/globals.css'
import '../styles/styles.css'
import DataProvider from '../store/GlobalState'
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Head from "next/head"

const trackingID = process.env.TRACKING_GA_ID;

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    ReactGA.initialize(trackingID);
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      <Head>
        <title>Rafisa - Embalagens de Ráfia</title>
        <meta name="description" content="Sacos de ráfia para armazenamento de Fertilizantes, rações, entulhos, cereais, sal, peças metálicas, materiais de construção civil, contenção de barrancos, dentre muitos outros!"/>
        <link rel="canonical" href="https://rafisa.com.br/"/>
      </Head>
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
    </div>
  )
}

export default MyApp
