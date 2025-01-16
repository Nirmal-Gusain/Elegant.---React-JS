import React from 'react'
import ProductData from "../Components/ProductData.json";
import SingleProduct from "../Components/SingleProduct";
import { FiArrowRight } from "react-icons/fi";

const ProductSlider = (props) => {
  return (
    <div className="pt-[48px] max-sm:pt-8 gap-12 flex flex-col max-w-[1440px] m-auto px-40 max-sm:px-8">
    <div className="flex justify-between items-end">
      <h2 className="text-[40px] max-sm:text-3xl font-medium w-[150px] leading-[44px]">
        New Arrivals
      </h2>
      <p className="font-medium border-b-2 border-b-black flex items-center  gap-1 max-sm:text-sm">More Products <FiArrowRight /></p>
    </div>
    <div className="flex overflow-x-auto gap-6 pb-12">
      {ProductData.slice(0, 5).map((data, index) => (
        <SingleProduct
          key={index}
          Data={data}
          onClick={props.onClick}
        />
      ))}
    </div>
  </div>
  )
}

export default ProductSlider