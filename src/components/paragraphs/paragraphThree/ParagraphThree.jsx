import React from 'react'
import "./paragraphThree.css"

const paragraphThree = ({title, header, subHeader, body}) => {
  return (
    <div className="paragraphThree">
      <h3 className="title-text">{title}</h3>
      <h2 className='body-text'>{header}</h2>
      <span className='body-text'>{subHeader}</span>
      <p className="body-text">
        {body}
      </p>
    </div>
  )
}

export default paragraphThree