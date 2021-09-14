import homeStyles                             from "../../styles/index.module.scss";
import { Col, Container, Row }                from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { SectionHandle }                      from "../svg";
import {
  tlDetailInit,
  TimelineDetailSettings,
}                                             from "../../animations/timeline-detail";
import ThinSP                                 from "../util/thinsp";
import Timeline                               from "./timeline";
import { TimelineSettings }                   from "../../animations/timeline";
import TimelineDetail                         from "./timeline-detail";
import Image                                  from "next/image";
import { transparentGifPix }                  from "../../util";

const studiesImgPathPrefix : string = "/images/education/";

const studiesItems = [
  {
    date: "2019",
    diploma: "Mastère spécialisé IDE",
    school: "GOBELINS, l’école de l’image",
    url: "https://www.gobelins.fr/formation/mastereexpint-mastere-specialise-designer-d-experience-interactive-et-ludique",
    dateRange: ["2018", "2019"],
    imgSrc: `${studiesImgPathPrefix}fragments.jpg`,
    imgAlt: "IDE master illustration",
    contents:
      <>Depuis quelques temps, je m’intéresse au milieu des <span className="fst-italic">edugames</span>, <span
        className="fst-italic">serious games</span> et autres expériences ludo-interactives. La question de
        l’engagement &amp; motivation de l’apprenant me semble bien sûr centrale, et m’interroge sur les moyens en
        game
        design d’offrir des jeux à la fois fun et riches d’enseignement. J’ai rejoint le mastère IDE afin de
        renforcer
        mes compétences en game design et pouvoir par la suite travailler dans ce domaine, à la croisée du ludique
        et de
        la pédagogie.</>
  },
  {
    date: "2018",
    diploma: "Diplôme ingénieur généraliste",
    school: "Université de Technologie de Compiègne",
    url: "https://www.utc.fr/formations/diplome-dingenieur/genie-informatique-gi",
    dateRange: ["2016", "2018"],
    imgSrc: `${studiesImgPathPrefix}mechanics.jpg`,
    imgAlt: "UTC ingénieur illustration",
    contents:
      <>Après 5 années et 2 stages longs de 6 mois chacun, j’ai pu valider mon diplôme d’ingénieur à l’UTC en génie
        informatique. Rigueur, autonomie, créativité, sens des priorités et organisation sont des qualités chères
        que
        j’ai travaillées tout au long de ce parcours, et qui aujourd’hui conditionnent ma manière de travailler,
        au sein
        d’une équipe et sur des projets innovants et ambitieux.</>
  },
  {
    date: "2017",
    diploma: "Microprogramme de 2e cycle en sciences",
    school: "Université de Sherbrooke",
    url: "https://www.usherbrooke.ca/admission/programme/4EM/microprogramme-de-2e-cycle-en-sciences/",
    dateRange: ["Automne 2017"],
    imgSrc: `${studiesImgPathPrefix}circuit.jpg`,
    imgAlt: "Sherbrooke microprogramme illustration",
    contents:
      <>L’automne 2017 a été l’occasion pour moi de partir étudier à Sherbrooke (Québec) au sein d’un cadre éducatif
        et
        d’une culture aussi différents qu’enrichissants. Ces 4 mois sont passés à une vitesse folle et m’ont
        permis de
        consolider certains projets personnels, de faire des rencontres inoubliables, et d’apprendre à travailler
        dans
        un contexte interculturel.</>
  },
  {
    date: "2016",
    diploma: "Bachelor Humanités et Technologie",
    school: "Université de Technologie de Compiègne",
    url: "https://www.utc.fr/formations/diplome-dingenieur/cursus-humanites-et-technologie-hutech/",
    dateRange: ["2013", "2016"],
    imgSrc: `${studiesImgPathPrefix}leonardo.jpg`,
    imgAlt: "HuTech bachelor illustration",
    contents:
      <>Le cursus Humanités et Technologie (HuTech) m’a apporté énormément, en connaissances et savoirs-faire au
        cours
        de mes 3 premières années post-bac. Il m’a permis d’acquérir un regard socio-technique neuf et critique
        sur
        divers systèmes actuels, et ainsi d’établir une méthodologie pluridisciplinaire rigoureuse en abordant une
        problématique d’ingénierie.</>
  },
  {
    date: "2013",
    diploma: "Baccalauréat S SVT spé math (mention TB)",
    school: "Lycée Samuel Beckett",
    url: "http://www.sbeckett.fr/",
    dateRange: ["2010", "2013"],
    imgSrc: `${studiesImgPathPrefix}board.jpg`,
    imgAlt: "IDE master illustration",
    contents:
      <>J’ai effectué un Baccalauréat S SVT au lycée Samuel Beckett, optant pour une spécialité math en raison de
        mon
        affinité pour le domaine. J’ai également choisi l’option arts plastiques, me permettant d’intégrer l’une
        de mes
        passions dans mes études.</>
  },
];

