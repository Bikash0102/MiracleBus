import React from 'react'
import { Routes, Route, Navigate,    BrowserRouter } from "react-router-dom";
import Registration from '../components/Registration';
const Routing2 = () => {
  return (
    <Routes>
    {/* <Route path="/Login" element={<Navigate to="/Login" />} /> */}
    <Route path="/" element={<Registration/>} />
    {/* <Route path="/Registration" element={<Registration/>} />
    <Route path="/Login" element={<Login/>} /> */}

  </Routes>
  )
}

export default Routing2
