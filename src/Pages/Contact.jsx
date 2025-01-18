import React from 'react'
import { FaAngleRight,FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='max-w-[1440px] m-auto flex flex-col px-40 pt-4 pb-20 gap-10'>
      <p className='flex items-center text-slate-600 font-medium  gap-2'>Home <FaAngleRight size={14}/> <span className='text-black'>Contact Us</span></p>
      <h2 className='w-[834px] text-[54px] font-medium font-[poppins] leading-[58px] tracking-tight'>We believe in sustainable decor. We’re passionate about life at home.</h2>
      <p className='w-[834px]'>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
      <div className='flex'>
        <img src="BannerImg.jpg" className='max-w-[560px] max-h-[413px]' alt="" />
        <div className='bg-[#F3F5F7] w-full pl-[72px] flex justify-center flex-col gap-6'>
          <h2 className='font-medium text-[40px]'>About Us</h2>
          <p className='text-[#121212] max-w-[452px]'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
          Our customer service is always prepared to support you 24/7</p>
          <NavLink
          to="/shop"
          className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
        >
          Shop Now <FaArrowRight />
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Contact