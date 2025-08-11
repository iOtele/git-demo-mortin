import React, { useState } from "react";

const LoanApplicationModal = () => {
  const [selectedDuration, setSelectedDuration] = useState("6 Months");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    console.log("Modal closed");
  };

  const handleSubmit = () => {
    console.log("Application submitted");
  };

  const durations = ["6 Months", "12 Months", "18 Months", "24 Months"];

  const paymentBreakdown = [
    { date: "Jul 29th 2024", amount: "₦ 303,588" },
    { date: "Aug 25th 2024", amount: "₦ 302,323" },
    { date: "Sep 27th 2024", amount: "₦ 298,333" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Loan Application</h1>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Property Info */}
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/api/placeholder/80/80"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                South Lake Villa
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Igbo Efon, Lekki, Lagos
              </div>
              <div className="text-2xl font-bold text-green-600">
                ₦15,000,0000
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Interest Rate:
            </h3>
            <p className="text-gray-600 text-lg">12.33%</p>
          </div>

          {/* Loan Duration */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Select Loan Duration
            </h3>
            <div className="relative">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg appearance-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Total Amount Due */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Total Amount Due:
            </h3>
            <p className="text-2xl font-bold text-green-600">16,356,400</p>
          </div>

          {/* Number of Payments */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No of Payments:
            </h3>
            <p className="text-gray-600 text-lg">6</p>
          </div>

          {/* Repayment Breakdown */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Repayment Breakdown:
            </h3>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 grid grid-cols-2 gap-4 p-3 text-sm text-gray-600 font-medium">
                <div>Repayment Dates</div>
                <div>Amount Due</div>
              </div>

              {/* Table Rows */}
              {paymentBreakdown.map((payment, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 p-3 border-t border-gray-200"
                >
                  <div className="text-gray-900">{payment.date}</div>
                  <div className="text-gray-900">{payment.amount}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg mt-8"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoanApplicationModal;
