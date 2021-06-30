import { Col, Container, Row }     from "react-bootstrap";
import React, { HTMLProps }        from "react";
import Head                        from "next/head";
import Image                       from "next/image";
import Layout, { siteTitlePrefix } from "../layout";
import projectStyles               from "../../styles/project.module.scss";
import utilStyles                  from "../../styles/utils.module.scss";
import ThinSP                      from "../util/thinsp";
import { transparentGifPix }       from "../../util";
import { ProjectData }             from "../../src/projects";

interface ProjectProps extends HTMLProps<HTMLElement> {
  projectData: ProjectData,
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {

  return (
    <Layout>
      <Head>
        <title>{siteTitlePrefix + projectData.title}</title>
      </Head>

      <section className={projectStyles.projectContainer}>
        <div className={projectStyles.projectHeader}>
          <div className={projectStyles.projectOverlay}>
            <Container>
              <Row>
                <Col lg={10} className="offset-lg-1">
                  <h1 className={`${utilStyles.textAlmostWhite} h3 text-uppercase`}>{projectData.title}</h1>
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>Date de
                    réalisation<ThinSP/>: {projectData.date}</p>
                  <p
                    className={`${projectStyles.projectMetadata} small semi-bold`}>Catégorie<ThinSP/>: {projectData.cat}
                  </p>
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>Rôle<ThinSP/>: {projectData.roles}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Container className={projectStyles.projectContentContainer}>
          <Row>
            <Col lg={10} className="offset-lg-1">
              {projectData.content.map((c, i) =>
                <React.Fragment key={i}>
                  <h2 className="default-h2 fw-normal mt-4">{c.title}</h2>
                  {c.content.map((b, j) =>
                    <Row key={j}>
                      <Col>
                        <p>
                          {b.p}
                        </p>
                      </Col>
                      {b.media !== undefined &&
                      <Col>
                        {b.media.type === "video" &&
                        <div className={projectStyles.videoWrapper}>
                          <iframe
                            width="100%" height="100%"
                            src={b.media.src}
                            frameBorder="0" allowFullScreen
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                          </iframe>
                        </div>
                        }
                        {b.media.type === "image" &&
                        <div className={projectStyles.imageWrapper}>
                          <Image
                            width={1600}
                            height={900}
                            src={b.media.src}
                            alt={`Illustration de ${projectData.title}`}
                            layout="intrinsic"
                            placeholder="blur"
                            blurDataURL={transparentGifPix}
                            quality={100}
                            className={`${projectStyles.sideImg}`}
                          />
                        </div>
                        }
                      </Col>
                      }
                    </Row>,
                  )}
                </React.Fragment>,
              )}
              <h2 className="default-h2 fw-normal mt-5">Crédits</h2>
              <ul className="list-unstyled">
                {projectData.credits.map((c, i) =>
                  <li
                    key={i}><span
                    className={`${projectStyles.creditName} bold`}>{c.name} {c.surname.toUpperCase()}<ThinSP/>:</span> {c.roles}
                  </li>)
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Project;
