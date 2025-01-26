import React from 'react'
import BlogData from "./BlogData.json"
import SingleBlog from './SingleBlog';

const AllBlogs = () => {
  return (
    <div className="py-10 grid grid-cols-3 gap-10 max-sm:grid-cols-1">
        {BlogData.map((data) => {
                    return <SingleBlog Data={data} />;
                  })}
    </div>
  )
}

export default AllBlogs