import React from "react";
import image_8 from "../assets/image-8.png";
import image_9 from "../assets/image-9.png";
import image_10 from "../assets/image-10.png";
import image_11 from "../assets/image-11.png";
import next from "../assets/next-icon.png";

const Section = () => {
  return (
    <div className="container grid sm:grid-cols-3 grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-2 mx-auto  transition-all duration-200 px-[8%] md:px-[5%]  xl:px-[10%] py-4">
      <div className="relative rounded-lg overflow-hidden col-span-2">
        <img
          src={image_8}
          alt="Who are we?"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-3/4 bottom-10 transform -translate-x-1/2 text-white text-3xl font-semibold">
          Who are we?
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image_9}
          alt="Our Mission"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-10 bottom-10 text-white text-3xl font-semibold">
          Our Mission
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image_10}
          alt="Our Vision"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-10 bottom-10 text-white text-3xl font-semibold">
          Our Vision
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image_11}
          alt="Our Values"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-10 bottom-10 text-white text-3xl font-semibold">
          Our Values
        </div>
      </div>
      <div className="bg-yellow-100 p-4 flex flex-col gap-3 items-start rounded-lg">
        <h1 className="text-xl sm:text-3xl  font-bold">
          Buy your first Home with Mortln
        </h1>
        <p className="text-gray-700 text-sm ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        </p>
        <div className="mt-0">
          <img className="w-6" src={next} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Section;
