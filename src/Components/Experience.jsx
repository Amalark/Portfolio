import React from "react";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    company: "FAST National University",
    profession: "Teaching Assistant",
    date: "Aug 2024 – Jan 2025 ",
    description:
      "upported Software Design & Analysis course. Evaluated projects and mentored students. ",
  },
  {
    company: "FAST National University",
    profession: "Teaching Assistant",
    date: "Aug 2023 – Jan 2024 ",
    description:
      "Assisted in a Calculus & Analytical Geometry course. Graded assignments and supported students in tutorials",
  },
  {
    company: "Alhamd Alliance Trading",
    profession: "Internship — Chemical Processing Plant",
    date: "Aug 2023 – Jan 2024",
    description:
      "Witnessed product prototype testing, monitored experiments, and recorded data. Developed problem-solving skills and learned to handle high-pressure situations.",
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">EXPERIENCE OR WORK</h2>

      <div className="experience__container container grid">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            profession={exp.profession}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
