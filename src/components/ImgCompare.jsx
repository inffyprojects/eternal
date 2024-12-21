import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/stylesheets/imgcomp.css';

gsap.registerPlugin(ScrollTrigger);

export default function ImageSlider({ 
  beforeImage = "", 
  afterImage = "", 
  beforeLabel = "Before", 
  afterLabel = "After" 
}) {
  const sliderRef = useRef(null);
  const handleRef = useRef(null);
  const positionRef = useRef(50); // Store the current slider position
  const isDraggingRef = useRef(false); // Track whether dragging is active

  useEffect(() => {
    // GSAP animation for scaling the slider
    gsap.fromTo(
      sliderRef.current,
      { scale: 0, opacity: 0 }, // Initial state
      {

        scale: 1,
        opacity: 1,
        scrub:true,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current, // Element to trigger animation
          start: "top top", // Start animation when 80% of viewport is visible
          toggleActions: "play none none none", // Play animation on enter
        
        },
      }
    );
  }, []);

  const handleMove = (clientX) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      positionRef.current = percent;

      // Update DOM directly for smooth experience
      sliderRef.current.style.setProperty('--clip-percent', `${percent}%`);
      if (handleRef.current) {
        handleRef.current.style.left = `${percent}%`;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      requestAnimationFrame(() => handleMove(e.clientX));
    }
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current && e.touches[0]) {
      e.preventDefault();
      requestAnimationFrame(() => handleMove(e.touches[0].clientX));
    }
  };

  const startDragging = () => {
    isDraggingRef.current = true;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className='comp-prnt'>
    <div
      ref={sliderRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={startDragging}
      onTouchStart={startDragging}
      onMouseUp={stopDragging}
      onTouchEnd={stopDragging}
      onMouseLeave={stopDragging}
    >
      {/* Before Image */}
      <div className="slider-image-container">
        <img src={beforeImage} alt={beforeLabel} className="slider-image" />
        <span className="image-label before-label">{beforeLabel}</span>
      </div>

      {/* After Image with Clip Path */}
      <div
        className="slider-image-container"
        style={{ clipPath: `inset(0 calc(100% - var(--clip-percent)) 0 0)` }}
      >
        <img src={afterImage} alt={afterLabel} className="slider-image" />
        <span className="image-label after-label">{afterLabel}</span>
      </div>

      {/* Slider Handle */}
      <div
        ref={handleRef}
        className="slider-handle"
        style={{ left: '50%' }} // Default position
      >
        <div className="handle-line" />
        <div className="handle-circle">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20 8L12 16L20 24" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M12 8L20 16L12 24" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="handle-line" />
      </div>
    </div>
    </div>
  );
}
