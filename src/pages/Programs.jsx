import React from "react";
import Banner from "../components/banner/Banner";
import programsBanner from "../assets/ProgramsBanner.png";
import Header from "../components/paragraphs/header/Header";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import ParagraphTwo from "../components/paragraphs/paragraphTwo/ParagraphTwo";

const Programs = () => {
  return (
    <div className="programs__page">
      <Banner bannerImg={programsBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="programs__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Programs"} />
          <div className="programs__content section">
            <ParagraphImg img={""} />
            <ParagraphTwo
              title={"Infant"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
            />
            <ParagraphTwo
              title={"Infant #2"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
            />
            <ParagraphImg img={""} />
            <ParagraphTwo
              title={"Toddlers"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
            />
            <ParagraphTwo
              title={"Preschool"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
