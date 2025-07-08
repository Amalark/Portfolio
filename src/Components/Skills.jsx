import React from "react";

const skillsData = [
  { src: "/assets/Icons/skills-html.svg", title: "HTML" },
  { src: "/assets/Icons/skills-css.svg", title: "CSS" },
  { src: "/assets/Icons/skills-figma.svg", title: "Figma" },
  { src: "/assets/Icons/skills-git.svg", title: "Git" },
  { src: "/assets/Icons/skills-github.svg", title: "GitHub" },
  { src: "/assets/Icons/skills-javascript.svg", title: "JavaScript" },
  { src: "/assets/Icons/skills-react.svg", title: "React" },
  { src: "/assets/Icons/skills-tailwind-css.svg", title: "Tailwind CSS" },
  { src: "/assets/Icons/bootstrap.svg", title: "Bootstrap" },
  { src: "/assets/Icons/asp.net.webp", title: "ASP.NET" },
  { src: "/assets/Icons/C.png", title: "C" },
  {
    src: "/assets/Icons/express.png",
    title: "Express.js",
    style: {
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "2px",
    },
  },
  { src: "/assets/Icons/java.png", title: "Java" },
  { src: "/assets/Icons/mongodb.webp", title: "MongoDB" },
  { src: "/assets/Icons/mssql.png", title: "MS SQL" },
  { src: "/assets/Icons/mysql.png", title: "MySQL" },
  { src: "/assets/Icons/Oracle_SQL.svg.png", title: "Oracle SQL" },
  { src: "/assets/Icons/node.png", title: "Node.js" },
  { src: "/assets/Icons/numpy.png", title: "NumPy" },
  { src: "/assets/Icons/pandas.png", title: "Pandas" },
  { src: "/assets/Icons/postgresql.svg", title: "PostgreSQL" },
  { src: "/assets/Icons/postman.webp", title: "Postman" },
  { src: "/assets/Icons/python.webp", title: "Python" },
  { src: "/assets/Icons/scikit.png", title: "Scikit-Learn" },
  { src: "/assets/Icons/selenium-ide.png", title: "Selenium" },
  { src: "/assets/Icons/spring.png", title: "Spring" },
  { src: "/assets/Icons/springboot.png", title: "Spring Boot" },
  { src: "/assets/Icons/threejs.png", title: "Three.js" },
  { src: "/assets/Icons/thymeleaf.png", title: "Thymeleaf" },
];

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__items">
          {skillsData.map((skill, index) => (
            <span key={index} title={skill.title}>
              <img
                src={skill.src}
                alt={skill.title}
                className="skills_item"
                style={skill.style || {}}
              />
            </span>
          ))}
        </div>

        <p className="skills__description">
          Visit the projects section to see the work done with these
          technologies.
        </p>
      </div>
    </>
  );
};

export default Skills;
