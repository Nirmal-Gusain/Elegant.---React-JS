import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Flymenu = ({toggleMenu}) => {
  return (
    <div className='w-[343px] h-[812px] bg-red-500 absolute left-0 top-0 ease-in-out p-6'>
        <div className='flex items-center justify-between'>
            <h2 className="text-2xl font-medium px-2">3legant.</h2>
            <RxCross2 size={24} onClick={toggleMenu}/>
        </div>
    </div>
  )
}

export default Flymenu