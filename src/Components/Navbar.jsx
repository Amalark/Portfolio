import React, { useEffect } from "react";

const Navbar = () => {
  const navbarItems = [
    { label: "Home", link: "#home", icon: "ri-home-line" },
    { label: "Experience", link: "#experience", icon: "ri-honour-line" },
    { label: "Projects", link: "#projects", icon: "ri-folder-line" },
    { label: "Services", link: "#services", icon: "ri-briefcase-2-line" },
    { label: "Education", link: "#education", icon: "ri-graduation-cap-line" },
    { label: "Certifications", link: "#certifications", icon: "ri-medal-line" },
    { label: "Contact", link: "#contact", icon: "ri-phone-line" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        const sectionLink = document.querySelector(
          `.nav__list a[href*="${sectionId}"]`
        );

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionLink?.classList.add("active-link");
        } else {
          sectionLink?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navbarItems.map((item, index) => (
          <li key={index} className="nav__item">
            <a href={item.link} className="nav__link" data-tooltip={item.label}>
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
