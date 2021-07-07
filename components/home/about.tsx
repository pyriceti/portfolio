import React                           from "react";
import Image                           from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import homeStyles                      from "../../styles/index.module.scss";
import ThinSP                          from "../util/thinsp";
import { transparentGifPix }           from "../../util";

type AboutProps = {}

const About = (_: AboutProps): JSX.Element => {

  return (
    <section id="about" className={homeStyles.about}>
      <Container className={homeStyles.aboutContainer}>
        <Row>
          <Col lg={8} className="offset-lg-2">
            <Row className="mb-2">
              <Col>
                <figure>
                  <blockquote className={`${homeStyles.wisdomQuote} blockquote`}>
                    <p className="mb-0">«<ThinSP/>Nous avons beau être intelligents, encore faut-il qu’on sache
                      faire
                      preuve d’intelligence.<ThinSP/>»</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Gershom Scholem
                  </figcaption>
                </figure>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={3} className={`${homeStyles.aboutLeftCol} d-flex flex-column align-items-center align-items-md-end`}>
                <div className={`${homeStyles.aboutProfilePicContainer} d-flex mb-3 mt-1 mb-md-2 img-thumbnail`}>
                  <Image
                    width={158}
                    height={158}
                    src={"/images/profile-img.jpg"}
                    alt={"Image de profil"}
                    layout="intrinsic"
                    placeholder="blur"
                    blurDataURL={transparentGifPix}
                    quality={100}
                  />
                </div>
                <div className={`${homeStyles.aboutLinkContainer} mt-2 mb-2 mt-md-1 mb-md-0`}>
                  <img src="images/logos/github.svg" alt="github logo"/>
                  <a href="https://github.com/pyriceti" target="_blank" rel="noopener">github.com/pyriceti</a></div>
                <div className={`${homeStyles.aboutLinkContainer} mt-2 mb-2 mt-md-0 mb-md-0`}>
                  <img src="images/logos/itchio.svg" alt="itchio logo"/>
                  <a href="https://pyriceti.itch.io/" target="_blank" rel="noopener">pyriceti.itch.io</a></div>
              </Col>
              <Col xs={12} md={9} className={`${homeStyles.aboutRightCol} mt-4 mt-md-0`}>
                <h2 className="h3 no-uppercase">Qui suis-je ?</h2>
                <p>Ingénieur généraliste de formation, je me suis spécialisé dans les applications et interfaces web
                  avec un fort intérêt pour les questions d’interaction, d’ergonomie et plus généralement
                  d’expérience
                  utilisateur (UX design).</p>
                <p>Je me passionne aujourd’hui pour la programmation et le game design à la frontière entre la
                  pédagogie et
                  l’éducation. La question qui m’anime est la suivante<ThinSP/>:</p>
                <blockquote className={`${homeStyles.personalQuote} blockquote semi-bold ps-3 mb-4`}>
                  <p className="mb-0">Comment concevoir un jeu vidéo <em className="bold">fun</em> à forte
                    valeur <em className="bold">pédagogique</em><ThinSP/>?</p>
                </blockquote>

                <Button
                  as="a"
                  className={`${homeStyles.downloadResumeBtn} text-uppercase d-inline-block ms-lg-2`}
                  size="lg" variant="primary"
                  href="/files/Baptiste_Perraud_CV.pdf" download="Baptiste_PERRAUD_CV">Télécharger mon CV</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
