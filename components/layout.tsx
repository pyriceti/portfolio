import Head                                        from "next/head";
import layoutStyles                                from "./layout.module.scss";
import { BackToTop }                               from "./svg";
import React, { useCallback, useEffect, useState } from "react";
import { useSpring, animated, config }             from "@react-spring/web";
import Footer                                      from "./footer";
import Header                                      from "./header";

export const siteTitlePrefix = "Baptiste Perraud – ";
export const siteTitle = `${siteTitlePrefix}Développeur Unity 3D & web`;

// const BackToTopElement = forwardRef<HTMLElement, HTMLProps<HTMLElement>>((props, ref) =>
//   <BackToTop forwardedRef={ref} {...props} />);

const BackToTopElement = (props) => <BackToTop {...props} />;

interface LayoutProps {
  header?: JSX.Element,
  footer?: JSX.Element,
}

const Layout: React.FC<LayoutProps> = ({
                                         children,
                                         header = <Header isHomePage={false}/>,
                                         footer = <Footer/>,
                                       }) => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => window.scrollTo(0, 0);

  const backToTopProps = useSpring({
    opacity: isBackToTopVisible ? 1 : 0,
    visibility: isBackToTopVisible ? "visible" : "hidden",
    y: isBackToTopVisible ? 0 : 16,
    config: config.stiff,
  });

  const AnimatedBackToTopElement = animated(BackToTopElement);

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
      <AnimatedBackToTopElement className={layoutStyles.backToTop} onClick={scrollToTop} style={backToTopProps}/>
      <style jsx>{`
        main {
          margin-top: 56px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
