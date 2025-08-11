import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./Components/Navbar";
import SubmitComplete from "./Components/SubmitComplete";
import ApplicationSubmitted from "./Components/ApplicationSubmitted";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CreditScore from "./Pages/CreditScore";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import Profile from "./Pages/Profile";
import VerifySuccess from "./Pages/VerifySuccess";
import Signup from "./Pages/Signup";
import Calculator from "./Pages/Calculator";
import Verification from "./Pages/Verification";
import MyApplication from "./Pages/MyApplication";
import ClientArea from "./Pages/ClientArea";
import ProtectedRoute from "./Components/ProtectedRoutes";
import UpdatePasswordForm from "./Pages/UpdatePasswordForm";
import ForgotPasswordForm from "./Pages/ForgotPasswordForm";
import ForgotPasswordSuccess from "./Pages/ForgotPasswordSuccess";

const AppContent = () => {
  const location = useLocation();
  const hideFooterRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/forgot-password-success",
    "/reset-password",
    "/update-password",
    "/verify/:user/:token",
  ];
  const isVerifyRoute = location.pathname.startsWith("/verify");

  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) || isVerifyRoute;

  return (
    <>
      {!shouldHideFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:user/:token" element={<VerifySuccess />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/update-password" element={<UpdatePasswordForm />} />
        <Route
          path="/forgot-password-success"
          element={<ForgotPasswordSuccess />}
        />
        <Route
          path="/clientarea"
          element={
            <ProtectedRoute>
              <ClientArea />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myapplication"
          element={
            <ProtectedRoute>
              <MyApplication />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verification"
          element={
            <ProtectedRoute>
              <Verification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submitcomplete"
          element={
            <ProtectedRoute>
              <SubmitComplete />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creditscore"
          element={
            <ProtectedRoute>
              <CreditScore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applicationsubmit"
          element={
            <ProtectedRoute>
              <ApplicationSubmitted />
            </ProtectedRoute>
          }
        />{" "}
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
};
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
export default App;
