import React                           from "react";
import Image                           from "next/image";
import Head                            from "next/head";
import Layout, { siteTitle }           from "../components/layout";
import homeStyles                      from "../styles/index.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import ThinSP                          from "../components/util/thinsp";
import gsap                            from "gsap";
import { ScrollToPlugin }              from "gsap/dist/ScrollToPlugin";
import HomeHeader                      from "../components/home/home-header";
import HomeFooter                      from "../components/home/home-footer";
import PropTypes                       from "prop-types";
import { Waypoint }                    from "react-waypoint";
import Portfolio                       from "../components/home/portfolio";
import { Experience, Studies }         from "../components/home";
import Skills                          from "../components/home/skills";
import Banner                          from "../components/home/banner";
import { transparentGifPix }           from "../util";
import { withRouter, NextRouter }      from "next/router";

interface WithRouterProps {
  router: NextRouter
}

gsap.registerPlugin(ScrollToPlugin);

const FooterElement = props => {
  return (
    <Waypoint
      bottomOffset={100}
      onPositionChange={({ previousPosition, currentPosition }) => {
        if (props.onInViewChanged)
        {
          if (previousPosition === undefined)
            return;
          if (previousPosition === Waypoint.below && currentPosition === Waypoint.inside)
            props.onInViewChanged(true);
          else if (previousPosition === Waypoint.inside && currentPosition === Waypoint.below)
            props.onInViewChanged(false);
        }
      }}
    >
      <HomeFooter/>
    </Waypoint>
  );
}

FooterElement.propTypes  = {
  onInViewChanged: PropTypes.func
};

interface HomePageProps extends WithRouterProps {}

interface HomePageState {
  activeSection: number,
  currentPortfolioFilter: number,
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props) {
    super(props);
    const router = props.router;

    const currentPortfolioFilter = router.query.q ? parseInt(router.query.q, 10) : 0;

    this.state = {
      activeSection: 0,
      currentPortfolioFilter,
    };
  }

  componentDidMount() {
    // Setup active section
    let activeSection = 0;
    const urlParts = document.URL.split('#');
    const anchor = urlParts[urlParts.length - 1];
    switch (anchor) {
      case "about":
        activeSection = 0;
        break;
      case "portfolio":
        activeSection = 1;
        break;
      case "resume":
        activeSection = 2;
        break;
      case "contact":
        activeSection = 3;
        break;
    }

    this.setState({ activeSection });
  }

  setActiveSection = activeSection => this.setState({ activeSection });

  handleLinkClick = (sectionIdx, href) => {
    this.setActiveSection(sectionIdx);
    this.jumpToSection(href);
  }

  onPortfolioFilterClick = (filterIdx: number) => this.setState({ currentPortfolioFilter: filterIdx });

  jumpToSection = href => gsap.to(window, { duration: 1, scrollTo: `#${href}`, ease: "power2.inOut" });

  render() {
    return (
      <Layout
        header={<HomeHeader
          activeSection={this.state.activeSection}
          onLinkClick={this.handleLinkClick}
          onPortfolioFilterClick={this.onPortfolioFilterClick}
        />}
        footer={<FooterElement onInViewChanged={inView => {
          this.setActiveSection(inView ? 3 : 2);
        }}/>}
      >
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Banner/>

        {/* ABOUT */}
        <Container as="section" id="about" className={homeStyles.about}>
          <Row>
            <Col lg={8} className="offset-lg-2">
              <Row className="mb-2">
                <Col>
                  <figure>
                    <blockquote className={`${homeStyles.wisdomQuote} blockquote`}>
                      <p className="mb-0">«<ThinSP/>Nous avons beau être intelligents, encore faut-il qu’on sache faire
                        preuve d’intelligence.<ThinSP/>»</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Gershom Scholem
                    </figcaption>
                  </figure>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} lg={4} className="d-flex flex-column align-items-center align-items-md-end">
                  <div className={`${homeStyles.aboutProfilePicContainer} mb-2 mt-1 img-thumbnail`}>
                    <Image
                      width={158}
                      height={158}
                      src={"/images/profile-img.jpg"}
                      alt={"Image de profil"}
                      layout="intrinsic"
                      placeholder="blur"
                      blurDataURL={transparentGifPix}
                      quality={100}
                    />
                  </div>
                  <div className={`${homeStyles.aboutLinkContainer} mb-xs-1`}>
                    <img src="images/logos/github.svg" alt="github logo"/>
                    <a href="https://github.com/pyriceti" target="_blank" rel="noopener">github.com/pyriceti</a></div>
                  <div className={`${homeStyles.aboutLinkContainer} mb-xs-1`}>
                    <img src="images/logos/itchio.svg" alt="itchio logo"/>
                    <a href="https://pyriceti.itch.io/" target="_blank" rel="noopener">pyriceti.itch.io</a></div>
                </Col>
                <Col xs={12} md={8} lg={8} className="mt-4 mt-md-0">
                  <h2 className="h3 no-uppercase">Qui suis-je ?</h2>
                  <p>Ingénieur généraliste de formation, je me suis spécialisé dans les applications et interfaces web
                    avec un fort intérêt pour les questions d’interaction, d’ergonomie et plus généralement d’expérience
                    utilisateur (UX design).</p>
                  <p>Je me passionne aujourd’hui en programmation et game design portant sur la pédagogie et
                    l’éducation, porté par la question suivante<ThinSP/>:</p>
                  <blockquote className={`${homeStyles.personalQuote} blockquote semi-bold ps-3 mb-4`}>
                    <p className="mb-0">Comment concevoir un bon jeu vidéo (i.e. fun) à forte valeur
                      pédagogique<ThinSP/>?</p>
                  </blockquote>

                  <Button
                    as="a"
                    className={`${homeStyles.downloadResumeBtn} text-uppercase d-inline-block ms-lg-2`}
                    size="lg" variant="primary"
                    href="/files/Baptiste_Perraud_CV.pdf" download="Baptiste_PERRAUD_CV">Télécharger mon CV</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Waypoint
          topOffset={56}
          bottomOffset={"65%"}
          onPositionChange={({ previousPosition, currentPosition}) => {
            if (previousPosition === undefined)
              return;
            if (
              (previousPosition === Waypoint.above && currentPosition === Waypoint.inside) ||
              (previousPosition === Waypoint.inside && currentPosition === Waypoint.below)
            )
              this.setActiveSection(0);
            if (
              (previousPosition === Waypoint.below && currentPosition === Waypoint.inside) ||
              (previousPosition === Waypoint.inside && currentPosition === Waypoint.above)
            )
              this.setActiveSection(1);
          }}
        />

        <Portfolio currFilter={this.state.currentPortfolioFilter} onFilterClick={this.onPortfolioFilterClick} />

        <Waypoint
          topOffset={56}
          bottomOffset={"65%"}
          onPositionChange={({ previousPosition, currentPosition}) => {
            if (previousPosition === undefined)
              return;
            if (
              (previousPosition === Waypoint.above && currentPosition === Waypoint.inside) ||
              (previousPosition === Waypoint.inside && currentPosition === Waypoint.below)
            )
              this.setActiveSection(1);
            if (
              (previousPosition === Waypoint.inside && currentPosition === Waypoint.above) ||
              (previousPosition === Waypoint.below && currentPosition === Waypoint.inside)
            )
              this.setActiveSection(2);
          }}
        />

        {/* CV */}
        <section id="resume" className={homeStyles.resumeSection}>
          <Skills/>
          <Experience/>
          <Studies/>
        </section>
      </Layout>
    );
  }
}

export default withRouter(HomePage);
