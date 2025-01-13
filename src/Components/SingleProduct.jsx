import React from "react";
import { FaStar } from "react-icons/fa";

const SingleProduct = (props) => {
  const{img,name,price,oldPrice} = props.Data
  return (
    <div className="flex flex-col gap-3 relative">
        <div className="absolute flex flex-col gap-2 left-4 top-4">
            <p className="px-[14px] py-1 rounded bg-white font-bold">NEW</p>
            <p className="px-[14px] py-1 bg-[#38CB89] font-bold w-fit text-white rounded">-50%</p>
        </div>
      <img className="w-[262px]" src={img} alt="" />
      <div className="flex">
        <FaStar className="text-[#343839]"  />
        <FaStar className="text-[#343839]"  />
        <FaStar className="text-[#343839]"  />
        <FaStar className="text-[#343839]"  />
        <FaStar className="text-[#343839]"  />
        
      </div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <div className="flex gap-3 text-base font-semibold"> 
        <p>{price}</p>
        <span className="line-through text-[#6C7275]">{oldPrice}</span>
      </div>
    </div>
  );
};

export default SingleProduct;