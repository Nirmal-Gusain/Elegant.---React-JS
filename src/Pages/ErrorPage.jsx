import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] text-center flex-col gap-5'>
        <h2 className='font-semibold text-5xl text-red-500'>404 | Page Not Found !</h2>
        <p className='font-semibold text-xl'>We can't find the page you are looking for. <br />Sorry for the inconvenience.</p>
        <button className='bg-[#F3F5F7] rounded-md px-5 py-3'><NavLink to="/">  Go back to Home page</NavLink></button> 
    </div>
  )
}

export default ErrorPage