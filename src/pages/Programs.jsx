import React from "react";
import Banner from "../components/banner/Banner";
import programsBanner from "../assets/ProgramsBanner.png";
import Header from "../components/paragraphs/header/Header";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import ParagraphContent from "../components/paragraphs/paragraphContent/ParagraphContent";
import curriculum from "../assets/documents/londonscurriculum.pdf";
import toddler1 from "../assets/toddler1.jpg"
import toddler2 from "../assets/toddler2.jpg"

const Programs = () => {
  return (
    <div className="programs__page">
      <Banner bannerImg={programsBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="programs__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Programs"} />
          <div className="programs__content section">
            <ParagraphImg img={toddler1} />
            <ParagraphContent
              title={"Infants"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
              docName={"Sample Infant Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphContent
              title={"Toddlers"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
              docName={"Sample Toddler Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphImg img={toddler2} />
            <ParagraphContent
              title={"Preschool"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
              docName={"Sample Preschool Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphContent
              title={"School Age"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
              docName={"Sample School Age Daily Schedule (PDF)"}
              docLink={curriculum}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
