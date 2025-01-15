import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Flymenu from "./Flymenu";

const Navbar = ({count}) => {
  const [showMenu,setShowMenu]  = useState(false)
  const toggleMenu = () => {
    setShowMenu(prev => !prev)
  }
  
  return ( 
    <div className="flex items-center justify-between max-w-[1440px] m-auto py-4 px-40 max-sm:px-8">
      <div className="flex items-center gap-1">
      <FaBars onClick={toggleMenu} className="hidden max-sm:block"/>
      <Flymenu toggleMenu={toggleMenu} showMenu={showMenu}/>
      
      <h2 className="text-2xl font-medium px-2"><NavLink to="/">3legant.</NavLink> </h2>

      </div>
      <ul className="flex items-center justify-center gap-10 max-sm:hidden">
        <li className="text-sm font-medium">
          <NavLink to="/" className={ ({isActive})=> isActive ? "text-black" : "text-[#6C7275]"} >Home</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/shop" className={ ({isActive})=> isActive ? "text-black" : "text-[#6C7275]"} >Shop</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/product" className={ ({isActive})=> isActive ? "text-black" : "text-[#6C7275]"} >Product</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/contact" className={ ({isActive})=> isActive ? "text-black" : "text-[#6C7275]"} >Contact Us</NavLink>
        </li>
      </ul>
      <div className="flex gap-4">
        <CiSearch className="text-2xl max-sm:hidden" />
        <HiOutlineUserCircle className="text-2xl max-sm:hidden"/>
        <div className="flex gap-[5px] items-center">
          <IoBagOutline className="text-2xl" />
          <span className="h-5 w-5 flex items-center justify-center bg-black text-white rounded-full text-xs">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
