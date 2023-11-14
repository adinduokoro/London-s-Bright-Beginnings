import React from 'react'
import "./paragraphImg.css"
import person from "../../../assets/Person.jpg"

const ParagraphImg = () => {
  return (
    <div className='paragraphImg'>
      <img src={person} alt=''/>
    </div>
  )
}

export default ParagraphImg