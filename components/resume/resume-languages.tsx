import resumeLayoutStyles  from "./resume-layout.module.scss";
import resumeLanguagesStyles from "./resume-languages.module.scss";

const languageItems = [
  {
    lang: "Anglais",
    desc: [
      "Niveau C1",
      "TOEIC 2017 (960/990)",
      "Utilisation professionnelle",
    ],
  },
  {
    lang: "Espagnol",
    desc: [
      "Niveau B2",
      "Certification UTC",
      "Utilisation indépendante",
    ],
  },
  {
    lang: "Français",
    desc: [
      "Langue native",
    ],
  },
];

type ResumeLanguagesProps = {};

const ResumeLanguages = (_: ResumeLanguagesProps): JSX.Element => {
  return (
    <section className={`${resumeLanguagesStyles.langSection} ${resumeLayoutStyles.leftColSection}`}>
      <h2 className="default-h2"><span>L</span>angues</h2>
      <ul className={resumeLanguagesStyles.langList}>
        {languageItems.map((li, i) =>
          <li key={i}>
            <span className={resumeLanguagesStyles.langTitle}>{li.lang}</span>
            <ul>
              {li.desc.map((d, j) =>
                <li key={j}>{d}</li>,
              )}
            </ul>
          </li>,
        )}
      </ul>
    </section>
  );
};

export default ResumeLanguages;
