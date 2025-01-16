import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1440px] m-auto px-40 max-sm:px-8">
    <img
        src="HeroBg.jpg"
        className="flex-wrap max-sm:h-[304px] w-full object-cover"
        alt=""
      />
      <div className="flex py-[43px] gap-8 items-center max-sm:flex-col max-sm:gap-4">
        <h2 className="text-7xl font-medium max-sm:text-[40px] max-w-[643px]">
          Simply Unique/ Simply Better.
        </h2>
        <p className="font-semibold max-sm:text-sm">
          3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.{" "}
        </p>
      </div>
      </div>
  )
}

export default Hero