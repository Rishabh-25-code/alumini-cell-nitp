import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Footer2 from '../components/Footer/Footer2'
import Header2 from '../components/NavBar/Header2'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {/* <Header2 /> */}
      {children}
      <Footer />
    </div>
  )
}

export default Layout