import { assets } from "../assets/assets";
import LoanCalculator from "../Components/LoanCalculator";
import Recommended from "../Components/Recommended";

const CreditLimitCard = () => {
  return (
    <>
      <div
        className="flex flex-col gap-4  lg:gap-4 pb-24 pt-8
      mx-auto transition-all duration-200 
      container  w-full  px-[8%] sm:px-[12%] md:px-[5%] xl:px-[10%]
      "
      >
        <div className="container mx-auto mb-8 bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg sm:max-w-[640px] lg:max-w-7xl flex flex-col justify-between border border-gray-200">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold text-gray-900">
              Credit Limit
            </h2>
            <img src={assets.badge1} className="text-gray-400 w-6 h-6" />
          </div>
          <div className="mt-8">
            <p className="text-green-600 text-3xl font-bold">₦ 5,000,000</p>
          </div>
          <div className="flex justify-between items-end">
            <div className=" flex items-center justify-center text-gray-500 text-sm">
              <img src={assets.iconInfo} className="w-4 h-4 mr-2" />
              <span>Complete user verification to increase credit score</span>
            </div>
            <button className="bg-secondary-color hover:bg-yellow-300 text-black font-semibold py-2 px-5 rounded-lg lg:max-w-56 text-sm md:text-xl">
              See Properties
            </button>
          </div>
        </div>

        <div className="container relative mx-auto   bg-faded-secondary shadow-lg rounded-2xl p-6 w-full max-w-lg sm:max-w-[640px] lg:max-w-7xl flex flex-col justify-between border ">
          <div className="absolute top-0 right-0 w-full backdrop-blur-sm text-white h-full items-center justify-center rounded-br-lg px-2 py-1 gap-2 font-semibold flex flex-col">
            {" "}
            <img
              src={assets.badge2}
              alt=""
              className="text-gray-400 w-7 h-7"
            />
            <p className="text-sm text-black">Unlock tier 2</p>
            <button className="text-black w-44 bg-secondary-color p-2 px-7 rounded-lg text-sm font-semibold">
              Unlock
            </button>
          </div>
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold text-gray-900">
              Credit Limit
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-green-600 text-3xl font-bold">₦ 15,000,000</p>
          </div>
          <div className="flex justify-between items-end">
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <img src={assets.infoIcon} className="w-4 h-4 mr-2" />
              <span>Complete user verification to increase credit score</span>
            </div>
            <button className="mt-4 bg-secondary-color hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-lg lg:max-w-56 text-xl">
              See Properties
            </button>
          </div>
        </div>
      </div>
      <LoanCalculator />
      <Recommended />
    </>
  );
};

export default CreditLimitCard;
