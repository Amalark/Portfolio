import React from "react";
import ProjectsCard from "./ProjectsCard";

// Sample project data
const projectList = [
  {
    name: "HR Management System Web Application",
    image: "/src/assets/images/projects-1.jpg",
    description:
      "A full-featured HR management system with dashboards, payroll, attendance tracking, and AI-based resume matching.",
    skills: [
      "/src/assets/Icons/nodejs.svg",
      "/src/assets/Icons/skills-react.svg",
      "/src/assets/Icons/express.png",
      "/src/assets/Icons/skills-tailwind-css.svg",
      "/src/assets/Icons/python.webp",
      "/src/assets/Icons/postgresql.svg",
    ],
    link: "#",
  },

  {
    name: "Portfolio Website",
    image: "/src/assets/images/projects-1.jpg",
    description: "A modern portfolio built with React and Tailwind CSS.",
    skills: [
      "/src/assets/Icons/skills-react.svg",
      "/src/assets/Icons/skills-tailwind-css.svg",
      "/src/assets/Icons/skills-figma.svg",
    ],
    link: "#",
  },
  {
    name: "Portfolio Website",
    image: "/src/assets/images/projects-1.jpg",
    description: "A modern portfolio built with React and Tailwind CSS.",
    skills: [
      "/src/assets/Icons/skills-react.svg",
      "/src/assets/Icons/skills-tailwind-css.svg",
      "/src/assets/Icons/skills-figma.svg",
    ],
    link: "#",
  },
  // You can add more project objects here...
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">RECENT PROJECTS</h2>

      <div className="projects__container container grid">
        {projectList.map((project, index) => (
          <ProjectsCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            skills={project.skills}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
