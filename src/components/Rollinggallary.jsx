import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import "../assets/stylesheets/rollinggallary.css";

const RollingGallery = ({
  autoplay = true,
  pauseOnHover = true,
  images = [
    "/rolling/r1.jpg",
    "/rolling/r2.jpg",
    "/rolling/r3.jpg",
    "/rolling/r4.jpg",
    "/rolling/r5.jpg",
    "/rolling/r6.jpg",
    "/rolling/r7.jpg",
    "/rolling/r8.jpg",
    "/rolling/r9.jpg",
  ],
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5; // Increased width for items
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (autoplay) {
      controls.start({
        rotateY: rotation.get() - 360,
        transition: {
          duration: faceCount * 5, // Adjust speed
          ease: "linear",
          repeat: Infinity,
        },
      });

      return () => {
        controls.stop();
      };
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
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360,
        transition: {
          duration: faceCount * 5,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
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
