import homeStyles                      from "../../styles/index.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import React                           from "react";
import { InView }                      from "react-intersection-observer";
import { animated, config, Spring }    from "@react-spring/web";
import ThinSP                          from "../util/thinsp";

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
        value: "Prototyping, Wireframes",
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
        label: null,
        value: "Android, AngularJS, Java, C++, C#, jQuery",
        progress: .7,
      },
    ],
  },
  {
    label: "Gestion de projet",
    skills: [
      {
        id:    "scrum",
        label: null,
        value: "Méthodes agiles (type SCRUM)",
        progress: 1,
      },
      {
        id:    "integrations",
        label: null,
        value: "Intégrations Slack, Gantt, SWOT",
        progress: .9,
      },
      {
        id:    "boards",
        label: null,
        value: "Trello, Teamwork",
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
      <Container id="skills">
        <Row>
          <Col lg={8} className="offset-lg-2">

            <Button as="a" target="_blank" href={"/download-resume"}
                    className={`${homeStyles.downloadResumeSkillsSectionBtn} text-uppercase d-inline-block mb-4`}
                    size="sm" variant="outline-primary">Télécharger mon CV</Button>

            <h3 className={`${homeStyles.homeH3} text-primary fw-normal`}>Compétences</h3>
            <p className="resume-dark-text">
              En dehors des compétences évoquées ci-dessous, j’ai appris à m’organiser, à faire des recherches pour
              éviter de réinventer la roue et à m’adapter à un contexte mouvant à court terme. En soi, à faire en sorte
              de toujours <em>apprendre à apprendre</em>.
            </p>

            {/* SKILLS BARS */}
            <Container className="px-0">
              <Row>
                {resumeSkillBars.map((cat, catIdx) =>
                  <Col xs={12} key={catIdx}>
                    <h4 className="almost-black mb-3">{cat.label}</h4>
                    <div className="skill-bars">
                      {cat.skills.map((skill, skillIdx) =>
                        <InView key={skillIdx}
                                triggerOnce
                        >
                          {({ inView, ref }) => <div
                            ref={ref}
                            data-pro-bar-id={skill.id}
                            className={`${homeStyles.proBarContainer} pro-bar-container position-relative mb-4`}>
                            <Spring delay={(1 - skill.progress) * 1000}
                                    from={{ width: "0%" }}
                                    to={{ width: inView ? `${skill.progress * 100}%` : "0%" }}
                                    config={{ mass: 60, tension: 450, friction: 100, clamp: true }}>
                              {(styles) => (
                                <animated.div className="pro-bar" style={styles}/>
                              )}
                            </Spring>
                            <Spring delay={300}
                                    from={{ opacity: 0, x: -4 }}
                                    to={{ opacity: inView ? 1 : 0, x: inView ? 0 : -4, transform: 'translateY(-50%)' }}
                                    config={config.stiff}>
                              {(styles) => (
                                <animated.span className="label semi-bold position-absolute ps-1"
                                      style={{ width: `${skill.progress * 100}%`, ...styles }}>
                                {skill.label && skill.label}
                                  {skill.label && skill.value && <><ThinSP/>: </>}
                                  {skill.value && <span className="value">{skill.value}</span>}
                              </animated.span>
                              )}
                            </Spring>
                          </div>}
                        </InView>,
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
