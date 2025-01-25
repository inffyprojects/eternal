import React from 'react';
import Rollinggallary from '../components/Rollinggallary.jsx';
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

      <Rollinggallary/>
    </>
  );
};

export default Export;
