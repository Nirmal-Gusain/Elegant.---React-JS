import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BannerGrid = () => {
  return (
    <div className="flex justify-between  max-sm:flex-col max-sm:gap-4 max-w-[1440px] m-auto px-40 max-sm:px-8">
      <div className="relative">
        <img
          src="gridImg1.jpg"
          className="w-[548px] h-[664px] max-sm:h-full max-sm:w-full"
          alt=""
        />
        <div className="absolute top-12 left-12 flex flex-col gap-3 max-sm:top-8 max-sm:left-8">
          <h2 className="text-4xl font-medium max-sm:text-3xl">Living Room</h2>
          <NavLink
            to="/shop"
            className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
          >
            Shop Now <FaArrowRight />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-between max-sm:gap-4">
        <div className="relative">
          <img
            src="gridImg2.jpg"
            className="h-[319px] w-[548px] max-sm:h-full max-sm:w-full"
            alt=""
          />
          <div className="absolute top-[201px] left-8 flex flex-col gap-3 max-sm:top-16 max-sm:left-8">
            <h2 className="text-4xl font-medium max-sm:text-3xl">Bedroom</h2>
            <NavLink
              to="/shop"
              className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
            >
              Shop Now <FaArrowRight />
            </NavLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="gridImg3.jpg"
            className="h-[319px] w-[548px] max-sm:h-full max-sm:w-full"
            alt=""
          />
          <div className="absolute top-[201px] left-8 flex flex-col gap-3 max-sm:top-16 max-sm:left-8">
            <h2 className="text-4xl font-medium max-sm:text-3xl">kitchen</h2>
            <NavLink
              to="/shop"
              className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
            >
              Shop Now <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
