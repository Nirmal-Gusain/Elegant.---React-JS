import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductData from "../Components/ProductData.json"
import SingleProduct from '../Components/SingleProduct';


const Shop = () => {
  return (
    <div>
        <div className=' w-[1440px] m-auto px-40 relative'>
            <img src="Paste Image.png" alt="" />
            <div className='absolute top-[115px] gap-6 left-[513px] flex items-center justify-center flex-col w-[413px]'>
                <p className='flex items-center text-slate-500'>Home <MdKeyboardArrowRight size={25} /> <span className='text-black'>Shop</span></p>
                <h2 className='font-medium text-[54px]'>Shop Page</h2>
                <p className='text-xl font-normal text-[#121212]'>Let’s design the place you always imagined.</p>
            </div>
        </div>
        <div className=' w-[1440px] m-auto pt-[60px] pb-[100px] px-40 flex gap-6'>
            <div className=' w-[262px] h-[582px] flex flex-col gap-8'>
                <h2 className='text-xl font-semibold'>Filter</h2>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base font-semibold'>CATEGORIES</h2>
                    <ul className='flex flex-col gap-3 text-[#807E7E]'>
                        <li className='text-sm font-semibold w-fit'>All Rooms</li>
                        <li className='text-sm font-semibold w-fit text-black border-b-2 border-black'>Living Room</li>
                        <li className='text-sm font-semibold w-fit'>Bedroom</li>
                        <li className='text-sm font-semibold w-fit'>Kitchen</li>
                        <li className='text-sm font-semibold w-fit'>Bathroom</li>
                        <li className='text-sm font-semibold w-fit'>Dinning</li>
                        <li className='text-sm font-semibold w-fit'>Outdoor</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base font-semibold'>PRICE</h2>
                    <ul className='flex flex-col gap-3 text-[#807E7E]'>
                        <li className='text-sm flex items-center justify-between font-semibold'>All Price  <input type="checkbox" className='w-5 h-5 accent-black'/></li>
                        <li className='text-sm flex items-center justify-between font-semibold'>$0.00 - 99.99 <input type="checkbox"  className='w-5 h-5 accent-black' /></li>
                        <li className='text-sm flex items-center justify-between font-semibold'>$100.00 - 199.99 <input type="checkbox"  className='w-5 h-5 accent-black' /></li>
                        <li className='text-sm flex items-center justify-between font-semibold'>$200.00 - 299.99 <input type="checkbox"  className='w-5 h-5 accent-black' /></li>
                        <li className='text-sm flex items-center justify-between font-semibold'>$300.00 - 399.99 <input type="checkbox"  className='w-5 h-5 accent-black' /></li>
                        <li className='text-sm flex items-center justify-between font-semibold'>$400.00+ <input type="checkbox"  className='w-5 h-5 accent-black' /></li>
                        
                    </ul>
                </div>
            </div>
            <div className=' w-[834px]  grid grid-cols-3 gap-6'>
                {
                    ProductData.map((data)=>{
                        return <SingleProduct Data = {data}/>
                    })   
                }
            </div>
        </div>
    </div>
  )
}

export default Shop