import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Sponsor = () => {
  const { sponsor_list } = useContext(StoreContext);

  return (
    <div className="container flex flex-col bg-white px-10 py-6 w-full">
      <p className="text-lg font-semibold text-gray-800 mb-2">Backed by:</p>
      <div className="flex justify-between items-center flex-wrap ">
        {sponsor_list.map((sponsor, index) => (
          <div className="flex items-center justify-center  h-11" key={index}>
            <img
              className="w-full max-w-20  sm:max-w-36  object-contain grayscale transition duration-300 hover:grayscale-0 "
              src={sponsor.image}
              alt="Sponsor Logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
