import React from "react";

const StateCard = ({ image, title, description }) => {
  return (
    <div className="relative cursor-pointer rounded-lg overflow-hidden">
      <img className="w-full h-auto object-cover" src={image} alt={title} />
      <div className="absolute bottom-4 left-0 right-0 px-6 py-4 text-white md:pl-8 ">
        <h1 className="text-3xl font-light mb-1">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default StateCard;
