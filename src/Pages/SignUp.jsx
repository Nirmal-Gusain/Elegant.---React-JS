import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='max-w-[766px] m-auto my-5 shadow-[0px_0px_10px_3px_rgba(0,_0,_0,_0.2)] flex max-sm:flex-col max-sm:my-0'>
        <img className='h-[550px] object-cover max-sm:h-[400px] max-sm:w- full ' src="signupImg.jpg" alt="" />
        <div className='h-[550px] max-sm:h-[500px] max-w-[400px] flex flex-col justify-center px-10 gap-4'>
                <h2 className='font-medium text-3xl'>Sign up</h2>
                <p className='text-sm text-[#605F5F]'>Already have an account? <NavLink to='/signin' className='text-[#38CB89] font-medium'>Sign in</NavLink></p>
                <form className='flex flex-col gap-4'>
                    <input required type="text" placeholder='Your Name' className='border-b border-b-[#E8ECEF] pb-2 w-full outline-none'/>
                    <input required type="text" placeholder='Username' className='border-b border-b-[#E8ECEF] pb-2 w-full outline-none'/>
                    <input required type="email" placeholder='Email Address' className='border-b border-b-[#E8ECEF] pb-2 w-full outline-none'/>
                    <input required type="password" placeholder='Password' className='border-b border-b-[#E8ECEF] pb-2 w-full outline-none'/>
                </form>
                <p className='text-sm flex-wrap flex items-center gap-2 text-[#605F5F]'><input type="checkbox" className='h-4 w-4'/> I agree with <span className='font-medium text-black'>Privacy Policy</span> and <span className='font-medium text-black'>Terms of Use</span></p>
                <button className='w-full bg-black border border-transparent duration-500 text-white py-2 rounded-md hover:border hover:border-black hover:bg-white hover:text-black'>Sign Up</button>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SignUp