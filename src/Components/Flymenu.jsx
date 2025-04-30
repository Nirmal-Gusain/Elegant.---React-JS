import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import style from "../Components/Flymenu.module.css"

const Flymenu = ({ toggleMenu , showMenu}) => {
  return (
    <div className={showMenu ? style.container2 : style.container}>
      <div className="w-11/12 h-[812px] bg-white  p-6 flex flex-col  justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium px-2">3legant.</h2>
            <RxCross2 size={24} onClick={toggleMenu} />
          </div>
          <div className="flex items-center w-full bg-white px-4 py-[11px] rounded-md gap-2 border border-[#6C7275]">
            <IoSearch size={24} />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <NavLink className="border-b border-b-[#E8ECEF] pb-[15px]" to="/">
              Home
            </NavLink>
            <NavLink
              className="border-b border-b-[#E8ECEF] pb-[15px]"
              to="/shop"
            >
              Shop
            </NavLink>
            {/* <NavLink
              className="border-b border-b-[#E8ECEF] pb-[15px]"
              to="/product"
            >
              Product
            </NavLink> */}
            <NavLink
              className="border-b border-b-[#E8ECEF] pb-[15px]"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-[19px]">
          <div className="flex flex-col gap-2">
            <NavLink
              to=""
              className="flex items-center justify-between text-lg text-[#6C7275] pb-2 border-b border-b-[#E8ECEF]"
            >
              Cart{" "}
              <div className="flex items-center gap-2">
                <IoBagOutline size={24} className="text-black" />
                <span className="h-5 w-5 flex items-center justify-center bg-black text-white rounded-full text-xs">
                  2
                </span>
              </div>
            </NavLink>
            <NavLink
              to=""
              className="flex items-center justify-between text-lg text-[#6C7275] pb-2 border-b border-b-[#E8ECEF]"
            >
              Wishlist{" "}
              <div className="flex items-center gap-2">
                <IoBagOutline size={24} className="text-black" />
                <span className="h-5 w-5 flex items-center justify-center bg-black text-white rounded-full text-xs">
                  2
                </span>
              </div>
            </NavLink>
          </div>
          <button className="py-[10px] text-white w-full rounded-md text-center bg-black">
            Sign In
          </button>
          <div className="flex gap-3">
            <FaInstagram size={24}/>
            <FiFacebook size={24}/>
            <FiYoutube size={24}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flymenu;
