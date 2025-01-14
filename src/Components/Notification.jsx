import React from 'react'
import { RiCouponLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Notification = () => {
  return (
    <div className='flex items-center gap-3 max-sm:gap-2 py-2 justify-center m-auto max-w-[1440px] bg-[#F3F5F7] relative text-center'>
        <RiCouponLine  className='text-xl' />
        <p className='font-semibold text-sm max-sm:text-xs'>30% off storewide — Limited time! </p>
        <button className='flex items-center font-medium text-sm gap-1 text-[#377DFF] border-b border-[#377DFF] max-sm:hidden'> <NavLink to="/shop" > Shop Now </NavLink> <FaArrowRight /> </button>
        <RxCross2 className='absolute right-4' />
    </div>
  )
}

export default Notification