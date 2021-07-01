import { NextPage }          from "next";
import Link                  from "next/link";
import Head                  from "next/head";
import React                 from "react";
import Layout, { siteTitle } from "../components/layout";
import { Container }         from "react-bootstrap";
import ThinSP                from "../components/util/thinsp";

const Custom404: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container>
        <h1 className="text-center pt-5 pb-3">Oups<ThinSP/>! Cette page n’existe pas…</h1>
        <p className="text-center h5 mb-4">L’accueil, c'est par <Link href="/">ici</Link><ThinSP/>!</p>
      </Container>
    </Layout>
  );
};

export default Custom404;