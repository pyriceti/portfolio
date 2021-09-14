import React              from "react";
import resumeLayoutStyles from "./resume-layout.module.scss";
import resumeXpStyles     from "./resume-xp.module.scss";
import ThinSP             from "../util/thinsp";
import { ResumeTimeline } from "../svg";

type XpItem = {
  job: string,
  placeAndDate: string,
  desc: string,
  date: string,
  detail: {
    title: string,
    desc?: string,
  }[],
}

const xpItems: XpItem[] = [
  {
    job: "Enseignant Unity 3D (gameplay programming)",
    placeAndDate: "SAE Institute – Paris (6 mois)",
    desc: "Cours et TP donnés aux élèves en Games Programming, 2e année.",
    date: "2020",
    detail: [
      {
        title: "Teaching",
      },
      {
        title: "C#, Advanced Unity 3D programming",
      },
      {
        title: "Gameplay Programming",
      },
    ],
  },
  {
    job: "Développeur intégrateur Unity 3D",
    placeAndDate: "Upian – Paris (2 ans)",
    desc: "Développement & intégration Unity 3D pour la production du projet Unmaze.",
    date: "2019",
    detail: [
      {
        title: "Gameplay",
      },
      {
        title: "Intégration",
      },
      {
        title: "Tools",
      },
      {
        title: "Optimisation",
      },
    ],
  },
  {
    job: "Stagiaire ingénieur web full stack",
    placeAndDate: "Playbots – Paris (6 mois)",
    desc: "Conception & amélioration de la plateforme SaaS de création de bots et du plugin de bot embarqué.",
    date: "2018",
    detail: [
      {
        title: "Frontend",
        desc: "Angular 5, Vue.js",
      },
      {
        title: "Backend",
        desc: "Node.js, RabbitMQ",
      },
      {
        title: "DB",
        desc: "MongoDB, Redis",
      },
      {
        title: "Autres",
        desc: "Google Storage, Stackdriver",
      },
    ],
  },
  {
    job: "Développeur web backend PHP/SQL",
    placeAndDate: "ENM, mandaté par l’UTC – Paris & Compiègne (1 an)",
    desc: "Conception d’une base de données interactive pour la recherche d’articles de lois liés à la gestion des successions dans les pays signataires du Règlement.",
    date: "2017",
    detail: [
      {
        title: "Stack",
        desc: "LAMP",
      },
      {
        title: "Autres",
        desc: "Scripts VB/VBA",
      },
    ],
  },
  {
    job: "Stagiaire développeur web PHP/SQL",
    placeAndDate: "DreamCentury Entertainment – Paris (6 mois)",
    desc: "Refonte du site MadWin sur les modules de paramétrage du profil, d’amitiés numériques, du fil d’actualité & notifications et des murs sociaux.",
    date: "2016",
    detail: [
      {
        title: "Frontend",
        desc: "HTML5, CSS3, JavaScript/jQuery",
      },
      {
        title: "Backend",
        desc: "Framework PHP7",
      },
      {
        title: "DB",
        desc: "Transact-SQL",
      },
    ],
  },
];

type ResumeXpProps = {};

const ResumeXp = (_: ResumeXpProps): JSX.Element => {
  return (
    <section className={`${resumeXpStyles.xpSection} ${resumeLayoutStyles.rightColSection}`}>
      <h2 className="default-h2"><span>E</span>xpérience professionnelle</h2>
      <ResumeTimeline height={190} className={resumeXpStyles.xpTimeline} color={"#8e2621"}/>
      <ul className={resumeXpStyles.xpList}>
        {xpItems.map((xi, i) =>
          <li key={i}>
            <h3>
              <svg className={resumeXpStyles.xpItemIcon} width="23.41" height="20.273" viewBox="0 0 6.194 5.364" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.985.756L.873 2.682l1.112 1.926h2.224l1.112-1.926L4.209.756z" fill="#fff"/>
                <path
                  d="M1.548 0L0 2.682l1.548 2.682h3.098l1.548-2.682L4.646 0zm.569.984h1.96l.98 1.698-.98 1.698h-1.96l-.98-1.698z"
                  fill="#8e2621"/>
              </svg>
              {xi.job}
            </h3>
            <section className={resumeXpStyles.xpItemSection}>
              <span className={resumeXpStyles.xpItemDate}>{xi.date}</span>
              <p className={resumeXpStyles.xpItemPlace}>{xi.placeAndDate}</p>
              <p className={resumeXpStyles.xpItemDesc}>{xi.desc}</p>
              {xi.detail.length > 0 &&
              <ul className={resumeXpStyles.xpItemDetailList}>
                {xi.detail.map((d, j) =>
                  <li key={j}>
                    <span className={resumeXpStyles.xpItemDetailItem}>
                      {d.title}
                      {d.desc && <><ThinSP/>: </>}
                    </span>
                    {d.desc}
                  </li>
                )}
              </ul>
              }
            </section>
          </li>
        )}
      </ul>
    </section>
  );
};

export default ResumeXp;
