import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, authLoading } = useContext(StoreContext);
  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
