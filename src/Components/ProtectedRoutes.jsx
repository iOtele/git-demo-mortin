import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser, authLoading } = useContext(StoreContext);

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected component
  return children;
};

export default ProtectedRoute;

// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { StoreContext } from "../Context/StoreContext";

// const ProtectedRoute = ({ children }) => {
//   const { currentUser, authLoading } = useContext(StoreContext);
//   if (authLoading) {
//     return (
//       <div className="flex h-screen items-center justify-center text-xl">
//         Loading...
//       </div>
//     );
//   }

//   return currentUser ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
