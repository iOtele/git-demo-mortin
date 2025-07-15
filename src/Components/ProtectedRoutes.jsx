import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(StoreContext);

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
