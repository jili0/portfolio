import "../stylesheets/projectCard.css";

const ProjectCard = ({ href, imgSrc, title, description }) => {
  return (
    <div className="projectCard">
      <a href={href} target="_blank">
        <img className="projectImg" src={imgSrc} />
        <div className="projectInfo">
          <p className="projectTitle headerFont">{title}</p>
          <p className="projectDescription">{description}</p>
        </div>
      </a>
    </div>
  );
};

ProjectCard.defaultProps = {
  href: "",
  imgSrc: "https://picsum.photos/280/140",
  title: "Default title",
  description: "Default description",
};
export default ProjectCard;
