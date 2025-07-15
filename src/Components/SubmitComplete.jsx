import React from "react";
import { Check } from "lucide-react";

const SubmitComplete = ({ setStep }) => {
  return (
    <div
      className="
     bg-cover bg-center h-[90svh] sm:bg-left  w-full bg-[url('assets/loanbg.png')] 
   "
    >
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 ">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-8 ">
          <Check size={40} strokeWidth={3} className="text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-black mb-4">Submitted</h1>
        <p className="text-center text-gray-400 mb-8 max-w-2xl text-2xl">
          Your information has been submitted and is being reviewed, you will
          get a response from our team shortly
        </p>
        <button
          onClick={() => setStep(1)}
          className="hover:bg-yellow-200 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SubmitComplete;
