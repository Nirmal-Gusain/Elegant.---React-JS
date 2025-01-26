import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SingleBlog = (props) => {
  const { img, title } = props.Data;
  return (
    <div className="flex flex-col gap-6">
      <img src={img} alt="" loading="lazy"/>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <NavLink
          to="/shop"
          className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
        >
          Shop Now <FaArrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default SingleBlog;
