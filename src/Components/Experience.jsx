import React from "react";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    company: "The Bridge of Hopes Project - FAST NUCES",
    profession: "React Developer (Volunteer)",
    date: "July 2025 – Present",
    description:
      "Redesigned admin panel UI, added live form validations, and integrated APIs for real-time data population.",
  },

  {
    company: "Foodlines.co",
    profession: "Freelance Web Support",
    date: "Feb 2025 – Present",
    location: "Remote — Jeddah, Saudi Arabia",
    description:
      "Manage website operations, WordPress administration, and technical issue resolution.",
  },

  {
    company: "AWS Cloud Club - FAST NUCES",
    profession: "Co-Head of Events",
    date: "July 2025 – Present",
    description:
      "Leading the Events Team to organize workshops, hackathons, and flagship events for the AWS Cloud Club community. Coordinating with AWS Student Programs and mentoring team members.",
  },
  {
    company: "FAST National University",
    profession: "Teaching Assistant",
    date: "Aug 2025 – Present",
    description: (
      <>
        Supported <b>Data Structures</b> course by assisting in coding concepts,
        grading, and student mentoring.
      </>
    ),
  },
  {
    company: "FAST National University",
    profession: "Teaching Assistant",
    date: "Aug 2024 – Jan 2025",
    description: (
      <>
        Supported <b>Software Design & Analysis</b> course. Evaluated projects
        and mentored students.
      </>
    ),
  },
  {
    company: "FAST National University",
    profession: "Teaching Assistant",
    date: "Aug 2023 – Jan 2024",
    description: (
      <>
        Assisted in a <b>Calculus & Analytical Geometry</b> course. Graded
        assignments and supported students in tutorials.
      </>
    ),
  },

  {
    company: "Alhamd Alliance Trading",
    profession: "Internship — Chemical Processing Plant",
    date: "Jun 2021 - July 2021",
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
