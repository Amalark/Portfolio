import React from "react";
import ProjectsCard from "./ProjectsCard";

// Sample project data
const projectList = [
  {
    name: "HR Management System Web Application",
    image: "/src/assets/images/HR_Project-2.png",
    description:
      "A full-featured HR management system with dashboards, payroll, attendance, and AI-based resume matching.",
    skills: [
      {
        src: "/src/assets/Icons/nodejs.svg",
        style: {
          width: "40px",
        },
      },
      "/src/assets/Icons/skills-react.svg",
      {
        src: "/src/assets/Icons/express.png",
        style: {
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "2px",
        },
      },
      "/src/assets/Icons/skills-tailwind-css.svg",
      "/src/assets/Icons/python.webp",
      "/src/assets/Icons/postgresql.svg",
    ],
    link: "https://github.com/Amalark/HR-Management-System.git",
  },

  {
    name: "Majestic Travel Web Application",
    image: "/src/assets/images/Travel_Project-2.png",
    description:
      "A travel web app with booking, reviews, session management, and automated testing for seamless user experience.",
    skills: [
      {
        src: "/src/assets/Icons/nodejs.svg",
        style: {
          width: "40px",
        },
      },
      "/src/assets/Icons/skills-react.svg",
      {
        src: "/src/assets/Icons/express.png",
        style: {
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "2px",
        },
      },
      "/src/assets/Icons/skills-css.svg",
      "/src/assets/Icons/Oracle_SQL.svg.png",
      "/src/assets/Icons/skills-figma.svg",
      "/src/assets/Icons/selenium-ide.png",
    ],
    link: "https://github.com/Amalark/Travel-Website.git",
  },
  {
    name: "Car Rental Software",
    image: "/src/assets/images/CarRental_Final.png",
    description:
      "A desktop-based car booking and reservation system with CRUD operations and file handling.",
    skills: [
      "/src/assets/Icons/java.png",
      "/src/assets/Icons/SceneBuilderLogo.webp",
    ],
    link: "https://github.com/Amalark/CarRentalGUI",
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
