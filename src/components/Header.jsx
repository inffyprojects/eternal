import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    function textreveal() {
      gsap.from(".nav-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        onComplete: () => {
          document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.add('animation-complete');
          });
        }
      });

      function splitText(element) {
        if (!element) return; // Check if the element exists
        const words = element.textContent.split("");
        element.innerHTML = "";
        words.forEach(char => {
          const span = document.createElement("span");
          span.textContent = `${char}`;
          span.style.display = "inline-block";
          element.appendChild(span);
        });
      }

      const footer = document.querySelector(".footer-animation");
      splitText(footer);

      gsap.from(".footer-animation span", {
        y: -110,
        opacity: 0,
        ease: "power3.out",
        duration: 0.7,
        stagger: 0.04,
        onComplete: () => {
          ScrollTrigger.create({
            trigger: ".page-4",
            start: "top bottom",
            onEnter: () => {
              gsap.set(".footer-animation span", { y: -110, opacity: 0 });
              gsap.to(".footer-animation span", {
                y: 0,
                opacity: 1,
                ease: "power3.out",
                duration: 1,
                delay: 0.5,
                stagger: 0.06
              });
            }
          });
        },
      });
    }

    const timer = setTimeout(() => textreveal(), 0);
    
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="nav">
      <div className="nav-logo">
        <img src="logo.png" alt="" />Eternal Overseas
      </div>
      <div className="inside-nav">
        <span className="reveal"><Link className="nav-item" to='/'>Home</Link></span>
        <span className="reveal"><Link className="nav-item">Products</Link></span>
        <span className="reveal"><Link className="nav-item" to='/about'>About us</Link></span>
        <span className="reveal"><Link className="nav-item" to='/calculator'>Calculator</Link></span>
        <span className="reveal"><Link className="nav-item" to='/contact'>Careers</Link></span>
        <div className="btn"><span data-text="let's Talk">let's Talk</span></div>
      </div>
    </div>
  );
}

export default Header;
