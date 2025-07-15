// ApplicationSubmitted.jsx
import React from "react";
import { Check } from "lucide-react";

const ApplicationSubmitted = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-6">
          Application Submitted
        </h1>

        <div className="relative w-32 h-32 mx-auto mb-6 ">
          <div className="absolute inset-[20%] rounded-full bg-green-200"></div>
          <div className="absolute inset-[30%] rounded-full bg-green-500 flex items-center justify-center">
            <Check className="text-white" size={30} strokeWidth={3} />
          </div>
        </div>

        <p className="text-gray-500 text-sm md:text-2xl mb-8">
          Your application has been submitted and is being possessed
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg w-full max-w-xs mx-auto transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
