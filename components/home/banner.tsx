import homeStyles                      from "../../styles/index.module.scss";
import utilStyles                      from '../../styles/utils.module.scss';
import { Button, Col, Container, Row } from "react-bootstrap";
import React                           from "react";
import ThinSP                          from "../util/thinsp";
import { jumpToSection }               from "../../util";


interface ExperienceProps extends React.HTMLProps<HTMLElement> {
}

const Banner: React.FC<ExperienceProps> = () => {
  const handleContactMeBtnClick = () => jumpToSection("contact");

  return (
    <section className={homeStyles.banner}>
      <Container fluid className={`${homeStyles.bannerOverlay} py-5 mb-0`}>
        <Container className="py-5">
          <Row>
            <Col xs={8} className="offset-2 d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 text-uppercase text-center mb-4">Yo<ThinSP/>! Moi c'est <span
                className={utilStyles.textAccentLight}>Baptiste</span></h1>
              <p className="text-uppercase text-center mb-4">Ingénieur généraliste de formation, je me passionne
                aujourd’hui en game design et programmation autour de la rencontre entre pédagogie et jeu vidéo</p>
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
