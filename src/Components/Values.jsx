import React from 'react'

const Values = () => {
  return (
    <div className="py-12 flex max-sm:flex-col gap-6 justify-between max-sm:gap-4 max-w-[1440px] m-auto px-40 max-sm:px-8">
        <div className="flex gap-6  max-sm:gap-2 max-sm:w-full">
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7] flex flex-col gap-4  items-start max-sm:w-[48%]">
            <img src="fast delivery.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] max-sm:w-[120px]">
              <h2 className="text-xl font-medium max-sm:text-sm">
                Free Shipping
              </h2>
              <p className="text-sm text-[#6C7275] text-wrap max-sm:w-[116px]">
                Order above $200
              </p>
            </div>
          </div>
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7] flex flex-col gap-4 items-start max-sm:w-[48%]">
            <img src="money.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] max-sm:w-[120px]">
              <h2 className="text-xl font-medium max-sm:text-sm">Money-back</h2>
              <p className="text-sm text-[#6C7275] text-wrap max-sm:w-[116px]">
                30 Days Guarantee
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6  max-sm:gap-2 max-sm:w-full">
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7] flex flex-col gap-4 items-start max-sm:w-[48%]">
            <img src="lock 01.png" alt="" />
            <div className="flex flex-col gap-2  w-[198px] max-sm:w-[120px]">
              <h2 className="text-xl font-medium max-sm:text-sm">
                Secure Payments
              </h2>
              <p className="text-sm text-[#6C7275] max-sm:text-wrap max-sm:w-[116px]">
                Secured by Stripe
              </p>
            </div>
          </div>
          <div className="py-12 px-8 max-sm:py-8 max-sm:px-4 bg-[#F3F5F7] flex flex-col gap-4 items-start max-sm:w-[48%]">
            <img src="call.png" alt="" />
            <div className="flex flex-col gap-2 w-[198px] max-sm:w-[120px]">
              <h2 className="text-xl font-medium max-sm:text-sm">
                24/7 Support
              </h2>
              <p className="text-sm text-[#6C7275] max-sm:text-wrap max-sm:w-[116px]">
                Phone and Email Support
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Values