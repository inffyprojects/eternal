import React from 'react';
import '../assets/stylesheets/imgcomp.css';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImgCompare = () => {
  return (
    <div className='img-comp'>
      <h1>Image Comparison</h1>
      <ImgComparisonSlider
      >
        <img 
          slot="first" 
          src="https://img-comparison-slider.sneas.io/demo/images/before.webp" 
          alt="Before" 
        />
        <img 
          slot="second" 
          src="https://img-comparison-slider.sneas.io/demo/images/after.webp" 
          alt="After" 
        />
      </ImgComparisonSlider>
    </div>
  );
};

export default ImgCompare;
