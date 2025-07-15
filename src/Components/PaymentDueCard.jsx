import React from "react";

const PaymentDueCard = () => {
  return (
    <div className="mx-auto p-4 container py-4 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                payment is due in 5 months
              </h2>
              <span className="text-gray-500 text-sm">25-10-2024</span>
            </div>

            <div className="mb-4">
              <div className="text-4xl font-bold text-green-500 mb-2">
                ₦ 1,801,000
              </div>
              <p className="text-gray-600 text-sm">
                Initial loan date: 15-08-2024
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-colors">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDueCard;
