import React from "react";

const ExperienceCard = ({ company, profession, date, description }) => {
  return (
    <article className="experience__card">
      <h2 className="experience__company">{company}</h2>

      <div className="experience__data">
        <h3 className="experience__profession">{profession}</h3>
        <span className="experience__date">{date}</span>
        <p className="experience__description">{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
