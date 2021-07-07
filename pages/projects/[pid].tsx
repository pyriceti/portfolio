import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState, useEffect, useRef }       from "react";
import { useRouter }                                from "next/router";
import gsap                                         from "gsap";
import Project                                      from "../../components/project/project";
import { ProjectData }                              from "../../src/projects";
import projectList                                  from "../../src/projects/projectsList.json";

export const getStaticProps: GetStaticProps = async (_) => {
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projectList.projects.map(p => ({ params: { pid: p.pid } })),
    fallback: false,
  };
};

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const isMounted = useRef(false);
  const [isReady, setIsReady] = useState<number>(0);
  const [projectData, setProjectData] = useState<ProjectData>(null);

  const removePreloaderAndUpdateComp = () => {
    setIsReady(1);

    gsap.timeline()
      .set(".progress, .preloader", {
        display: "block",
      })
      .to(".progress", {
        opacity: 0,
        display: "none",
        duration: .400,
      })
      .to(".preloader", {
        opacity: 0,
        display: "none",
        duration: .600,
        onComplete: () => {
          if (isMounted.current)
            setIsReady(2);
        },
      }, .1)
    ;

  };

  useEffect(() => {
    isMounted.current = true;
    const load = async () => {
      const projectData = (await import((`../../src/projects/${router.query.pid}`))).default;
      if (!isMounted.current)
        return;
      setProjectData(projectData);
      removePreloaderAndUpdateComp();
    };

    load();

    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    <>
      {isReady < 2 && <MemoizedLoading/>}
      {isReady > 0 && projectData !== null && <Project projectData={projectData}/>}
    </>

  );
};

const Loading = () =>
  <div id="preloader" className="preloader">
    <div className="progress">
      <div className="indeterminate"/>
    </div>

    <style jsx>{`
      .preloader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f6f6f6;
        z-index: 99999;
      }

      .progress {
        background-color: #ccc;
        position: relative;
        height: 4px;
        display: block;
        width: 100%;
        border-radius: 2px;
        margin: .5rem 0 1rem 0;
        overflow: hidden;
      }

      .indeterminate {
        background-color: #8e2621;
      }

      .progress .indeterminate::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      }

      .progress .indeterminate:after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
      }

      @keyframes indeterminate {
        0% {
          left: -35%;
          right: 100%;
        }
        60% {
          left: 100%;
          right: -90%;
        }
        100% {
          left: 100%;
          right: -90%;
        }
      }

      @keyframes indeterminate-short {
        0% {
          left: -200%;
          right: 100%;
        }
        60% {
          left: 107%;
          right: -8%;
        }
        100% {
          left: 107%;
          right: -8%;
        }
      }
    `}</style>
  </div>
;

const MemoizedLoading = React.memo(Loading);

export default ProjectPage;
