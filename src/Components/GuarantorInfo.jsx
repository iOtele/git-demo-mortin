import React from "react";

const GuarantorInfo = ({
  formData,
  errors,
  handleChange,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            type="text"
            name="guarantorFirstName"
            value={formData.guarantorFirstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.guarantorFirstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Raymond"
          />
          {errors.guarantorFirstName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.guarantorFirstName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            type="text"
            name="guarantorLastName"
            value={formData.guarantorLastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.guarantorLastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Brown"
          />
          {errors.guarantorLastName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.guarantorLastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            name="guarantorEmail"
            value={formData.guarantorEmail}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.guarantorEmail ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="guarantor@example.com"
          />
          {errors.guarantorEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.guarantorEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="+234"
              className={`max-w-14 px-1 py-2 border rounded-l-md border-gray-300 focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400`}
            />
            <input
              type="tel"
              name="guarantorPhone"
              value={formData.guarantorPhone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
                errors.guarantorPhone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+234 802393****"
            />{" "}
          </div>
          {errors.guarantorPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.guarantorPhone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of birth
          </label>
          <input
            type="date"
            name="guarantorDOB"
            value={formData.guarantorDOB}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.guarantorDOB ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.guarantorDOB && (
            <p className="mt-1 text-sm text-red-600">{errors.guarantorDOB}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            name="guarantorGender"
            value={formData.guarantorGender}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.guarantorGender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.guarantorGender && (
            <p className="mt-1 text-sm text-red-600">
              {errors.guarantorGender}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Relationship to guarantor
          </label>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.relationship ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select</option>
            <option value="Sibling">Sibling</option>
            <option value="Parent">Parent</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
            <option value="Other">Other</option>
          </select>
          {errors.relationship && (
            <p className="mt-1 text-sm text-red-600">{errors.relationship}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Guarantor address
        </label>
        <textarea
          name="guarantorAddress"
          value={formData.guarantorAddress}
          onChange={handleChange}
          rows="3"
          className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
            errors.guarantorAddress ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Street no, city, state"
        ></textarea>
        {errors.guarantorAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.guarantorAddress}</p>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Employment
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-200"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default GuarantorInfo;
