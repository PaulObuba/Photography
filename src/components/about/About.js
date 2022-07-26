import React from "react";
import './About.css';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who i am</h2>
      <p className="section__subtitle section__subtitle--about">
        Professional Photographer
      </p>

      <div className="about-me__body">
        <p>
          Moltivated, highly creative photographer with 11 year's of experience
          in variety of niche industries. Salid expericence shooting wedding,
          and head shots, as well as commercial assignments such as fashion
          shoots, product marketing and event photography.
        </p>
        <p>
          Intervewed 30 clients per month to determine photography preferences
          and requirements. Planned and prepared for all on-lacation and studio
          shoots. Processed computer photographs according to studio's
          processing standards
        </p>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        alt="Jane leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
};

export default About;
