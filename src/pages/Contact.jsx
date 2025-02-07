import React, { useState } from 'react';
import '../assets/stylesheets/contact.css';
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "995e2a26-7ada-46d3-abbf-bd893c7dbbb4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message delivered!",
                icon: "success"
            });
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-info">
                    <h2>Eternal Overseas</h2>
                    <p><strong>Address:</strong><br /> Block No 1, Kunjgali, Vivekanand Nagar 1,<br /> Ravapar Road, Morbi - 363641 Gujarat, India</p>
                    <p><strong>Phone and Whatsapp:</strong><br /> <a href="tel:+919408215556">+91 94082 15556</a></p>
                    <p><strong>Phone and Whatsapp:</strong><br /> <a href="tel:+919054765556">+91 90547 65556</a></p>
                    <p><strong>Email:</strong><br /> <a href="mailto:info@eternaloverseas.com">info@eternaloverseas.com</a></p>
                    <p><strong>Email:</strong><br /> <a href="mailto:sales@eternaloverseas.com">sales@eternaloverseas.com</a></p>
                </section>
            <section className="contact-form">             
                <form onSubmit={onSubmit}>
                    <h2>Contact Us</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder="Enter Your Name" name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="email" className="field" placeholder="Enter Your Email" name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Mobile Number</label>
                        <input type="number" className="field" placeholder="Enter Your Mobile Number" name="number" required />
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea name="message" className="field mess" placeholder="Enter Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
