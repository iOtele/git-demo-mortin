import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" font-Poppins relative h-[90vh] md:h-[90vh] bg-cover bg-right text-white  w-full  bg-no-repeat bg-gray-600 bg-[url('/bgHome.png')]">
      <div className=" absolute sm:right-[8%] sm:top-[25%] items-center justify-between bg-yellow-50 bg-opacity-80 border border-gray-300 rounded-[15px] pl-2 pr-0 w-[110px] sm:min-w-64 h-[30px] text-gray-700 text-sm  md:text-lg font-medium max-lg:hidden flex">
        <p className="text-sm">Super Easy Payment Plans</p>
        <img
          src={assets.installmentIcon}
          alt=""
          className="w-[30px]  h-[30px] md:w-[35px] md:h-[50px] object-contain"
        />
      </div>

      <div className="absolute bottom-[165px] right-[22%] md:right-[20%] flex items-center gap-2 bg-yellow-50 bg-opacity-80 border border-gray-300 rounded-[15px] p-1 pr-4 text-gray-700 h-[30px] text-sm md:text-lg font-medium max-lg:hidden  ">
        <img
          src={assets.checkMark}
          alt=""
          className="w-[25px] h-[25px] md:w-[30px] md:h-[25px] object-cover"
        />
        <p className="text-sm"> Fast Home Loan Approval</p>
      </div>

      <div className="absolute  sm:px-0 top-[40%] left-10 text-center sm:text-left  sm:left-[90px] md:left-[12%] xl:text-left md:top-[140px]  ">
        <h1 className="text-3xl md:text-5xl font-semibold leading-[35px] sm:text-4xl sm:leading-[45px] md:leading-[55px] ">
          Buy Your Dream Home <br /> Pay in Installments.
        </h1>
        <p className="text-secondary-color text-l md:text-xl leading-[20px] md:leading-[24px] mt-4 md:w-[450px] ">
          Lorem ipIt is a long established fact that a reader will be distracted
          by the readable content of a page
        </p>

        <Link to="/listing">
          <button className="mt-20 bg-secondary-color hover:bg-secondary-color text-gray-800 font-bold rounded-[10px] w-[137px] sm:w-[220px] h-[36px] sm:h-[60px] text-sm md:text-xl">
            See Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
