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
import { SRLWrapper }              from "simple-react-lightbox";
import ReactPlayer                 from "react-player/lazy";

interface ProjectProps extends HTMLProps<HTMLElement> {
  projectData: ProjectData,
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {

  const srlOptions = {
    settings: {
      disableWheelControls: true,
      disablePanzoom: true,
      autoplaySpeed: 0,
      hideControlsAfter: 1000,
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      showCaption: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

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
                      {b.p !== undefined &&
                      <Col xs={12} md={b.media !== undefined ? 6 : 12}>
                        <p>
                          {b.p}
                        </p>
                      </Col>
                      }
                      {b.media !== undefined &&
                      <Col xs={12} md={b.p !== undefined ? 6 : 12}>
                        {b.media.type === "video" &&
                        <div className={projectStyles.videoWrapper}>
                          <ReactPlayer
                            url={b.media.src}
                            width="100%" height="100%"
                            config={{ youtube: { playerVars: { controls: 2 } }}}
                          />
                        </div>
                        }
                        {b.media.type === "image" &&
                        <div className={projectStyles.imageWrapper}>
                          <SRLWrapper options={srlOptions}>
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
                          </SRLWrapper>
                        </div>
                        }
                        {b.media.type === "audio" &&
                        <div className={projectStyles.audioWrapper}>
                          <ReactPlayer
                            width="100%"
                            height="300px"
                            url={b.media.src}/>
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
                  </li>,
                )}
              </ul>

              {projectData.externalLinks !== undefined &&
              <>
                <h2 className="default-h2 fw-normal mt-4">Liens utiles</h2>
                <ul>
                  {projectData.externalLinks.map((l, i) =>
                    <li key={i}>{l}</li>,
                  )}
                </ul>
              </>
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Project;
