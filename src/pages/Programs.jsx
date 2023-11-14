import React from 'react'
import Banner from '../components/banner/Banner'
import programsBanner from "../assets/ProgramsBanner.png"

const Programs = () => {
  return (
    <div className='programs'>
      <Banner pageTitle={"Programs"} bannerImg={programsBanner} />
    </div>
  )
}

export default Programs