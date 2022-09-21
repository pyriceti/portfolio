import React                           from "react";
import { useRouter }                   from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";
import homeStyles                      from "../../styles/index.module.scss";
import utilStyles                      from "../../styles/utils.module.scss";
import ThinSP                          from "../util/thinsp";

type ExperienceProps = {}

const Banner = (_: ExperienceProps): JSX.Element => {
  const router = useRouter();

  const handleContactMeBtnClick = () => {
    router.replace(`#contact`, undefined, { scroll: false, shallow: true });
  };

  return (
    <section className={homeStyles.banner}>
      <Container fluid className={`${homeStyles.bannerOverlay} py-5 mb-0`}>
        <Container className="py-5">
          <Row>
            <Col xs={10} lg={8} className="offset-1 offset-lg-2 d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 text-uppercase text-center mb-4">Bienvenue<ThinSP/>!<br/> Moi c’est <span
                className={utilStyles.textAccentLight}>Baptiste</span></h1>
              <p className={`${homeStyles.bannerInfo} text-center mb-4`}>Ingénieur généraliste de formation, je me passionne
                aujourd’hui en game design et programmation autour de la rencontre entre pédagogie et jeu vidéo.</p>
              <Button
                className={`${homeStyles.bannerCta} text-uppercase`} size="lg"
                variant="primary" onClick={handleContactMeBtnClick}>Me contacter</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Banner;
