import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import defaultTheme from "../themes/DefaultTheme";
import "../styles/App.css";
import TwelveColumns from "../components/tmp/TwelveColumns";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <TwelveColumns />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp;