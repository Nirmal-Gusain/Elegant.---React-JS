import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col px-40 max-sm:px-8 pt-4 gap-10 max-sm:gap-8">
      <p className="flex items-center text-slate-600 font-medium  gap-2">
        Home <FaAngleRight size={14} />{" "}
        <span className="text-black">Contact Us</span>
      </p>
      <h2 className="max-w-[834px] text-[54px] max-sm:text-center max-sm:text-[28px] font-medium font-[poppins] leading-[58px] max-sm:leading-[34px] tracking-tight max-sm:tracking-normal">
        We believe in sustainable decor. We’re passionate about life at home.
      </h2>
      <p className="max-w-[834px] max-sm:text-center">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
      <div className="flex max-sm:flex-col ">
        <img
          src="BannerImg.jpg"
          className="max-w-[560px] max-h-[413px]"
          alt=""
        />
        <div className="bg-[#F3F5F7] w-full pl-[72px] max-sm:pl-4 max-sm:py-4 flex justify-center flex-col gap-6">
          <h2 className="font-medium text-[40px] max-sm:text-3xl">About Us</h2>
          <p className="text-[#121212] max-w-[452px] max-sm:text-sm">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <NavLink
            to="/shop"
            className="flex items-center gap-1 font-medium border-b-2 border-b-black w-fit max-sm:text-sm"
          >
            Shop Now <FaArrowRight />
          </NavLink>
        </div>
      </div>
      <h2 className="text-[40px] max-sm:text-3xl font-medium text-center">
        Contact Us
      </h2>
      <div className="flex justify-between gap-6 max-sm:flex-col">
        <div className="px-8 py-4 bg-[#F3F5F7] w-full flex items-center flex-col gap-4">
          <AiOutlineShop size={30} />
          <div className="flex flex-col gap-2 text-center">
            <span className="font-bold text-[#6C7275]">ADDRESS</span>
            <p className="font-semibold text-center">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
        </div>
        <div className="px-8 py-4 bg-[#F3F5F7] w-full flex items-center flex-col gap-4">
          <FiPhoneCall size={30} />
          <div className="flex flex-col gap-2 text-center">
            <span className="font-bold text-[#6C7275]">CONTACT US</span>
            <p className="font-semibold text-center">+84 234 567 890</p>
          </div>
        </div>
        <div className="px-8 py-4 bg-[#F3F5F7] w-full flex items-center flex-col gap-4">
          <MdOutlineEmail size={30} />
          <div className="flex flex-col gap-2 text-center">
            <span className="font-bold text-[#6C7275]">EMAIL</span>
            <p className="font-semibold text-center">hello@3legant.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full items-center justify-center ">
        <div className="bg-white  w-full pr-5 md:w-1/2 mb-6 md:mb-0">
          <form className="gap-4 flex flex-col ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-fit bg-black text-white py-2 px-10 rounded-lg "
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.6363238959109!2d77.99615436906764!3d30.294030934542718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b0ed7332cd1%3A0xd228ad28305973a9!2sBrillica%20Services!5e1!3m2!1sen!2sin!4v1737294922452!5m2!1sen!2sin" 
            className="w-full h-[357px]"
          ></iframe>
        </div>
      </div>

      <div className="py-12 flex max-sm:flex-col gap-6 justify-between max-sm:gap-4 ">
        <div className="flex gap-6  max-sm:gap-5 max-sm:w-full">
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
        <div className="flex gap-6  max-sm:gap-5 max-sm:w-full">
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
    </div>
  );
};

export default Contact;
