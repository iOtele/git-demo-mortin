import React, { useState } from "react";

const Calculator = () => {
  const [propertyPrice, setPropertyPrice] = useState("0"); 
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); 
  const [interestRate, setInterestRate] = useState(5); 
  const [loanLength, setLoanLength] = useState(12); 
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [error, setError] = useState(""); 

  const calculateMortgage = () => {
    setError(""); 
    // setPropertyPrice("");
    // Validate inputs
    if (!propertyPrice || !interestRate || !loanLength || !downPaymentPercent) {
      setError("All fields are required.");
      return;
    }

    const downPaymentAmount = (downPaymentPercent / 100) * propertyPrice;
    const loanAmount = propertyPrice - downPaymentAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanLength;

   
    if (loanAmount <= 0) {
      setError("Loan amount must be greater than 0.");

      return;
    }

    // Calculate monthly payment using the standard formula
    const monthlyPaymentValue =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
  };

  return (
    <div
      className="
     bg-cover bg-center sm:bg-left  w-full bg-[url('assets/loanbg.png')]
   "
    >
      <div className="container mx-auto  w-full flex flex-col gap-4  lg:gap-4 pb-24 pt-8  transition-all  justify-between  duration-200 px-[8%] md:px-[5%]  xl:px-[10%] py-4 ">
        <h1
          className=" font-normal text-center sm:text-left  mt-10 
          
           text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-900 mb-4"
        >
          Mortgage Calculator
        </h1>
        <p className="text-lg sm:text-xl text-#261E00-400 text-center sm:text-left mb-8 w-full sm:max-w-3xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between overflow-hidden">
            <div>
              <label className="block text-sm mb-4">Property price</label>
              <input
                className="border border-gray-500  rounded-md h-12 px-2  w-full  max-w-md    focus:outline-none"
                type="text"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                placeholder="Enter property price"
              />
            </div>

            <div className="flex flex-col items-left gap-4">
              <label className="text-lg font-semibold">Monthly Payment</label>
              <label className="text-xl font-bold text-#000000-600">
                ₦{Number(monthlyPayment).toLocaleString()}
              </label>
            </div>
          </div>
          <div className="block py-10 ">
            <input
              className="w-full  "
              type="range"
              min="0"
              max="10000000"
              step="5000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between items-center mt-10">
          <label className="flex flex-col max-w-[120px] border border-gray-500 bg-white rounded-md p-1 focus:outline-none">
            Down Payment
            <select
              className="font-semibold"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            >
              <option value={10}>10%</option>
              <option value={15}>15%</option>
              <option value={20}>20%</option>
              <option value={25}>25%</option>
            </select>
          </label>
          <div className="flex flex-col ">
            <label className="font-sm ">Interest Rate (%)</label>
            <input
              className="bg-transparent max-w-14 text-center font-bold text-2xl w-full"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="Enter interest rate"
            />
          </div>
          <div className="flex flex-col max-w-[120px] border border-gray-500 bg-white rounded-md p-1 focus:outline-none">
            <label>Loan length</label>
            <select
              value={loanLength}
              onChange={(e) => setLoanLength(Number(e.target.value))}
            >
              <option value={12}>12 months</option>
              <option value={24}>24 months</option>
              <option value={36}>36 months</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-secondary-color rounded-md p-4  font-bold hover:bg-yellow-300 transition "
              onClick={calculateMortgage}
            >
              See properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
