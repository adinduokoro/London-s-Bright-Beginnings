import React from 'react'
import Banner from '../components/banner/Banner'
import curriculumBanner from "../assets/CurriculumBanner.png"
import Header from '../components/paragraphs/header/Header'
import ParagraphContent from '../components/paragraphs/paragraphContent/ParagraphContent'

const Curriculum = () => {
  return (
    <div className='curriculum'>
      <Banner pageTitle={"Curriculum"} bannerImg={curriculumBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="curriculum__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Curriculum"}/>
          <div className="curriculum__content section">
            <ParagraphContent 
            title={"Our Curriculum Focus"}
            body={
              "Lorem ipsum dolor sit amet consectetur. Et mollis quis pretium at ultrices est quis id. Habitasse tristique ut erat habitasse in sit. Sit suspendisse ullamcorper pellentesque at vulputate sit velit. Feugiat tellus quam tortor viverra tellus dignissim arcu auctor eget. Consectetur id turpis eget porta ibendum posuere leo sed. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin. Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin Leo amet dolor metus tristique elementum in. Ultricies ut scelerisque in in dictumst id egestas. Orci sed dolor duis vulputate in enim malesuada mollis quisque sollicitudin.."
            }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum