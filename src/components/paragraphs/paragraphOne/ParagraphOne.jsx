import React from "react";
import "./paragraphOne.css";
import RightArrow from "../../../assets/RightArrow.svg";

const ParagraphOne = ({title, body}) => {
  return (
    <div className="paragraphOne">
      <h3 className="title-text">{title}</h3>
      <p className="body-text">
        {body}
      </p>
      <ul>
        <li>
          <img src={RightArrow} alt="" />
          Lorem ipsum dolor sit amet consectetur. Et nunc elit eu a sed congue
          sem fermentum.
        </li>
        <li>
          <img src={RightArrow} alt="" />
          Lorem ipsum dolor sit amet consectetur. Nascetur viverra non vulputate
          dui ac pellentesque.
        </li>
        <li>
          <img src={RightArrow} alt="" />
          Lorem ipsum dolor sit amet consectetur. Turpis nec tortor neque metus
          lectus dictumst nunc.
        </li>
        <li>
          <img src={RightArrow} alt="" />
          Lorem ipsum dolor sit amet consectetur. Turpis nec tortor neque metus
          lectus dictumst nunc.
        </li>
      </ul>
    </div>
  );
};

export default ParagraphOne;
