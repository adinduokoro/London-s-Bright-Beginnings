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
                "Collaborate and serve as a valuable resource for parents seeking high-quality childcare."
              ]}
            />
            <ParagraphContent 
              title={"Our Philosphy"}
              body={
                "At our center, we think a kid's day should be all about love, exploring, and learning. Our mix of care and education is key for their growth. Each child deserves a teacher who's all in, bringing passion and dedication. When teachers love what they do, it sets a heartwarming vibe. We grasp the intricacies of development, involving a blend of biological elements and the surrounding environment. Our kids learn best through connections, be it relationships, interactions, or cool experiences. Good communication with teachers and parents is a must for a supportive vibe. Our teachers guide kids through milestones, boosting motivation with a sense of belonging. Lessons link their school days to home and community life. Teamwork with staff and families is the heart of what we do. Together, we're on the same page, working hard for every child's growth and success."
              }
            />
          </div>
          <div className="our__director section">
            <ParagraphImg img={directorImg} />
            <ParagraphContent 

              header={"Our Director"}
              subHeader={"Amber Valraie"}
              body= {
              <p>
                Hello and welcome to London's Bright Beginnings. It is with great appreciation that I introduce my staff and myself to you. My name is Amber Valraie and I am the Director at London's Bright Beginnings Child Care Development Center. I am a mother of one wonderful child who has spent many wonderful years growing up here at the school. <br/><br/> I have a Master’s degree from the University of Houston and Bachelor’s degree from the University of Maryland. In May 2005, I decided to leave the corporate workplace in the Healthcare Industry with the aim and passion to make a difference in how we teach and care for our children. After visiting and touring many childcare centers and preschools in the area for our first-born, my husband and I realized that it was extremely difficult to find a school that had the right balance of everything we wanted for our children. I believe that being an educator is not just a job – it is a passion. With a desire to make an impact on the personal and educational successes of our youth, I decided to start my career in Early Childhood Education.<br/><br/> Together with a team of amazing and creative educators, who share in my vision and goal to provide a safe, caring, loving and academic environment and where together we can influence the lives of the families we serve and build a solid foundation for our children that will allow them to be successful and positive contributors in our community"
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
