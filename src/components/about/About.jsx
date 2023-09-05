import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers, FiFolderPlus } from "react-icons/fi";

import "./About.css";
import ME from "../../assets/me-about1.png";

const About = ({ theme }) => {
  return (
    <section id="about" className={theme}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3</small>
            </article>

            <article className="about__card">
              <FiFolderPlus className="about__icon" />
              <h5>Project</h5>
              <small>12 Completed</small>
            </article>
          </div>

          <p>
            I am a programmer with over 2 years of front-end web development
            experience using ReactJS, and I also have hands-on experience with
            related web services such as Stripe, AWS, and Clevertap. My goal for
            the near future is to leverage my expertise and professional
            experience to excel in upcoming projects and continue my journey
            towards becoming a full-stack developer, exploring other rewarding
            positions within the programming industry. I am dedicated to further
            developing my knowledge and programming skills, always willing to
            learn new things, to reach new heights in my career.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
