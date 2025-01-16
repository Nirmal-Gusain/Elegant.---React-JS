import React from "react";


import Values from "../Components/Values";
import ProductSlider from "../Components/ProductSlider";
import BannerGrid from "../Components/BannerGrid";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import BlogSection from "../Components/BlogSection";
import Newsletter from "../Components/Newsletter";

const Home = (props) => {
  return (
    <>
      <Hero/>
      <BannerGrid/>
      <ProductSlider onClick={props.onClick}/> 
      <Values/> 
      <Banner/>
      <BlogSection/>
      <Newsletter/>
    </>
  );
};

export default Home;
