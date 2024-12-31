import React from 'react';
import '../assets/stylesheets/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="page-4">
      <div className="footer-overlay"></div>
      <footer>
        <div className="footer-content">
          <span className="reveal">
            <h1 className="footer-animation">Eternal&nbsp;Overseas</h1>
          </span>
        </div>

        <div className="footer-socials">
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Visit us at : Block No 1, Kunjgali, Vivekanand nagar 1, Ravapar Road, Morbi - 363641 Gujarat - India </span>
          </div>
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:info@eternaloverseas.com">Eternal.overseas@gmail.com</a>
          </div>
          <div className="footer-social-item">
            <a href="https://facebook.com/eternaloverseas" rel='noreferrer' target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/eternaloverseas" rel='noreferrer' target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/eternaloverseas" rel='noreferrer' target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/company/eternaloverseas" rel='noreferrer' target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="call-data">
          <h6>Call- +919408215556 & +919054765556</h6>
        </div>
        <div className="inffy-data">
          <h6>Designed And Managed By INFFY</h6>
        </div>
      </footer>
    </div>
  )
}

export default Footer