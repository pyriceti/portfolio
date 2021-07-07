import Image                                  from "next/image";
import homeStyles                             from "../../styles/index.module.scss";
import { Col, Container, Row }                from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { SectionHandle }                      from "../svg";
import {
  tlDetailInit,
  TimelineDetailSettings,
}                                             from "../../animations/timeline-detail";
import { TimelineSettings }                   from "../../animations/timeline";
import Timeline                               from "./timeline";
import TimelineDetail                         from "./timeline-detail";
import { transparentGifPix }                  from "../../util";

const xpImgPathPrefix : string = "/images/experience/";

const xpItems = [
  {
    date: "2021",
    job: "Développeur intégrateur Unity 3D",
    place: "Upian – Paris",
    url: "https://www.upian.com/",
    dateRange: ["Janvier 2020", "Juin 2021"],
    imgSrc: `${xpImgPathPrefix}unmaze.jpg`,
    imgAlt: "Unmaze illustration",
    contents:
      <>Suite à mon stage chez Upian, j’ai été embauché pour assumer une grande
        partie du développement technique du projet Unmaze jusqu’à la fin de sa production. Ce
        travail passionnant a également été source d’apprentissages divers, notamment sur
        l’importance de l’optimisation pour un jeu développé pour mobiles. Enfin, le challenge
        technique et d’interaction, loin d’être absent, s’est incarné dans la difficulté à
        développer un gameplay convaincant autour de l’environnement lumineux du joueur/de la
        joueuse.</>
  },
  {
    date: "2019",
    job: "Stagiaire développeur intégrateur Unity 3D",
    place: "Upian – Paris",
    url: "https://www.upian.com/",
    dateRange: ["Mai 2019", "Novembre 2019"],
    imgSrc: `${xpImgPathPrefix}mobilegaming.jpg`,
    imgAlt: "Mobile gaming illustration",
    contents:
      <>Au cours de ce stage chez Upian, j’ai pu rapidement monter en compétences sous Unity 3D en rejoignant le projet
        Unmaze sous la tutelle d’<a href="http://www.andreberlemont.com/">André Berlemont</a>. J’ai ainsi accompagné
        l’équipe sur la mise en place d’une <span className="it">vertical slice</span>. Par ailleurs, j’ai eu la chance
        de pouvoir m’occuper du sound design et mixage des épisodes de la saison 1 de l’émission <a
          href="https://www.upian.com/fr/project/faq-arte">FAQ</a> grâce à mes connaissances en la matière.</>
  },
  {
    date: "2018",
    job: "Stagiaire ingénieur web full stack",
    place: "Playbots – Paris",
    url: "https://www.journaldunet.com/ebusiness/crm-marketing/1208182-playbots-1er-trophee-martech-pour-son-ia-marketing-conversationnel/",
    dateRange: ["Février 2018", "Juillet 2018"],
    imgSrc: `${xpImgPathPrefix}chatbot.jpg`,
    imgAlt: "Chatbot illustration",
    contents:
      <>Ce stage chez Playbots m’a permis de devenir complètement autonome avec la stack MEAN. J’ai eu l’occasion de
        travailler sur la plateforme de création/gestion de bots de l’entreprise, dans un contexte agile et avec de
        fortes responsabilités. J’ai également assumé avec enthousiasme la fonction d’UI/UX designer sur le projet,
        faute d’expert dans l’équipe.</>
  },
  {
    date: "2017",
    job: "Développeur web backend PHP/SQL",
    place: "ENM, mandaté par l’UTC – Paris & Compiègne",
    url: "https://ics.utc.fr/cartoenm/",
    dateRange: ["2016", "2017"],
    imgSrc: `${xpImgPathPrefix}law.jpg`,
    imgAlt: "Law illustration",
    contents:
      <>Dans le cadre d’un job étudiant à l’UTC, j’ai conçu le système backend du projet CartoENM : extraction de
        données depuis feuilles de calcul, imports en BDD et construction de l’arbre de réponses lié à une requête
        utilisateur. Ce fut l’occasion de mettre en place une réflexion centrée utilisateur par rapport aux élèves de
        l’ENM, commanditaire du projet.</>
  },
  {
    date: "2016",
    job: "Stagiaire développeur web PHP/SQL",
    place: "DreamCentury Entertainment – Paris",
    url: "https://www.dreamcentury.com/playbox/site/index.asp/",
    dateRange: ["Février 2016", "Juillet 2016"],
    imgSrc: `${xpImgPathPrefix}gambling.jpg`,
    imgAlt: "Gambling illustration",
    contents:
      <>J’ai intégré l’équipe de DreamCentury Entertainment pendant 6 mois riches d’apprentissages. Ce premier stage long m’a
        inculqué la rigueur professionnelle dans l’écriture de code fonctionnel, stable et adaptatif, dans un cadre de
        travail semi-agile. J’ai ainsi pu assumer la responsabilité du développement de plusieurs modules, chacun posant
        son lot de défis en terme d’interactions utilisateur et de contraintes techniques (e.g. dépendances à des
        services externes).</>
  },
  {
    date: "2015",
    job: "Développeur & Webdesigner",
    place: "Peripro fencing (Pays-Bas), Clôture-Protect, Cameba",
    url: "https://www.peripro-fencing.com/",
    dateRange: ["2014", "2015"],
    imgSrc: `${xpImgPathPrefix}webdesign.jpg`,
    imgAlt: "Webdesign illustration",
    contents:
      <>J’ai eu l’occasion de mettre à l’épreuve mes jeunes connaissances en web design dès 2014 avec plusieurs clients
        concrets, dont notamment Peripro fencing chez qui j’ai effectué un stage cours en été 2014. Ces expériences
        m’ont permis de prendre mes marques et de mieux comprendre certaines problématiques techniques pour trouver des
        solutions <span className="it">ad hoc</span> à ces dernières.</>
  },
];

