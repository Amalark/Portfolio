import React from "react";

const Certifications = () => {
  return (
    <section className="certifications section" id="certifications">
      <h2 className="section__title">
        <span style={{}}>CERTIFICATIONS</span> & ACHIEVEMENTS
      </h2>

      <div className="certification__group">
        <h3 className="certification__subtitle">Certifications</h3>
        <ul className="certification__list">
          <li className="certification__item">
            <h3 className="certification__title">
              🎓 Dean’s List (2022 – 2025)
            </h3>
            <p className="certification__desc">
              Awarded for 5 consecutive semesters for academic excellence.
            </p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">🤖 Google AI Essentials</h3>
            <p className="certification__desc">Issued via Coursera</p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">
              🐍 Python Workshop Certificate
            </h3>
            <p className="certification__desc">Cedar College Society</p>
          </li>
        </ul>
      </div>

      {/* <hr className="certification__divider" /> */}

      <div className="certification__group">
        <h3 className="certification__subtitle">Achievements</h3>
        <ul className="certification__list">
          <li className="certification__item">
            <h3 className="certification__title">🏆 DevDay 2023 – Runner-up</h3>
            <p className="certification__desc">
              Game Development Competition at FAST NUCES
            </p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">💡 Asaani.io Hackathon</h3>
            <p className="certification__desc">
              3-day Hackathon + Design Thinking Workshop @ NASTP
            </p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">🌐 Web Dev Battle</h3>
            <p className="certification__desc">CollabQuest 2025, FAST NUCES</p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">🎨 UI/UX Showdown</h3>
            <p className="certification__desc">DevDay 2024, FAST NUCES</p>
          </li>
          <li className="certification__item">
            <h3 className="certification__title">⚡ Speed Debugging Duel</h3>
            <p className="certification__desc">
              Java & C — Coders Cup, FAST NUCES
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
