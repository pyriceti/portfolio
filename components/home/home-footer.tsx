import React, { forwardRef }   from "react";
import footerStyles            from "./home-footer.module.scss";
import ThinSP                  from "../util/thinsp";
import { Col, Container, Row } from "react-bootstrap";
import Footer                  from "../footer";
import useSWR                  from "swr";

function getAge(): number {
  const dateString = "1995/12/15";
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const infos = [
  {
    label: "Nom",
    value: "Baptiste Perraud",
  },
  {
    label: "Âge",
    value: `${getAge()} ans`,
  },
  {
    label: "Tél.",
    value: "+33 6 25 13 67 96",
  },
  {
    label: "Lieu",
    value: "Région parisienne, France",
  },
];

const imgExternalUrlPathPrefix: string = "images/logos/";

const externalUrls = [
  {
    imgSrc: `${imgExternalUrlPathPrefix}envelope.svg`,
    imgAlt: "mailto logo",
    href: "mailto:pyriceti@pm.me?subject=Prise%20de%20contact",
    text: "pyriceti@pm.me",
    targetBlank: false,
  },
  {
    imgSrc: `${imgExternalUrlPathPrefix}github.svg`,
    imgAlt: "github logo",
    href: "https://github.com/pyriceti",
    text: "github.com/pyriceti",
    targetBlank: true,
  },
  {
    imgSrc: `${imgExternalUrlPathPrefix}itchio.svg`,
    imgAlt: "itchio logo",
    href: "https://pyriceti.itch.io/",
    text: "pyriceti.itch.io",
    targetBlank: true,
  },
  {
    imgSrc: `${imgExternalUrlPathPrefix}linkedin.svg`,
    imgAlt: "linkedin logo",
    href: "https://www.linkedin.com/in/baptiste-perraud/",
    text: "linkedin.com/in/baptiste-perraud",
    targetBlank: true,
  },
  {
    imgSrc: `${imgExternalUrlPathPrefix}soundcloud.svg`,
    imgAlt: "soundcloud logo",
    href: "https://soundcloud.com/user-128757034",
    text: "soundcloud.com/user-128757034",
    targetBlank: true,
  },
];

const infosFetcher = () => infos;

const HomeFooter = forwardRef((props, ref: any) => {

  // Use client side rendering for dynamic age calculation
  const { data } = useSWR("noUrl", infosFetcher);

  return (
    <footer ref={ref} id="contact" className={footerStyles.globalFooter}>
      <div className={footerStyles.footerTop}>
        <div className={footerStyles.footerTopContainer}>
          <Container>
            <Row>
              <Col md={8} className="offset-md-2">
                <h2 className="display-4 fw-normal">Contact</h2>
                <p className="py-4">N’hésitez pas à me contacter pour toute
                  question, remarque ou proposition pour un projet qui vous tient à cœur<ThinSP/>!
                </p>
                <Row className="gx-5 contact">
                  <Col lg={6} className="personal-information">
                    <ul className={footerStyles.personalInfoList}>
                      {data?.map(info =>
                        <li key={info.label} className={`${footerStyles.personalInfoItem} pb-3 mb-3`}><span
                          className={footerStyles.personalInfoLabel}>{info.label}<ThinSP/>:</span>{info.value}
                        </li>
                      )}
                    </ul>
                  </Col>
                  <Col lg={6} className="mt-3 mt-lg-0 external-links">
                    {externalUrls.map((u, i) =>
                      <div key={i} className="external-url-container pb-3 mb-3">
                        <a
                          href={u.href} className={footerStyles.externalLink}
                          target={u.targetBlank ? "_blank" : "_self"}
                          rel="noopener"
                        >
                          <img src={u.imgSrc} alt={u.imgAlt} className={`${footerStyles.externalLinkImg} align-top`}/>
                          {u.text}
                        </a>
                      </div>,
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer/>
    </footer>
  );
});

export default HomeFooter;
