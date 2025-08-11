import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const rules = [
  {
    label: "At least 8 characters",
    test: (pw) => pw.length >= 8,
  },
  {
    label: "Mix of letters and numbers",
    test: (pw) => /[A-Za-z]/.test(pw) && /\d/.test(pw),
  },
  {
    label: "At least 1 special character",
    test: (pw) => /[^A-Za-z0-9]/.test(pw),
  },
  {
    label: "At least 1 lowercase letter and 1 uppercase letter",
    test: (pw) => /[a-z]/.test(pw) && /[A-Z]/.test(pw),
  },
];

function validatePassword(password) {
  return rules.every((rule) => rule.test(password));
}

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("sign-up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, login } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeTab === "login") {
      try {
        await login(email, password);
        toast.success("Logged in successfully.");
        navigate("/clientarea");
      } catch (error) {
        alert(
          error.response?.data?.message ||
            error.message ||
            "Login failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      if (!validatePassword(password)) {
        alert("Password does not meet all requirements.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        console.log({ email, password, confirm_password: confirmPassword });
        await signup({ email, password, confirm_password: confirmPassword });
        alert("Signup successful! Please log in.");
        setActiveTab("login");
      } catch (error) {
        alert(
          error.response?.data?.message ||
            error.message ||
            "Signup failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to MortIn
      </h1>

      <div className="flex border-b mb-4">
        <button
          className={`flex-1 p-2 text-lg font-medium transition-colors ${
            activeTab === "login"
              ? "border-b-2 border-yellow-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 p-2 text-lg font-medium transition-colors ${
            activeTab === "sign-up"
              ? "border-b-2 border-yellow-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("sign-up")}
        >
          Sign up
        </button>
      </div>

      <form className="text-left" onSubmit={handleSubmit}>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 mb-4 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder={
            activeTab === "login" ? "Enter password" : "Create password"
          }
          className="w-full p-2 mb-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {activeTab === "sign-up" && (
          <>
            <div className="mb-4 flex flex-col gap-1">
              {rules.map((rule, idx) => {
                const passed = rule.test(password);
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className={
                        passed
                          ? "text-green-600 font-bold"
                          : "text-gray-400 font-bold"
                      }
                    >
                      {passed ? "✔️" : "✖️"}
                    </span>{" "}
                    <span
                      className={
                        passed
                          ? "text-green-700 text-sm"
                          : "text-gray-600 text-sm"
                      }
                    >
                      {rule.label}
                    </span>{" "}
                  </div>
                );
              })}
            </div>
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Retype password"
              className="w-full p-2 mb-4 border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}

        <button
          disabled={
            !email ||
            !password ||
            (activeTab === "sign-up" &&
              (!validatePassword(password) || password !== confirmPassword)) ||
            (activeTab === "login" && (!email || !validatePassword(password)))
          }
          type="submit"
          className={`w-full py-2 bg-yellow-400 text-black font-semibold rounded-md ${
            !email ||
            !password ||
            (activeTab === "sign-up" &&
              (!validatePassword(password) || password !== confirmPassword)) ||
            (activeTab === "login" && (!email || !validatePassword(password)))
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {loading ? "Loading..." : activeTab === "login" ? "Login" : "Sign up"}
        </button>
        {activeTab == "sign-up" ? (
          <p className="text-sm text-gray-500 mt-2 text-center">
            By submitting, I accept MortIn's{" "}
            <a href="/terms" className="text-blue-600">
              terms of use
            </a>
            .
          </p>
        ) : (
          <Link to="/forgot-password">
            {" "}
            <div className="flex justify-center my-5 text-gray-600 font-medium cursor-pointer">
              Forgot Password
            </div>
          </Link>
        )}
      </form>

      <div className="mt-6 border-t pt-4">
        <p className="text-lg text-gray-700 py-2">Or Connect with:</p>
        <div className="space-y-2 ">
          <button className="flex justify-center items-center w-full p-2 border rounded-md">
            <img src={assets.Google} alt="Google" className=" w-5   " />
            <p className="text-center w-full ">Continue with Google</p>{" "}
          </button>
          <button className="flex items-center justify-center w-full p-2 border rounded-md">
            <img src={assets.Facebook} alt="Facebook" className="w-5 mr-2" />{" "}
            <p className="text-center w-full ">Continue with Facebook</p>
          </button>
          <button className="flex items-center justify-center w-full p-2 border rounded-md">
            <img src={assets.Apple} alt="Apple" className="w-5 mr-2" />
            <p className="text-center w-full ">Continue with Apple</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
