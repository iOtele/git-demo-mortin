import React from "react";
import { assets } from "../assets/assets";
import Featured from "../Components/Featured";
import State from "../Components/State/State";
import Special from "../Components/Special";
import LoanCalculator from "../Components/LoanCalculator";
import Recommended from "../Components/Recommended";
import { Link } from "react-router-dom";

const ClientArea = () => {
  return (
    <>
      <div className="bg-secondary-color sm:flex justify-center items-center p-4 w-full hidden ">
        <div className="flex items-center gap-8 max-w-5xl text-lg font-medium">
          <img src={assets.iconInfo} alt="Info" className="w-10" />
          <p>
            You are a few steps away from completely setting up your Mortin
            account
          </p>
          <Link to="/verification">
            <button className="bg-white px-4 py-2 rounded-md">
              Start Verification
            </button>
          </Link>
        </div>
      </div>
      <div className="relative h-[50vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center bg-no-repeat bg-[url('/bgListing.png')]">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
          Let’s help you find your new home
        </h1>
        <div className="relative w-full max-w-4xl px-4">
          <input
            className="w-full p-4 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            type="text"
            placeholder="Enter Key word, State, Neighborhood or Address"
          />
          <img
            className="absolute right-4 top-3 w-6 h-6 cursor-pointer"
            src={assets.searchIcon}
            alt="Search"
          />
        </div>
      </div>
      <Featured />
      <State />
      <Special />
      <LoanCalculator />
      <Recommended />
    </>
  );
};

export default ClientArea;
