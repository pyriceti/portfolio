import homeStyles                                          from "../../styles/index.module.scss";
import { Col, Container, Row }                             from "react-bootstrap";
import React from "react";
import { SectionHandle }    from "../svg";
import { Reveal, Tween }    from "react-gsap";

const resumeSkillBars = [
  {
    label: "Game Design & Design général",
    skills: [
      {
        id:    "gd",
        label: "Game design",
        value: "Unity 3D",
        progress: .9,
      },
      {
        id:    "sd",
        label: "Sound design",
        value: "Wwise, Ableton, Audacity",
        progress: .8,
      },
      {
        id:    "ux",
        label: "UX design",
        value: null,
        progress: .7,
      },
      {
        id:    "ui",
        label: "Design graphique",
        value: "Illustrator, InDesign, Photoshop",
        progress: .7,
      },
    ],
  },
  {
    label: "Informatique",
    skills: [
      {
        id:    "unity",
        label: "Unity 3D",
        value: "gameplay, intégration, tools & optimisation",
        progress: 1,
      },
      {
        id:    "js",
        label: "Stack js",
        value: "Node.js, Angular, Next.js, MongoDB",
        progress: .9,
      },
      {
        id:    "wamp",
        label: "Stack LAMP",
        value: "Linux, Apache, MySQL, PHP",
        progress: .8,
      },
      {
        id:    "devOther",
        label: "Android, AngularJS, Java, C++, C#, jQuery",
        value: null,
        progress: .7,
      },
    ],
  },
  {
    label: "Gestion de projet",
    skills: [
      {
        id:    "scrum",
        label: "Méthodes agiles (type SCRUM)",
        value: null,
        progress: 1,
      },
      {
        id:    "integrations",
        label: "Intégrations Slack, Gantt, SWOT",
        value: null,
        progress: .9,
      },
      {
        id:    "boards",
        label: "Trello, Teamwork",
        value: null,
        progress: .8,
      },
    ],
  },
];

interface SkillsProps extends React.HTMLProps<HTMLElement> {
}

const Skills: React.FC<SkillsProps> = () => {

  return (
    <section className={`${homeStyles.skillSectionContainer} position-relative`}>
      <SectionHandle className="section-handle gray" />
      <SectionHandle className="section-handle-reverse gray" />
      <Container id="skills">
        <Row>
          <Col lg={8} className="offset-lg-2">
            <h2 className="text-primary fw-normal">Compétences</h2>
            <p className="resume-dark-text">
              Mes études et expériences professionnelles m’ont permis d’acquérir des compétences variées
              permettant de m’adapter à un certain nombre de contextes. Plus que les compétences évoquées
              ci-dessous, j’ai surtout appris à m’organiser, à faire des recherches pour éviter de réinventer la
              roue et à m’adapter à un contexte mouvant à court terme (en start-up notamment). En soi, à faire en
              sorte de toujours <em>apprendre à apprendre</em>.
            </p>

            {/* SKILLS BARS */}
            <Container className="px-0">
              <Row>
                {resumeSkillBars.map((cat, catIdx) =>
                  <Col xs={12} key={catIdx}>
                    <h3 className="almost-black mb-3">{cat.label}</h3>
                    <div className="skill-bars">
                      {cat.skills.map((skill, skillIdx) =>
                        <Reveal key={skillIdx}>
                          <div data-pro-bar-id={skill.id} key={skillIdx}
                               className={`${homeStyles.proBarContainer} pro-bar-container position-relative mb-4`}>
                            <Tween from={{ width: 0 }} ease="power2.inOut" duration={1}
                                   delay={1 - skill.progress}>
                              <div className="pro-bar" style={{ width: `${skill.progress * 100}%` }}/>
                            </Tween>
                            <Tween from={{ x: -4, opacity: 0 }} ease="power2.inOut" duration={.5}
                                   delay={.3}>
                                  <span className="label semi-bold position-absolute ps-1"
                                        style={{ width: `${skill.progress * 100}%` }}>
                                  {`${skill.label}${skill.value ? "\u00A0: " : ""}`}
                                    {skill.value &&
                                    <span className="value">{skill.value}</span>
                                    }
                                  </span>
                            </Tween>
                          </div>
                        </Reveal>,
                      )}
                    </div>
                  </Col>,
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
