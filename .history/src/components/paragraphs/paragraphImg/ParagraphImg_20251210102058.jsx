import React from 'react'
import "./paragraphImg.css"

const ParagraphImg = ({ img }) => {
  return (
    <div className='paragraphImg'>
      <img src={img} alt='' loading="lazy" />
    </div>
  )
}

export default ParagraphImg