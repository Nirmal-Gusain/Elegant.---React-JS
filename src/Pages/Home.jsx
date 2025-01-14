import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="max-w-[1440px] m-auto px-40 max-sm:px-8">
      <img
        src="HeroBg.jpg"
        className="flex-wrap max-sm:h-[304px] w-full object-cover"
        alt=""
      />
      <div className="flex py-[43px] gap-8 items-center max-sm:flex-col max-sm:gap-4">
        <h2 className="text-7xl font-medium max-sm:text-[40px] max-w-[643px]">
          Simply Unique/ Simply Better.
        </h2>
        <p className="font-semibold max-sm:text-sm">
          3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.{" "}
        </p>
      </div>
      <div className="flex justify-between relative max-sm:flex-col max-sm:gap-4">
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
      <div className="py-12 flex gap-6 max-sm:flex-wrap max-sm:gap-4">
        <div className="flex gap-6 max-sm:gap-4">
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7]  flex flex-col gap-4 items-start">
            <img src="fast delivery.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] ">
              <h2 className="text-xl font-medium">Free Shipping</h2>
              <p className="text-sm text-[#6C7275]">Order above $200</p>
            </div>
          </div>
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7]  flex flex-col gap-4 items-start">
            <img src="money.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] ">
              <h2 className="text-xl font-medium">Money-back</h2>
              <p className="text-sm text-[#6C7275]">30 Days Guarantee</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 max-sm:gap-4">
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7]  flex flex-col gap-4 items-start">
            <img src="lock 01.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] ">
              <h2 className="text-xl font-medium">Secure Payments</h2>
              <p className="text-sm text-[#6C7275]">Secured by Stripe</p>
            </div>
          </div>
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7]  flex flex-col gap-4 items-start">
            <img src="call.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] ">
              <h2 className="text-xl font-medium">24/7 Support</h2>
              <p className="text-sm text-[#6C7275]">Phone and Email Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
