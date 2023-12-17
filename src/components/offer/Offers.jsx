import React, { useState, useEffect } from "react";
import "./offers.css";
import checkmark from "../../assets/Checkmark.svg";
import { offers } from "./data";
import { Icon } from "@iconify/react";


const Offers = () => {
  const [current, setCurrent] = useState(0);
  const length = offers.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  return (
    <div className="section">
      <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="250" className="cards">
        {offers.map((offer, index) => {
          return (
            <div
              className={index === current ? "offer active" : "offer"}
              key={index}
            >
              {index === current && (
                <>
                  <div className="offer__left">
                    <img src={offer.image} alt="" />
                    <div className="offer__header">
                      <div className="offer__span">
                        <span className="label-text">{offer.label}</span>
                      </div>
                      <div className="offer__h3">
                        <h3>{offer.textOne}</h3>
                      </div>
                      <div className="offer__h5">
                        <h5>{offer.textTwo}</h5>
                      </div>
                    </div>
                    <div className="offer__p">
                      <p className="label-text">{offer.paragraph}</p>
                    </div>
                  </div>

                  <div className="offer__right">
                    <div className="offer__info">
                      <h4 className="title-text">{offer.headerOne}</h4>
                      {offer.bulletPoints.map((bulletPoint, index) => {
                        return (
                          <div className="offer__bulletPoint" key={index}>
                            <img src={checkmark} alt="" />
                            <p className="label-text">{bulletPoint}</p>
                          </div>
                        );
                      })}

                      <div className="offer__bulletAnchor">
                        <img src={checkmark} alt="" />
                        <a href={offer.link} className="label-text">
                          {offer.linkText}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      <Icon id="left-arrow" icon="ep:arrow-left-bold" onClick={prevSlide} />
      <Icon id="right-arrow" icon="ep:arrow-right-bold" onClick={nextSlide} />

      </div>
      
    </div>
  );
};

export default Offers;
