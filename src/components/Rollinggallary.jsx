import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "../assets/stylesheets/rollinggallary.css";


const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [
  "/rolling/r1.jpg",
  "/rolling/r3.jpg",
  "/rolling/r4.jpg",
  "/rolling/r5.jpg",
  "/rolling/r6.jpg",
  "/rolling/r7.jpg",
  "/rolling/r8.jpg",
  "/rolling/r9.jpg"
],}) => {
const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
const faceCount = images.length;
const faceWidth = (cylinderWidth / faceCount) * 1.5; // Increased width for items
const dragFactor = 0.05;
const radius = cylinderWidth / (2 * Math.PI);

const rotation = useMotionValue(0);
const controls = useAnimation();
const autoplayRef = useRef();

const handleDrag = (_, info) => {
  rotation.set(rotation.get() + info.offset.x * dragFactor);
};

const handleDragEnd = (_, info) => {
  controls.start({
    rotateY: rotation.get() + info.velocity.x * dragFactor,
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
  });
};

const transform = useTransform(rotation, (value) => {
  return `rotate3d(0, 1, 0, ${value}deg)`;
});

useEffect(() => {
  if (autoplay) {
    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));
    }, 2000);

    return () => clearInterval(autoplayRef.current);
  }
}, [autoplay, rotation, controls, faceCount]);

useEffect(() => {
  const handleResize = () => {
    setIsScreenSizeSm(window.innerWidth <= 640);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const handleMouseEnter = () => {
  if (autoplay && pauseOnHover) {
    clearInterval(autoplayRef.current);
    controls.stop();
  }
};

const handleMouseLeave = () => {
  if (autoplay && pauseOnHover) {
    controls.start({
      rotateY: rotation.get() - (360 / faceCount),
      transition: { duration: 2, ease: "linear" },
    });
    rotation.set(rotation.get() - (360 / faceCount));

    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));
    }, 2000);
  }
};

return (
  <div className="gallery-container">
    <div className="gallery-exp-txt">
    <h1>Our Exports</h1>
  </div>
    <div className="gallery-content">
      <motion.div
        drag="x"
        className="gallery-track"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
          >
            <img src={url} alt="gallery" className="gallery-img" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);
};

export default RollingGallery;