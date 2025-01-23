import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  return (
    <div className="about-main">
      <div className="about-content">
        <span className="reveal"><h1 className="text-reveal">✦ About Eternal Overseas</h1></span>
        <span className="reveal">
          <p className="text-blureffect">
            At Eternal Overseas, we are a leading manufacturer and exporter of a diverse range of high-quality products, including all the types of ceramic tiles, sanitary ware, plastic products, and many more. With years of expertise in the industry, we have built a reputation for delivering innovative and reliable solutions to customers around the world.
            Our manufacturing process is driven by precision, utilizing advanced technology and skilled craftsmanship to ensure that each product meets the highest standards of quality and performance. From the timeless beauty of our tiles to the durability and functionality of our sanitary ware and plastic products, we provide a comprehensive range of items that cater to residential, commercial, and industrial needs.
            As a global exporter, we are committed to serving markets across more than 50 countries, delivering products that not only meet international standards but exceed expectations. We understand the importance of timely delivery, customer satisfaction, and sustainability, which is why we continually strive to improve our processes and offer innovative solutions tailored to the specific demands of our clients.
            Whether you are renovating a home, completing a large-scale project, or seeking reliable suppliers for a range of products, Eternal Overseas is your trusted partner. Our commitment to quality, customer service, and sustainability ensures that we remain at the forefront of the industry, offering a wide array of products designed to enhance your spaces and projects.

          </p>
        </span>
      </div>
      <div className="about-page2">
        <div className="page2-content">
          <span className="reveal"><h1 className="text-reveal">✲  Our Vision: Shaping the Future  ✲ </h1></span>
          <span className="reveal">
            <p className="text-blureffect">
              At Eternal Overseas, we aim to revolutionize the tile industry by delivering innovative and reliable products recognized worldwide. Our unwavering commitment to excellence drives us to continually adapt to market demands, ensuring our offerings enhance spaces with exceptional quality and style. By leveraging market insights and cutting-edge design technology, we present tile collections that embody sustainability and modern aesthetics, establishing us as a preferred choice across North America, South America, Europe, Africa, Asia, and Australia.
            </p>
          </span>
          <div className="about-cards">
            <div className="card-grid">
              <div className="ab-card" id='ab-card-p'>
                <h3><FontAwesomeIcon icon={faUsers} className='globeabt' /></h3>
                <p class="ab-card-p">Dipak Kasundra</p> <hr className='abtline' />
                <p class="ab-card-p"> Sandip Kasundra</p> <hr className='abtline' />
                <p class="ab-card-p"> Ravi Kasundra</p>
              </div>
              <div className="ab-card">
                <h3><FontAwesomeIcon icon={faChartLine} className='globeabt' /></h3>
                <p>50+ Million</p>
              </div>
              <div className="ab-card">
                <h3><FontAwesomeIcon icon={faEarthAmericas} className='globeabt' /></h3>
                <p>More than 50 Countries</p>
              </div>
            </div>
          </div>
        </div>
        <img className="Gujarat" src="Stippling-bff8.svg" alt="" />
      </div>
      <div class="container">
        <section class="info-section">

          <div class="image-container">
            <img src="/logo.png" alt="Decorative Image" class="info-image" />
          </div>




          <div class="info-item">
            <div class="icon">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V18a6 6 0 110-12v-1.93a8 8 0 100 15.86zM12 6a6 6 0 000 12v-2.07A4 4 0 1112 8zm1 4.07V12h1.93A6.05 6.05 0 0013 10.07zm-2 0A6.05 6.05 0 008.07 12H10zm.93 2H12v2.93A4.05 4.05 0 0111.93 12zM12 14h-1.93A6.05 6.05 0 0012 15.93z" />
              </svg>
            </div>
            <div class="text-content">
              <h2>Our Mission</h2>
              <p>At Eternal Overseas, our mission is to deliver exceptional products that meet the diverse needs of our customers in the construction, interior design, and industrial sectors.</p>
              <ul>
                <li><strong>Innovation & Excellence:</strong> We embrace technology and innovation to provide cutting-edge products, from elegant tiles and sanitary ware to durable plastic products, all of which exceed industry standards for quality, performance, and aesthetics.</li>
                <li><strong>Sustainability & Responsibility:</strong> We recognize the importance of sustainable practices and strive to minimize our environmental impact. From eco-friendly production processes to sustainable sourcing of raw materials, we work to protect the planet while providing superior products.</li>
                <li><strong>Global Reach, Local Service:</strong> With a strong international footprint, we pride ourselves on our ability to serve diverse markets, offering customized solutions and personalized service to meet the unique needs of every client, no matter the size or location of the project.</li>
                <li><strong>Customer-Centric Approach:</strong> We are dedicated to building long-term relationships with our customers by providing exceptional service, reliable delivery, and value-driven solutions. Our goal is to exceed expectations and support our clients at every stage of their projects.</li>
                <li><strong>Employee Growth & Well-being:</strong> We believe that a successful company begins with a strong, motivated team. We invest in our people through continuous training, a collaborative work environment, and opportunities for personal and professional growth.</li>
                <li><strong>Quality & Integrity:</strong> Every product we manufacture is a testament to our unwavering commitment to quality. We uphold the highest standards in every aspect of our business, from raw material selection to final delivery, ensuring that our customers receive nothing less than the best.</li>
              </ul>
            </div>
          </div>


          <div class="info-item">
            <div class="icon">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29 16.29L4.71 11.71a1 1 0 00-1.42 1.42l5 5a1 1 0 001.42 0l12-12a1 1 0 00-1.42-1.42z" />
              </svg>
            </div>
            <div class="text-content">
              <h2>Why Choose Us</h2>
              <ul>
                <li>We deliver on time, every time.</li>
                <li>Customer satisfaction is our primary focus.</li>
                <li>Our operations are transparent and ethical.</li>
                <li>We leverage world-class infrastructure to ensure superior service.</li>
                <li>We never compromise on quality.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>



    </div>
  );
}

export default About;
