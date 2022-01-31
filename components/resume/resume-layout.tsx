import Head                                                                                     from "next/head";
import React, { useState, useEffect }                                                           from "react";
import { siteTitle, siteTitlePrefix }                                                           from "../layout";
import ThinSP                                                                                   from "../util/thinsp";
import { ResumeContact, ResumeLanguages, ResumeSkills, ResumeHobbies, ResumeXp, ResumeStudies } from "./index";
import { Button }                                                                               from "react-bootstrap";
import resumeLayoutStyles                                                                       from "./resume-layout.module.scss";

type ResumeLayoutProps = {};

const ResumeLayout = (_: ResumeLayoutProps): JSX.Element => {
  // const ribbonLineHeight = 4.1;

  const [shouldStartPrint, setShouldStartPrint] = useState(false);

  useEffect(() => {
    const onMediaPrintChanged = e => {
      // Reset after print/cancel
      if (!e.matches) {
        setShouldStartPrint(false);
      }
    };

    window.matchMedia("print").addEventListener("change", onMediaPrintChanged);
  }, []);

  const onPrintClick = () => setShouldStartPrint(true);

  return (
    <>
      <Head>
        <meta name="description" content="Portfolio de Baptiste Perraud, ingénieur développeur Unity 3D & web"/>
        <meta name="og:title" content={siteTitle}/>
        <title>{`${siteTitlePrefix}CV`}</title>
      </Head>
      <main className={resumeLayoutStyles.main}>
        <svg
          className={resumeLayoutStyles.ribbon}
          width="210mm" height="297mm" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m70.000142 297v-60.52696s0-3.00002-3.000023-3.00002l-59.499851-2.7e-4s-3.000022 0-3.000022-3.00002v-60.36619s0-3.00002 3.000022-3.00002l59.499851 2.6e-4s3.000023 0 3.007432-3.00002l0.136525-54.00675s0.0074-3.00002-2.992615-3.00002h-59.474804s-3.000022 0-3.008841-3.00002l-0.159103-54.506197s-0.0085-3.000023 2.991555-3.000023h202.499732"
            fill="none" stroke="#8e2621" strokeWidth=".352777"/>
        </svg>
        {/*<div className={resumeLayoutStyles.ribbonLineContainer} style={{ height: `${ribbonLineHeight}cm` }}>*/}
        {/*          <svg
            className={resumeLayoutStyles.ribbonLine}
            width="210mm" height="297mm" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
            <path d="m70 297v-297" fill="none" stroke="#8e2621" strokeWidth=".352777"/>
          </svg>*/}
        {/*</div>*/}
        <div className={resumeLayoutStyles.leftCol}>
          <img className={resumeLayoutStyles.profileImg} alt="Profile image" src="/images/profile-img.jpg"/>
          <ResumeContact/>
          <ResumeLanguages/>
          <ResumeSkills/>
          <ResumeHobbies/>
        </div>
        <div className={resumeLayoutStyles.rightCol}>
          <svg className={resumeLayoutStyles.topHexas} width="102.984" height="116.59" viewBox="0 0 27.248 30.848"
               xmlns="http://www.w3.org/2000/svg">
            <g opacity=".15">
              <path d="M17.634 13.077l-7.55 5.822-8.817-3.628L0 5.821 7.55 0l8.817 3.628z" fill="#8e2621"/>
              <path d="M27.248 25.545l-6.877 5.303-8.03-3.304-1.154-8.607 6.877-5.302 8.03 3.304z" fill="#441517"/>
              <path d="M27.207 11.794l-4.094 3.156-4.781-1.967-.687-5.123 4.094-3.157 4.78 1.967z" fill="#8e2621"/>
            </g>
          </svg>
          <ul className={resumeLayoutStyles.externalLinks}>
            <li>
              <svg width="18.776" height="18.776" viewBox="0 0 4.968 4.968" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="a">
                    <path d="M0 0h595.276v841.89H0z"/>
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(.35278 0 0 -.35278 -163.5 291.637)">
                  <path
                    d="M477.547 819.647c0-3.89-3.152-7.041-7.041-7.041s-7.041 3.152-7.041 7.04a7.041 7.041 0 0014.082 0"
                    fill="#191717"/>
                </g>
                <path
                  d="M1.246 2.31l-.2.646H.93l-.275-.944h.161l.19.638.198-.638h.111l.191.638.197-.638h.139l-.295.944h-.112zM2.481 2.31l-.2.646h-.115l-.276-.944h.162l.19.638.198-.638h.11l.192.638.197-.638h.138l-.294.944h-.112zM3.716 2.31l-.201.646H3.4l-.276-.944h.161l.19.638.198-.638h.111l.191.638.197-.638h.139l-.294.944h-.113z"
                  fill="#fff"/>
              </svg>
              <a href="https://baptiste-perraud.com" target="_blank">baptiste-perraud.com</a>
            </li>
            <li>
              <svg width="19.252" height="18.777" viewBox="0 0 5.094 4.968" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="a">
                    <path d="M0 0h595.276v841.89H0z"/>
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(.35278 0 0 -.35278 -163.5 285.455)">
                  <path
                    d="M470.684 809.165a7.22 7.22 0 01-2.282-14.07c.36-.066.493.157.493.348 0 .17-.006.625-.01 1.228-2.008-.436-2.432.968-2.432.968-.328.834-.801 1.056-.801 1.056-.656.448.05.439.05.439.724-.052 1.105-.745 1.105-.745.644-1.103 1.69-.784 2.1-.6.067.467.254.785.46.966-1.603.182-3.29.8-3.29 3.568 0 .788.283 1.432.744 1.937-.074.183-.322.917.07 1.91 0 0 .607.195 1.986-.74.576.16 1.194.24 1.808.244a6.933 6.933 0 001.807-.243c1.379.934 1.984.74 1.984.74.393-.994.146-1.728.07-1.911a2.785 2.785 0 00.744-1.937c0-2.774-1.688-3.384-3.297-3.563.259-.222.49-.663.49-1.337 0-.965-.008-1.743-.008-1.98 0-.193.13-.418.496-.347a7.222 7.222 0 01-2.287 14.069"
                    fill="#191717"/>
                </g>
              </svg>
              <a href="https://github.com/pyriceti" target="_blank">github.com/pyriceti</a>
            </li>
          </ul>
          <h1 className={resumeLayoutStyles.headerName}>Baptiste Perraud</h1>
          <p className={resumeLayoutStyles.headerTitle}>Ingénieur Développeur Unity 3D</p>
          <figure>
            <blockquote className={resumeLayoutStyles.wisdomQuote}>
              <p className="mb-0">«<ThinSP/>Nous avons beau être intelligents, encore faut-il qu’on sache faire preuve
                d’intelligence.<ThinSP/>»</p>
            </blockquote>
            <figcaption className={resumeLayoutStyles.wisdomQuoteSrc}>
              Gershom Scholem
            </figcaption>
          </figure>
          <ResumeXp shouldStartPrint={shouldStartPrint}/>
          <ResumeStudies/>
        </div>
        <aside className={resumeLayoutStyles.infoAside}>
          <div>
            <Button variant="dark" onClick={onPrintClick}>Imprimer</Button>
            <Button as="a" variant="dark" href="/files/Baptiste_PERRAUD_CV.pdf" download={true}>
              Enregistrer au format PDF
            </Button>
          </div>
        </aside>
      </main>
    </>
  );
};

export default ResumeLayout;