import React, { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    const scrollUp = () => {
      const scrollButton = document.getElementById("scroll-up");
      if (window.scrollY >= 350) {
        scrollButton.classList.add("show-scroll");
      } else {
        scrollButton.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", scrollUp);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;
