import React from "react";
import { assets } from "../assets/assets";

const GetLoan = () => {
  return (
    <div className="w-full  mb-20 flex flex-col items-center justify-center bg-cover bg-center text-black relative bg-[url('/bgLoan.png')]">
      <div className="text-center max-w-2xl sm:max-w-[1058px] px-4 pt-8   mt-20">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Get a Home Loan in 3 Easy Steps
        </h1>
        <p className="text-lg text-gray-700">
          It is a long established fact that a reader will be distracted by the
          readable content, making it look like.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="flex flex-col items-center text-center w-72 p-4">
          <img
            className="w-16 mb-2 sm:h-28"
            src={assets.iconHead}
            alt="Create Account"
          />
          <div className="text-center h-auto md:h-auto ">
            <h3 className="text-2xl font-medium ">Create a Mortln Account</h3>
            <p className="text-gray-700 mt-2">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
          <img
            className="w-16 mb-2 sm:h-28"
            src={assets.iconValid}
            alt="Verify Identity"
          />
          <div className="text-center h-auto md:h-auto ">
            <h3 className="text-2xl  font-medium">
              Verify Identity & Employment Status
            </h3>
            <p className="text-gray-700 mt-2">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 p-4">
          <img
            className="w-16 mb-2 sm:h-28"
            src={assets.iconHouse}
            alt="Find Home"
          />
          <div className="text-center h-auto md:h-auto ">
            <h3 className="text-2xl font-medium px-8">Find Your Dream Home</h3>
            <p className="text-gray-700 mt-2">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>

      <button className="mt-14 sm:mt-20 px-8 py-3 text-lg font-medium text-black bg-yellow-400 rounded-lg shadow hover:bg-yellow-500 transition">
        Get Started
      </button>
    </div>
  );
};

export default GetLoan;
