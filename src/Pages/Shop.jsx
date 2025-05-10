import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductData from "../Components/ProductData.json"
import SingleProduct from '../Components/SingleProduct';


const Shop = (props) => {
  return (
    <div>
  <div className="max-w-[1440px] m-auto md:px-40 px-4 relative">
    <img src="Paste Image.png" className="w-full max-sm:h-[300px] object-cover" alt="" />
    <div className="absolute top-[100px] md:top-[115px] left-1/2 transform -translate-x-1/2 flex flex-col gap-3 items-center w-[90%] md:w-[413px] text-center">
      <p className="flex items-center text-slate-500">
        Home <MdKeyboardArrowRight size={25} /> <span className="text-black">Shop</span>
      </p>
      <h2 className="font-medium text-3xl md:text-[54px]">Shop Page</h2>
      <p className="text-base md:text-xl font-normal text-[#121212]">Let’s design the place you always imagined.</p>
    </div>
  </div>

  <div className="max-w-[1440px] m-auto pt-[60px] pb-[100px] px-4 md:px-40 flex flex-col lg:flex-row gap-10">
    {/* Filter Sidebar */}
    <div className="w-full lg:w-[262px] flex flex-col gap-8 max-sm:hidden">
      <h2 className="text-xl font-semibold">Filter</h2>

      <div className="flex flex-col gap-4">
        <h2 className="text-base font-semibold">CATEGORIES</h2>
        <ul className="flex flex-col gap-3 text-[#807E7E]">
          <li className="text-sm font-semibold w-fit">All Rooms</li>
          <li className="text-sm font-semibold w-fit text-black border-b-2 border-black">Living Room</li>
          <li className="text-sm font-semibold w-fit">Bedroom</li>
          <li className="text-sm font-semibold w-fit">Kitchen</li>
          <li className="text-sm font-semibold w-fit">Bathroom</li>
          <li className="text-sm font-semibold w-fit">Dinning</li>
          <li className="text-sm font-semibold w-fit">Outdoor</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base font-semibold">PRICE</h2>
        <ul className="flex flex-col gap-3 text-[#807E7E]">
          {[
            "All Price",
            "$0.00 - 99.99",
            "$100.00 - 199.99",
            "$200.00 - 299.99",
            "$300.00 - 399.99",
            "$400.00+"
          ].map((label, index) => (
            <li key={index} className="text-sm flex items-center justify-between font-semibold">
              {label} <input type="checkbox" className="w-5 h-5 accent-black" />
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Product Listing */}
    <div className="flex-1 flex flex-col gap-10">
      <h2 className="font-semibold text-xl">Living Room</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-6 m-auto">
        {ProductData.map((data, idx) => (
          <SingleProduct key={idx} Data={data} onClick={props.onClick} />
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Shop