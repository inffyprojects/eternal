import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../assets/stylesheets/Loader.css'; 

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.loader-content');

    const timeline = gsap.timeline();

    timeline
      .to(loader, { height: '100%', duration: 1.2, ease: 'power4.inOut' })
      .to(loader, { height: '0%', duration: 1.2, ease: 'power4.inOut', delay: 0.5 })
      .to(content, { opacity: 1, duration: 0.8, ease: 'power4.inOut' }, '-=1');

    return () => {
      gsap.killTweensOf(loader);
      gsap.killTweensOf(content);
    };
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
