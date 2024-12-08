import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/home.css';
import jsonData from '../assets/data/desc.json'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [children, setChildren] = useState(jsonData);
  // const [imageVisible, setImageVisible] = useState(false);
  // const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleExpandClick = (id) => {
    setChildren(prevChildren =>
      prevChildren.map(child =>
        child.id === id ? { ...child, expanded: !child.expanded } : child
      )
    );
  };

  // const handleMouseMove = (event) => {
  //   setImagePosition({ x: event.clientX, y: event.clientY });
  // };

  // const handleMouseEnter = () => {
  //   setImageVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setImageVisible(false);
  // };

  // useEffect(() => {
  //   const handleMouseMoveGlobal = (event) => {
  //     if (imageVisible) {
  //       handleMouseMove(event);
  //     }
  //   };

  //   document.addEventListener('mousemove', handleMouseMoveGlobal);
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMoveGlobal);
  //   };


  // }, [imageVisible]);


  // differnet functions 

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


    // const expandDiv = () => {
    //   const expandButton = document.querySelector('.expand');

    //   const toggleExpanded = (child) => {
    //     const isAlreadyExpanded = child.classList.contains('expanded');

    //     // Remove 'expanded' class from all .ex-child elements
    //     document.querySelectorAll('.ex-child').forEach(el => {
    //       el.classList.remove('expanded');
    //       const otherChildPage = el.querySelector('.child-page');
    //       if (otherChildPage) {
    //         otherChildPage.style.opacity = '0';
    //       }
    //     });

    //     // Toggle 'expanded' state on the clicked element
    //     if (!isAlreadyExpanded) {
    //       child.classList.add('expanded');
    //       const childPage = child.querySelector('.child-page');
    //       if (childPage) {
    //         childPage.style.opacity = '1';
    //       }
    //     }
    //   };

    //   expandButton.addEventListener('click', (event) => {
    //     const child = event.target.closest('.ex-child');
    //     if (child) {
    //       toggleExpanded(child);
    //     }
    //   });

    //   const childElements = [...document.querySelectorAll('.child1, .child2, .child3, .child4')];

    //   const fixedImage = document.createElement('img');
    //   fixedImage.src = "https://images.unsplash.com/photo-1668889716746-fd2ca90373f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60";
    //   fixedImage.classList.add("fixed-image");
    //   document.body.appendChild(fixedImage);

    //   Object.assign(fixedImage.style, {
    //     position: "fixed",
    //     opacity: 0,
    //     transform: "translate(-50%, -50%)",
    //     left: "50%",
    //     top: "50%",
    //   });

    //   let lastMouseX = 0;
    //   let lastMouseY = 0;

    //   const handleMouseMove = (event) => {
    //     const deltaX = event.clientX - lastMouseX;

    //     gsap.to(fixedImage, {
    //       duration: 0.3,
    //       delay: 0.03,
    //       left: event.clientX + "px",
    //       top: event.clientY + "px",
    //       rotation: deltaX,
    //       ease: "power.ease",
    //     });

    //     lastMouseX = event.clientX;
    //     lastMouseY = event.clientY;
    //   };

    //   childElements.forEach(child => {
    //     child.addEventListener("mouseenter", () => {
    //       gsap.fromTo(fixedImage, {
    //         opacity: 0,
    //         scale: 0,
    //         y: -30,
    //       }, {
    //         duration: 0.5,
    //         opacity: 1,
    //         scale: 1,
    //         y: 0,
    //         ease: "bounce1.ease",
    //       });
    //       document.addEventListener("mousemove", handleMouseMove);
    //     });

    //     child.addEventListener("mouseleave", () => {
    //       gsap.to(fixedImage, {
    //         duration: 0.5,
    //         opacity: 0,
    //         scale: 0,
    //         y: -30,
    //         rotation: 0,
    //         ease: "power3.out",
    //       });
    //       document.removeEventListener("mousemove", handleMouseMove);
    //     });
    //   });
    // };

    // expandDiv();

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
                    src="https://images.unsplash.com/photo-1569400177960-d13fc8bc16aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img
                    src="https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1721681765444-10e3e82600a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img
                    src="https://images.unsplash.com/photo-1539424675410-513ddd709ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slider" reverse="true" style={{ "--height": "300px", "--quantity": 4 }}>
              <div className="list">
                <div className="item" style={{ "--position": 1 }}>
                  <img
                    src="https://varmora.com/wp-content/uploads/2024/07/GLACETONE-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img
                    src="https://varmora.com/wp-content/uploads/2024/07/WEGANERO1.jpg"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img
                    src="https://varmora.com/wp-content/uploads/2024/07/RAINFORESTAQUA1.jpg"
                    alt=""
                  />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img
                    src="https://varmora.com/wp-content/uploads/2024/07/CIANANERO1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="page-2">
        <div className="expand">
          <div className="ex-child border">
            <div className="child-content">
              <h1 className="child-heading">Floor ware</h1>
              <span className="plus-btn">+</span>
            </div>
            <div className='child-page child1'>
              <h3>
                Experience durability and style with our Product Gallery. Perfect for both residential and
                commercial spaces, these tiles combine innovation and elegance.
              </h3>
              <ul className="unorderlist">
                <li>
                  <strong>Porcelain Tiles:</strong> Similar to ceramic tiles but made from denser clay,
                  porcelain tiles are fired at higher temperatures. They are highly durable and resistant
                  to water and stains.
                </li>
                <li>
                  <strong>Vitrified Tiles:</strong> Vitrified tiles are a type of ceramic tile with low
                  porosity. They are made by a process called vitrification, where the clay and silica
                  materials are heated together at high temperatures to form a glass-like substance. This
                  results in a dense, hard, and water-resistant tile.
                  <ul className="sub-unorder">
                    <li>
                      <strong>Double Charged Vitrified Tiles:</strong> These tiles have a double layer
                      of pigment, providing a more vibrant and durable surface.
                    </li>
                    <li>
                      <strong>Full Body Vitrified Tiles:</strong> The color and texture of these tiles
                      run throughout the entire thickness, making them more resistant to visible wear.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Nano Tiles:</strong> Nano tiles are ceramic or porcelain tiles that undergo a
                  treatment using nanotechnology. Nanotechnology involves manipulating materials at the
                  nanoscale, typically at dimensions less than 100 nanometers. In the context of tiles,
                  this technology is often used to enhance their properties.
                </li>
                <li>
                  <strong>Glazed Vitrified Tiles (GVT):</strong> Glazed Vitrified Tiles are a type of
                  ceramic tile that undergoes vitrification, a process where the tile is fired at high
                  temperatures to make it dense and less porous. These tiles are then coated with a glaze,
                  which is a layer of liquid glass, to add various aesthetic and functional features.
                </li>
              </ul>
              <div className="btn"><span data-text="Explore">Explore</span></div>

            </div>
          </div>
          <div className="ex-child border">
            <div className="child-content">
              <h1 className="child-heading">Sanitary ware</h1>
              <span className="plus-btn">+</span>
            </div>
            <div className="child-page child2">
              <h3>
                Sanitary ware refers to the various fixtures and fittings in a bathroom or washroom that are
                designed for hygiene and sanitation purposes. These fixtures are essential components of a
                plumbing system, providing facilities for personal hygiene and waste disposal. Common
                sanitary ware items include:
              </h3>
              <ul className="unorderlist">
                <li>
                  <strong>Toilets:</strong>
                  Toilets are fixtures designed for the disposal of human waste. They typically include a
                  bowl, a flushing mechanism, and a seat.
                </li>
                <li>
                  <strong>Basins or Sinks:</strong>
                  Basins or sinks are used for washing hands, face, and other personal hygiene activities.
                  They come in various designs and sizes.
                </li>
                <li>
                  <strong>Bidets:</strong>
                  Bidets are fixtures used for washing the genital and perianal areas after using the
                  toilet. They are often found in European bathrooms.
                </li>
                <li>
                  <strong>Urinals:</strong>
                  Urinals are fixtures designed for males to urinate into. They are commonly found in
                  public restrooms and commercial spaces.
                </li>
                <li>
                  <strong>Baths:</strong>
                  Baths are fixtures for bathing and can come in various styles, including alcove,
                  freestanding, or built-in.
                </li>
                <li>
                  <strong>Accessories:</strong>
                  Sanitary ware may also include various accessories such as soap dispensers, towel rails,
                  toilet paper holders, and other items that enhance functionality and aesthetics.
                </li>
              </ul>
              <h3>When choosing sanitary ware for a bathroom, factors such as design, material, water
                efficiency, and ease of maintenance should be considered. Sanitary ware is available in a
                variety of materials, including ceramic, porcelain, stainless steel, and acrylic.</h3>
              <div className="btn"><span data-text="Explore">Explore</span></div>
            </div>
          </div>

          <div className="ex-child border">
            <div className="child-content">
              <h1 className="child-heading">Decorative Ceramic Products</h1>
              <span className="plus-btn">+</span>
            </div>
            <div className="child-page child3">
              <h3>
                Roofing tiles are building materials designed for covering the roof of a structure. They
                come in various materials, styles, and shapes, providing options for different architectural
                styles and climate considerations. Here are some common types of roofing tiles:
              </h3>
              <ul className="unorderlist">
                <li>
                  <strong>Clay Roof Tiles:</strong>
                  Made from natural clay that is molded and fired in a kiln. Durable, fire-resistant, and
                  known for their distinctive, traditional appearance. Common styles include Spanish,
                  mission, and interlocking tiles.
                </li>
                <li>
                  <strong>Jali Tiles:</strong>
                  "Jali tiles" typically refer to tiles that have a lattice or perforated design, often
                  inspired by traditional architectural elements called "jali" in various cultures. Jali
                  is a term used in South Asian architecture to describe a perforated design, often in the
                  form of a lattice, screen, or grille, used in windows, doors, or other architectural
                  features. Jali tiles are a modern adaptation of this design, offering a decorative and
                  functional element in interior and exterior spaces. Here are some characteristics and
                  uses of jali tiles:
                  <ul className="unorderlist">
                    <li>
                      Jali tiles can be made from various materials, including ceramic, porcelain,
                      glass, metal, or composite materials.
                    </li>
                    <li>
                      Interior Spaces:Jali tiles are often used as decorative elements in interior
                      spaces. They can be incorporated into walls, partitions, and even furniture to
                      add a touch of elegance and uniqueness.
                    </li>
                    <li>
                      Exterior Spaces:Jali tiles can also be used in outdoor settings, such as on
                      facades or as decorative elements in gardens and patios.
                    </li>
                    <li>
                      Jali tiles come in a variety of styles and patterns, ranging from traditional
                      and cultural designs to more contemporary and modern aesthetics.
                    </li>
                    <li>
                      Jali tiles can create interesting lighting effects when natural or artificial
                      light passes through the perforations, casting unique patterns on surrounding
                      surfaces.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>It is used as decorative elements, room dividers, or architectural features, jali tiles.
              </h3>
              <div className="btn"><span data-text="Explore">Explore</span></div>
            </div>
          </div>
          <div className="ex-child border">
            <div className="child-content">
              <h1 className="child-heading">Wall ware</h1>
              <span className="plus-btn">+</span>
            </div>
            <div className="child-page child4">
              <h3>
                Immerse yourself in the timeless beauty of our Product Gallery. From classNameic designs to
                contemporary patterns, these ceramic tiles add a touch of sophistication to any space.
              </h3>
              <ul className="unorderlist">
                <li>
                  <strong>Kitchen Wall Tiles:</strong>
                  Discover a range of kitchen wall tiles that seamlessly blend functionality with style.
                  Create a culinary space that inspires creativity and complements your interior design.
                </li>
                <li>
                  <strong>Bathroom Wall Tiles:</strong>
                  Transform your bathroom into a spa-like oasis with our selection of bathroom wall tiles.
                  Choose from a variety of textures and colors to achieve the perfect ambiance.
                </li>
                <li>
                  <strong>Living Room Accent Tiles:</strong>
                  Make a statement in your living room with our accent wall tiles. Add depth and character
                  to your space, creating a focal point that reflects your personality.
                </li>
              </ul>
              <div className="btn"><span data-text="Explore">Explore</span></div>
            </div>
          </div>
          <div className="ex-child border"></div>

        </div>
      </div> */}
      <div className="page-2">
        <div className="expand">
          {children.map((child, index) => (
            <div
              key={child.id}
              className={`ex-child border ${child.expanded ? 'expanded' : ''} ${index === children.length - 1 ? 'hidden' : ''}`}
              onClick={() => handleExpandClick(child.id)}
            >
              <div className="child-content">
                <h1 className="child-heading">{child.title}</h1>
                <span className="plus-btn">+</span>
              </div>
              {child.expanded && (
                <div className={`child-page child${child.id}`}>
                  <h3>{child.content.description}</h3>
                  <ul className="unorderlist">
                    {child.content.list.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                  <div className="btn"><span data-text="Explore">Explore</span></div>
                </div>
              )}
            </div>
          ))}

        </div>
        {/* {imageVisible && (
          <img
            src="https://images.unsplash.com/photo-1668889716746-fd2ca90373f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"
            alt="Funny element"
            className="fixed-image"
            style={{
              position: 'fixed',
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
              opacity: 0.8,
              transition: 'left 0.1s, top 0.1s'
            }}
          />
        )} */}
      </div>

      <div className="page-3">

  
      </div>

    </div>

  );
};

export default Home;
