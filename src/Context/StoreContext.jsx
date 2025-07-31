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

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
    },
  });

  // new
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
    }

    setAuthLoading(false);
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products?pg=1&limit=3&order=desc");
        setProducts(response.data.data?.product || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await api.get("/states");
        setStates(response.data?.states || []);
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

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

      if (response.data.status === "success" && response.data.user?.uid) {
        const { user } = response.data;
        const { uid } = user;
        localStorage.setItem("token", uid);
        localStorage.setItem("user", JSON.stringify(user));
        api.defaults.headers.common["Authorization"] = `Bearer ${uid}`;
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
    toast.success("Logged out successfully.");
    setAuthError(null);
   
  };

  // Forgot password function
  const forgotPassword = async (email) => {
    try {
      setAuthError(null);
      const response = await api.post("/user/forgot-password", { email });

      if (response.data && response.data.message) {
        return response.data;
      } else {
        throw new Error("Password reset request failed");
      }
    } catch (err) {
      setAuthError(
        err.response?.data?.message ||
          "Password reset request failed. Please try again."
      );
      throw err;
    }
  };

  // Reset password function
  const resetPassword = async (userId, token, newPassword) => {
    try {
      setAuthError(null);
      const response = await api.post(
        `/user/reset-password/${userId}.${token}`,
        {
          newPassword,
        }
      );

      if (response.data && response.data.message) {
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
  const updateUserProfile = async (userId, userData) => {
    try {
      setAuthError(null);
      const response = await api.put(`/user/${userId}`, userData);

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

  // Context value
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
    login,
    signup,
    forgotPassword,
    resetPassword,
    logout,
    updateUserProfile,
    verifyUser,
    api,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
