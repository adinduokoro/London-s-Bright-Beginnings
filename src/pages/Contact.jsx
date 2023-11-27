import React from 'react'
import Banner from '../components/banner/Banner'
import contactBanner from "../assets/ContactBanner.png"
import Header from '../components/paragraphs/header/Header'

const Contact = () => {
  return (
    <div className='contact'>
      <Banner pageTitle={"Contact Us"} bannerImg={contactBanner} />
      <div className="content" style={{ marginBottom: "3.12rem" }}>
        <div className="contact__container" style={{ margin: "0 1.5rem" }}>
          <Header title={"Contact"}/>
          <div className="contact__content section">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact