import React from 'react'
import Banner from '../components/banner/Banner'
import curriculumBanner from "../assets/CurriculumBanner.png"

const Curriculum = () => {
  return (
    <div className='curriculum'>
      <Banner pageTitle={"Curriculum"} bannerImg={curriculumBanner} />
    </div>
  )
}

export default Curriculum