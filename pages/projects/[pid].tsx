import { GetStaticPaths, GetStaticProps, NextPage }    from "next";
import React, { useState, useEffect, useRef }          from "react";
import { useRouter }                                   from "next/router";
import { animated, useSpring, useChain, useSpringRef } from "@react-spring/web";
import Project                                         from "../../components/project/project";
import { ProjectData }                                 from "../../src/projects";
import projectList                                     from "../../src/projects/projectsList.json";

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

  const removePreloaderAndUpdateComp = () => setIsReady(1);
  const onLoadingHidden = () => setIsReady(2);

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
    };
  }, []);

  return (
    <>
      {isReady < 2 && <MemoizedLoading isVisible={isReady === 0} onHidden={onLoadingHidden}/>}
      {isReady > 0 && projectData !== null && <Project projectData={projectData}/>}
    </>
  );
};

const Loading = ({ isVisible, onHidden }) => {
    const progressStylesRef = useSpringRef();
    const progressStyles = useSpring({
      opacity: isVisible ? 1 : 0,
      ref: progressStylesRef,
    });
    const preloaderStylesRef = useSpringRef();
    const preloaderStyles = useSpring({
      opacity: isVisible ? 1 : 0,
      ref: preloaderStylesRef,
      onRest: () => onHidden(),
    });

    useChain([progressStylesRef, preloaderStylesRef], [1, 1.1]);

    return <animated.div id="preloader" className="preloader" style={preloaderStyles}>
      <animated.div className="progress" style={progressStyles}>
        <div className="indeterminate"/>
      </animated.div>
    </animated.div>;
  }
;

const MemoizedLoading = React.memo(Loading);

export default ProjectPage;
