import React, { useState } from "react";

export default function PasswordResetForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Reset Password
          </h1>
          <p className="text-gray-600 text-lg">
            Please enter the email address to your MortIn account
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-900 font-medium mb-3 text-lg"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
