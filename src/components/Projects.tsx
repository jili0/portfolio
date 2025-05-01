import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Title id="projects" title="My" subTitle="Projects" />
      <div id="projectsContainer">
        {projects.map(
          ({ name, projectLink, description, imgSrc }, index) => {
            return (
              <ProjectCard
                key={index}
                href={projectLink}
                imgSrc={imgSrc}
                title={name}
                description={description}
              />
            );
          }
        )}
      </div>
    </>
  );
}