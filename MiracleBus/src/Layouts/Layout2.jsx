import React from 'react'
import Routing2 from '../routes/Routing2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
const Layout2 = () => {
  return (
    <div>
       <>
    <BrowserRouter>
    <div>
    {/* <Navbar /> */}
    <Sidebar/>

    <div>
      <Routing2 />
    </div>
    {/* <Footer /> */}
  </div>
  </BrowserRouter>
  </>
    </div>
  )
}

export default Layout2
