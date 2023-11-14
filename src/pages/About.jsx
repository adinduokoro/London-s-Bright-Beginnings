import React from "react";
import Banner from "../components/banner/Banner";
import aboutBanner from "../assets/AboutBanner.png";
import ParagraphOne from "../components/paragraphs/paragraphOne/ParagraphOne";
import ParagraphTwo from "../components/paragraphs/paragraphTwo/ParagraphTwo";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import ParagraphThree from "../components/paragraphs/paragraphThree/ParagraphThree";
import Header from "../components/paragraphs/header/Header";
import aboutUsImg from "../assets/AboutUs.jpg";
import directorImg from "../assets/Person.jpg";

const About = () => {
  return (
    <div className="about__page">
      <Banner pageTitle={"About Us"} bannerImg={aboutBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="about__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"About Us"} />
          <div className="about__content section">
            <ParagraphImg img={aboutUsImg} />
            <ParagraphOne
              title={"Our Vision"}
              body={
                "The Vision of London’s Bright Beginnings is to be a place where we:"
              }
              bulletPoints={[
                "Lorem ipsum dolor sit aet consectetur. Et nunc elit eu a sed congue sem fermentum.",
                "Lorem ipsum dolor sit amet consectetur. Nascetur viverra non vulputate dui ac pellentesque.",
                "Lorem ipsum dolor sit amet consectetur. Turpis nec tortor neque metus lectus dictumst nunc.",
                "Lorem ipsum dolor sit amet consectetur. Turpis nec tortor neque metus lectus dictumst nunc.",
              ]}
            />
            <ParagraphTwo
              title={"Our Philosophy"}
              body={
                "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin."
              }
            />
          </div>
          <div className="our__director section">
            <ParagraphImg img={directorImg} />
            <ParagraphThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
