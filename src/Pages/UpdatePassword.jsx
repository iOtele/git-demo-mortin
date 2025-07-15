import React, { useState } from "react";

const UpdatePasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLettersAndNumbers: false,
    hasSpecialChar: false,
    hasMixedCase: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate password requirements for new password
    if (name === "newPassword") {
      setPasswordValidation({
        minLength: value.length >= 8,
        hasLettersAndNumbers: /[a-zA-Z]/.test(value) && /[0-9]/.test(value),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        hasMixedCase: /[a-z]/.test(value) && /[A-Z]/.test(value),
      });
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Password update submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Update Password
        </h1>

        <div className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-3">
              Old password
            </label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
              placeholder="Enter old password"
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-3">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Create New password"
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
            />

            {/* Password Requirements */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div
                className={`flex items-center ${
                  passwordValidation.minLength
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                <span className="mr-2">
                  {passwordValidation.minLength ? "✓" : "•"}
                </span>
                At least 8 characters
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasLettersAndNumbers
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                <span className="mr-2">
                  {passwordValidation.hasLettersAndNumbers ? "✓" : "•"}
                </span>
                Mix of letters and numbers
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasSpecialChar
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                <span className="mr-2">
                  {passwordValidation.hasSpecialChar ? "✓" : "•"}
                </span>
                At least 1 special character
              </div>
              <div
                className={`flex items-center ${
                  passwordValidation.hasMixedCase
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                <span className="mr-2">
                  {passwordValidation.hasMixedCase ? "✓" : "•"}
                </span>
                At least 1 lowercase letter and 1 uppercase letter
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-3">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Retype password"
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
            />
            {formData.confirmPassword &&
              formData.newPassword !== formData.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">
                  Passwords do not match
                </p>
              )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-lg mt-8"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
