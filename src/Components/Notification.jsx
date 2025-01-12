import React from 'react'
import { RiCouponLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const Notification = () => {
  return (
    <div className='flex items-center gap-3 py-2 justify-center m-auto w-[1440px] bg-[#F3F5F7]'>
        <RiCouponLine  size={24}/>
        <p className='font-semibold text-sm'>30% off storewide — Limited time! </p>
        <button className='flex items-center font-medium text-sm gap-1 text-[#377DFF] border-b border-[#377DFF]'>Shop Now <FaArrowRight /></button>
    </div>
  )
}

export default Notification