import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <a href="#" className="footer__logo">
              Amal
            </a>

            <ul className="footer__links">
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#experience" className="footer__link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i class="ri-facebook-circle-line"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i class="ri-instagram-line"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i class="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>

        <span className="footer__copy">
          &#169; All Rights Reserved By Amal Abdul Rehman Khalili
        </span>
      </footer>
    </>
  );
};

export default Footer;
