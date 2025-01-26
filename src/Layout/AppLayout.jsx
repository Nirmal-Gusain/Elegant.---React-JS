import React from 'react'
import Notification from '../Components/Notification'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const AppLayout = () => {
  return (
    <div>
        <Notification/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout