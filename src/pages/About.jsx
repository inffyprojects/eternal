import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    function splitText(selector) {
      document.querySelectorAll(selector).forEach(element => {
        const words = element.innerText.split(" ");
        element.innerHTML = words.map(word => `<span class="words">${word}</span>`).join(" ");
      });
    }

    function textReveal() {
      splitText(".text-reveal");

      document.querySelectorAll('.text-reveal').forEach((textReveal) => {
        gsap.from(textReveal.querySelectorAll('.words'), {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.in",
          scrollTrigger: {
            trigger: textReveal,
            start: "top 80%",
            once: true
          },
          onComplete: () => {
            textReveal.closest('.about-content')?.classList.add('animation-complete');
          }
        });
      });
    }
    textReveal();

    function blurText() {
      const textElements = document.querySelectorAll('.text-blureffect');

      textElements.forEach(textElement => {
        wrapWords(textElement);
        ScrollTrigger.create({
          trigger: textElement,
          start: "top 80%",
          once: true,
          onEnter: () => fadeInBlurWords(textElement)
        });
      });
    }

    function wrapWords(element) {
      const words = element.innerText.split(' ');
      element.innerHTML = '';
      words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        element.appendChild(span);
        element.appendChild(document.createTextNode(' '));
      });
    }

    function fadeInBlurWords(element) {
      const wordSpans = element.querySelectorAll('span');

      wordSpans.forEach((span, index) => {
        gsap.fromTo(span,
          { opacity: 0, filter: "blur(10px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.3,
            delay: index * 0.06,
            ease: "power4.out"
          }
        );
      });
    }

    // Call the functions

    blurText();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="about-main">
      <div className="about-content">
        <span className="reveal"><h1 className="text-reveal">✦ About Eternal Overseas</h1></span>
        <span className="reveal">
          <p className="text-blureffect">
            Eternal Overseas Group stands as a global leader in ceramic and vitrified tile manufacturing, acclaimed for its innovative designs and exceptional product quality. Founded in 2009 in Morbi, Gujarat, with an initial capacity of 12,000 sq. meters per day, the company has significantly expanded its reach and production, driven by state-of-the-art Italian machinery and advanced technology.
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
                <p class="ab-card-p">Dipak K</p> <hr className='abtline' />
                <p class="ab-card-p"> Sandip K</p> <hr className='abtline' />
                <p class="ab-card-p"> Ravi K</p>
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

          <div class="info-item">
            <div class="icon">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V18a6 6 0 110-12v-1.93a8 8 0 100 15.86zM12 6a6 6 0 000 12v-2.07A4 4 0 1112 8zm1 4.07V12h1.93A6.05 6.05 0 0013 10.07zm-2 0A6.05 6.05 0 008.07 12H10zm.93 2H12v2.93A4.05 4.05 0 0111.93 12zM12 14h-1.93A6.05 6.05 0 0012 15.93z" />
              </svg>
            </div>
            <div class="text-content">
              <h2>Our Mission</h2>
              <p>At Eternal Overseas, we strive to deliver products that exceed expectations across the construction, interior design, and industrial sectors. Our mission is built on key principles:</p>
              <ul>
                <li><strong>Innovation & Excellence:</strong> We leverage cutting-edge technology to deliver superior products that exceed industry standards in quality, aesthetics, and performance.</li>
                <li><strong>Sustainability & Responsibility:</strong> Eco-friendly production and sustainable sourcing are at the core of our operations, aiming to minimize environmental impact.</li>
                <li><strong>Global Reach, Local Service:</strong> Our international presence enables us to serve diverse markets with personalized, customer-focused solutions.</li>
                <li><strong>Customer-Centric Approach:</strong> We prioritize long-term relationships through exceptional service and reliable delivery.</li>
                <li><strong>Employee Growth & Well-being:</strong> We invest in our people to foster a collaborative and innovative work environment.</li>
                <li><strong>Quality & Integrity:</strong> Every product reflects our commitment to the highest standards, ensuring reliability and excellence.</li>
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
