import React                                        from "react";
import Head                                         from "next/head";
import Layout, { siteTitle }                        from "../components/layout";
import gsap                                         from "gsap";
import { ScrollToPlugin }                           from "gsap/dist/ScrollToPlugin";
import PropTypes                                    from "prop-types";
import { Waypoint }                                 from "react-waypoint";
import { About, Banner, CV, HomeFooter, Portfolio } from "../components/home";
import { withRouter, NextRouter }                   from "next/router";
import Header                                       from "../components/header";

interface WithRouterProps {
  router: NextRouter
}

gsap.registerPlugin(ScrollToPlugin);

const FooterElement = props => {
  return (
    <Waypoint
      bottomOffset={100}
      onPositionChange={({ previousPosition, currentPosition }) => {
        if (props.onInViewChanged) {
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
};

FooterElement.propTypes = {
  onInViewChanged: PropTypes.func,
};

interface HomePageProps extends WithRouterProps {
}

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
    const urlParts = document.URL.split("#");
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

  handleLinkClick = (sectionIdx, _) => {
    this.setActiveSection(sectionIdx);
    // this.jumpToSection(href);
  };

  onPortfolioFilterClick = (filterIdx: number) => this.setState({ currentPortfolioFilter: filterIdx });

  jumpToSection = href => gsap.to(window, { duration: 1, scrollTo: `#${href}`, ease: "power2.inOut" });

  render() {
    return (
      <Layout
        header={<Header
          isHomePage={true}
          activeSection={this.state.activeSection}
          onLinkClick={this.handleLinkClick}
          // onPortfolioFilterClick={this.onPortfolioFilterClick}
        />}
        footer={<FooterElement onInViewChanged={inView => {
          this.setActiveSection(inView ? 3 : 2);
        }}/>}
      >
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Banner/>
        <About/>

        <Waypoint
          topOffset={56 * 2}
          bottomOffset={"65%"}
          onPositionChange={({ previousPosition, currentPosition }) => {
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

        <Portfolio
          currFilter={this.state.currentPortfolioFilter}
          onFilterClick={this.onPortfolioFilterClick}
        />

        <Waypoint
          topOffset={56 * 2}
          bottomOffset={"65%"}
          onPositionChange={({ previousPosition, currentPosition }) => {
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

        <CV/>
      </Layout>
    );
  }
}

export default withRouter(HomePage);
