import React from "react";

const EmploymentInfo = ({
  formData,
  errors,
  handleChange,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>

          <div>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
                errors.employmentType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select...</option>
              <option value="Full Time ">Full-Time</option>
              <option value="Part Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
            {errors.employmentType && (
              <p className="mt-1 text-sm text-red-600">
                {errors.employmentType}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sector
          </label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.sector ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select...</option>
            <option value="Health care">Health care</option>
            <option value="Education">Education</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Manufacturing">Manufacturing</option>
          </select>
          {errors.sector && (
            <p className="mt-1 text-sm text-red-600">{errors.sector}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Salary (NGN)
          </label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.salary ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="234523421"
          />
          {errors.salary && (
            <p className="mt-1 text-sm text-red-600">{errors.salary}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.role ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Head Nurse"
          />
          {errors.role && (
            <p className="mt-1 text-sm text-red-600">{errors.role}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Email
          </label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.companyEmail ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="company@example.com"
          />
          {errors.companyEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.companyEmail}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select...</option>
            {STATES.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
            {/* <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Kano">Kano</option>
            <option value="Oyo">Oyo</option>
            <option value="Rivers">Rivers</option> */}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Local Government
          </label>
          <select
            name="lga"
            value={formData.lga}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.lga ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select...</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Agege">Agege</option>
            <option value="Oshodi">Oshodi</option>
            <option value="Apapa<">Apapa</option>
          </select>
          {errors.lga && (
            <p className="mt-1 text-sm text-red-600">{errors.lga}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
            errors.companyName ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Company name"
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company address
        </label>
        <textarea
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
          rows="2"
          className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
            errors.companyAddress ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Company Address"
        ></textarea>
        {errors.companyAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.companyAddress}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employer/Manager Name
          </label>
          <input
            type="text"
            name="employerName"
            value={formData.employerName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.employerName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Employer Name"
          />
          {errors.employerName && (
            <p className="mt-1 text-sm text-red-600">{errors.employerName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employer/Manager Phone Number
          </label>
          <input
            type="tel"
            name="employerPhone"
            value={formData.employerPhone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-400 bg-[#F0F0F0] focus:border-yellow-400 ${
              errors.employerPhone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Employer Phone"
          />
          {errors.employerPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.employerPhone}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Personal
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

export default EmploymentInfo;
