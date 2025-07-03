import React from "react";

const ProjectsCard = ({ name, image, description, skills, link }) => {
  return (
    <article className="projects__card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="projects__image"
      >
        <img src={image} alt={name} className="projects__img" />
      </a>

      <div className="projects__data">
        <h3 className="projects__name">{name}</h3>
        <p className="projects__description">{description}</p>

        <div className="projects__skills">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill}
              alt="skill icon"
              className="projects__skill"
            />
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__button"
        >
          <i className="ri-link"></i>
          <span>Visit Project</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectsCard;
