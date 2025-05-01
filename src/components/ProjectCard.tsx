import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

export default function ProjectCard({ href, imgSrc, title, description }: ProjectCardProps) {
  return (
    <div className="projectCard">
      <Link href={href} target="_blank">
        <div style={{ position: 'relative', width: '100%', height: '45vh' }}>
          <Image 
            src={imgSrc} 
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className="projectImg"
          />
        </div>
        <div className="projectInfoContainer">
          <p className="projectTitle headerFont">{title}</p>
          <p className="projectDescription">{description}</p>
        </div>
      </Link>
    </div>
  );
}