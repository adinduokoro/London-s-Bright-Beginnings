import React from "react";
import Banner from "../components/banner/Banner";
import careerBanner from "../assets/CareerBanner.png";
import Header from "../components/paragraphs/header/Header";
import ParagraphContent from "../components/paragraphs/paragraphContent/ParagraphContent";
import CareerForm from "../components/form/CareerForm";

const Career = () => {
  return (
    <div className="career__page">
      <Banner bannerImg={careerBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="career__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Careers"} />
          <div className="career__content section">
            <ParagraphContent
              body={
                <p>
                  Welcome to the application process for London's Bright
                  Beginnings. Our organization values the strength of our united
                  team, which is the cornerstone of our success. We offer
                  competitive compensation for qualified individuals who join
                  us. To attract, hire, and retain the best talent, we provide
                  innovative and distinctive benefits for our dedicated
                  educators and support staff. Our mission is centered around
                  delivering exceptional care to the individuals and families we
                  serve. We actively seek individuals who are dedicated to
                  collaboration, committed to continuous professional growth
                  both personally and as part of a collective, and who share our
                  enthusiasm for making a positive impact. We are on the lookout
                  for candidates with a strong commitment to nurturing learning,
                  solid work ethics, a passion for their craft, creative energy,
                  reliability, and a desire to contribute to a supportive and
                  dynamic team environment. Join us in creating a harmonious and
                  fulfilling experience for all!
                </p>
              }
            />
            <ParagraphContent
              title={"Job Opportunities"}
              body={
                "We are seeking exceptional individuals to become part of our dynamic team! Explore exciting prospects for professional advancement and career development. Currently, we welcome applications for:"
              }
              bulletPoints={[
                "Lead Teachers (Full Time and Part Time)",
                "Assistant Teachers (Full Time and Part Time)",
                "Support Staff (Full Time and Part Time)",
              ]}
            />
            <ParagraphContent title={"We invite you to join our team. To apply, kindly fill out the form below."} />
            <Header title={"Career Inquiry Form"} />
            <CareerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
