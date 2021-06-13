import '../styles/globals.css'
import '../styles/styles.css'
import DataProvider from '../store/GlobalState'
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const trackingID = process.env.TRACKING_GA_ID;

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    ReactGA.initialize(trackingID);
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
