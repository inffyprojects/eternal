import React from 'react';
import '../assets/stylesheets/export.css';

const Export = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-content">
          <div className="text-contact">
            <h1>Let's Get In Touch!</h1>
            <h3>
              Let’s bridge the distance! We're excited to connect and explore opportunities across borders.
            </h3>
          </div>
          <img className="world-map" src="worldmap.svg" alt="World map" />
        </div>
      </div>

      <div className="contact-page2">
        <div className="email-contact">
          <h1>Mail Us</h1>
          <a href="mailto:Customercare@eternaloverseas.com">
            Customercare@eternaloverseas.com
          </a> &amp;{' '}
          <a href="mailto:Dipak.kasundra@eternaloverseas.in">
            Dipak.kasundra@eternaloverseas.in
          </a>
        </div>

        <div className="number-contact">
          <h1>Phone Number</h1>
          <p>+91 9408215556 &amp; +91 9054765556</p>
        </div>

        <div className="location-contact">
          <h1>Our Office</h1>
          <p>
            Block No 1, <br />
            Kunjgali, Vivekanand Nagar 1, <br />
            Ravapar Road, Morbi - 363641 <br />
            Gujarat - India
          </p>
        </div>
      </div>
    </>
  );
};

export default Export;
