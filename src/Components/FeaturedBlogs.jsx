import React from "react";
import BlogData from "./BlogData.json"
import SingleBlog from "./SingleBlog";


const FeaturedBlogs = () => {
  return (
    <div className="py-10 grid grid-cols-3 gap-10 max-sm:grid-cols-1">
      {BlogData.sort(() => Math.random()- 0.5)
        .slice(0, 6)
        .map((data) => (
          <SingleBlog Data={data} key={data.id} />
        ))}
    </div>
  );
};

export default FeaturedBlogs;
