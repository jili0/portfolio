import "../stylesheets/projects.css";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <>
      <Title id="projects" title="My" subTitle="Projects" />
      <div id="projectsContainer">
        {projects.map(
          ({ name, projectLink, repoLink, description, imgSrc }, index) => {
            return <ProjectCard
              id={index}
              href={projectLink}
              imgSrc={imgSrc}
              title={name}
              description={description}
            />;
          }
        )}
      </div>
    </>
  );
};

export default Projects;
