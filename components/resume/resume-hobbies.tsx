import resumeLayoutStyles    from "./resume-layout.module.scss";
import resumeHobbiesStyles    from "./resume-hobbies.module.scss";

const hobbyItems = [
  {
    hobby: "Dessin",
    desc: [],
  },
  {
    hobby: "Jeux vidéo",
    desc: [],
  },
  {
    hobby: "Piano",
    desc: [
      "Duo piano-chant sur scène de 2013 à 2016",
      "Formation classique pendant 10 ans (3e cycle)",
      "Professeur bénévole du club associatif Piano UT’s de l’UTC de 2013 à 2017",
    ]
  },
]

type ResumeHobbiesProps = {};

const ResumeHobbies = (_: ResumeHobbiesProps): JSX.Element => {
  return (
    <section className={`${resumeHobbiesStyles.hobbiesSection} ${resumeLayoutStyles.leftColSection}`}>
      <h2 className="default-h2"><span>L</span>oisirs</h2>
      <ul className={resumeHobbiesStyles.hobbiesList}>
        {hobbyItems.map((hi, i) =>
          <li key={i} className={resumeHobbiesStyles.hobbyItem}>
            <span>{hi.hobby}</span>
            {hi.desc.length > 0 &&
            <ul className={resumeHobbiesStyles.hobbyDesc}>
              {hi.desc.map((d, j) =>
                <li key={j}>{d}</li>
              )}
            </ul>
            }
          </li>,
        )}
      </ul>
    </section>
  );
};

export default ResumeHobbies;
