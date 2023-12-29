import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <ErrorBoundary>
      {/* <Header2 /> */}
      {children}
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default Layout