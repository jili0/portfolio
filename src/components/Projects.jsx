import "../stylesheets/projects.css";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <Title id="projects" title="My" subTitle="Projects" />
      <div id="projectsContainer">
        {projects.map(({ id, imgSrc, href, title, description }) => (
          <ProjectCard
            key={id}
            imgSrc={imgSrc}
            href={href}
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
