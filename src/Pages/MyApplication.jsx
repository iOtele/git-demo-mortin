import React from "react";
import Recommended from "../Components/Recommended";

const PropertyApplicationCard = () => {
  return (
    <>
      <div className="mx-auto p-4 container py-4 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex ">
          <div className="md:w-1/3 h-full">
            <div className=" h-48 md:h-full bg-gray-100 p-3">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Property development site"
                className="w-full h-full object-cover py-2"
              />
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Adura Court
                </h2>
                <p className="text-gray-600 mb-3">Songotedo, Lekki, Lagos</p>
                <p className="text-sm text-gray-500 mb-4">
                  Application date: 15-08-2024
                </p>
              </div>
              <button className="text-cyan-400 hover:text-cyan-500 font-medium text-sm">
                View Property
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex  flex-col  gap-2">
                <div className="flex justify-center items-center gap-x-4">
                  <span className="text-sm text-gray-500 block mb-1">
                    Application Status
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">
                  ₦3,500,0000
                </div>
              </div>

              <button className="items-end bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-3 rounded-lg transition-colors">
                View Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recommended />
    </>
  );
};

export default PropertyApplicationCard;
