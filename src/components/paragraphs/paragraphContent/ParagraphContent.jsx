import React from "react";
import "./paragraphContent.css";
import RightArrow from "../../../assets/RightArrow.svg";

const ParagraphContent = ({
  subHeader,
  header,
  title,
  body,
  bulletPoints,
  badges,
  docLink,
  docName,
}) => {
  return (
    <div className="paragraphContent">
      <h3 className="title-text">{title}</h3>
      <h2 className="body-text">{header}</h2>
      <span className="body-text">{subHeader}</span>
      <p className="body-text">{body}</p>
      {badges ? (
        <>
          {badges.map((badge, index) => {
            return (
              <div className="badge" key={index}>
                <div className="icon">
                  <img src={badge.img} alt="" />
                </div>
                <div className="badge-info">
                  <span className="body-text">{badge.subHeader}</span>
                  <p className="body-text">{badge.info}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
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
      <a href={docLink} target="_blank" without rel="noreferrer">
        <p className="body-text">{docName}</p>
      </a>
    </div>
  );
};

export default ParagraphContent;
