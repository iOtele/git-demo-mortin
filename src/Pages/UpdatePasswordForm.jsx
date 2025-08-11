import React, { useState } from "react";

const UpdatePasswordForm = ({ isOpen, onClose }) => {
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

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
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

  const togglePasswordVisibility = (fieldName) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Password update submitted:", formData);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // onClose();
    }
  };

  const EyeIcon = ({ isVisible }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-500"
    >
      {isVisible ? (
        // Eye open (visible)
        <>
          <path
            d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        // Eye closed (hidden)
        <>
          <path
            d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.89 1 12.5A13.16 13.16 0 0 1 5.06 6.06L17.94 17.94Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.9 4.24A9.12 9.12 0 0 1 12 4C17 4 21.27 7.11 23 11.5A13.16 13.16 0 0 1 19.38 16.38"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="1"
            y1="1"
            x2="23"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Update Password</h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-3">
              Old password
            </label>
            <div className="relative">
              <input
                type={showPasswords.oldPassword ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                placeholder="Enter old password"
                className="w-full px-4 py-4 pr-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("oldPassword")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-700 focus:outline-none"
              >
                <EyeIcon isVisible={showPasswords.oldPassword} />
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-3">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.newPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Create New password"
                className="w-full px-4 py-4 pr-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-700 focus:outline-none"
              >
                <EyeIcon isVisible={showPasswords.newPassword} />
              </button>
            </div>

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
                  {passwordValidation.minLength ? "✔️" : "✖️"}
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
                  {passwordValidation.hasLettersAndNumbers ? "✔️" : "✖️"}
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
                  {passwordValidation.hasSpecialChar ? "✔️" : "✖️"}
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
                  {passwordValidation.hasMixedCase ? "✔️" : "✖️"}
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
            <div className="relative">
              <input
                type={showPasswords.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Retype password"
                className="w-full px-4 py-4 pr-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-700 focus:outline-none"
              >
                <EyeIcon isVisible={showPasswords.confirmPassword} />
              </button>
            </div>
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

// import React, { useState } from "react";

// const UpdatePasswordForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [passwordValidation, setPasswordValidation] = useState({
//     minLength: false,
//     hasLettersAndNumbers: false,
//     hasSpecialChar: false,
//     hasMixedCase: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Validate password requirements for new password
//     if (name === "newPassword") {
//       setPasswordValidation({
//         minLength: value.length >= 8,
//         hasLettersAndNumbers: /[a-zA-Z]/.test(value) && /[0-9]/.test(value),
//         hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
//         hasMixedCase: /[a-z]/.test(value) && /[A-Z]/.test(value),
//       });
//     }
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log("Password update submitted:", formData);
//     onClose();
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full">
//         {/* Title */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Update Password</h1>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//           >
//             ×
//           </button>
//         </div>

//         <div className="space-y-6">
//           {/* Old Password */}
//           <div>
//             <label className="block text-lg font-medium text-gray-900 mb-3">
//               Old password
//             </label>
//             <input
//               type="password"
//               name="oldPassword"
//               value={formData.oldPassword}
//               onChange={handleInputChange}
//               placeholder="Enter old password"
//               className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
//             />
//           </div>

//           {/* New Password */}
//           <div>
//             <label className="block text-lg font-medium text-gray-900 mb-3">
//               New Password
//             </label>
//             <input
//               type="password"
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//               placeholder="Create New password"
//               className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
//             />

//             {/* Password Requirements */}
//             <div className="mt-4 space-y-2 text-sm text-gray-600">
//               <div
//                 className={`flex items-center ${
//                   passwordValidation.minLength
//                     ? "text-green-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <span className="mr-2">
//                   {passwordValidation.minLength ? "✔️" : "✖️"}
//                 </span>
//                 At least 8 characters
//               </div>
//               <div
//                 className={`flex items-center ${
//                   passwordValidation.hasLettersAndNumbers
//                     ? "text-green-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <span className="mr-2">
//                   {passwordValidation.hasLettersAndNumbers ? "✓" : "✖️"}
//                 </span>
//                 Mix of letters and numbers
//               </div>
//               <div
//                 className={`flex items-center ${
//                   passwordValidation.hasSpecialChar
//                     ? "text-green-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <span className="mr-2">
//                   {passwordValidation.hasSpecialChar ? "✓" : "•"}
//                 </span>
//                 At least 1 special character
//               </div>
//               <div
//                 className={`flex items-center ${
//                   passwordValidation.hasMixedCase
//                     ? "text-green-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <span className="mr-2">
//                   {passwordValidation.hasMixedCase ? "✓" : "•"}
//                 </span>
//                 At least 1 lowercase letter and 1 uppercase letter
//               </div>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-lg font-medium text-gray-900 mb-3">
//               Confirm password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               placeholder="Retype password"
//               className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500"
//             />
//             {formData.confirmPassword &&
//               formData.newPassword !== formData.confirmPassword && (
//                 <p className="mt-2 text-sm text-red-600">
//                   Passwords do not match
//                 </p>
//               )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 text-lg mt-8"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdatePasswordForm;
