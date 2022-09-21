import Link                                     from "next/link";
import { useRouter }                            from "next/router";
import headerStyles                             from "./header.module.scss";
import { Nav, Navbar }                          from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { MenuIcon }                             from "./svg";
import withToggleState                          from "./HOC/with-toggle-state";

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

  const handleLinkClick = (e, sectionIdx, href) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push(`/#${href}`);
      return;
    }

    router.replace(`#${href}`, undefined, { scroll: false, shallow: true });

    setIsExpanded(false);

    if (onLinkClick)
      onLinkClick(sectionIdx, href);
  };


  return <Navbar
    className={`${headerStyles.navbarFixed} `} bg="primary" variant="dark" expand="lg" fixed="top"
    role="banner"
    expanded={isExpanded}>
    <Link href="/"><a className="navbar-brand">Baptiste Perraud</a></Link>
    <Navbar.Toggle
      className={headerStyles.navbarToggle}
      aria-controls="basic-navbar-nav"
      onClick={onToggleClick}>
      <MenuIconElement
        className={headerStyles.navbarMenuIcon}
        isOn={isExpanded}/>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav activeKey={activeSectionUrl}>
        {homeSections.map((s, i) => {
          return <Nav.Link
            href={`/#${s.href}`}
            onClick={(e) => handleLinkClick(e, i, s.href)} key={i}
            className={`${headerStyles.navbarLink} text-uppercase mx-1`}>
            {s.text}
            <div className={headerStyles.navbarLinkUnderline}/>
          </Nav.Link>;
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}

export default Header;
