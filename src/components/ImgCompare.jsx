import React, { useState, useRef } from 'react';
import '../assets/stylesheets/imgcomp.css';  // Ensure your CSS file is correctly linked

export default function ImageSlider({ 
  beforeImage = "", 
  afterImage = "", 
  beforeLabel = "Before", 
  afterLabel = "After" 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image */}
      <div className="slider-image-container">
        <img 
          src={beforeImage} 
          alt={beforeLabel} 
          className="slider-image" 
        />
        <span className="image-label before-label">{beforeLabel}</span>
      </div>

      {/* After Image with Clip Path */}
      <div 
        className="slider-image-container"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="slider-image" 
        />
        <span className="image-label after-label">{afterLabel}</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
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
  );
}
