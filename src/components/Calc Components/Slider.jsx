import React, { useRef, useEffect, useState } from 'react';
import '../../assets/stylesheets/calculator.css';

export function Slider({ value, onChange, min = 0, max = 100, step = 0.1, color = '--primary' }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const calculatePosition = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const position = (clientX - rect.left) / rect.width;
    const newValue = Math.min(max, Math.max(min, min + position * (max - min)));
    return Math.round(newValue / step) * step;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const newValue = calculatePosition(e.clientX);
    onChange(newValue);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newValue = calculatePosition(e.clientX);
      onChange(newValue);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div 
      className="tile-slider" 
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      style={{ '--slider-color': `var(${color})` }}
    >
      <div 
        className="tile-slider-track"
        style={{ width: `${percentage}%` }}
      />
      <div 
        className="tile-slider-thumb"
        style={{ 
          left: `${percentage}%`,
          background: `var(${color})` 
        }}
      />
    </div>
  );
}

