import '../styles/globals.css'
import '../styles/styles.css'
import DataProvider from '../store/GlobalState'
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Head from 'next/head'
import { AppProps } from "next/app"

const trackingID = process.env.TRACKING_GA_ID!;

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    ReactGA.initialize(trackingID);
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <DataProvider>
      <Head>
        <title>Rafisa - Comércio de Sacarias LTDA - Atendimento de segunda à sexta das 08:00 às 18:00!</title>
        <meta name="viewport" content="initial-scale-1.0, width=device-width"></meta>
        <meta name="description" content="Na Rafisa, seu produto é a nossa preocupação - Temos sacarias convencionais, com revestimento extra e até estampamos sua marca nas suas embalagens, porque quem não é visto não é lembrado! Sacarias impressas, laminadas e convencionais você só encontra na Rafisa."></meta>
      </Head>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
