import Head                                                                       from "next/head";
import layoutStyles                                                               from "./layout.module.scss";
import { BackToTop }                                                              from "./svg";
import React, { forwardRef, HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import { PlayState, Tween }                                                       from "react-gsap";
import gsap                                                                       from "gsap";
import { ScrollToPlugin }                                                         from "gsap/dist/ScrollToPlugin";
import DefaultFooter                                                              from "./default-footer";
import DefaultHeader                                                              from "./default-header";

gsap.registerPlugin(ScrollToPlugin);

export const siteTitlePrefix = "Baptiste Perraud – ";
export const siteTitle = `${siteTitlePrefix}Développeur Unity 3D & web`;

const BackToTopElement = forwardRef<HTMLElement, HTMLProps<HTMLElement>>((props, ref) =>
  <BackToTop forwardedRef={ref} {...props} />);

const Layout = ({ children, header, footer }) => {

  const backToTopRef = useRef(null);

  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Enough scroll, make backToTop appear
    if (window.scrollY > 400) {
      // If already appearing: ignore
      if (isBackToTopVisible)
        return;

      // Make it appear
      setIsBackToTopVisible(true);
    }
    // Not enough scroll, make backToTop disappear
    else {
      // If already hidden: ignore
      if (!isBackToTopVisible)
        return;

      // Make it disappear
      setIsBackToTopVisible(false);
    }
  }, [isBackToTopVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const scrollToTop = () => gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" });

  return (
    <div className={layoutStyles.container}>
      <Head>
        <meta name="description" content="Portfolio de Baptiste Perraud, développeur Unity 3D & web"/>
        <meta name="og:title" content={siteTitle}/>
        <title>{siteTitle}</title>
      </Head>
      {header}
      <main>{children}</main>
      {/*<HomeFooter/>*/}
      {footer}
      <Tween
        from={{ y: 16, opacity: 0, visibility: "hidden" }}
        to={{ y: 0, opacity: 1, visibility: "visible" }}
        playState={isBackToTopVisible ? PlayState.restart : PlayState.restartReverse} ease="power2.inOut"
        duration={.300}>
        <BackToTopElement ref={backToTopRef} className={layoutStyles.backToTop} onClick={scrollToTop}/>
      </Tween>
      <style jsx>{`
        main {
          margin-top: 56px;
        }
      `}</style>
    </div>
  );
};

Layout.defaultProps = {
  header: <DefaultHeader/>,
  footer: <DefaultFooter/>,
};

export default Layout
