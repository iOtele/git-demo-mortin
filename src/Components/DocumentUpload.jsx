import React from "react";
import { assets } from "../assets/assets";

const DocumentUpload = ({
  formData,
  errors,
  handleFileChange,
  handleSubmit,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="border border-gray-200 rounded-lg p-5 bg-yellow-50">
          <div className="flex justify-between items-center">
            <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <img className="w-8" src={assets.upIcon} alt="" />
            </div>

            <div>
              <h3 className="font-medium text-gray-800">
                6 months bank statement
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
            <div>
              <label className="px-4 py-2 bg-red-400 text-black rounded-md cursor-pointer hover:bg-red-300">
                {formData.bankStatement ? "Change File" : "Upload File"}
                <input
                  type="file"
                  name="bankStatement"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </div>
          </div>
          {formData.bankStatement && (
            <div className="mt-3 text-sm text-green-600 flex items-center">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {formData.bankStatement.name}
            </div>
          )}
          {errors.bankStatement && (
            <p className="mt-1 text-sm text-red-600">{errors.bankStatement}</p>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg p-5 bg-yellow-50">
          <div className="flex justify-between items-center">
            <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <img className="w-8" src={assets.upIcon} alt="" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Employment ID</h3>
              <p className="text-sm text-gray-500 mt-1">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
            <div>
              <label className="px-4 py-2 bg-green-400 text-black rounded-md cursor-pointer hover:bg-green-300">
                {formData.employmentId ? "Change File" : "Upload File"}
                <input
                  type="file"
                  name="employmentId"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </div>
          </div>
          {formData.employmentId && (
            <div className="mt-3 text-sm text-green-600 flex items-center">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {formData.employmentId.name}
            </div>
          )}
          {errors.employmentId && (
            <p className="mt-1 text-sm text-red-600">{errors.employmentId}</p>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg p-5 bg-yellow-50">
          <div className="flex justify-between items-center">
            <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <img className="w-8" src={assets.upIcon} alt="" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Government ID</h3>
              <p className="text-sm text-gray-500 mt-1">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
            <div>
              <label className="px-4 py-2 bg-green-400 text-black  rounded-md cursor-pointer hover:bg-green-200">
                {formData.governmentId ? "Change File" : "Upload File"}
                <input
                  type="file"
                  name="governmentId"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </div>
          </div>
          {formData.governmentId && (
            <div className="mt-3 text-sm text-green-600 flex items-center">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {formData.governmentId.name}
            </div>
          )}
          {errors.governmentId && (
            <p className="mt-1 text-sm text-red-600">{errors.governmentId}</p>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg p-5 bg-yellow-50">
          <div className="flex justify-between items-center">
            <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <img className="w-8" src={assets.upIcon} alt="" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Utility Bill (Electricity Bill)
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
            <div>
              <label className="px-4 py-2 bg-red-400 text-black rounded-md cursor-pointer hover:bg-red-300">
                {formData.utilityBill ? "Change File" : "Upload File"}
                <input
                  type="file"
                  name="utilityBill"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
            </div>
          </div>
          {formData.utilityBill && (
            <div className="mt-3 text-sm text-green-600 flex items-center">
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {formData.utilityBill.name}
            </div>
          )}
          {errors.utilityBill && (
            <p className="mt-1 text-sm text-red-600">{errors.utilityBill}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Guarantor
        </button>{" "}
        <button
          onClick={() => {
            handleSubmit();
            nextStep();
          }}
          className="px-6 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-200 transition flex items-center"
        >
          Submit Verification
          <svg
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DocumentUpload;
