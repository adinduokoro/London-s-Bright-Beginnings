import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Aos from "aos";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="hero__slider" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className="image" alt="child care" />
            )}
          </div>
        );
      })}
      <Icon id="right-arrow" icon="ep:arrow-right-bold" onClick={nextSlide} />
      <span className="image-count">
        {current + 1} / {length}
      </span>
    </div>
  );
};

export default Slider;
