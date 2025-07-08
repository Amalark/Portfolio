import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
import Education from "./Education";
import Certifications from "./Certfications";

const MainBody = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true, // Animations repeat
    });

    sr.reveal(".perfil");
    sr.reveal(".contact__form");
    sr.reveal(".education");
    sr.reveal(".certification__item");
    sr.reveal(".info", { origin: "left", delay: 800 });
    sr.reveal(".skills", { origin: "left", delay: 1000 });
    sr.reveal(".about", { origin: "right", delay: 1200 });
    sr.reveal(".projects__card", { interval: 100 });
    sr.reveal(".services__card", { interval: 100 });
    sr.reveal(".experience__card", { interval: 100 });

    // Clean up ScrollReveal on unmount
    return () => sr.destroy();
  }, []);

  return (
    <div className="main">
      <Home />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default MainBody;
