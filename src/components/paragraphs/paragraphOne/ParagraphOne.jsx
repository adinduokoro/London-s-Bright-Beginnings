import React from "react";
import "./paragraphOne.css";
import RightArrow from "../../../assets/RightArrow.svg";

const ParagraphOne = ({ title, body, bulletPoints }) => {
  return (
    <div className="paragraphOne">
      <h3 className="title-text">{title}</h3>
      <p className="body-text">{body}</p>
      <ul>
        {bulletPoints.map((bullets, index) => {
          return (
            <li key={index}>
              <img src={RightArrow} alt="" />
              {bullets}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ParagraphOne;
