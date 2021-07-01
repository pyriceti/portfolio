import Document, { Html, Head, Main, NextScript } from "next/document";
import React                                      from "react";

class MyDocument extends Document {
  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="alternate icon" href="/favicon.ico"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Raleway:wght@400;500&display=swap"
            rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;