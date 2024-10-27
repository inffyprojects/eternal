import React from 'react';
import '../assets/stylesheets/contact.css';

const Contact = () => {
    return (
        <div className="contact-main">
            <div className="contact-content">
                <div className="text-contact">
                    <h1>Let's Get In Touch!</h1>
                    <h3>Let’s bridge the distance! We're excited to connect and explore opportunities across borders.</h3>
                </div>
                <img className="world-map" src="contacteternal.svg" alt="World Map" />
            </div>

            <div className="contact-page2">
                <div className="email-contact">
                    <h1>Mail Us</h1>
                    <a href="mailto:customercare@eternaloverseas.com">customercare@eternaloverseas.com</a> & 
                    <a href="mailto:dipak.kasundra@eternaloverseas.in"> dipak.kasundra@eternaloverseas.in</a>
                </div>
                <div className="number-contact">
                    <h1>Phone Number</h1>
                    <p>+91 94082 15556 & +91 90547 65556</p>
                </div>
                <div className="location-contact">
                    <h1>Our Office</h1>
                    <p>
                        Block No 1,<br />
                        Kunjgali, Vivekanand Nagar 1,<br />
                        Ravapar Road, Morbi - 363641,<br />
                        Gujarat - India
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
