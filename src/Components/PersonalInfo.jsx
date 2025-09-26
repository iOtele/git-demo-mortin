import React from "react";

const PersonalInfo = ({ formData, errors, handleChange, nextStep }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.firstName
                ? "border-red-500"
                : "border-gray-300 bg-[#F0F0F0]"
            }`}
            placeholder="First name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Brown"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border bg-[#F0F0F0] rounded-md focus:ring-yellow-400  focus:border-yellow-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="raymond@gmail.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <div className="flex items-center ">
            <input
              type="text"
              value={"+234"}
              placeholder="+234"
              className={`max-w-14 px-1 py-2 border rounded-l-md border-gray-300 focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400`}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-r-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="phone number"
            />{" "}
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.dob ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dob && (
            <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marital status
          </label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.maritalStatus ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select...</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          {errors.maritalStatus && (
            <p className="mt-1 text-sm text-red-600">{errors.maritalStatus}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            National identification number (NIN)
          </label>
          <input
            type="text"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
            maxLength={11}
            className={`w-full px-4 py-2 border bg-[#F0F0F0] rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.nin ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="234523421"
          />
          {errors.nin && (
            <p className="mt-1 text-sm text-red-600">{errors.nin}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank verification Number (BVN)
          </label>
          <input
            type="text"
            name="bvn"
            value={formData.bvn}
            onChange={handleChange}
            maxLength={11}
            className={`w-full px-4 py-2 border bg-[#F0F0F0] rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
              errors.bvn ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="234523421"
          />
          {errors.bvn && (
            <p className="mt-1 text-sm text-red-600">{errors.bvn}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Residential address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          className={`w-full px-4 py-2 border rounded-md bg-[#F0F0F0] focus:ring-yellow-400 focus:border-yellow-400 ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Street no, city, state"
        ></textarea>
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-200 transition flex items-center"
        >
          Save and Continue <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
