import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";
import GoogleAnalytics from "../components/google-analytics";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/img/logo/favicon.ico" />
          {/* seo end */}  

      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
