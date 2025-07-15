import React from "react";
const Title = ({ image, title }) => {
  return (
    <div className="font-semibold text-sm  mb-5 sm:px-4 ">
      <h2 className="text-2xl sm:text-3xl lg:text-3.5xl">{title}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Title;
