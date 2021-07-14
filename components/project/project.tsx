import React                           from "react";
import Head                            from "next/head";
import Image                           from "next/image";
import { useRouter }                   from "next/router";
import { Button, Col, Container, Row } from "react-bootstrap";
import Layout, { siteTitlePrefix }     from "../layout";
import projectStyles                   from "./project.module.scss";
import utilStyles                      from "../../styles/utils.module.scss";
import ThinSP                          from "../util/thinsp";
import { transparentGifPix }           from "../../util";
import { ProjectData }                 from "../../src/projects";
import { SRLWrapper }                  from "simple-react-lightbox";
import ReactPlayer                     from "react-player/lazy";
import { GoToIcon }                    from "../svg";

type ProjectProps = {
  projectData: ProjectData,
}

const Project = ({ projectData }: ProjectProps): JSX.Element => {
  const router = useRouter();

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
      iconPadding: '10px',
      size: '52px',
    },
    caption: {
      showCaption: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  const onBackToPortfolioBtnClick = () => router.push(`/#portfolio`);

  return (
    <Layout>
      <Head>
        <title>{siteTitlePrefix + projectData.title}</title>
      </Head>

      <section className={projectStyles.projectContainer}>
{/*        <Container as="nav" className={`${projectStyles.backToPortfolioContainer} py-3`}>
          <Row>
            <Col lg={10} className="offset-lg-1">
              <Button
                onClick={onBackToPortfolioBtnClick}
                className={`${projectStyles.backToPortfolioBtn} ms-lg-2 d-flex align-items-center`}
                size="lg" variant="primary"
              ><GoToIcon className={`${projectStyles.backToPortfolioIcon} me-1`}/>Revenir au portfolio</Button>
            </Col>
          </Row>
        </Container>*/}

        <header className={projectStyles.projectHeader}>
          <div className={`${projectStyles.projectOverlay} pt-4 pb-4`}>
            <Container>
              <Row>
                <Col lg={10} className="offset-lg-1">

                  <nav className={`${projectStyles.backToPortfolioContainer} mb-1`}>
                    <Button
                      onClick={onBackToPortfolioBtnClick}
                      className={`${projectStyles.backToPortfolioBtn} mb-4 d-flex align-items-center`}
                      size="sm" variant="outline-light"
                    ><GoToIcon className={`${projectStyles.backToPortfolioIcon} me-1`}/>Revenir au portfolio</Button>
                  </nav>

                  <h1 className={`${utilStyles.textAlmostWhite}`}>{projectData.title}</h1>
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>
                    Date de réalisation<ThinSP/>: {projectData.date}
                  </p>
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>
                    Catégorie<ThinSP/>: {projectData.cat}
                  </p>
                  {projectData.roles !== undefined &&
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>
                    Rôles<ThinSP/>: {projectData.roles}
                  </p>
                  }
                  {projectData.techno !== undefined &&
                  <p className={`${projectStyles.projectMetadata} small semi-bold`}>
                    Technologies<ThinSP/>: {projectData.techno}
                  </p>
                  }
                </Col>
              </Row>
            </Container>
          </div>
        </header>

        <Container className={projectStyles.projectContentContainer}>
          <Row>
            <Col lg={10} className="offset-lg-1">
              {projectData.content.map((c, i) =>
                <React.Fragment key={i}>
                  {c.isSubTitle === true &&
                  <h3 className="mt-3 fw-normal">{c.title}</h3>
                  }
                  {c.isSubTitle !== true &&
                  <h2 className="default-h2 fw-normal mt-4">{c.title}</h2>
                  }
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
                        {b.media.type === "embedded_video" &&
                        <div className={projectStyles.videoWrapper}>
                          <ReactPlayer
                            url={b.media.src}
                            width="100%" height="100%"
                            volume={0} muted={true} playing={true} loop={true}
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
                              objectFit="contain"
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
              <h2 className="default-h2 fw-normal mt-4">Crédits</h2>

              {projectData.credits !== undefined &&
              <ul className="list-unstyled">
                {projectData.credits.map((c, i) =>
                  <li
                    key={i}
                    className={projectStyles.creditItem}><span
                    className={`${projectStyles.creditName} bold`}>{c.name} {c.surname.toUpperCase()}<ThinSP/>:</span> {c.roles}
                  </li>,
                )}
              </ul>
              }

              {projectData.creditsComplex !== undefined &&
              projectData.creditsComplex.map((c, i) =>
                <React.Fragment key={i}>
                  <h3 className="h4 fw-normal">{c.title}</h3>
                  <ul className="list-unstyled">
                    {c.credits.map((e, j) =>
                      <li
                        key={j}
                        className={projectStyles.creditItem}><span
                        className={`${projectStyles.creditName} bold`}>{e.name} {e.surname.toUpperCase()}<ThinSP/>:</span> {e.roles}
                      </li>,
                    )}
                  </ul>
                </React.Fragment>)
              }

              {projectData.externalLinks.length > 0 &&
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

      <style jsx>{`
        header {
          background-image: url(${projectData.bgImg ?? "/images/svg/bgFresco.svg"});
          background-position: ${projectData.bgImg ? "center" : "top"};
          background-repeat: ${projectData.bgImg ? "no-repeat" : "repeat"};
          background-size: ${projectData.bgImg ? "cover" : "auto"};
          background-color: ${projectData.bgImg ? "transparent" : "#1b0c0d"};
          box-shadow: ${projectData.bgImg ? "none" : "inset 0 0 4px 4px #1b0c0d"};
        }
        
        header > div {
          background: rgba(0,0,0,${projectData.bgImg ? (projectData.bgImgOverlay ?? ".66") : ".5"}) 0 0;
          backdrop-filter: ${projectData.bgImg ? "blur(2px)" : "none"};
        }
      `}</style>
    </Layout>
  );
};

export default Project;
