import "../stylesheets/projectCard.css";

const ProjectCard = ({ href, imgSrc, title, description }) => {
  return (
    <a href={href}>
      <div className="projectCard">
        <img className="projectImg" src={imgSrc} />
        <div className="projectInfo">
          <p className="projectTitle">{title}</p>
          <p className="projectDescription">{description}</p>
        </div>
      </div>
    </a>
  );
};

ProjectCard.defaultProps = {
  href: "",
  imgSrc: "https://picsum.photos/280/140",
  title: "Default title",
  description: "Default description",
};
export default ProjectCard;
