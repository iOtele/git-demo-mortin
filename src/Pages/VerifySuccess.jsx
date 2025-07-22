import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const VerifySuccess = () => {
  const { user, token } = useParams();
  const { verifyUser } = useContext(StoreContext);
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");

  useEffect(
    () => {
      const doVerify = async () => {
        try {
          const result = await verifyUser(user, token);
          setStatus("success");
          setMessage(
            result.message || "Your account has been verified successfully."
          );
        } catch (error) {
          setStatus("error");
          setMessage(
            error.message ||
              "Verification failed. Please try again or contact support."
          );
        }
      };
      doVerify();
    },
    [user, token]
    // [uid, token, verifyUser]
  );

  return (
    <div className="py-20 bg-gray-50 flex items-center justify-center p-4 border border-gray-200">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          {status === "success"
            ? "Verification Successful"
            : status === "error"
            ? "Verification Failed"
            : "Verifying..."}
        </h1>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center animate-pulse ${
                status === "success"
                  ? "bg-green-50"
                  : status === "error"
                  ? "bg-red-50"
                  : "bg-gray-100"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${
                  status === "success"
                    ? "bg-green-100"
                    : status === "error"
                    ? "bg-red-100"
                    : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center animate-pulse ${
                    status === "success"
                      ? "bg-green-500"
                      : status === "error"
                      ? "bg-red-500"
                      : "bg-gray-400"
                  }`}
                >
                  {status === "success" ? (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : status === "error" ? (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {status === "pending" ? "Verifying your account..." : message}
        </p>
        <Link to="/verification">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifySuccess;
