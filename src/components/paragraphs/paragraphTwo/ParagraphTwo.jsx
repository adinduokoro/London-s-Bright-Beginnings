import React from "react";
import "./paragraphTwo.css";

const ParagraphTwo = ({title, body}) => {
  return (
    <div className="paragraphTwo">
      <h3 className="title-text">{title}</h3>
      <p className="body-text">
        {body}
      </p>
    </div>
  );
};

export default ParagraphTwo;
