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
        <div className="contact-main">

            <section className='contact'>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className='field' placeholder='Enter Your Name' name='name' required />
                    </div>
                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="email" className='field' placeholder='Enter Your Email' name='email' required />
                    </div>
                    <div className="input-box">
                        <label>Mobile Number</label>
                        <input type='number' className='field' placeholder='Enter Your Mobile Number' name='number'required />
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea name='message' className='field mess' placeholder='Enter Your Name' required />
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </section>
            
            <div className="contact-page2">
                <div className="email-contact">
                    <h1>Mail Us</h1>
                    <a href="mailto:customercare@eternaloverseas.com">customercare@eternaloverseas.com</a>
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
};

export default Contact;