interface StudiesProps extends React.HTMLProps<HTMLElement> {
}

const Studies: React.FC<StudiesProps> = () => {
  const tlSettings: TimelineSettings = {
    rootSvgSelector: "svg.timeline.studies-timeline",
    cssPrefix: "studies-timeline_svg__",
    dates: ["2019", "2018", "2017", "2016", "2013"],
    maxNodeYPos: 127,
  }
  const tlDetailSettings: TimelineDetailSettings = {
    defaultDate: "2019",
    detailSelector: "#education .studiesDetail",
  }

  const [curDate, setCurDate] = useState<string>("2019");

  const studiesTimelineRef = useRef(null);

  useEffect(() => tlDetailInit(tlDetailSettings), []);


  return (
    <section id="education" className={`${homeStyles.studiesSectionContainer} position-relative`}>
      <SectionHandle className="section-handle gray"/>
      <SectionHandle className="section-handle-reverse gray"/>
      <Container>
        <Row>
          <Col lg={8} className="offset-lg-2">
            <h3 className={`${homeStyles.homeH3} text-primary fw-normal`}>Études</h3>

            <p>Après un Baccalauréat S, j’ai intégré l’UTC (Université de Technologie de Compiègne) en 2013 afin de
              réaliser un parcours en ingénierie informatique à partir d’un cursus innovant :{" "}<a target="_blank"
                                                                                                     href="https://www.utc.fr/formations/diplome-dingenieur/cursus-humanites-et-technologie-hutech.html"
                                                                                                     rel="noopener">Humanités
                et Technologie</a>. J’ai par ailleurs eu l’occasion de faire un semestre d’études au Québec en Bac+4,
              lors de mon avant dernière année à l’UTC.</p>
            <p>En novembre 2019, j’ai été diplômé à GOBELINS, l’école de l’image, du <a target="_blank"
                                                                                        href="https://www.gobelins.fr/formation/mastereexpint-mastere-specialise-designer-d-experience-interactive-et-ludique"
                                                                                        rel="noopener">mastère
              spécialisé IDE</a>(Interactive Digital Experiences) afin de travailler plus tard dans le domaine de
              l’<span className="it">edugame</span>, <span className="it">serious game</span> ou plus généralement dans
              le cadre d’expériences ludiques et interactives à la croisée du jeu et de la pédagogie.</p>
            <p>Mon parcours à GOBELINS a également débouché sur une thèse professionnelle rédigée lors de mon stage long
              chez Upian, et portant sur l’émission Snapchat <a target="_blank"
                                                                href="https://www.upian.com/fr/project/faq-arte"
                                                                rel="noopener">FAQ</a>. Intitulée «<ThinSP/>Toucher un
              public jeune sur un contenu à enjeux sociaux diffusé sur une plateforme populaire<ThinSP/>: le cas du
              programme Arte – FAQ sur Snapchat.<ThinSP/>», le but de cette thèse a été de porter la réflexion
              suivante<ThinSP/>: «<ThinSP/>comment le programme Arte – FAQ peut-il parvenir à trouver sa cible jeune sur
              Snapchat, lorsque les autres shows sur la plateforme relèvent souvent de
              l’entertainment<ThinSP/>?<ThinSP/>»</p>

            <div className={homeStyles.contentSep}/>

            <Row className="gx-md-5">
              <Col xs={4} md={3} className="d-flex flex-column align-items-end">
                <Timeline
                  className={`${homeStyles.studiesTimelineSvg} timeline studies-timeline`}
                  timelineTag={"studies"}
                  settings={tlSettings}
                  ref={studiesTimelineRef}
                  onDateNodeClick={setCurDate}/>
              </Col>
              <Col xs={8} md={9} className="studiesDetailContainer">
                <TimelineDetail curDate={curDate} settings={tlDetailSettings}>
                  {studiesItems.map(si =>
                    <div key={si.date} className={`d${si.date} studiesDetail`}>
                      <div className="illus-container float-none float-sm-start mb-1">
                        <Image
                          width={192}
                          height={192}
                          layout="intrinsic"
                          quality={100}
                          placeholder="blur"
                          blurDataURL={transparentGifPix}
                          className="illus"
                          src={si.imgSrc}
                          alt={si.imgAlt}
                        />
                      </div>
                      <h3>{si.diploma}</h3>
                      <a
                        className="school d-block mb-2"
                        href={si.url}
                        target="_blank"
                        rel="noopener"
                      >
                        {si.school} ({si.dateRange[0]}{si.dateRange.length === 2 && ` - ${si.dateRange[1]}`})
                      </a>

                      <p className="desc">{si.contents}</p>
                    </div>
                  )}
                </TimelineDetail>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Studies;
