import "../stylesheets/projectCard.css";

const ProjectCard = ({ href, imgSrc, title, description }) => {
  return (
    <div className="projectCard">
      <a href={href} target="_blank">
        <img className="projectImg" src={imgSrc} alt={title} width="400" height="400"/>
        <div className="projectInfoContainer">
          <p className="projectTitle headerFont">{title}</p>
          <p className="projectDescription">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
