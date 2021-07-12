import React               from "react";
import resumeLayoutStyles  from "./resume-layout.module.scss";
import resumeStudiesStyles from "./resume-studies.module.scss";
import { ResumeTimeline }  from "../svg";
import resumeXpStyles      from "./resume-xp.module.scss";

type studiesItem = {
  diploma: string,
  school: string,
  date: string,
}

const studiesItems: studiesItem[] = [
  {
    diploma: "Mastère Spécialisé Interactive Digital Experiences",
    school: "GOBELINS, l’école de l’image & Cnam-Enjmin – Paris",
    date: "2019",
  },
  {
    diploma: "Diplôme ingénieur généraliste – Génie informatique",
    school: "UTC (Université de Technologie de Compiègne) – Compiègne",
    date: "2018",
  },
  {
    diploma: "Microprogramme de 2e cycle en sciences",
    school: "Université de Sherbrooke – Sherbrooke, Québec",
    date: "2017",
  },
  {
    diploma: "Bachelor Humanités et Technologie",
    school: "UTC (Université de Technologie de Compiègne) – Compiègne",
    date: "2016",
  },
];

type ResumeStudiesProps = {};

const ResumeStudies = (_: ResumeStudiesProps): JSX.Element => {
  return (
    <section className={`${resumeStudiesStyles.studiesSection} ${resumeLayoutStyles.rightColSection}`}>
      <h2 className="default-h2"><span>F</span>ormation</h2>
      <ResumeTimeline height={75.292} className={resumeStudiesStyles.studiesTimeline} color={"#441517"}/>
      <ul className={resumeStudiesStyles.studiesList}>
        {studiesItems.map((s, i) =>
          <li key={i}>
            <h3>
              <svg className={resumeStudiesStyles.studiesItemIcon} width="23.41" height="20.273" viewBox="0 0 6.194 5.364" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.985.756L.873 2.682l1.112 1.926h2.224l1.112-1.926L4.209.756z" fill="#fff"/>
                <path
                  d="M1.548 0L0 2.682l1.548 2.682h3.098l1.548-2.682L4.646 0zm.569.984h1.96l.98 1.698-.98 1.698h-1.96l-.98-1.698z"
                  fill="#441517"/>
              </svg>
              {s.diploma}
            </h3>
            <section className={resumeStudiesStyles.studiesItemSection}>
              <span className={resumeStudiesStyles.studiesItemDate}>{s.date}</span>
              <p className={resumeStudiesStyles.studiesItemPlace}>{s.school}</p>
            </section>
          </li>,
        )}
      </ul>
    </section>
  );
};

export default ResumeStudies;
