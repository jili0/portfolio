import "../stylesheets/projects.css";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import moodPad from '/images/moodPad.png'
import toDoList from '/images/toDoList.png'

const Projects = () => {
  return (
    <>
      <Title id="projects" title="My" subTitle="Projects" />
      <div id="projectsContainer">
        <ProjectCard
          id="1"
          href="https://jili0.github.io/mood-pad/"
          imgSrc={moodPad}
          title="MoodPad"
          description="This is a react blog app with backend feature, with the help of Firebase. Each user, after logging in, can create, read, update and write his or her posts. The user can also change the user name and the profile picture. The data will then be saved in Firebase and be synchronized no matter where the user log in account the next time. "
        />
        <ProjectCard
          id="2"
          href="https://jili0.github.io/to-do-list/"
          imgSrc={toDoList}
          title="To-Do List"
          description="A To-Do List  written in vanilla Javascript."
        />
      </div>
    </>
  );
};

export default Projects;
