import React from "react";

const Info = () => {
  return (
    <>
      <div className="info">
        <div className="info__data">
          <div className="info__circle"></div>
          <h1 className="info__name">Amal ARK</h1>
        </div>

        <div className="info__image">
          <img
            src="/src/assets/images/profile pic.jpg"
            alt="image"
            className="info__img"
          />
        </div>
        <p className="info__description">
          Passionate about creating and designing websites with the best
          engaging interfaces.
        </p>

        <a
          href="/src/assets/PDF/Amal A.R.K Resume.pdf"
          download
          target="_blank"
          className="button button__black"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Info;
