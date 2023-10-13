import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    Navigation
    <Outlet />
    </>
  )
}

export default Layout