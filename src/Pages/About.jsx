import React from "react";
import Sponsor from "../Components/Sponsor";
import Team from "../Components/Team";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex flex-col w-full h-[90svh] bg-cover bg-center text-white bg-[url(assets/bg-about.png)]">
          <div className="absolute bottom-[10%] md:top-[28%] md:right-[8%] md:w-[35%] px-5  ">
            <h1 className="font-poppins text-3xl md:text-5xl text-left sm:font-medium">
              We Grant Wishes
            </h1>
            <p className="text-xl md:text-2xl mt-2 font-light">
              Lorem ipIt is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like .
            </p>
          </div>
        </div>
        <Sponsor />

        <div
          className="flex h-[80svh] flex-col items-center justify-center  bg-cover bg-center text-black py-12 sm:px-24 px-4
         bg-[url(assets/bg-getloan.png)]"
        >
          <div className="flex flex-col gap-6 max-w-5xl  ">
            <div className="flex items-start flex-col md:flex-row gap-x-7 md:gap-0">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-medium  ">
                  Our Mission
                </h1>
              </div>
              <div className="flex-1 ">
                <p className="text-xl md:text-2xl mt-2 font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like
                </p>
              </div>
            </div>

            <div className="flex items-start flex-col md:flex-row gap-7 md:gap-0">
              <div className="flex-1 ">
                <h1 className="text-3xl md:text-4xl font-medium ">
                  Our Vision
                </h1>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl mt-2 font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-screen text-white bg-cover bg-center bg-[url(assets/image-12.png)]">
          <div className="absolute top-sm:[40%] sm:left-[10%] sm:w-[31%]  bottom-[30%]  px-5 ">
            <h1 className="text-3xl font-medium">Our Values</h1>
            <p className="text-xl md:text-2xl mt-2 font-light">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like
            </p>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default About;
