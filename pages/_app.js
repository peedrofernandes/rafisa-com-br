import '../styles/globals.css'
import '../styles/styles.css'
import DataProvider from '../store/GlobalState';

function MyApp({ Component, pageProps }) {


  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )


}

export default MyApp
