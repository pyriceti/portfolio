import React       from "react";
import Project     from "../../components/project/project";
import projectData from "../../src/projects/aurore";

const ProjectPage: React.FC<React.HTMLProps<HTMLElement>> = () => <Project projectData={projectData}/>;

export default ProjectPage;
