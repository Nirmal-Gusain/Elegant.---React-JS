import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='max-w-[1440px] m-auto flex max-sm:flex-col'>
        <img src="BannerImg.jpg" className='max-sm:h-full max-sm:w-full' alt="" />
        <div className='pr-40 pl-[72px] max-sm:px-8 max-sm:py-8 flex flex-col gap-4 justify-center bg-[#F3F5F7] w-full'>
            <span className='font-bold text-[#377DFF]'>SALE UP TO 35% OFF</span>
            <h2 className='text-[40px] font-medium leading-[44px] w-[350px] max-sm:w-[200px] max-sm:text-2xl'>HUNDREDS of  New lower prices!</h2>
            <p className='w-[400px] text-xl max-sm:text-base max-sm:w-full'>It’s more affordable than ever to give every room in your home a stylish makeover</p>
            <NavLink
            to="/shop"
            className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
          >
            Shop Now <FaArrowRight />
          </NavLink>
        </div>
    </div>
  )
}

export default Banner