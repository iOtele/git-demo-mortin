import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import SubmitComplete from "./Components/SubmitComplete";
import ApplicationSubmitted from "./Components/ApplicationSubmitted";
import ApiSample from "./Components/ApiSample";
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
const AppContent = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];
  const isVerifyRoute = location.pathname.startsWith("/verify/");

  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) || isVerifyRoute;

  return (
    <>
      <Navbar />
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
        <Route path="/footer" element={<Footer />} />
        <Route path="/submitcomplete" element={<SubmitComplete />} />
        <Route path="/creditscore" element={<CreditScore />} />
        <Route path="/apisample" element={<ApiSample />} />
        <Route
          path="/applicationsubmit"
          element={<ApplicationSubmitted />}
        />{" "}
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <AppContent />
    </BrowserRouter>
  );
};
export default App;
