import resumeLayoutStyles    from "./resume-layout.module.scss";
import resumeSkillsStyles    from "./resume-skills.module.scss";

const skillItems = [
  {
    icon: <svg width="40.859" height="15.739" viewBox="0 0 10.811 4.164" xmlns="http://www.w3.org/2000/svg">
      <g fill="#8e2621">
        <path
          d="M2.32 4.164H.773L0 2.824l.773-1.339H2.32l.774 1.34zM4.892 2.68H3.346l-.774-1.34L3.346 0h1.546l.774 1.34zM7.465 4.164H5.918l-.773-1.34.773-1.339h1.547l.773 1.34zM10.037 2.68H8.49l-.773-1.34L8.49 0h1.547l.774 1.34z"/>
      </g>
    </svg>,
    skill: "Unity 3D",
    desc: "gameplay, intégration, tools & optimisation",
  },
  {
    icon: <svg width="40.859" height="15.739" viewBox="0 0 10.811 4.164" xmlns="http://www.w3.org/2000/svg">
      <g fill="#8e2621">
        <path
          d="M8.49 0l-.773 1.34.773 1.339h1.547l.774-1.34L10.037 0zm.183.317h1.18l.591 1.022-.59 1.023h-1.18l-.59-1.023zM2.32 4.164H.773L0 2.824l.773-1.339H2.32l.774 1.34zM4.892 2.68H3.346l-.774-1.34L3.346 0h1.546l.774 1.34zM7.465 4.164H5.918l-.773-1.34.773-1.339h1.547l.773 1.34z"/>
      </g>
    </svg>,
    skill: "Dev Web",
    desc: "Node.js, Angular, Next.js, MongoDB",
  },
  {
    icon: <svg width="40.859" height="15.739" viewBox="0 0 10.811 4.164" xmlns="http://www.w3.org/2000/svg">
      <g fill="#8e2621">
        <path
          d="M5.918 1.485l-.774 1.34.774 1.34h1.547l.773-1.34-.773-1.34zm.183.317h1.18l.591 1.023-.59 1.022H6.1l-.59-1.022zM8.49 0l-.773 1.34.773 1.339h1.547l.774-1.34L10.037 0zm.183.317h1.18l.591 1.022-.59 1.023h-1.18l-.59-1.023zM2.32 4.164H.773L0 2.824l.773-1.339H2.32l.774 1.34zM4.892 2.68H3.346l-.774-1.34L3.346 0h1.546l.774 1.34z"/>
      </g>
    </svg>,
    skill: "UX design",
    desc: "prototyping, wireframes",
  },
  {
    icon: <svg width="40.859" height="15.739" viewBox="0 0 10.811 4.164" xmlns="http://www.w3.org/2000/svg">
      <g fill="#8e2621">
        <path
          d="M5.918 1.485l-.774 1.34.774 1.34h1.547l.773-1.34-.773-1.34zm.183.317h1.18l.591 1.023-.59 1.022H6.1l-.59-1.022zM8.49 0l-.773 1.34.773 1.339h1.547l.774-1.34L10.037 0zm.183.317h1.18l.591 1.022-.59 1.023h-1.18l-.59-1.023zM2.32 4.164H.773L0 2.824l.773-1.339H2.32l.774 1.34zM4.892 2.68H3.346l-.774-1.34L3.346 0h1.546l.774 1.34z"/>
      </g>
    </svg>,
    skill: "Design graphique",
    desc: "Illustrator, InDesign, Photoshop",
  },
]

type ResumeSkillsProps = {};

const ResumeSkills = (_: ResumeSkillsProps): JSX.Element => {
  return (
    <section className={`${resumeSkillsStyles.skillsSection} ${resumeLayoutStyles.leftColSection}`}>
      <h2 className="default-h2"><span>C</span>ompétences</h2>
      <ul className={resumeSkillsStyles.skillsList}>
        {skillItems.map((si, i) =>
          <li key={i}>
            <span className={resumeSkillsStyles.skillIcon}>
              {si.icon}
            </span>
            <ul>
              <li>{si.skill}</li>
              <li>{si.desc}</li>
            </ul>
          </li>,
        )}
      </ul>
    </section>
  );
};

export default ResumeSkills;
