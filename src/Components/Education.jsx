// Education.jsx
import React from "react";

const educationData = [
  {
    degree: "BS(Software Engineering)",
    institution: "FAST National University (NUCES)",
    date: "2022 - till date",
    cgpa: "CGPA: 3.72",
    side: "right",
  },
  {
    degree: "A-Level",
    institution: "Cedar College",
    date: "2020 - 2022",
    cgpa: "Grade: 3As",
    side: "left",
  },
  {
    degree: "O-Levels",
    institution: "Beaconhouse School System",
    date: "2007 - 2020",
    cgpa: "Grade: 2A* 7As",
    side: "right",
  },
];

const Education = () => {
  return (
    <section id="education" className="education section">
      <h2 className="section__title">EDUCATION</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline__row ${item.side}`}>
            {item.side === "right" && (
              <div className="timeline__year">
                {item.date}
                <div className="timeline__circle"></div>
              </div>
            )}

            <div className={`timeline__container ${item.side}`}>
              <div className="timeline__content">
                <h3 className="timeline__degree">{item.degree}</h3>
                <p className="timeline__institution">{item.institution}</p>
                <p className="timeline__cgpa">{item.cgpa}</p>
              </div>
            </div>

            {item.side === "left" && (
              <div className="timeline__year">
                <div className="timeline__circle"></div>
                {item.date}
              </div>
            )}
          </div>
        ))}
        <div className="timeline__line"></div>
      </div>
    </section>
  );
};

export default Education;
