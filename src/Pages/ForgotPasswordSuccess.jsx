import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordSuccess = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
   
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 ">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md w-full text-center      ">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Successful</h1>

        <div className="mb-8">
          <div className="relative inline-block">
            {/* Outer light green circle */}
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
              {/* Middle green circle */}
              <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center">
                {/* Inner dark green circle with checkmark */}
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          The link to reset your password has been sent to your email address
        </p>

        <button
          onClick={handleContinue}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default ForgotPasswordSuccess;
