import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Newsletter from "../Components/Newsletter";
import AllBlogs from "../Components/AllBlogs";
import FeaturedBlogs from "../Components/FeaturedBlogs";

const Blog = () => {
  const [show, setShow] = useState(true); // Default to AllBlogs

  function toggleBlogs(value) {
    setShow(value);
  }

  return (
    <>
      <div className="max-w-[1440px] m-auto px-10 md:px-20 lg:px-40">
        <div className="w-full h-full relative  ">
          <img
            src="BlogImg.jpg"
            alt=""
            className="w-full h-auto max-sm:h-[308px]"
          />
          <div className="absolute top-[15%] left-[25%] max-sm:left-0  flex flex-col items-center w-[70%] max-sm:w-full gap-6">
            <p className="flex items-center text-[#605F5F] font-medium gap-3">
              Home <FaAngleRight size={16} />{" "}
              <span className="text-black">Blog</span>
            </p>
            <h2 className="font-medium text-3xl md:text-5xl">Our Blogs</h2>
            <p className="text-md md:text-xl text-[#121212]">
              Home ideas and design inspiration.
            </p>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-center gap-4">
            <button
              className={`${
                show ? "text-black border-b border-b-black" : "text-[#6C7275]"
              } font-medium`}
              onClick={() => toggleBlogs(true)}
            >
              All Blogs
            </button>
            <button
              className={`${
                !show ? "text-black border-b border-b-black" : "text-[#6C7275]"
              } font-medium`}
              onClick={() => toggleBlogs(false)}
            >
              Featured Blogs
            </button>
          </div>
          <div className="pt-4">{show ? <AllBlogs /> : <FeaturedBlogs />}</div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Blog;
