import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => (
    <div className="max-w-[1440px] m-auto relative max-sm:h-[270px] max-sm:w-full">
      <img src="NewsletterImg.jpg" alt="" className="max-sm:hidden" />
      <div className="absolute top-[101px] left-[450px] text-center  max-w-[540px] max-sm:top-0 max-sm:left-0 max-sm:h-full max-sm:bg-[#F2F4F6] max-sm:px-8 max-sm:py-8">
        <h2 className="font-medium text-[40px] pb-2 max-sm:text-[28px]">Join Our Newsletter</h2>
        <p className="text-lg pb-8">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex items-center justify-between py-3 border-b border-b-[#6C7275] ">
          <MdOutlineEmail size={24} />
          <input
            type="text"
            placeholder="Email Address"
            className="w-[458px] max-sm:w-[250px] outline-none text-lg bg-transparent"
          />
          <button className="text-[#6C7275] font-medium">Signup</button>
        </div>
      </div>
    </div>
    
);

export default Newsletter;
