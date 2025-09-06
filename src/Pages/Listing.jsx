import React from "react";
import { assets } from "../assets/assets";
import Recommended from "../Components/Recommended";
import State from "../Components/State/State";
import Special from "../Components/Special";

const Listing = () => {
  return (
    <>
      <div className="relative h-[50vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center bg-no-repeat bg-[url('assets/bg-listing.png')] ">
        <div class="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 sm:z-20 ">
          Let’s help you find your new home
        </h1>
        <div className="relative w-full max-w-4xl px-4 ">
          <input
            className="w-full p-4 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            type="text"
            placeholder="Enter Key word, State, Neighborhood or Address"
          />
          <img
            className="absolute right-5 top-4 w-6 h-6 cursor-pointer"
            src={assets.Search}
            alt="Search"
          />
        </div>
      </div>
      <Recommended />
      <State />
      <Special />
    </>
  );
};

export default Listing;
