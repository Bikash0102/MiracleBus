import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
const Layout = () => {

  return (
    <>
    <BrowserRouter>
    <div>
    <Navbar />
    <div>
      <Routing />
    </div>
    {/* <Footer /> */}
  </div>
  </BrowserRouter>
  </>
  )
}

export default Layout
