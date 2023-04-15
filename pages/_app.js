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
        <title>Rafisa - Embalagens de Ráfia - Armazenamento de Fertilizantes, rações, farináceos, entulhos, sementes, cereais, entulho e muitos outros!</title>
        <meta name="description" content="Sacos de ráfia para armazenamento de Fertilizantes, rações, farinha, entulhos, sementes, cereais, conexões, sal, peças metalúrgicas, materiais de construção civil, contenção de barrancos, dentre muitos outros. Clique aqui e conheça a Rafisa!"/>
        <link rel="canonical" href="https://rafisa.com.br/"/>
      </Head>
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
    </div>
  )
}

export default MyApp
