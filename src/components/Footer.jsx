import React from 'react';
import '../assets/stylesheets/home.css';

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
          <i className="fas fa-map-marker-alt"></i>
          <span>Visit us at : Block No 1, Kunjgali, Vivekanand nagar 1, Ravapar Road, Morbi - 363641 Gujarat - India </span>
        </div>
        <div className="footer-social-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:info@eternaloverseas.com">Eternal.overseas@gmail.com</a>
        </div>
        <div className="footer-social-item">
          <a href="https://facebook.com/eternaloverseas" rel='noreferrer' target="_blank"><i
            className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/eternaloverseas" rel='noreferrer' target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/eternaloverseas" rel='noreferrer' target="_blank"><i
            className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com/company/eternaloverseas" rel='noreferrer' target="_blank"><i
            className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="inffy-data">
        <h6>Design And Manage By INFFY</h6>
      </div>
    </footer>
  </div>
  )
}

export default Footer