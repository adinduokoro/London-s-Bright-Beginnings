import React from "react";
import "./hero.css";
import Slider from "./Slider";
import { slides } from "./data";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="section__Medium">
      <div className="hero__slideshow">
        <Slider slides={slides} />

        <div className="hero__bannerCta">
          <span className="hero__ctaQuote">
            AT THE HEART OF OUR COMMITMENT IS YOUR PEACE OF MIND. WATCH YOUR
            CHILD THRIVE IN A SAFE ENRICHING ENVIRONMENT
          </span>
          <Link to="contact">
            <div className="hero__ctaButton">
              <span className="hero__ctaButtonTitle">CONTACT US</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
