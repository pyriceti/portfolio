import "../styles/globals.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import React               from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </React.StrictMode>
  );
}

export default MyApp;
