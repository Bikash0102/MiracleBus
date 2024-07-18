import React from 'react'
import { Routes, Route, Navigate,    BrowserRouter } from "react-router-dom";
import Login from '../components/Login';
import Registration from '../components/Registration';
import Crads from '../components/Crads';
import ProfileSection from '../components/ProfileSection';
import { useAuthContext } from '../context/AuthContext';



const Routing = () => {
  const { authUser } = useAuthContext();
  return (
    <>

    <Routes>
    
        <Route path='/' element={authUser ? <ProfileSection/> : <Navigate to={"/Login"} />} />
				<Route path='/Login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/Registration' element={ <Registration />} />
        
        

  

    </Routes>
  
    </>

    

  )
}

export default Routing
