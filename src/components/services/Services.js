import React from "react";
import './Services.css';

const Services = () => {
  return (
    <section  class="my-services" id="services">
      <h2 className="section__title section__title--services"> What i do</h2>
      <div className="services">
        <div class="service">
          <h3>Wedding Photography</h3>
          <p>
            The wedding day is typically one of the most important and memorable
            days in a person's lifetime, and one that will be remembered for
            years to come. Therefore, for most couples, regular photographs just
            won’t do. I am a Professional wedding photographer who captures the
            irreplaceable moments by taking creative, candid, and beautiful
            photographs of the wedding ceremony and reception.
          </p>
        </div>

        {/* service */}

        <div class="service">
          <h3>Fashion Photography</h3>
          <p>
            I am also responsible for photographing apparel, accessories, and
            fashion models, as well as collaborating with hair stylists, fashion
            stylists, makeup artists, and fashion designers. I can either work
            freelance or be hired by a fashion designer, fashion publication,
            fashion house, advertising agency, or a fashion/beauty magazine.
          </p>
        </div>

        {/* service */}

        <div class="service">
          <h3>Real Estate Photography</h3>
          <p>
            Selling real estate is about setting yourself apart from the
            competition, and one of the ways that can be done is by capturing
            beautiful and enticing photos of a home that is for sale. I
            specifically hone in on this area of photography, creating photos
            for real estate agents and their property listings on the MLS
            (Multiple Listing Service).
          </p>
        </div>
      </div>
      <a href="#work" class="btn">My Work</a>
    </section>
  );
};

export default Services;
