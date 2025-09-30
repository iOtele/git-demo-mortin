import React, { useState, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const LoanSummaryDashboard = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const { paymentHistory } = useContext(StoreContext);

  return (
    <div className="mx-auto p-4 container py-4 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
      {/* Navigation Tabs */}
      <div className="flex gap-x-5 mb-6">
        <div className="flex md:flex-col border-gray-200">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-4 py-2 font-medium text-sm border-b-2  transition-colors ${
              activeTab === "ongoing"
                ? "border-black text-black"
                : "border-gray-200 text-gray-500 hover:text-gray-700"
            }`}
          >
            Ongoing Loan
          </button>
          <button
            onClick={() => setActiveTab("previous")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "previous"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Previous Loans
          </button>
        </div>
        <div className="flex-1 border-b border-gray-200">
          <div className="mb-6">
            {/* Loan Summary Card */}
            <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 p-6 ">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Loan Summary
                  </h2>
                  <p className="text-cyan-400 text-sm font-medium">
                    ID:234535654
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Ongoing
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ₦ 2,376,000
                  </div>
                  <div className="text-sm text-gray-500">
                    Total Amount Loaned
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    12.33%
                  </div>
                  <div className="text-sm text-gray-500">Interest Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ₦ 575,000
                  </div>
                  <div className="text-sm text-gray-500">Total Amount Paid</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ₦ 1,801,000
                  </div>
                  <div className="text-sm text-gray-500">
                    Outstanding Balance
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {/* <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full"
                style={{ width: "30.2%" }}
              ></div>
            </div> */}
            </div>
            <div className="bg-yellow-400  h-8 rounded-b-lg"></div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                Payment History
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount Paid
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      New Outstanding Balance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paymentHistory.map((payment, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {payment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.newBalance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Future Payment Date */}
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <div className="text-sm font-medium text-gray-700">Dec 25th 2024</div>
      </div>
    </div>
  );
};

export default LoanSummaryDashboard;
