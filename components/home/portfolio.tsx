import Image                                                                            from "next/image";
import Link                                                                             from "next/link";
import homeStyles
                                                                                        from "../../styles/index.module.scss";
import { Button, Card, Col, Container, Row }                                            from "react-bootstrap";
import utilStyles
                                                                                        from "../../styles/utils.module.scss";
import React, { forwardRef, HTMLProps, MouseEventHandler, useEffect, useRef, useState } from "react";
import Shuffle                                                                          from "shufflejs";
import { GoToIcon }                                                                     from "../svg";
import { PlayState, Tween }                                                             from "react-gsap";
import { transparentGifPix }                                                            from "../../util";

const portfolioFilters = [
  {
    id: "all",
    label: "Tout",
  },
  {
    id: "games",
    label: "Jeux vidéo",
  },
  {
    id: "web",
    label: "Web",
  },
  {
    id: "other",
    label: "Autres",
  },
];

interface PortfolioProject {
  id: string,
  cat: string,
  label: string,
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "aurore",
    cat: "games",
    label: "Ce carnet appartient à Aurore",
  },
  {
    id: "fragments",
    cat: "games",
    label: "Fragments",
  },
  {
    id: "musichelper",
    cat: "other",
    label: "Music Helper",
  },
  {
    id: "dynamo",
    cat: "games",
    label: "Dynamo",
  },
  {
    id: "exhibition",
    cat: "games",
    label: "The Exhibition",
  },
  {
    id: "2116",
    cat: "other",
    label: "2116",
  },
  {
    id: "chattree",
    cat: "web",
    label: "ChatTree",
  },
  {
    id: "cartoenm",
    cat: "web",
    label: "CartoENM",
  },
  {
    id: "chaudron",
    cat: "games",
    label: "Chaudron magique",
  },
  {
    id: "ici",
    cat: "games",
    label: "IcI",
  },
];

const GoToProjectElement = forwardRef<any, HTMLProps<any>>((props, ref) =>
  <GoToIcon forwardedRef={ref} {...props} />);

interface ProjectCardElementProps {
  project: PortfolioProject,
  onClick?: MouseEventHandler<HTMLElement>,
}

const ProjectCardElement = forwardRef<any, ProjectCardElementProps>(({ project, onClick }, ref) => {
  const p = project;

  const [isHovered, setIsHovered] = useState(false);

  return <Card
    ref={ref} as="a"
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    className={`${homeStyles.portfolioCard} portfolio-project col-6 col-md-4 col-xl-3`}
    data-groups={p.cat}
  >
    <Image
      width={280}
      height={280}
      src={`/images/portfolio/${p.cat}/${p.id}.jpg`}
      alt={`Image de ${p.label}`}
      layout="intrinsic"
      placeholder="blur"
      blurDataURL={transparentGifPix}
      quality={100}
      className={`${homeStyles.portfolioCardImg} card-img`}
    />
    <Card.ImgOverlay
      className={`${homeStyles.portfolioCardOverlay} d-flex flex-column justify-content-end`}>
      <Card.Title className={`${homeStyles.portfolioCardTitle} m-0 text-center`}>
        {p.label}
      </Card.Title>
    </Card.ImgOverlay>

    <Tween
      playState={isHovered ? PlayState.restart : PlayState.restartReverse}
      from={{ opacity: 0, visibility: "hidden", x: -12 }}
      to={{ opacity: 1, visibility: "visible", x: 0 }}
      ease="power2.inOut" duration={.300}>
      <GoToProjectElement className={homeStyles.portfolioCardGoToIcon}/>
    </Tween>
  </Card>;
});

interface PortfolioProps extends HTMLProps<HTMLElement> {
  currFilter: number,
  onFilterClick: (filter: number) => void,
}

const Portfolio = forwardRef<HTMLElement, PortfolioProps>(
  ({ currFilter, onFilterClick }, ref) => {

    const [projectsShuffle, setProjectsShuffle] = useState(null);

    const projectsContainerRef = useRef(null);

    // Init useEffect
    useEffect(() => {
      const newProjectsShuffle = new Shuffle(projectsContainerRef.current, {
        itemSelector: ".portfolio-project",
        delimiter: "|",
        speed: 400,
      });

      // The elements are in the DOM, initialize a shuffle instance.
      setProjectsShuffle(newProjectsShuffle);

      setTimeout(() => {
        newProjectsShuffle.resetItems();
        if (currFilter === 0)
          newProjectsShuffle.filter(Shuffle.ALL_ITEMS);
        else
          newProjectsShuffle.filter(portfolioFilters[currFilter].id);
      }, 300);

      return () => {
        if (projectsShuffle)
          projectsShuffle.destroy();
        setProjectsShuffle(null);
      };
    }, [projectsContainerRef]);

    /* Handle the current filter from parent props */
    useEffect(() => {
      // Ignore if projectsShuffle isn't initialized
      if (!projectsShuffle)
        return;

      // All
      if (currFilter === 0)
        projectsShuffle.filter(Shuffle.ALL_ITEMS);
      else
        projectsShuffle.filter(portfolioFilters[currFilter].id);
    }, [currFilter]);

    /**
     * @param i The filter index (0: all)
     */
    const handlePortfolioFilterClick = (i: number) => onFilterClick(i);

    return (
      <section id="portfolio" className={homeStyles.portfolio} ref={ref}>
        {/* PORTFOLIO TOP */}
        <div className={homeStyles.portfolioTop}>
          <div className={homeStyles.portfolioOverlay}>
            <Container>
              <Row>
                <Col lg={8} className="offset-lg-2">
                  <h2 className={`${utilStyles.textAlmostWhite} fw-normal`}>Portfolio</h2>
                  <div className="filters">
                    {portfolioFilters.map((f, i) =>
                      <Button
                        variant="secondary" key={i} onClick={() => handlePortfolioFilterClick(i)}
                        className={`${homeStyles.portfolioFilterBtn}
                      ${currFilter === i ? homeStyles.portfolioFilterBtnActive : ""}
                      rounded-sm text-uppercase semi-bold me-1 mb-1`}>
                        {f.label}
                      </Button>,
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* PORTFOLIO BOTTOM */}
        <div className="pt-2 pt-sm-3 pt-md-5">
          <Container>
            <Row ref={projectsContainerRef}>
              {portfolioProjects.map((p, i) =>
                <Link href={`/projects/${p.id}`} key={i}>
                  <ProjectCardElement project={p}/>
                </Link>,
              )}
            </Row>
          </Container>
        </div>
      </section>
    );
  });

export default Portfolio;
