import React from 'react'
import TopHeader from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <TopHeader />
      <HeaderBottom />
    </div>
  )
}

export default Header