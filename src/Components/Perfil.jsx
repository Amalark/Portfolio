import React from "react";
import PerfilModel from "./PerfilModel";

const Perfil = () => {
  return (
    <>
      <div className="perfil">
        {/* <div className="perfil__img">{ <PerfilModel /> }</div> */}
        {/* <img
          src="/src/assets/images/home-perfil.png"
          alt="image"
          className="perfil__img"
        /> */}

        <div className="perfil__data">
          <h1 className="perfil__name">Amal Abdul Rehman Khalili</h1>
          <div className="perfil__buttons">
            <a href="#projects" className="button">
              Projects
            </a>
            <a href="#services" className="button button__black">
              Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
