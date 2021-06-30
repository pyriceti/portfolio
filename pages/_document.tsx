import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="fr">
        <Head>
          {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
          {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}
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