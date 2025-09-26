import React, { useState, useContext, useEffect } from "react";
import PersonalInfo from "../Components/PersonalInfo";
import EmploymentInfo from "../Components/EmploymentInfo";
import GuarantorInfo from "../Components/GuarantorInfo";
import DocumentUpload from "../Components/DocumentUpload";
import SubmitComplete from "../Components/SubmitComplete";
import { StoreContext } from "../Context/StoreContext";

const ProgressRing = ({ step, currentStep, label }) => {
  const isCompleted = currentStep > step;
  const isActive = currentStep === step;

  return (
    <div className="flex flex-col items-center ">
      <div
        className={`
        w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium bg-white z-20
        ${
          isCompleted
            ? " border-4 border-yellow-400 text-white"
            : isActive
            ? "border-4 border-yellow-400 text-white"
            : "border-4 border-gray-300 text-gray-400"
        }
      `}
      >
        {isCompleted ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <span
        className={`mt-2 text-xs font-medium text-center leading-tight max-w-16 ${
          isActive || isCompleted ? "text-yellow-600" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { step: 1, label: "Personal Info" },
    { step: 2, label: "Guarantor info" },
    { step: 3, label: "Employment info" },
    { step: 4, label: "Documents Upload" },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div
          className="absolute top-4 z-10 bg-yellow-200 h-1 rounded-full"
          style={{
            left: "16px", // half of ring width
            right: "16px", // half of ring width
          }}
        >
          <div
            className="h-full bg-yellow-400 transition-all duration-300 ease-in-out"
            style={{
              width: `calc(${
                ((currentStep - 1) / (steps.length - 1)) * 100
              }% )`,
              height: "100%",
            }}
          />
        </div>

        {steps.map((stepData) => (
          <ProgressRing
            key={stepData.step}
            step={stepData.step}
            currentStep={currentStep}
            label={stepData.label}
          />
        ))}
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const {
    submitCompleteForm,
    submitLoading,
    authError,
    currentUser,
    submitPersonalInfo,
    submitGuarantorInfo,
    submitEmploymentInfo,
  } = useContext(StoreContext);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    nin: "",
    bvn: "",
    address: "",

    // Employment Info
    employmentType: "",
    sector: "",
    salary: "",
    role: "",
    companyEmail: "",
    state_id: "",
    lga_id: "",
    companyName: "",
    companyAddress: "",
    employerName: "",
    employerPhone: "",

    // Guarantor Info
    guarantorFirstName: "",
    guarantorLastName: "",
    guarantorEmail: "",
    guarantorPhone: "",
    guarantorDOB: "",
    guarantorGender: "",
    relationship: "",
    guarantorAddress: "",

    // Documents
    bankStatement: null,
    employmentId: null,
    governmentId: null,
    utilityBill: null,
  });

  // ⬇️ Updated nextStep to save per step
  const nextStep = async () => {
    if (!validateStep(step)) return;

    try {
      if (step === 1) {
        await submitPersonalInfo(formData, currentUser.uid);
      }
      if (step === 2) {
        await submitGuarantorInfo(formData, currentUser.uid);
      }
      if (step === 3) {
        await submitEmploymentInfo(formData, currentUser.uid);
      }

      setStep(step + 1);
    } catch (error) {
      console.error("Step save failed:", error);
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to save this step",
      }));
    }
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = (currentStep) => {
    let newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Email is invalid";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.dob) newErrors.dob = "Date of birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.maritalStatus)
          newErrors.maritalStatus = "maritalStatus is required";
        if (!formData.nin) newErrors.nin = "NIN is required";
        if (!formData.bvn) newErrors.bvn = "BVN is required";
        if (!formData.address) newErrors.address = "Address is required";
        break;

      case 2:
        if (!formData.guarantorFirstName)
          newErrors.guarantorFirstName = "First name is required";
        if (!formData.guarantorLastName)
          newErrors.guarantorLastName = "Last name is required";
        if (!formData.guarantorEmail)
          newErrors.guarantorEmail = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.guarantorEmail))
          newErrors.guarantorEmail = "Email is invalid";
        if (!formData.guarantorPhone)
          newErrors.guarantorPhone = "Phone number is required";
        if (!formData.guarantorDOB)
          newErrors.guarantorDOB = "Date of birth is required";
        if (!formData.guarantorGender)
          newErrors.guarantorGender = "Gender is required";
        if (!formData.relationship)
          newErrors.relationship = "Relationship is required";
        if (!formData.guarantorAddress)
          newErrors.guarantorAddress = "Address is required";
        break;

      case 3:
        if (!formData.employmentType)
          newErrors.employmentType = "EmploymentType is required";
        if (!formData.sector) newErrors.sector = "Sector is required";
        if (!formData.salary) newErrors.salary = "Salary is required";
        if (!formData.role) newErrors.role = "Role is required";
        if (!formData.companyEmail)
          newErrors.companyEmail = "Company email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.companyEmail))
          newErrors.companyEmail = "Email is invalid";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.lga) newErrors.state = "Local gogernment is required";
        if (!formData.companyName)
          newErrors.companyName = "Company name is required";
        if (!formData.companyAddress)
          newErrors.companyAddress = "Company address is required";
        if (!formData.employerName)
          newErrors.employerName = "Employer name is required";
        if (!formData.employerPhone)
          newErrors.employerPhone = "Employer phone is required";
        break;

      case 4:
        if (!formData.bankStatement)
          newErrors.bankStatement = "Bank statement is required";
        if (!formData.employmentId)
          newErrors.employmentId = "Employment ID is required";
        if (!formData.governmentId)
          newErrors.governmentId = "Government ID is required";
        if (!formData.utilityBill)
          newErrors.utilityBill = "Utility bill is required";
        break;

      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateStep(4)) return;

    if (!currentUser) {
      setErrors({ submit: "Please log in to submit the form" });
      return;
    }

    try {
      console.log("Submitting form with data:", formData);
      const result = await submitCompleteForm(formData);

      if (result.status === "success") {
        setSubmitSuccess(true);
        setStep(5);
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Form submission failed",
      }));
    }
  };

  const stepHeadings = [
    "Personal Info",
    "Guarantor Information",
    "Employment Information",
    "Document Upload",
  ];

  return (
    <>
      {submitLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
              <span>Submitting form...</span>
            </div>
          </div>
        </div>
      )}

      {authError && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded max-w-3xl mx-auto">
          {authError}
        </div>
      )}

      {errors.submit && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded max-w-3xl mx-auto">
          {errors.submit}
        </div>
      )}

      {step === 5 ? (
        <SubmitComplete setStep={setStep} />
      ) : (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-normal text-gray-900">
              Identity verification
            </h1>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full max-w-3xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="border-b-2">
                <h2 className="text-2xl font-bold text-gray-800 pb-10">
                  {stepHeadings[step - 1]}
                </h2>
                <ProgressBar currentStep={step} totalSteps={4} />
              </div>

              <div className="bg-white rounded-lg p-6 sm:p-8">
                {step === 1 && (
                  <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    nextStep={nextStep}
                  />
                )}
                {step === 2 && (
                  <GuarantorInfo
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    nextStep={nextStep}
                    prevStep={prevStep}
                  />
                )}
                {step === 3 && (
                  <EmploymentInfo
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    nextStep={nextStep}
                    prevStep={prevStep}
                  />
                )}
                {step === 4 && (
                  <DocumentUpload
                    formData={formData}
                    handleFileChange={handleFileChange}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    prevStep={prevStep}
                    nextStep={nextStep}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;

// import React, { useState, useContext } from "react";
// import PersonalInfo from "../Components/PersonalInfo";
// import EmploymentInfo from "../Components/EmploymentInfo";
// import GuarantorInfo from "../Components/GuarantorInfo";
// import DocumentUpload from "../Components/DocumentUpload";
// import SubmitComplete from "../Components/SubmitComplete";
// import { StoreContext } from "../Context/StoreContext";

// const ProgressRing = ({ step, currentStep, label }) => {
//   const isCompleted = currentStep > step;
//   const isActive = currentStep === step;

//   return (
//     <div className="flex flex-col items-center ">
//       <div
//         className={`
//         w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium bg-white z-20
//         ${
//           isCompleted
//             ? " border-4 border-yellow-400 text-white"
//             : isActive
//             ? "border-4 border-yellow-400 text-white"
//             : "border-4 border-gray-300 text-gray-400"
//         }
//       `}
//       >
//         {isCompleted ? (
//           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           ""
//         )}
//       </div>
//       <span
//         className={`mt-2 text-xs font-medium text-center leading-tight max-w-16 ${
//           isActive || isCompleted ? "text-yellow-600" : "text-gray-500"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// };

// const ProgressBar = ({ currentStep }) => {
//   const steps = [
//     { step: 1, label: "Personal Info" },
//     { step: 2, label: "Guarantor info" },
//     { step: 3, label: "Employment info" },
//     { step: 4, label: "Documents Upload" },
//   ];

//   return (
//     <div className="mb-10">
//       <div className="flex items-center justify-between relative">
//         {/* Progress line */}
//         <div
//           className="absolute top-4 z-10 bg-yellow-200 h-1 rounded-full"
//           style={{
//             left: "16px", // half of ring width
//             right: "16px", // half of ring width
//           }}
//         >
//           <div
//             className="h-full bg-yellow-400 transition-all duration-300 ease-in-out"
//             style={{
//               width: `calc(${
//                 ((currentStep - 1) / (steps.length - 1)) * 100
//               }% )`,
//               height: "100%",
//             }}
//           />
//         </div>

//         {steps.map((stepData) => (
//           <ProgressRing
//             key={stepData.step}
//             step={stepData.step}
//             currentStep={currentStep}
//             label={stepData.label}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const MultiStepForm = () => {
//   const { submitCompleteForm, submitLoading, authError, currentUser } =
//     useContext(StoreContext);
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState({});
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     // Personal Info
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     maritalStatus: "",
//     nin: "",
//     bvn: "",
//     address: "",

//     // Employment Info
//     employmentType: "",
//     sector: "",
//     salary: "",
//     role: "",
//     companyEmail: "",
//     state_id: "",
//     lga_id: "",
//     companyName: "",
//     companyAddress: "",
//     employerName: "",
//     employerPhone: "",

//     // Guarantor Info
//     guarantorFirstName: "",
//     guarantorLastName: "",
//     guarantorEmail: "",
//     guarantorPhone: "",
//     guarantorDOB: "",
//     guarantorGender: "",
//     relationship: "",
//     guarantorAddress: "",

//     // Documents
//     bankStatement: null,
//     employmentId: null,
//     governmentId: null,
//     utilityBill: null,
//   });

//   const nextStep = () => {
//     if (validateStep(step)) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const validateStep = (currentStep) => {
//     let newErrors = {};

//     switch (currentStep) {
//       case 1:
//         if (!formData.firstName) newErrors.firstName = "First name is required";
//         if (!formData.lastName) newErrors.lastName = "Last name is required";
//         if (!formData.email) newErrors.email = "Email is required";
//         else if (!/\S+@\S+\.\S+/.test(formData.email))
//           newErrors.email = "Email is invalid";
//         if (!formData.phone) newErrors.phone = "Phone number is required";
//         if (!formData.dob) newErrors.dob = "Date of birth is required";
//         if (!formData.gender) newErrors.gender = "Gender is required";
//         if (!formData.maritalStatus)
//           newErrors.maritalStatus = "maritalStatus is required";
//         if (!formData.nin) newErrors.nin = "NIN is required";
//         if (!formData.bvn) newErrors.bvn = "BVN is required";
//         if (!formData.address) newErrors.address = "Address is required";
//         break;

//       case 2:
//         if (!formData.guarantorFirstName)
//           newErrors.guarantorFirstName = "First name is required";
//         if (!formData.guarantorLastName)
//           newErrors.guarantorLastName = "Last name is required";
//         if (!formData.guarantorEmail)
//           newErrors.guarantorEmail = "Email is required";
//         else if (!/\S+@\S+\.\S+/.test(formData.guarantorEmail))
//           newErrors.guarantorEmail = "Email is invalid";
//         if (!formData.guarantorPhone)
//           newErrors.guarantorPhone = "Phone number is required";
//         if (!formData.guarantorDOB)
//           newErrors.guarantorDOB = "Date of birth is required";
//         if (!formData.guarantorGender)
//           newErrors.guarantorGender = "Gender is required";
//         if (!formData.relationship)
//           newErrors.relationship = "Relationship is required";
//         if (!formData.guarantorAddress)
//           newErrors.guarantorAddress = "Address is required";
//         break;

//       case 3:
//         if (!formData.employmentType)
//           newErrors.employmentType = "Employment type is required";
//         if (!formData.sector) newErrors.sector = "Sector is required";
//         if (!formData.salary) newErrors.salary = "Salary is required";
//         if (!formData.role) newErrors.role = "Role is required";
//         if (!formData.companyEmail)
//           newErrors.companyEmail = "Company email is required";
//         else if (!/\S+@\S+\.\S+/.test(formData.companyEmail))
//           newErrors.companyEmail = "Company email is invalid";
//         if (!formData.state_id) newErrors.state_id = "State is required";
//         if (!formData.lga_id) newErrors.lga_id = "Local government is required";
//         if (!formData.companyName)
//           newErrors.companyName = "Company name is required";
//         if (!formData.companyAddress)
//           newErrors.companyAddress = "Company address is required";
//         if (!formData.employerName)
//           newErrors.employerName = "Employer name is required";
//         if (!formData.employerPhone)
//           newErrors.employerPhone = "Employer phone is required";
//         break;

//       case 4:
//         if (!formData.bankStatement)
//           newErrors.bankStatement = "Bank statement is required";
//         if (!formData.employmentId)
//           newErrors.employmentId = "Employment ID is required";
//         if (!formData.governmentId)
//           newErrors.governmentId = "Government ID is required";
//         if (!formData.utilityBill)
//           newErrors.utilityBill = "Utility bill is required";
//         break;

//       default:
//         break;
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Clear error when field is changed
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     const file = e.target.files[0];

//     setFormData({
//       ...formData,
//       [name]: file,
//     });

//     // Clear error when file is selected
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e?.preventDefault();

//     if (!validateStep(4)) {
//       return;
//     }

//     if (!currentUser) {
//       setErrors({ submit: "Please log in to submit the form" });
//       return;
//     }

//     try {
//       console.log("Submitting form with data:", formData);
//       const result = await submitCompleteForm(formData);

//       if (result.status === "success") {
//         setSubmitSuccess(true);
//         console.log("Form submitted successfully!");
//         setStep(5);
//       }
//     } catch (error) {
//       console.error("Form submission failed:", error);
//       setErrors((prev) => ({
//         ...prev,
//         submit: error.message || "Form submission failed",
//       }));
//     }
//   };

//   const stepHeadings = [
//     "Personal Info",
//     "Guarantor Information",
//     "Employment Information",
//     "Document Upload",
//   ];

//   return (
//     <>
//       {submitLoading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
//               <span>Submitting form...</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Messages */}
//       {authError && (
//         <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded max-w-3xl mx-auto">
//           {authError}
//         </div>
//       )}

//       {errors.submit && (
//         <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded max-w-3xl mx-auto">
//           {errors.submit}
//         </div>
//       )}

//       {/* Main Form */}
//       {step === 5 ? (
//         <div>
//           <SubmitComplete setStep={setStep} />
//         </div>
//       ) : (
//         <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//           <div className="w-full max-w-3xl mx-auto mb-10">
//             <h1 className="text-3xl font-normal text-gray-900">
//               Identity verification
//             </h1>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full max-w-3xl mx-auto">
//             <div className="max-w-4xl mx-auto">
//               <div className="border-b-2">
//                 <h2 className="text-2xl font-bold text-gray-800 pb-10">
//                   {stepHeadings[step - 1]}
//                 </h2>
//                 <ProgressBar currentStep={step} totalSteps={4} />
//               </div>

//               <div className="bg-white rounded-lg p-6 sm:p-8">
//                 {/* Step 1: Personal Information */}
//                 {step === 1 && (
//                   <PersonalInfo
//                     formData={formData}
//                     handleChange={handleChange}
//                     errors={errors}
//                     nextStep={nextStep}
//                   />
//                 )}

//                 {/* Step 2: Guarantor Information */}
//                 {step === 2 && (
//                   <GuarantorInfo
//                     formData={formData}
//                     handleChange={handleChange}
//                     errors={errors}
//                     nextStep={nextStep}
//                     prevStep={prevStep}
//                   />
//                 )}

//                 {/* Step 3: Employment Information */}
//                 {step === 3 && (
//                   <EmploymentInfo
//                     formData={formData}
//                     handleChange={handleChange}
//                     errors={errors}
//                     nextStep={nextStep}
//                     prevStep={prevStep}
//                   />
//                 )}

//                 {/* Step 4: Document Upload */}
//                 {step === 4 && (
//                   <DocumentUpload
//                     formData={formData}
//                     handleFileChange={handleFileChange}
//                     errors={errors}
//                     handleSubmit={handleSubmit}
//                     prevStep={prevStep}
//                     nextStep={nextStep}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MultiStepForm;
