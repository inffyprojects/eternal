import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    animateMobileNav(!menuOpen);
    toggleBlur(!menuOpen);
  };

  const animateMobileNav = (open) => {
    if (open) {
      gsap.to(".mobile-nav", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "sine.ease",
      });
    } else {
      gsap.to(".mobile-nav", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
      });
    }
  };

  const toggleBlur = (open) => {
    const blurElem = document.querySelector(".prnt-intro"); // Add blur to this element
    const body = document.body;

    if (open) {
      blurElem?.classList.add("blur");
      body.classList.add("no-scroll");
    } else {
      blurElem?.classList.remove("blur");
      body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    gsap.set(".mobile-nav", { scale: 0, opacity: 0 });
  }, []);

  return (
    <header className="nav">
      <Link to='/'> <div className="nav-logo">
        <img src="/logo.png" alt="Logo" /> Eternal Overseas
      </div></Link>

      <div className={`inside-nav ${menuOpen ? 'mobile-active' : ''}`}>
        <span className="reveal"><Link className="nav-item" to='/'>Home</Link></span>
        {/* <div className="dropdown-container"> */}
        <Link className="nav-item" to="/products">Products</Link>
        {/* <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="/category/1"
              style={{ '--strip-color': '#ff7c44' }}>
              Ceramic Products
            </Link>
            <Link
              className="dropdown-item"
              to="/category/2"
              style={{ '--strip-color': '#000' }}>
              Sanitaryware
            </Link>
            <Link
              className="dropdown-item"
              to="/category/3"
              style={{ '--strip-color': '#b175ff' }}>
              PVC Products
            </Link>
            <Link
              className="dropdown-item"
              to="/category/4"
              style={{ '--strip-color': '#8ED993' }}>
             Electric Products
            </Link>
          </div> */}
        {/* </div> */}
        <span className="reveal"><Link className="nav-item" to='/about'>About us</Link></span>
        <span className="reveal"><Link className="nav-item" to='/calculator'>Calculator</Link></span>
        <span className="reveal"><Link className="nav-item" to='/export'>Export</Link></span>
        <div className="btn"> <a href="https://wa.me/919408215556" target="_blank" rel="noopener noreferrer">  <span data-text="let's Talk">let's Talk</span> </a> </div>
      </div>

      <div
        className="hamburger-menu"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <div className="svg-ham" style={{ transform: menuOpen ? "rotate(135deg)" : "rotate(0deg)" }}>
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

        <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/products">Products</Link>
          <Link className="nav-item" to="/about">About us</Link>
          <Link className="nav-item" to="/calculator">Calculator</Link>
          <Link className="nav-item" to="/export">Export</Link>
          <div className="btnformob"><span data-text="let's Talk">let's Talk</span></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
