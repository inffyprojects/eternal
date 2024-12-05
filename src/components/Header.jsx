import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        if (!element) return; 
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav">
      <div className="nav-logo">
        <img src="logo.png" alt="Logo" /> Eternal Overseas
      </div>
      <div className={`inside-nav ${menuOpen ? 'mobile-active' : ''}`}>
        <span className="reveal"><Link className="nav-item" to='/'>Home</Link></span>
        <span className="reveal"><Link className="nav-item" to='/products'>Products</Link></span>
        <span className="reveal"><Link className="nav-item" to='/about'>About us</Link></span>
        <span className="reveal"><Link className="nav-item" to='/calculator'>Calculator</Link></span>
        <span className="reveal"><Link className="nav-item" to='/export'>Careers</Link></span>
        <div className="btn"><span data-text="let's Talk">let's Talk</span></div>
      </div>

      <div
        className="hamburger-menu"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <div className="svg-ham">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon / Plus">
              <path
                id="Rectangle 3"
                d="M10 1V3.6C10 5.84021 10 6.96031 9.56403 7.81596C9.18053 8.56861 8.56861 9.18053 7.81596 9.56403C6.96031 10 5.84021 10 3.6 10H1"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
              <path
                id="Rectangle 4"
                d="M19 10H16.4C14.1598 10 13.0397 10 12.184 10.436C11.4314 10.8195 10.8195 11.4314 10.436 12.184C10 13.0397 10 14.1598 10 16.4V19"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/products">Products</Link>
            <Link className="nav-item" to="/about">About us</Link>
            <Link className="nav-item" to="/calculator">Calculator</Link>
            <Link className="nav-item" to="/careers">Careers</Link>
            <div className="btnformob"><span data-text="let's Talk">let's Talk</span></div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
