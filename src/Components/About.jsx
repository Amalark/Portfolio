import React from "react";
import ThreeDLogo from "./ThreeJS/ThreeDLogo";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about1">
          <h3 className="about__name">
            Amal, <b>Web Designer & Developer</b>
          </h3>
          <p className="about__description">
            Based in Pakistan, currently pursuing Software Engineering. I have
            experience in web development, UI/UX, and quality assurance through
            university projects. I enjoy combining technical expertise with
            creative design to deliver reliable, user-friendly, and impactful
            software solutions.
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
          </div>
        </div>
        <div className="about1">
          <div className="about__image">
            <ThreeDLogo />
          </div>

          <p className="about__note">
            I’m not very active on social networks, but feel free to send me an
            email, I’ll respond ASAP!
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
