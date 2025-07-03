import React from "react";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    name: "Web Development",
    description:
      "Custom, responsive websites built with the latest technologies.",
    icon: "ri-code-box-line",
  },
  {
    name: "UI/UX",
    description: "Modern, user-friendly UI/UX designs using tools like Figma.",
    icon: "ri-pen-nib-line",
  },
  {
    name: "Quality Assurance",
    description:
      "Comprehensive manual and automated testing to ensure high-quality, bug-free software.",
    icon: "ri-shield-check-line",
  },
  {
    name: "AI/ML",
    description:
      "Intelligent AI and machine learning solutions to automate and innovate workflows.",
    icon: "ri-robot-2-line",
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">SERVICES I OFFER</h2>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
