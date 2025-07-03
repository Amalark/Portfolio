import React from "react";
import Perfil from "./Perfil";
import Info from "./Info";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <Perfil />
          <Info />
          <About />
          <Skills />
        </div>
      </section>
    </>
  );
};

export default Home;
