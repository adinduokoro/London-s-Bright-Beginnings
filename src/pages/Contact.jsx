import React from 'react'
import Banner from '../components/banner/Banner'
import contactBanner from "../assets/ContactBanner.png"

const Contact = () => {
  return (
    <div className='contact'>
      <Banner pageTitle={"Contact Us"} bannerImg={contactBanner} />
    </div>
  )
}

export default Contact