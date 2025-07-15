import React from "react";
import Title from "./Title";

export const Description = () => {
  return (
    <div className="container flex flex-col mx-auto max-w-[80%]
    w-full  text-black 
    
    ">
      <Title title="Description"/>
      <div className="flex flex-col items-center justify-center p-5 pb-12 mx-auto">
        <p className="text-gray-700 text-base ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Description;
