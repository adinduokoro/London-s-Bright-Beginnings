import React from "react";
import "./offer.css";
import Book from "../../assets/BookSVG.svg";
import Checkmark from "../../assets/Checkmark.svg";

const Offer = () => {
  return (
    <div className="section">
      <div className="offer">
        <div className="offer__left">
          <img src={Book} alt="" />
          <div className="offer__header">
            <div className="offer__span">
              <span>Highly-Qualified</span>
            </div>
            <div className="offer__h3">
              <h3>TEACHERS &</h3>
            </div>
            <div className="offer__h5">
              <h5>STAFF</h5>
            </div>
          </div>
          <div className="offer__p">
            <p>
              Our learning style stands out, offering a truly distinctive
              experience...
            </p>
          </div>
        </div>

        <div className="offer__right">
          <div className="offer__info">
            <h4>EMPOWERING KIDS TO REACH THEIR FULL POTENTIAL</h4>
            <div className="offer__bulletPoint">
              <img src={Checkmark} alt="" />
              <p>Tailored curriculum for each age group</p>
            </div>
            <div className="offer__bulletAnchor">
              <img src={Checkmark} alt="" />
              <a href="/">Discover more about our offerings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
