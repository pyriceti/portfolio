import Link                          from "next/link";
import { useRouter }                 from "next/router";
import headerStyles                  from "./header.module.scss";
import { Nav, Navbar }                          from "react-bootstrap";
import React, { Dispatch, useEffect, useState } from "react";
import { MenuIcon }                             from "./svg";
import withToggleState               from "./HOC/with-toggle-state";
import gsap                          from "gsap";


const homeSections = [
  {
    href: "about",
    text: "Qui suis-je"
  },
  {
    href: "portfolio",
    text: "Portfolio",
    filters: [
      {
        text: "Jeux vidéo"
      },
      {
        text: "Web"
      },
      {
        text: "Autres"
      },
    ],
  },
  {
    href: "resume",
    text: "CV"
  },
  {
    href: "contact",
    text: "Contact"
  },
];


const MenuIconElement = withToggleState((props: any) => <MenuIcon{...props}/>);

interface HeaderProps {
  isHomePage: boolean,
  activeSection?: number,
  onLinkClick?: (sectionIdx: number, href: string) => void,
  // onPortfolioFilterClick: (filterIdx: number) => void,
}

const Header: React.FC<HeaderProps> = ({ isHomePage, activeSection = 0, onLinkClick }) => {
  const router = useRouter();

  const [activeSectionUrl, setActiveSectionUrl] = useState("/");

  const [isExpanded, setIsExpanded] = useState(false);
  const [lastMenuTl, setLastMenuTl]: [gsap.core.Timeline, Dispatch<gsap.core.Timeline>] = useState(null);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSectionUrl("/");
      return;
    }
    switch (activeSection) {
      case 0:
        setActiveSectionUrl("/#about");
        break;
      case 1:
        setActiveSectionUrl("/#portfolio");
        break;
      case 2:
        setActiveSectionUrl("/#resume");
        break;
      case 3:
        setActiveSectionUrl("/#contact");
        break;
    }
  }, [activeSection]);

  const onToggleClick = () => {
    setIsExpanded(oldVal => !oldVal);
  };

  const handleOnMenuIconStateChange = (newState: boolean) => {
    const groupSel = `svg.${headerStyles.navbarMenuIcon} > g`;
    const getLineSel = (idx: number) => `${groupSel} > path:nth-child(${idx})`;

    // Initial stroke width: 6, to 5.81225 when closed

    if (lastMenuTl != null)
      lastMenuTl.kill();

    // => to "close" icon
    if (newState) {
      const newTl = gsap.timeline({ defaults: { duration: .300, ease: "power2.out" } })
        .to(getLineSel(3), { attr: { d: "m0 18h0" }, duration: .150 }, 0) // Middle line
        .to(getLineSel(1), { attr: { d: "M 2.121,2.1213203 33.879,33.879" }, }, ">") // Top line
        .to(getLineSel(2), { attr: { d: "M 2.1210107,33.879011 33.879,2.121" }, }, "<") // Bottom line
      ;
      setLastMenuTl(newTl);
    }
    // => to "burger" icon
    else {
      const newTl = gsap.timeline({ defaults: { duration: .300 } })
        .to(getLineSel(1), { attr: { d: "M 0,3 36,3" }, }, 0) // Top line
        .to(getLineSel(2), { attr: { d: "M 0,33 36,33" }, }, 0) // Bottom line
        .to(getLineSel(3), { attr: { d: "m0 18h22.5" }, duration: .150 }, ">") // Middle line
      ;
      setLastMenuTl(newTl);
    }
  }

  const handleLinkClick = (e, sectionIdx, href) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push(`/#${href}`);
      return;
    }

    // TODO: when available, prevent the scroll/jump animation so gsap can do it
    // See https://github.com/vercel/next.js/discussions/13804
    router.replace(`#${href}`, undefined, { scroll: false, shallow: true });

    setIsExpanded(false);
    handleOnMenuIconStateChange(false);

    if (onLinkClick)
      onLinkClick(sectionIdx, href);
  };

/*  const handlePortfolioFilterClick = filterIdx => {
    if (onPortfolioFilterClick)
      onPortfolioFilterClick(filterIdx);
  }*/

  return (
    <Navbar
      className={`${headerStyles.navbarFixed} `} bg="primary" variant="dark" expand="lg" fixed="top"
      role="banner"
      expanded={isExpanded}
    >
      <Link href="/"><a className="navbar-brand">Baptiste Perraud</a></Link>
      <Navbar.Toggle
        className={headerStyles.navbarToggle}
        aria-controls="basic-navbar-nav"
        onClick={onToggleClick}
      >
        <MenuIconElement
          className={headerStyles.navbarMenuIcon}
          isOn={isExpanded}
          onStateChange={handleOnMenuIconStateChange}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav
          activeKey={activeSectionUrl}
        >
          {homeSections.map((s, i) => {
/*            if (s.href !== "portfolio")*/
              return (
                <Nav.Link
                  href={`/#${s.href}`}
                  onClick={(e) => handleLinkClick(e, i, s.href)} key={i}
                  className={`${headerStyles.navbarLink} text-uppercase mx-1`}>
                  {s.text}
                  <div className={headerStyles.navbarLinkUnderline}/>
                </Nav.Link>
              );

/*            return (
              <div className={`${headerStyles.navbarPortfolioContainer} ${activeSection === i ? "active" : ""}`}
                   key={i}>
                <NavDropdown
                  onClick={() => handleLinkClick(i, s.href)}
                  title={s.text} className="text-uppercase" id="navbarPortfolioScrollingDropdown">
                  {s.filters.map((f, i) =>
                    <NavDropdown.Item key={i} onClick={() => handlePortfolioFilterClick(i + 1)}>
                      {f.text}
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
                <div className={headerStyles.navbarLinkUnderline}/>
              </div>
            );*/
            }
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
