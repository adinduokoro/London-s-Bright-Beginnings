import React, { useState, useEffect } from "react";
import "./offers.css";
import Checkmark from "../../assets/Checkmark.svg";
import { offers } from "./data";

const Offers = () => {
  const [current, setCurrent] = useState(0);
  const length = offers.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="section">
      <div className="cards">
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
                        <span>{offer.label}</span>
                      </div>
                      <div className="offer__h3">
                        <h3>{offer.textOne}</h3>
                      </div>
                      <div className="offer__h5">
                        <h5>{offer.textTwo}</h5>
                      </div>
                    </div>
                    <div className="offer__p">
                      <p>{offer.paragraph}</p>
                    </div>
                  </div>

                  <div className="offer__right">
                    <div className="offer__info">
                      <h4>{offer.headerOne}</h4>
                      {offer.bulletPoints.map((bulletPoint, index) => {
                        return (
                          <div className="offer__bulletPoint" key={index}>
                            <img src={Checkmark} alt="" />
                            <p>{bulletPoint}</p>
                          </div>
                        );
                      })}

                      <div className="offer__bulletAnchor">
                        <img src={Checkmark} alt="" />
                        <a href={offer.link}>{offer.linkText}</a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
