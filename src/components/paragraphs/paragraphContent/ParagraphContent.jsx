import React from "react";
import "./paragraphContent.css";
import RightArrow from "../../../assets/RightArrow.svg";

const ParagraphContent = ({ subHeader, header , title, body, bulletPoints }) => {
  return (
    <div className="paragraphContent">
      <h3 className="title-text">{title}</h3>
      <h2 className='body-text'>{header}</h2>
      <span className='body-text'>{subHeader}</span>
      <p className="body-text">{body}</p>
      {bulletPoints ? (
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
      ) : null}
    </div>
  );
};

export default ParagraphContent;
