import React, { useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    const contactForm = document.getElementById("contact-form");
    const contactMessage = document.getElementById("contact-message");

    const sendEmail = (e) => {
      e.preventDefault();

      // serviceID - templateID - #form - publicKey
      emailjs
        .sendForm(
          "service_c0cqc9d",
          "template_jfvyj1a",
          "#contact-form",
          "oUX31mo6knHvVdwCT"
        )
        .then(() => {
          contactMessage.textContent = "Message sent successfully! ✅";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);

          contactForm.reset();
        })
        .catch((error) => {
          contactMessage.textContent = "Message failed to send ❌";
          console.error("EmailJS error:", error);
        });
    };

    contactForm.addEventListener("submit", sendEmail);

    return () => {
      contactForm.removeEventListener("submit", sendEmail); // clean up
    };
  }, []);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">CONTACT ME</h2>

      <div className="contact__container container grid">
        <form className="contact__form grid" id="contact-form">
          <div className="contact__group grid">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="contact__input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="contact__input"
            />
          </div>

          <textarea
            name="user_message"
            id="Message"
            placeholder="Message"
            className="contact__input contact__area"
          ></textarea>
          <button type="submit" className="button contact__button">
            Send Message
          </button>

          <p className="contact__message" id="contact-message"></p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
