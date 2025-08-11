import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  sponsor_list,
  house_list,
  allproperty_list,
  State_list,
  team_list,
} from "../assets/assets";
export const StoreContext = createContext(null);
const API_BASE_URL = "https://preprod.mortin.co/api/ui";
const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [states, setStates] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);

  // Authentication state
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
    },
  });

  // Request interceptor
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  // Initialize authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setCurrentUser(JSON.parse(userData));
    } else {
      api.defaults.headers.common["Authorization"] =
        "Bearer PRE-PRODUCTION-AUTH-KEY";
    }

    setAuthLoading(false);
  }, []);

  // Fetch products
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        // Ensure public token for unauthenticated users
        if (!currentUser) {
          api.defaults.headers.common["Authorization"] =
            "Bearer PRE-PRODUCTION-AUTH-KEY";
        }

        const response = await api.get("/products?pg=1&limit=3&order=desc", {
          signal: controller.signal,
        });

        setProducts(response.data.data?.product || []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Error fetching products:", err);
        }
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // cancel request if component unmounts
    };
  }, [currentUser]);

  // Fetch states
  useEffect(() => {
    const controller = new AbortController();

    const fetchStates = async () => {
      try {
        // Ensure public token for unauthenticated users
        if (!currentUser) {
          api.defaults.headers.common["Authorization"] =
            "Bearer PRE-PRODUCTION-AUTH-KEY";
        }

        const response = await api.get("/states", {
          signal: controller.signal,
        });

        setStates(response.data?.states || []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Error fetching products:", err);
        }
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();

    return () => {
      controller.abort(); // cancel request if component unmounts
    };
  }, [currentUser]);

  // Signup function
  const signup = async (userData) => {
    try {
      setAuthError(null);
      console.log("userData being sent to /create/user:", userData);
      const response = await api.post("/create/user", userData);

      console.log(response.data);
      if (response.data && response.data.user) {
        return {
          user: true,
          status:
            response.data.status || "Please check your email for verification",
        };
      } else if (response.data && response.data.message) {
        throw new Error(response.data.message);
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Please try again.";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Verify user function
  const verifyUser = async (user, token) => {
    try {
      setAuthError(null);
      const response = await api.get(`/verify/user/email/${user}/${token}`);

      console.log("Verification response:", response.data);
      if (response.data && response.data.status == "success") {
        return response.data;
      } else {
        throw new Error("Verification failed");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Verification failed. Please try again.";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Login user function
  const login = async (email, password) => {
    try {
      setAuthError(null);
      const response = await api.post("/authenticate/user", {
        email,
        password,
      });

      console.log("Login API response:", response.data);

      if (response.data.status === "success" && response.data.user) {
        const { token, user } = response.data;
        // const { token } = user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        api.defaults.headers.common["Authorization"] =
          "Bearer PRE-PRODUCTION-AUTH-KEY";
        setCurrentUser(user);
        return user;
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      const message = err.response?.data?.message || "Login failed. Try again.";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.defaults.headers.common["Authorization"] =
      "Bearer PRE-PRODUCTION-AUTH-KEY";
    setCurrentUser(null);
    setAuthError(null);
  };

  // Forgot password function
  const forgotPassword = async (email) => {
    try {
      setAuthError(null);
      const response = await api.post("/user/forgot-password", { email });

      if (response.data && response.data.status === "success") {
        // Always return a message for success
        return {
          message: response.data.message || "Password reset email sent!",
        };
      } else {
        // Always throw an error with a clear message
        throw new Error(
          response.data?.message || "Password reset request failed"
        );
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        "Password reset request failed. Please try again.";
      setAuthError(errorMsg);
      throw new Error(errorMsg);
    }
  };

  // Reset password function
  const resetPassword = async (uid, token, newPassword) => {
    try {
      setAuthError(null);
      const response = await api.post(`/user/reset-password/${uid}.${token}`, {
        newPassword,
      });

      if (response.data && response.data.status === "success") {
        return response.data;
      } else {
        throw new Error("Password reset failed");
      }
    } catch (err) {
      setAuthError(
        err.response?.data?.message ||
          "Password reset failed. Please try again."
      );
      throw err;
    }
  };

  // Update user profile
  const updateUserProfile = async (uid, userData) => {
    try {
      setAuthError(null);
      const response = await api.put(`/user/${uid}`, userData);

      if (response.data) {
        // Update current user in state and localStorage
        const updatedUser = { ...currentUser, ...userData };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setCurrentUser(updatedUser);
        return updatedUser;
      } else {
        throw new Error("Profile update failed");
      }
    } catch (err) {
      setAuthError(
        err.response?.data?.message ||
          "Profile update failed. Please try again."
      );
      throw err;
    }
  };

  // Submit Personal Information
  const submitPersonalInfo = async (personalData, uid) => {
    try {
      setAuthError(null);

      const payload = {
        first_name: personalData.firstName,
        last_name: personalData.lastName,
        full_name: `${personalData.firstName} ${personalData.lastName}`,
        email: personalData.email,
        phone: personalData.phone,
        dob: personalData.dob,
        gender: personalData.gender,
        marital_status: personalData.maritalStatus,
        nin: personalData.nin,
        bvn: personalData.bvn,
        address: personalData.address,
      };

      console.log("Submitting personal info:", payload);

      const response = await api.put(`/user/${uid}/personal-info`, payload);

      if (response.data && response.data.status === "success") {
        console.log("Personal info submitted successfully:", response.data);
        return response.data;
      } else {
        throw new Error("Failed to submit personal information");
      }
    } catch (err) {
      console.error("Personal info submission error:", err);
      const message =
        err.response?.data?.message || "Failed to submit personal information";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Submit Guarantor Information
  const submitGuarantorInfo = async (guarantorData, uid) => {
    try {
      setAuthError(null);

      const payload = {
        first_name: guarantorData.guarantorFirstName,
        last_name: guarantorData.guarantorLastName,
        email: guarantorData.guarantorEmail,
        phone_no: guarantorData.guarantorPhone,
        gender: guarantorData.guarantorGender,
        address: guarantorData.guarantorAddress,
        relationship: guarantorData.relationship,
      };

      console.log("Submitting guarantor info:", payload);

      const response = await api.put(`/user/${uid}/guarantor`, payload);

      if (response.data && response.data.status === "success") {
        console.log("Guarantor info submitted successfully:", response.data);
        return response.data;
      } else {
        throw new Error("Failed to submit guarantor information");
      }
    } catch (err) {
      console.error("Guarantor info submission error:", err);
      const message =
        err.response?.data?.message || "Failed to submit guarantor information";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Submit Employment Information - FIXED: Dynamic LGA handling
  const submitEmploymentInfo = async (employmentData, uid) => {
    try {
      setAuthError(null);

      // Find the LGA ID from states data if available
      let lgaId = 1; // Default fallback

      if (states && states.length > 0) {
        const selectedState = states.find(
          (state) =>
            state.name.toLowerCase() === employmentData.state?.toLowerCase()
        );

        if (selectedState && selectedState.lgas) {
          const selectedLga = selectedState.lgas.find(
            (lga) =>
              lga.name.toLowerCase() === employmentData.lga?.toLowerCase()
          );
          if (selectedLga) {
            lgaId = selectedLga.id;
          }
        }
      }

      const payload = {
        company_name: employmentData.companyName,
        company_email: employmentData.companyEmail,
        company_address: employmentData.companyAddress,
        sector: employmentData.sector,
        mngr_name: employmentData.employerName,
        mngr_phone_no: employmentData.employerPhone,
        salary: employmentData.salary,
        type: employmentData.employmentType,
        role: employmentData.role,
        lga_id: lgaId,
      };

      console.log("Submitting employment info:", payload);

      const response = await api.put(`/user/${uid}/employment`, payload);

      if (response.data && response.data.status === "success") {
        console.log("Employment info submitted successfully:", response.data);
        return response.data;
      } else {
        throw new Error("Failed to submit employment information");
      }
    } catch (err) {
      console.error("Employment info submission error:", err);
      const message =
        err.response?.data?.message ||
        "Failed to submit employment information";
      setAuthError(message);
      throw new Error(message);
    }
  };

  // Upload Document Function - FIXED: Proper FormData handling
  const uploadDocument = async (file, documentType, uid) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Create axios instance for file upload - FIXED: Remove Content-Type header for FormData
      const uploadApi = axios.create({
        baseURL: API_BASE_URL,
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token") || "PRE-PRODUCTION-AUTH-KEY"
          }`,
        },
      });

      let endpoint;
      switch (documentType) {
        case "bankStatement":
          endpoint = `/user/upload/${uid}/bank-statement`;
          break;
        case "utilityBill":
          endpoint = `/user/upload/${uid}/utility`;
          break;
        case "employmentId":
          endpoint = `/user/upload/${uid}/staff-id`;
          break;
        case "governmentId":
          endpoint = `/user/upload/${uid}/govt-id`;
          break;
        default:
          throw new Error("Invalid document type");
      }

      console.log(`Uploading ${documentType} to ${endpoint}`);

      const response = await uploadApi.post(endpoint, formData);

      if (response.data && response.data.status === "success") {
        console.log(`${documentType} uploaded successfully:`, response.data);
        return response.data;
      } else {
        throw new Error(`Failed to upload ${documentType}`);
      }
    } catch (err) {
      console.error(`${documentType} upload error:`, err);
      const message =
        err.response?.data?.message || `Failed to upload ${documentType}`;
      throw new Error(message);
    }
  };

  // Complete Form Submission
  const submitCompleteForm = async (formData) => {
    try {
      setSubmitLoading(true);
      setAuthError(null);

      const uid = currentUser?.uid;
      if (!uid) {
        throw new Error("User not authenticated");
      }

      console.log("Starting complete form submission for user:", uid);

      // Step 1: Submit Personal Information
      console.log("Step 1: Submitting personal information...");
      await submitPersonalInfo(formData, uid);

      // Step 2: Submit Guarantor Information
      console.log("Step 2: Submitting guarantor information...");
      await submitGuarantorInfo(formData, uid);

      // Step 3: Submit Employment Information
      console.log("Step 3: Submitting employment information...");
      await submitEmploymentInfo(formData, uid);

      // Step 4: Upload Documents
      console.log("Step 4: Uploading documents...");
      const documentUploads = [];

      if (formData.bankStatement) {
        documentUploads.push(
          uploadDocument(formData.bankStatement, "bankStatement", uid)
        );
      }

      if (formData.utilityBill) {
        documentUploads.push(
          uploadDocument(formData.utilityBill, "utilityBill", uid)
        );
      }

      if (formData.employmentId) {
        documentUploads.push(
          uploadDocument(formData.employmentId, "employmentId", uid)
        );
      }

      if (formData.governmentId) {
        documentUploads.push(
          uploadDocument(formData.governmentId, "governmentId", uid)
        );
      }

      // Wait for all document uploads to complete
      await Promise.all(documentUploads);

      console.log("Form submission completed successfully!");

      return {
        status: "success",
        message: "Form submitted successfully!",
      };
    } catch (err) {
      console.error("Complete form submission error:", err);
      const message = err.message || "Failed to submit form";
      setAuthError(message);
      throw new Error(message);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Context value - FIXED: Added missing submitLoading
  const contextValue = {
    sponsor_list,
    house_list,
    allproperty_list,
    State_list,
    team_list,
    products,
    loadingProducts,
    states,
    loadingStates,

    // Authentication
    currentUser,
    authLoading,
    authError,
    submitLoading, // ADDED THIS
    login,
    signup,
    forgotPassword,
    resetPassword,
    logout,
    updateUserProfile,
    verifyUser,
    api,

    // Form submission methods
    submitPersonalInfo,
    submitGuarantorInfo,
    submitEmploymentInfo,
    uploadDocument,
    submitCompleteForm,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import {
//   sponsor_list,
//   house_list,
//   allproperty_list,
//   State_list,
//   team_list,
// } from "../assets/assets";

// export const StoreContext = createContext(null);

// const API_BASE_URL = "https://preprod.mortin.co/api/ui";

// const StoreContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [states, setStates] = useState([]);
//   const [loadingStates, setLoadingStates] = useState(true);
//   // Authentication state
//   const [currentUser, setCurrentUser] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);
//   const [authError, setAuthError] = useState(null);
//   const [submitLoading, setSubmitLoading] = useState(false);

//   const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
//     },
//   });

//   // Request interceptor
//   useEffect(() => {
//     const requestInterceptor = api.interceptors.request.use((config) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     return () => {
//       api.interceptors.request.eject(requestInterceptor);
//     };
//   }, []);

// // Initialize authentication
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   const userData = localStorage.getItem("user");

//   if (token && userData) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     setCurrentUser(JSON.parse(userData));
//   } else {
//     api.defaults.headers.common["Authorization"] =
//       "Bearer PRE-PRODUCTION-AUTH-KEY";
//   }

//   setAuthLoading(false);
// }, []);

//   // Fetch products
//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchProducts = async () => {
//       try {
//         // Ensure public token for unauthenticated users
//         if (!currentUser) {
//           api.defaults.headers.common["Authorization"] =
//             "Bearer PRE-PRODUCTION-AUTH-KEY";
//         }

//         const response = await api.get("/products?pg=1&limit=3&order=desc", {
//           signal: controller.signal,
//         });

//         setProducts(response.data.data?.product || []);
//       } catch (err) {
//         if (err.name !== "CanceledError") {
//           console.error("Error fetching products:", err);
//         }
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     fetchProducts();

//   return () => {
//     controller.abort(); // cancel request if component unmounts
//   };
// }, [currentUser]);

// // Fetch states
// useEffect(() => {
//   const controller = new AbortController();

//   const fetchStates = async () => {
//     try {
//       // Ensure public token for unauthenticated users
//       if (!currentUser) {
//         api.defaults.headers.common["Authorization"] =
//           "Bearer PRE-PRODUCTION-AUTH-KEY";
//       }

//       const response = await api.get("/states", {
//         signal: controller.signal,
//       });

//       setStates(response.data?.states || []);
//     } catch (err) {
//       if (err.name !== "CanceledError") {
//         console.error("Error fetching products:", err);
//       }
//     } finally {
//       setLoadingStates(false);
//     }
//   };

//   fetchStates();

//     return () => {
//       controller.abort(); // cancel request if component unmounts
//     };
//   }, [currentUser]);

//   const signup = async (userData) => {
//     try {
//       setAuthError(null);
//       console.log("userData being sent to /create/user:", userData);
//       const response = await api.post("/create/user", userData);

//       console.log(response.data);
//       if (response.data && response.data.user) {
//         return {
//           user: true,
//           status:
//             response.data.status || "Please check your email for verification",
//         };
//       } else if (response.data && response.data.message) {
//         throw new Error(response.data.message);
//       } else {
//         throw new Error(response.data.message || "Registration failed");
//       }
//     } catch (err) {
//       const message =
//         err.response?.data?.message ||
//         err.message ||
//         "Registration failed. Please try again.";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Verify user function
//   const verifyUser = async (user, token) => {
//     try {
//       setAuthError(null);
//       const response = await api.get(`/verify/user/email/${user}/${token}`);

//       console.log("Verification response:", response.data);
//       if (response.data && response.data.status == "success") {
//         return response.data;
//       } else {
//         throw new Error("Verification failed");
//       }
//     } catch (err) {
//       const message =
//         err.response?.data?.message ||
//         err.message ||
//         "Verification failed. Please try again.";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Login user function
//   const login = async (email, password) => {
//     try {
//       setAuthError(null);
//       const response = await api.post("/authenticate/user", {
//         email,
//         password,
//       });

//       console.log("Login API response:", response.data);

//       if (response.data.status === "success" && response.data.user) {
//         const { token, user } = response.data;
//         // const { token } = user;
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));
//         api.defaults.headers.common["Authorization"] =
//           "Bearer PRE-PRODUCTION-AUTH-KEY";
//         setCurrentUser(user);
//         return user;
//       } else {
//         throw new Error("Invalid login response");
//       }
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       const message = err.response?.data?.message || "Login failed. Try again.";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     api.defaults.headers.common["Authorization"] =
//       "Bearer PRE-PRODUCTION-AUTH-KEY";
//     setCurrentUser(null);
//     setAuthError(null);
//   };

//   // Forgot password function
//   const forgotPassword = async (email) => {
//     try {
//       setAuthError(null);
//       const response = await api.post("/user/forgot-password", { email });

//       if (response.data && response.data.message) {
//         return response.data;
//       } else {
//         throw new Error("Password reset request failed");
//       }
//     } catch (err) {
//       setAuthError(
//         err.response?.data?.message ||
//           "Password reset request failed. Please try again."
//       );
//       throw err;
//     }
//   };

//   // Reset password function
//   const resetPassword = async (userId, token, newPassword) => {
//     try {
//       setAuthError(null);
//       const response = await api.post(
//         `/user/reset-password/${userId}.${token}`,
//         {
//           newPassword,
//         }
//       );

//       if (response.data && response.data.message) {
//         return response.data;
//       } else {
//         throw new Error("Password reset failed");
//       }
//     } catch (err) {
//       setAuthError(
//         err.response?.data?.message ||
//           "Password reset failed. Please try again."
//       );
//       throw err;
//     }
//   };

//   // Update user profile
//   const updateUserProfile = async (userId, userData) => {
//     try {
//       setAuthError(null);
//       const response = await api.put(`/user/${userId}`, userData);

//       if (response.data) {
//         // Update current user in state and localStorage
//         const updatedUser = { ...currentUser, ...userData };
//         localStorage.setItem("user", JSON.stringify(updatedUser));
//         setCurrentUser(updatedUser);
//         return updatedUser;
//       } else {
//         throw new Error("Profile update failed");
//       }
//     } catch (err) {
//       setAuthError(
//         err.response?.data?.message ||
//           "Profile update failed. Please try again."
//       );
//       throw err;
//     }
//   };

//   // Submit Personal Information
//   const submitPersonalInfo = async (personalData, uid) => {
//     try {
//       setAuthError(null);

//       const payload = {
//         first_name: personalData.firstName,
//         last_name: personalData.lastName,
//         full_name: `${personalData.firstName} ${personalData.lastName}`,
//         email: personalData.email,
//         phone: personalData.phone,
//         dob: personalData.dob,
//         gender: personalData.gender,
//         marital_status: personalData.maritalStatus,
//         nin: personalData.nin,
//         bvn: personalData.bvn,
//         address: personalData.address,
//       };

//       console.log("Submitting personal info:", payload);

//       const response = await api.put(`/user/${uid}/personal-info`, payload);

//       if (response.data && response.data.status === "success") {
//         console.log("Personal info submitted successfully:", response.data);
//         return response.data;
//       } else {
//         throw new Error("Failed to submit personal information");
//       }
//     } catch (err) {
//       console.error("Personal info submission error:", err);
//       const message =
//         err.response?.data?.message || "Failed to submit personal information";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Submit Guarantor Information
//   const submitGuarantorInfo = async (guarantorData, uid) => {
//     try {
//       setAuthError(null);

//       const payload = {
//         first_name: guarantorData.guarantorFirstName,
//         last_name: guarantorData.guarantorLastName,
//         email: guarantorData.guarantorEmail,
//         phone_no: guarantorData.guarantorPhone,
//         gender: guarantorData.guarantorGender,
//         address: guarantorData.guarantorAddress,
//         relationship: guarantorData.relationship,
//       };

//       console.log("Submitting guarantor info:", payload);

//       const response = await api.put(`/user/${uid}/guarantor`, payload);

//       if (response.data && response.data.status === "success") {
//         console.log("Guarantor info submitted successfully:", response.data);
//         return response.data;
//       } else {
//         throw new Error("Failed to submit guarantor information");
//       }
//     } catch (err) {
//       console.error("Guarantor info submission error:", err);
//       const message =
//         err.response?.data?.message || "Failed to submit guarantor information";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Submit Employment Information
//   const submitEmploymentInfo = async (employmentData, uid) => {
//     try {
//       setAuthError(null);

//       const payload = {
//         company_name: employmentData.companyName,
//         company_email: employmentData.companyEmail,
//         company_address: employmentData.companyAddress,
//         sector: employmentData.sector,
//         mngr_name: employmentData.employerName,
//         mngr_phone_no: employmentData.employerPhone,
//         salary: employmentData.salary,
//         type: employmentData.employmentType,
//         role: employmentData.role,
//         // You might need to get lga_id from state/lga selection
//         lga_id: 1, // This should be dynamic based on selected LGA
//       };

//       console.log("Submitting employment info:", payload);

//       const response = await api.put(`/user/${uid}/employment`, payload);

//       if (response.data && response.data.status === "success") {
//         console.log("Employment info submitted successfully:", response.data);
//         return response.data;
//       } else {
//         throw new Error("Failed to submit employment information");
//       }
//     } catch (err) {
//       console.error("Employment info submission error:", err);
//       const message =
//         err.response?.data?.message ||
//         "Failed to submit employment information";
//       setAuthError(message);
//       throw new Error(message);
//     }
//   };

//   // Upload Document Function
//   const uploadDocument = async (file, documentType, uid) => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       // Create axios instance for file upload with different headers
//       const uploadApi = axios.create({
//         baseURL: API_BASE_URL,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${
//             localStorage.getItem("token") || "PRE-PRODUCTION-AUTH-KEY"
//           }`,
//         },
//       });

//       let endpoint;
//       switch (documentType) {
//         case "bankStatement":
//           endpoint = `/user/upload/${uid}/bank-statement`;
//           break;
//         case "utilityBill":
//           endpoint = `/user/upload/${uid}/utility`;
//           break;
//         case "employmentId":
//           endpoint = `/user/upload/${uid}/staff-id`;
//           break;
//         case "governmentId":
//           endpoint = `/user/upload/${uid}/govt-id`;
//           break;
//         default:
//           throw new Error("Invalid document type");
//       }

//       console.log(`Uploading ${documentType} to ${endpoint}`);

//       const response = await uploadApi.post(endpoint, formData);

//       if (response.data && response.data.status === "success") {
//         console.log(`${documentType} uploaded successfully:`, response.data);
//         return response.data;
//       } else {
//         throw new Error(`Failed to upload ${documentType}`);
//       }
//     } catch (err) {
//       console.error(`${documentType} upload error:`, err);
//       const message =
//         err.response?.data?.message || `Failed to upload ${documentType}`;
//       throw new Error(message);
//     }
//   };

//   // Complete Form Submission
//   const submitCompleteForm = async (formData) => {
//     try {
//       setSubmitLoading(true);
//       setAuthError(null);

//       const uid = currentUser?.uid;
//       if (!uid) {
//         throw new Error("User not authenticated");
//       }

//       console.log("Starting complete form submission for user:", uid);

//       // Step 1: Submit Personal Information
//       console.log("Step 1: Submitting personal information...");
//       await submitPersonalInfo(formData, uid);

//       // Step 2: Submit Guarantor Information
//       console.log("Step 2: Submitting guarantor information...");
//       await submitGuarantorInfo(formData, uid);

//       // Step 3: Submit Employment Information
//       console.log("Step 3: Submitting employment information...");
//       await submitEmploymentInfo(formData, uid);

//       // Step 4: Upload Documents
//       console.log("Step 4: Uploading documents...");
//       const documentUploads = [];

//       if (formData.bankStatement) {
//         documentUploads.push(
//           uploadDocument(formData.bankStatement, "bankStatement", uid)
//         );
//       }

//       if (formData.utilityBill) {
//         documentUploads.push(
//           uploadDocument(formData.utilityBill, "utilityBill", uid)
//         );
//       }

//       if (formData.employmentId) {
//         documentUploads.push(
//           uploadDocument(formData.employmentId, "employmentId", uid)
//         );
//       }

//       if (formData.governmentId) {
//         documentUploads.push(
//           uploadDocument(formData.governmentId, "governmentId", uid)
//         );
//       }

//       // Wait for all document uploads to complete
//       await Promise.all(documentUploads);

//       console.log("Form submission completed successfully!");

//       return {
//         status: "success",
//         message: "Form submitted successfully!",
//       };
//     } catch (err) {
//       console.error("Complete form submission error:", err);
//       const message = err.message || "Failed to submit form";
//       setAuthError(message);
//       throw new Error(message);
//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   // Context value
//   const contextValue = {
//     sponsor_list,
//     house_list,
//     allproperty_list,
//     State_list,
//     team_list,
//     products,
//     loadingProducts,
//     states,
//     loadingStates,

//     // Authentication

//     currentUser,
//     authLoading,
//     authError,
//     login,
//     signup,
//     forgotPassword,
//     resetPassword,
//     logout,
//     updateUserProfile,
//     verifyUser,
//     api,
//     submitPersonalInfo,
//     submitGuarantorInfo,
//     submitEmploymentInfo,
//     uploadDocument,
//     submitCompleteForm,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
