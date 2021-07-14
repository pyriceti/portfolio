import "../styles/globals.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import React               from "react";
import Head                from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </React.StrictMode>
  );
}

export default MyApp;
