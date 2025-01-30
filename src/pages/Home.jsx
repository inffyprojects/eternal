import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/home.css';
import ImageSlider from '../components/ImgCompare';
import Page2 from '../components/Page2';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {


  useEffect(() => {

    function wordanimation() {
      const words = document.querySelectorAll(".word");
      let currentWord = 0;
      const firstWord = words[currentWord];
      firstWord.style.display = "inline";
      firstWord.classList.add("show");
      gsap.to(firstWord, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });


      setInterval(switchWords, 3000);

      clearInterval(window.wordSwitchInterval);
      function switchWords() {
        const currentWordElement = words[currentWord];
        const nextWordIndex = (currentWord + 1) % words.length;
        const nextWordElement = words[nextWordIndex];

        gsap.to(currentWordElement, {
          opacity: 0,
          scale: 0.5,
          y: -30,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            currentWordElement.classList.remove("show");
            currentWordElement.style.display = "none";

            currentWord = nextWordIndex;

            nextWordElement.style.display = "inline";
            nextWordElement.classList.add("show");
            nextWordElement.style.opacity = 0;
            nextWordElement.style.transform = "translateY(-50px) scale(0.5)";

            gsap.to(nextWordElement, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut"
            });
          }
        });
      }
      window.wordSwitchInterval = setInterval(switchWords, 3000);
    }
    wordanimation()



    const textreveal = () => {

      gsap.from(".nav-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        onComplete: () => {
          document.querySelectorAll(".nav-item").forEach((item) => {
            item.classList.add("animation-complete");
          });
        },
      });


      const splitText = (element) => {
        const words = element.textContent.split("");
        element.innerHTML = "";
        words.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          element.appendChild(span);
        });
      };

      // const footer = document.querySelector(".footer-animation");
      // if (footer) splitText(footer);


      // gsap.from(".footer-animation span", {
      //   y: -110,
      //   opacity: 0,
      //   ease: "power3.out",
      //   duration: 0.7,
      //   stagger: 0.04,
      //   onComplete: () => {
      //     ScrollTrigger.create({
      //       trigger: ".page-4",
      //       start: "top bottom",
      //       onEnter: () => {
      //         gsap.set(".footer-animation span", { y: -110, opacity: 0 });
      //         gsap.to(".footer-animation span", {
      //           y: 0,
      //           opacity: 1,
      //           ease: "power3.out",
      //           duration: 1,
      //           delay: 0.5,
      //           stagger: 0.06,
      //         });
      //       },
      //     });
      //   },
      // });
    };

    textreveal();



  }, [])

  return (
    <div className="main">
      <div className="page-1">
        <div className="prnt-intro">
          <div className="intro">
            <h1>
              <div className="first-line">
                <div className="para-first">Welcome to Eternal Overseas &nbsp;</div>
                <div className="para-item">
                  <span className="word word-1">Unveil Style</span>
                  <span className="word word-2">Embrace Strength</span>
                  <span className="word word-3">Redefine Spaces</span>
                </div>
              </div>
              <span>with Timeless Design and Lasting Durability.</span>
            </h1>
            <br />
            <div className="btn">
              <span data-text="Explore">Explore</span>
            </div>
          </div>
          <div className="tile-cr">
            <div className="slider" style={{ "--height": "300px", "--quantity": 4 }}>
              <div className="list">
                <div className="item" style={{ "--position": 1 }}>
                  <img
                    src="/images/Scrollimg1.png"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img
                    src="/images/Scrollimg2.png"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img
                    src="/images/Scrollimg3.png"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img
                    src="/images/Scrollimg5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slider" reverse="true" style={{ "--height": "300px", "--quantity": 4 }}>
              <div className="list">
                <div className="item" style={{ "--position": 1 }}>
                  <img
                    src="/images/Scrollimg7.png"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img
                    src="/images/Scrollimg9.jpeg"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img
                    src="/images/Scrollimg10.jpeg"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img
                    src="/images/Scrollimg11.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Page2 /> */}
      {/* <div className="page-3" >
        <div class="exp-prnt">
          <div class="exp-txt">
            <h1>What We Stand For</h1>

          </div>
          <div class="exp-card">
            <div class="exp-card1">
              <h3>Our Vision</h3>
              <h5>To become a global leader in innovative, sustainable, and premium-quality tiles, transforming every space into a masterpiece.</h5>
            </div>
            <div class="exp-card2">
              <h3>Our Mission</h3>
              <h5>To provide customers with a wide range of durable and stylish tiles, combining quality craftsmanship with unparalleled service.</h5>
            </div>
            <div class="exp-card3">
              <h3>Our Values</h3>
              <h5>Built on trust, innovation, and quality, we strive to deliver exceptional tiles that exceed expectations and inspire creativity."
              </h5>
            </div>
            <div class="exp-card4">
              <h3>Wide Range of Designs</h3>
              <h5>Explore an unparalleled selection of tiles, crafted to complement every style and transform your spaces effortlessly.</h5>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="certification-container">
        <h1>Certifications</h1>
        <div class="certificates">
          <div class="certificate">
            <img src="/images/ieccerti.jpeg" alt="CE Certificate"/>
              <p>IEC CERTIFICATE</p>
          </div>
          <div class="certificate">
            <img src="/images/msmecerti.jpeg" alt="ISO 9001:2015"/>
              <p>MSME CERTIFICATE</p>
          </div>
        </div>
      </div> */}
      {/* <div className="page-5">
        <div >
          <div className='set-prnt' >
            <div className="img-comp-txt">
              <h1>Witness the Magic of Tile Transformation</h1>
              <p>
                Our tiles, your transformation.
              </p>
            </div>

            <div>
              <ImageSlider
                beforeImage="/images/comp1.jpeg"
                afterImage="/images/comp2.jpeg"
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>

  );
};

export default Home;
