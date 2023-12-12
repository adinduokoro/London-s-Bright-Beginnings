import React from 'react'
import Banner from '../components/banner/Banner'
import curriculumBanner from "../assets/CurriculumBanner.png"
import Header from '../components/paragraphs/header/Header'
import ParagraphContent from '../components/paragraphs/paragraphContent/ParagraphContent'
import { badges } from '../components/paragraphs/paragraphContent/data'
import curriculum from "../assets/documents/londonscurriculum.pdf"

const Curriculum = () => {
  return (
    <div className='curriculum'>
      <Banner bannerImg={curriculumBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="curriculum__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Curriculum"}/>
          <div className="curriculum__content section">
            <ParagraphContent 
            title={"Our Curriculum Focus"}
            body={
              <p>At London's Bright Beginnings childcare center, our diverse programs seamlessly incorporate essential learning areas into the curriculum, meticulously designed for infants, toddlers, preschoolers, and school-age children. Our nurturing environment encourages children to learn at their own pace, fostering positive attitudes and enthusiasm for learning.<br/><br/>Our curriculum utilizes research-proven standards and guidelines within fundamentally age-appropriate development domains. It encompasses a variety of developmentally appropriate activities, stimulating young minds at a level our children can understand. Presented with care, we utilize the ten components of learning:</p>
            }
            />
            <ParagraphContent
              title={"Ten Domains for Kindergarten Preparedness in Learning"}
              badges={badges}
              docLink={curriculum}
              docName="Download Sample Curriculum"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum