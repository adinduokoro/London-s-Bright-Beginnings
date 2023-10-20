import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="hero__slider">
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
    </section>
  );
};

export default Slider;
