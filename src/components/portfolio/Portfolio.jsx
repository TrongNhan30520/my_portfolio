import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

const data = [
  {
    id: 7,
    image: IMG7,
    title: "Claritas - Building quality management application",
    demo: "https://www.claritas.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Tagrise - Job social network",
    demo: "https://tagrise.com/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Story List Application",
    github: "https://github.com/TrongNhan30520/story__list",
    demo: "https://nemo-notes.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Realtime Chat Application",
    github: "https://github.com/TrongNhan30520/realtime__chat",
    demo: "https://youtu.be/azaqAUB0sHI",
  },
  {
    id: 3,
    image: IMG3,
    title: "ECommerce Web Shop",
    github: "https://github.com/TrongNhan30520/WebBanDoChoi",
    demo: "https://youtu.be/NWFURSV1kpc",
  },
  {
    id: 4,
    image: IMG4,
    title: "The Band",
    github: "https://github.com/TrongNhan30520/CloneWeb_The-Band",
    demo: "https://trongnhan30520.github.io/CloneWeb_The-Band/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Winform Application(C#)",
    github: "https://github.com/TrongNhan30520/github-CSDLPT-QLVT",
    demo: "https://github.com/TrongNhan30520/github-CSDLPT-QLVT",
  },
];

const Portfolio = ({ theme }) => {
  return (
    <section id="portfolio" className={theme}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((props) => {
          return (
            <article key={props.id} className="portfolio__item">
              <div className="portfolio__item-block-image">
                <div className="portfolio__item-image">
                  <img src={props.image} alt="" />
                </div>
              </div>
              <h3>{props.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={props.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={props.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
