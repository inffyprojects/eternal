import React from 'react';
import '../assets/stylesheets/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="page-4">
      <div className="footer-overlay"></div>
      <footer className="footer-container">

        <div className="footer-section footer-address">
          <h4>Eternal Overseas</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Block No 1, Kunjgali, Vivekanand Nagar 1,<br />
            Ravapar Road, Morbi - 363641 Gujarat, India<br />
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@eternaloverseas.com">info@eternaloverseas.com</a><br />
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:sales@eternaloverseas.com">sales@eternaloverseas.com</a><br />
            Call: +91 94082 15556 & +91 90547 65556
          </p>
        </div>


        <div className="footer-section footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/export">Export</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
          </ul>
        </div>


        <div className="footer-section footer-social-media">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://facebook.com/eternaloverseas" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/eternaloverseas" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/eternal.overseas/?hl=en" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/company/eternaloverseas" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>




        <div className="footer-products">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/product" rel="noreferrer">Parking Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Roof Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Wall Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Floor Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Subway Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Step Riser</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Polished Vitrified Tiles</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Sanitary Ware</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Plastic Products</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">Electric Products</Link>
            </li>
            <li>
              <Link to="/product" rel="noreferrer">More Products</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-credit">
          <h6>Designed And Managed By INFFY</h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
