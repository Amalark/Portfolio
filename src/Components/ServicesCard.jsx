import React from "react";

const ServicesCard = ({ name, description, icon }) => {
  return (
    <article className="services__card">
      <div className="services__icon">
        <div className="services__circle"></div>
        <i className={icon}></i>
      </div>
      <h3 className="services__name">{name}</h3>
      <p className="services__description">{description}</p>
    </article>
  );
};

export default ServicesCard;
