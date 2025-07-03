import React from "react";
import ThreeDLogo from "./ThreeJS/ThreeDLogo";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about1">
          <h3 className="about__name">
            Amal Khalili <b>Web Designer & Developer</b>
          </h3>
          <p className="about__description">
            Located in Pakistan, currently pursuing a degree in Software
            Engineering. With hands-on experience in front-end design, UI/UX,
            and backend logic through multiple university and freelance
            projects, Amal blends technical skill with design sensibility. She
            has led and collaborated on web and blablablablablablabab
          </p>

          <div className="about__social">
            <a
              href="https://www.linkedin.com/in/amalabdulrehmankhalili/"
              target="_blank"
              className="about__link"
            >
              <i class="ri-linkedin-box-line"></i>
            </a>

            <a
              href="https://github.com/Amalark"
              target="_blank"
              className="about__link"
            >
              <i class="ri-github-line"></i>
            </a>

            <a href="#" target="_blank" className="about__link">
              <i class="ri-behance-line"></i>
            </a>
          </div>
        </div>
        <div className="about1">
          <div className="about__image">{/* <ThreeDLogo /> */}</div>

          <p className="about__note">
            She doesnt write messages on social networks, send me an email and
            I'll answer you.
          </p>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
