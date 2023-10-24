import React, { useState, useEffect } from "react";
import "./testimonials.css";
import FamilyPhoto from "../../assets/family-photo.png";
import GraduationCap from "../../assets/graduation-cap.png";
import Chalk from "../../assets/chalk.png";
import { testimonials } from "./data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="section__full testimonials__bg">
      <div className="section">
        <img className="testimonials__family" src={FamilyPhoto} alt="" />
        <img className="testimonials__cap" src={GraduationCap} alt="" />
        <div className="testimonials__cards">
          <div className="testimonials__cardsh3">
            <img src={Chalk} alt="" />
            <h3>parent testimonials</h3>
          </div>
          <div className="testimonials__slider">
            {testimonials.map((review, index) => {
              return (
                <div
                  className={
                    index === current
                      ? "testimonials__cardInfo active"
                      : "testimonials__cardInfo"
                  }
                  key={index}
                >
                  {index === current && (
                    <>
                      <p>{review.response}</p>
                      <h6>-{review.customer}</h6>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
