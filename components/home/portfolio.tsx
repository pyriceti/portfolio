import Image                                                                 from "next/image";
import Link                                                                  from "next/link";
import React, { forwardRef, MouseEventHandler, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row, Spinner }                              from "react-bootstrap";
import { animated, config, useSpring }                                       from "@react-spring/web";
import Shuffle                                                               from "shufflejs";
import { GoToIcon }                                                          from "../svg";
import { transparentGifPix }                                                 from "../../util";
import { useMediaQuery }                                                     from "../../hooks/use-media-query";

import homeStyles from "../../styles/index.module.scss";
import utilStyles from "../../styles/utils.module.scss";

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

type PortfolioProject = {
  id: string,
  cat: string,
  title: string,
  subTitle: string,
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "unmaze",
    cat: "games",
    title: "Unmaze",
    subTitle: "Jeu narratif mobile",
  },
  {
    id: "aurore",
    cat: "games",
    title: "Ce carnet appartient à Aurore",
    subTitle: "Jeu vidéo transmédia",
  },
  {
    id: "fragments",
    cat: "games",
    title: "Fragments",
    subTitle: "Jeu vidéo narratif",
  },
  {
    id: "musichelper",
    cat: "other",
    title: "Music Helper",
    subTitle: "Expérimentation en génération procédurale musicale",
  },
  {
    id: "dynamo",
    cat: "games",
    title: "Dynamo",
    subTitle: "Jeu vidéo horrifique",
  },
  {
    id: "exhibition",
    cat: "games",
    title: "The Exhibition",
    subTitle: "Jeu vidéo d’infiltration",
  },
  {
    id: "2116",
    cat: "other",
    title: "2116",
    subTitle: "Jeu de plateau",
  },
  {
    id: "chattree",
    cat: "web",
    title: "ChatTree",
    subTitle: "Application de messagerie instantanée",
  },
  {
    id: "cartoenm",
    cat: "web",
    title: "CartoENM",
    subTitle: "Application web juridique",
  },
  {
    id: "chaudron",
    cat: "games",
    title: "Chaudron magique",
    subTitle: "Jeu vidéo narratif",
  },
  {
    id: "ici",
    cat: "games",
    title: "IcI",
    subTitle: "Jeu vidéo contemplatif",
  },
];

// const GoToProjectElement = forwardRef<any, HTMLProps<any>>((props, ref) =>
//   <GoToIcon forwardedRef={ref} {...props} />);

const GoToProjectElement = (props) => <GoToIcon {...props} />;

type ProjectCardElementProps = {
  project: PortfolioProject,
  onClick?: MouseEventHandler<HTMLElement>,
}

const ProjectCardElement = forwardRef<any, ProjectCardElementProps>(({ project, onClick }, ref) => {
  const p = project;
  const [isHovered, setIsHovered] = useState(false);

  const portfolioCardInfoStyles = useSpring({
    to: { paddingRight: isHovered ? "24px" : "8px" },
    config: config.gentle,
  });

  const goToProjectStyles = useSpring({
    to: {
      opacity: isHovered ? 1 : 0,
      visibility: isHovered ? "visible" : "hidden",
      x: isHovered ? -12 : -16,
      transform: "translate(-50%, -50%)",
      top: "50%",
    },
    config: config.gentle,
  });

  const AnimatedGoToProjectElement = animated(GoToProjectElement);

  return <Link href={`/projects/${p.id}`}>
    <a
    ref={ref}
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    className={`${homeStyles.portfolioCard} portfolio-project col-12 col-sm-6 col-xl-4 mb-1 mb-sm-0`}
    data-groups={p.cat}
  >
      <div className={`${homeStyles.portfolioCardContents} d-flex d-sm-block`}>
        <div className={homeStyles.portfolioCardImgWrapper}>
          <Image
            width={360}
            height={270}
            layout="intrinsic"
            src={`/images/portfolio/${p.cat}/${p.id}.jpg`}
            alt={`Image de ${p.title}`}
            placeholder="blur"
            blurDataURL={transparentGifPix}
            quality={100}
            className={`${homeStyles.portfolioCardImg} card-img`}
            objectFit="cover"
          />
        </div>
        <animated.div
          className={`${homeStyles.portfolioCardInfo} text-start text-sm-center d-flex flex-column justify-content-center position-relative`}
          style={portfolioCardInfoStyles}>
          <p className={`${homeStyles.portfolioCardTitle} mb-0 bold`}>{p.title}</p>
          <p className={`${homeStyles.portfolioCardSubTitle} mb-0 small`}>{p.subTitle}</p>
          <AnimatedGoToProjectElement className={homeStyles.portfolioCardGoToIcon} style={goToProjectStyles}/>
        </animated.div>
      </div>
    </a>
  </Link>;
});

type PortfolioRef = HTMLElement;
type PortfolioProps = {
  initItemCountMobile?: number,
  currFilter: number,
  onFilterClick: (filter: number) => void,
}

const Portfolio = forwardRef<PortfolioRef, PortfolioProps>(
  ({ initItemCountMobile = 4, currFilter, onFilterClick }, ref) => {

    const [loadedProjects, setLoadedProjects] = useState<PortfolioProject[]>([]);
    const [isProjectsAllLoaded, setIsProjectsAllLoaded] = useState<boolean>(false);
    const [projectsShuffle, setProjectsShuffle] = useState<Shuffle | null>(null);
    const [isLoadingAllProjects, setIsLoadingAllProjects] = useState<boolean>(false);

    const projectsContainerRef = useRef(null);

    // Media query (mobile) effect
    const isMobile = useMediaQuery('(max-width: 575px)');

    // Detect change on isMobile
    useEffect(() => {
      if (isMobile === undefined)
        return;

      if (!isMobile) {
        setLoadedProjects([...portfolioProjects]);
        setIsProjectsAllLoaded(true);
      } else {
        if (window.sessionStorage.getItem("all-projects-loaded") === "true")
        {
          setLoadedProjects([...portfolioProjects]);
          setIsProjectsAllLoaded(true);
        }
        else
          setLoadedProjects(portfolioProjects.slice(0, initItemCountMobile));
      }

      setTimeout(() => {
        if (projectsShuffle)
          projectsShuffle.update();
      }, 300);
    }, [isMobile]);

    // Init useEffect
    useEffect(() => {
      const newProjectsShuffle = new Shuffle(projectsContainerRef.current, {
        // itemSelector: ".portfolio-project",
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

    const onSeeMoreBtnClick = () => {
      setIsLoadingAllProjects(true);
      window.sessionStorage.setItem("all-projects-loaded", "true");

      setTimeout(() => {
        setLoadedProjects([...portfolioProjects]);
      }, 400);

      setTimeout(() => {
        projectsShuffle.resetItems();
        setIsLoadingAllProjects(false);
        setIsProjectsAllLoaded(true);
      }, 600);
    };

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
            <Row>
              <Col md={8} className="offset-md-2">
                <Row ref={projectsContainerRef}>
                  {isMobile !== undefined &&
                  loadedProjects.map((p, i) =>
                      <ProjectCardElement project={p} key={i}/>,
                  )
                  }
                </Row>
                {isMobile === true && !isProjectsAllLoaded &&
                <Button
                  variant="outline-primary"
                  className="mt-2 d-block m-auto"
                  onClick={onSeeMoreBtnClick}
                  disabled={isLoadingAllProjects}
                >
                  {isLoadingAllProjects &&
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading…</span>
                  </>
                  }
                  {!isLoadingAllProjects && "Voir plus"}
                </Button>
                }
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  });

export default Portfolio;
