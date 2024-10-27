import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/about.css';

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
              <div className="ab-card">
                <h3>Card 1</h3>
                <p>This is the first card.</p>
              </div>
              <div className="ab-card">
                <h3>Card 2</h3>
                <p>This is the second card.</p>
              </div>
              <div className="ab-card">
                <h3>Card 3</h3>
                <p>This is the third card.</p>
              </div>
              <div className="ab-card">
                <h3>Card 4</h3>
                <p>This is the fourth card.</p>
              </div>
              <div className="ab-card">
                <h3>Card 5</h3>
                <p>This is the fifth card.</p>
              </div>
            </div>
          </div>
        </div>
        <img className="Gujarat" src="Stippling-bff8.svg" alt=""/>
      </div>
    </div>
  );
}

export default About;
