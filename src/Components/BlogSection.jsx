import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BlogData from "./BlogData.json"
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  return (
    <div className="px-40 py-20 gap-10 flex flex-col max-w-[1440px] m-auto  max-sm:px-8">
      <div className="flex justify-between items-end ">
        <h2 className="text-[40px] max-sm:text-3xl font-medium w-[150px] leading-[44px]">
          Articles
        </h2>
        <p className="font-medium border-b-2 border-b-black flex items-center gap-1 max-sm:text-sm">
          More Articles <FiArrowRight />
        </p>
      </div>
      <div className="flex gap-[25px] max-sm:flex-col">
      {
        BlogData.slice(0,3).map((data)=>{
            return <SingleBlog Data={data}/>
        })
      }
      </div>
    </div>
  );
};

export default BlogSection;
