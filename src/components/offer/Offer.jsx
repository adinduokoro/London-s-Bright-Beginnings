import React from "react";
import "./offer.css";
import Book from "../../assets/BookSVG.svg";

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
        <div className="offer__right">right</div>
      </div>
    </div>
  );
};

export default Offer;
