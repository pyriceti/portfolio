import Link                          from "next/link";
import { useRouter }                 from "next/router";
import headerStyles                  from "./default-header.module.scss";
import { Nav, Navbar, NavDropdown }  from "react-bootstrap";
import React, { Dispatch, useState } from "react";
import { MenuIcon }                  from "./svg";
import withToggleState               from "./HOC/with-toggle-state";
import gsap                          from "gsap";


const homeSections = [
  {
    href: "/",
    text: "Accueil"
  },
  {
    href: "/#portfolio",
    text: "Portfolio",
    filters: [
      {
        text: "Tout"
      },
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
];


const MenuIconElement = withToggleState((props: any) => <MenuIcon{...props}/>);

const DefaultHeader: React.FC<React.HTMLProps<HTMLElement>> = () => {
  const router = useRouter();

  const [isMenuIconOn, setIsMenuIconOn] = useState(false);
  const [lastMenuTl, setLastMenuTl]: [gsap.core.Timeline, Dispatch<gsap.core.Timeline>] = useState(null);

  const handleMenuToggle = (newState: boolean) => setIsMenuIconOn(newState);

  const handleOnMenuIconStateChange = (newState: boolean) => {
    const groupSel = `svg.${headerStyles.navbarMenuIcon} > g`;
    const getLineSel = (idx: number) => `${groupSel} > path:nth-child(${idx})`;

    // Initial stroke width: 6, to 5.81225 when closed

    if (lastMenuTl != null)
      lastMenuTl.kill();

    // => to "close" icon
    if (newState) {
      const newTl = gsap.timeline({ defaults: { duration: .300, ease: "power2.out" } })
        .to(getLineSel(3), { attr: { d: "m0 24h0" }, duration: .150 }, 0) // Middle line
        .to(getLineSel(1), { attr: { d: "M 1.5860216,8.9388951 46.446222,39.061105" }, }, ">") // Top line
        .to(getLineSel(2), { attr: { d: "M 1.5860216,39.061105 46.446222,8.9388951" }, }, "<") // Bottom line
      ;
      setLastMenuTl(newTl);
    }
    // => to "burger" icon
    else {
      const newTl = gsap.timeline({ defaults: { duration: .300 } })
        .to(getLineSel(1), { attr: { d: "M 0,9 48,9" }, }, 0) // Top line
        .to(getLineSel(2), { attr: { d: "M 0,39 48,39" }, }, 0) // Bottom line
        .to(getLineSel(3), { attr: { d: "m0 24h30" }, duration: .150 }, ">") // Middle line
      ;
      setLastMenuTl(newTl);
    }
  }

  const handleLinkClick = (href: string) => {
    if (href === "/#portfolio")
      return;

    router.push(href);
  };

  const handlePortfolioFilterClick = (filterIdx: number) => router.push(`/?q=${filterIdx}#portfolio`);

  return (
    <Navbar
      className={`${headerStyles.navbarFixed} `} bg="primary" variant="dark" expand="lg" fixed="top"
      role="banner"
      onToggle={handleMenuToggle}
    >
      <Link href="/"><a className="navbar-brand">Baptiste Perraud</a></Link>
      <Navbar.Toggle
        className={headerStyles.navbarToggle}
        aria-controls="basic-navbar-nav"
      >
        <MenuIconElement
          className={headerStyles.navbarMenuIcon}
          isOn={isMenuIconOn}
          onStateChange={handleOnMenuIconStateChange}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {homeSections.map((s, i) => {
              if (s.href !== "/#portfolio")
                return (
                  <Nav.Link
                    onClick={() => handleLinkClick(s.href)} key={i}
                    className={`${headerStyles.navbarLink} text-uppercase`}>
                    {s.text}
                    <div className={headerStyles.navbarLinkUnderline}/>
                  </Nav.Link>
                );

              return (
                <div className={headerStyles.navbarPortfolioContainer}
                     key={i}>
                  <NavDropdown
                    onClick={() => handleLinkClick(s.href)}
                    title={s.text} className="text-uppercase" id="navbarPortfolioScrollingDropdown">
                    {s.filters.map((f, i) =>
                      <NavDropdown.Item key={i} onClick={() => handlePortfolioFilterClick(i)}>
                        {f.text}
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                  <div className={headerStyles.navbarLinkUnderline}/>
                </div>
              );
            }
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

DefaultHeader.propTypes  = {};

DefaultHeader.defaultProps = {};

export default DefaultHeader;
