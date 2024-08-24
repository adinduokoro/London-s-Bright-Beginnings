import React from "react";
import Banner from "../components/banner/Banner";
import programsBanner from "../assets/ProgramsBanner.png";
import Header from "../components/paragraphs/header/Header";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import ParagraphContent from "../components/paragraphs/paragraphContent/ParagraphContent";
import curriculum from "../assets/documents/londonscurriculum.pdf";
import toddler1 from "../assets/toddler1.jpg";
import toddler2 from "../assets/toddler2.jpg";

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
                <p>
                  Our program designed for infants aged 6 weeks to 12 months
                  prioritizes personalized care delivered by affectionate and
                  attentive caregivers who cater to the unique developmental
                  requirements of each child. We understand that the initial
                  introduction to childcare can be overwhelming for both parents
                  and infants; however, our supportive environment is crafted to
                  alleviate any anxieties your child may experience. Following a
                  consistent daily schedule fosters a sense of security for
                  infants, allowing them to form strong bonds with their
                  caregivers and develop the confidence needed for optimal
                  learning and growth.
                </p>
              }
              docName={"Sample Infant Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphContent
              title={"Toddlers"}
              body={
                <p>
                  In the toddler stage, children encounter a myriad of new
                  challenges at a rapid pace. Embracing the realms of walking,
                  talking, socializing, and navigating the delicate balance
                  between independence and dependence, curiosity and abundant
                  energy characterize this developmental phase. Toddlers embark
                  on the journey of self-feeding, potty training, and unleashing
                  their artistic curiosity. Engaging in activities like playing
                  with blocks, solving simple puzzles, exploring manipulatives,
                  and enjoying dress-up become delightful pastimes. During this
                  period, language and motor skills witness significant leaps
                  and bounds, with the day filled with the joys of music,
                  rhymes, stories, outdoor play, and simple learning
                  experiences. <br />
                  <br />
                  Our toddler-friendly environment is thoughtfully crafted to
                  foster exploration while nurturing the continued development
                  of physical and social skills. Our dedicated teachers
                  skillfully guide toddlers to understand boundaries without
                  stifling their inherent love for learning, fostering a
                  trusting and affectionate relationship throughout the process.
                </p>
              }
              docName={"Sample Toddler Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphImg img={toddler2} />
            <ParagraphContent
              title={"Preschool"}
              body={
                <p>
                  Young children thrive on hands-on learning experiences! This
                  stage signifies the shift from toddlerhood to preschool years.
                  By the age of three, children have mastered most physical
                  skills and are actively engaging in social development with
                  peers in more focused and cooperative play. They exhibit the
                  ability to sit for longer durations, participate in listening
                  to stories, singing songs, and reciting simple rhymes.
                  <br />
                  <br /> In our educational setting, we offer a well-organized
                  environment featuring a purposeful daily schedule and routine.
                  Our activities are strategically planned to encompass various
                  domains of learning, including Language, Literacy, and
                  Communication, STEAM (Science, Technology, Engineering, Art,
                  and Math), as well as Social Studies, Health Education, and
                  Music. As preschoolers gain autonomy and refine self-control,
                  they start thinking logically and problem-solving. Their
                  inquisitive nature leads them to consistently inquire about
                  the "why" and "how" of the world, fostering imaginative and
                  creative thinking. By nurturing this inherent curiosity and
                  seamlessly integrating educational achievements within a
                  structured classroom setting, children develop the self-esteem
                  and confidence crucial for ongoing learning.
                </p>
              }
              docName={"Sample Preschool Daily Schedule (PDF)"}
              docLink={curriculum}
            />
            <ParagraphContent
              title={"School Age"}
              body={
                <p>
                  London's Bright Beginnings is a secure and enjoyable space
                  tailored for your elementary-aged child, fostering increased
                  independence. We extend transportation services to and from
                  nearby schools. In addition to aiding with homework, we enrich
                  children's experiences through a diverse range of activities,
                  including outdoor play, cooking, dramatic play, art, and
                  science. Our program ensures families a sense of reassurance,
                  knowing their children are in a safe environment where they
                  are encouraged to learn and actively involved during the gap
                  between the end of the school day and the return of working
                  parents.
                </p>
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
