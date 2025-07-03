import React from "react";

const skillsData = [
  { src: "/src/assets/Icons/skills-html.svg", title: "HTML" },
  { src: "/src/assets/Icons/skills-css.svg", title: "CSS" },
  { src: "/src/assets/Icons/skills-figma.svg", title: "Figma" },
  { src: "/src/assets/Icons/skills-git.svg", title: "Git" },
  { src: "/src/assets/Icons/skills-github.svg", title: "GitHub" },
  { src: "/src/assets/Icons/skills-javascript.svg", title: "JavaScript" },
  { src: "/src/assets/Icons/skills-react.svg", title: "React" },
  { src: "/src/assets/Icons/skills-tailwind-css.svg", title: "Tailwind CSS" },
  { src: "/src/assets/Icons/bootstrap.svg", title: "Bootstrap" },
  { src: "/src/assets/Icons/asp.net.webp", title: "ASP.NET" },
  { src: "/src/assets/Icons/C.png", title: "C" },
  {
    src: "/src/assets/Icons/express.png",
    title: "Express.js",
    style: {
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "2px",
    },
  },
  { src: "/src/assets/Icons/java.png", title: "Java" },
  { src: "/src/assets/Icons/mongodb.webp", title: "MongoDB" },
  { src: "/src/assets/Icons/mssql.png", title: "MS SQL" },
  { src: "/src/assets/Icons/mysql.png", title: "MySQL" },
  { src: "/src/assets/Icons/Oracle_SQL.svg.png", title: "Oracle SQL" },
  { src: "/src/assets/Icons/node.png", title: "Node.js" },
  { src: "/src/assets/Icons/numpy.png", title: "NumPy" },
  { src: "/src/assets/Icons/pandas.png", title: "Pandas" },
  { src: "/src/assets/Icons/postgresql.svg", title: "PostgreSQL" },
  { src: "/src/assets/Icons/postman.webp", title: "Postman" },
  { src: "/src/assets/Icons/python.webp", title: "Python" },
  { src: "/src/assets/Icons/scikit.png", title: "Scikit-Learn" },
  { src: "/src/assets/Icons/selenium-ide.png", title: "Selenium" },
  { src: "/src/assets/Icons/spring.png", title: "Spring" },
  { src: "/src/assets/Icons/springboot.png", title: "Spring Boot" },
  { src: "/src/assets/Icons/threejs.png", title: "Three.js" },
  { src: "/src/assets/Icons/thymeleaf.png", title: "Thymeleaf" },
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
