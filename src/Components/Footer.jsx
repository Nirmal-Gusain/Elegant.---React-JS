import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[1440px] m-auto bg-[#141718] text-white px-40 pt-20 pb-8 flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-medium"> <NavLink to="/">3legant.</NavLink> </h2>
          <div className="h-6 w-[1px] bg-white"></div>
          <p className="font-normal text-sm">Gift & Decoration Store</p>
        </div>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7">
          <h2 className="text-xs font-normal">
            Copyright © 2023 3legant. All rights reserved
          </h2>
          <div className="flex items-center gap-7">
            <p className="text-xs font-semibold">Privacy Policy</p>
            <p className="text-xs font-semibold">Terms of Use</p>
          </div>
        </div>
        <div className="flex gap-6">
          <NavLink to="#"><FaInstagram size={24} /></NavLink>
          <NavLink to="#"><FaFacebookF size={24} /></NavLink>
          <NavLink to="#"><FiYoutube size={24} /></NavLink>

        </div>
      </div>
    </div>
  );
};

export default Footer;