interface ExperienceProps extends React.HTMLProps<HTMLElement> {
}

const Experience: React.FC<ExperienceProps> = () => {
  const tlSettings: TimelineSettings = {
    rootSvgSelector: "svg.timeline.xp-timeline",
    cssPrefix: "xp-timeline_svg__",
    dates: ["2021", "2019", "2018", "2017", "2016", "2015"],
    maxNodeYPos: 158.75,
  }
  const tlDetailSettings: TimelineDetailSettings = {
    defaultDate: "2021",
    detailSelector: "#experience .xpDetail",
  }

  const [curDate, setCurDate] = useState<string>("2021");

  const xpTimelineRef = useRef(null);

  useEffect(() => tlDetailInit(tlDetailSettings), []);

  return (
    <section id="experience" className={`${homeStyles.experienceSectionContainer} position-relative`}>
      <SectionHandle className="section-handle white" />
      <SectionHandle className="section-handle-reverse white" />
      <Container>
        <Row>
          <Col lg={8} className="offset-lg-2">
            <h3 className={`${homeStyles.homeH3} text-primary fw-normal`}>Expérience</h3>
            <p>Je me suis très tôt intéressé aux technologies web, travaillant principalement avec la stack
              WAMP/LAMP sur des petits projets personnels. Par la suite, j’ai eu la chance de travailler pour
              plusieurs clients en tant que freelance, ainsi que de réaliser plusieurs stages dans des contextes
              techniques divers, jusqu’à me spécialiser aujourd’hui en développement sous Unity 3D.</p>

            <div className={homeStyles.contentSep} />

            <Row className="gx-md-5">
              <Col xs={4} md={3} className="d-flex flex-column align-items-end">
                <Timeline
                  className={`${homeStyles.xpTimelineSvg} timeline xp-timeline`}
                  timelineTag={"experience"}
                  settings={tlSettings}
                  ref={xpTimelineRef}
                  onDateNodeClick={setCurDate}/>
              </Col>
              <Col xs={8} md={9} className="xpDetailContainer">
                <TimelineDetail curDate={curDate} settings={tlDetailSettings}>
                {xpItems.map(xi =>
                  <div key={xi.date} className={`d${xi.date} xpDetail`}>
                    <div className="illus-container float-none float-sm-start mb-1">
                      <Image
                        width={192}
                        height={192}
                        layout="intrinsic"
                        quality={100}
                        className="illus"
                        src={xi.imgSrc}
                        alt={xi.imgAlt}
                        placeholder="blur"
                        blurDataURL={transparentGifPix}
                      />
                    </div>
                    <h3>{xi.job}</h3>
                    <a
                      className="place d-block mb-2"
                      href={xi.url}
                      target="_blank"
                      rel="noopener"
                    >
                      {xi.place} ({xi.dateRange[0]}{xi.dateRange.length === 2 && ` - ${xi.dateRange[1]}`})
                    </a>

                    <p className="desc">{xi.contents}</p>
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


export default Experience;
