import React from "react";
import Banner from "../components/banner/Banner";
import aboutBanner from "../assets/AboutBanner.png";
import ParagraphContent from "../components/paragraphs/paragraphContent/ParagraphContent";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import Header from "../components/paragraphs/header/Header";
import aboutUsImg from "../assets/AboutUs.jpg";
import directorImg from "../assets/director.jpg";

const About = () => {
  return (
    <div className="about__page">
      <Banner bannerImg={aboutBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="about__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"About Us"} />
          <div className="about__content section">
            <ParagraphImg img={aboutUsImg} />
            <ParagraphContent
              title={"Our Vision"}
              body={
                "The Vision of London’s Bright Beginnings is to be a place where we:"
              }
              bulletPoints={[
                "Foster the social, emotional, physical, and cognitive development of each child.",
                "Cultivate confidence, respect, and a lifelong love for learning. ",
                "Ignite and foster exploration, creativity, and critical thinking. ",
                "Emphasize the significance of play-based learning",
                "Collaborate and serve as a valuable resource for parents seeking high-quality childcare.",
              ]}
            />
            <ParagraphContent
              title={"Our Philosphy"}
              body={
                <p>
                  Hello and welcome to London's Bright Beginnings Child Care
                  Development Center. My name is Amber Washington, and I am
                  proud to introduce myself as the Director and owner of this
                  wonderful institution. I am a mother of two amazing children
                  who have been an integral part of this school's journey,
                  growing and thriving in the nurturing environment we provide.<br />
                  <br />
                  With an Associate's degree in Applied Science, majoring in
                  Early Childhood Education from Baltimore County Community
                  College, my career path has been driven by a deep passion for
                  children. After beginning my work in a childcare center, I
                  quickly recognized that this was where my heart truly
                  belonged. Determined to make a meaningful impact, I returned
                  to school to further my education and gain the knowledge
                  needed to excel in this field.<br />
                  <br /> At London's Bright Beginnings,
                  we believe that finding the right balance in education, care,
                  and emotional support is crucial for our children's
                  development. Together with a team of dedicated and creative
                  educators who share my vision, we are committed to providing a
                  safe, loving, and academically enriching environment. Our goal
                  is to positively influence the lives of the families we serve
                  and build a solid foundation for our children, empowering them
                  to become successful and positive contributors to our
                  community.<br />
                  <br /> We look forward to welcoming you and your child to
                  our community, where every child's bright beginning starts
                  here.
                </p>
              }
            />
          </div>
          <div className="our__director section">
            <ParagraphImg img={directorImg} />
            <ParagraphContent
              header={"Our Director"}
              subHeader={"Amber Washington"}
              body={
                <p>
                  Hello and welcome to London's Bright Beginnings Child Care
                  Development Center. My name is Amber Washington, and I am
                  proud to introduce myself as the Director and owner of this
                  wonderful institution. I am a mother of two amazing children
                  who have been an integral part of this school's journey,
                  growing and thriving in the nurturing environment we provide.
                  <br />
                  <br />
                  With an Associate's degree in Applied Science, majoring in
                  Early Childhood Education from Baltimore County Community
                  College, my career path has been driven by a deep passion for
                  children. After beginning my work in a childcare center, I
                  quickly recognized that this was where my heart truly
                  belonged. Determined to make a meaningful impact, I returned
                  to school to further my education and gain the knowledge
                  needed to excel in this field.
                  <br />
                  <br />
                  At London's Bright Beginnings, we believe that finding the
                  right balance in education, care, and emotional support is
                  crucial for our children's development. Together with a team
                  of dedicated and creative educators who share my vision, we
                  are committed to providing a safe, loving, and academically
                  enriching environment. Our goal is to positively influence the
                  lives of the families we serve and build a solid foundation
                  for our children, empowering them to become successful and
                  positive contributors to our community.
                  <br />
                  <br />
                  We look forward to welcoming you and your child to our
                  community, where every child's bright beginning starts here.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
