import React from "react";
import LoanSummaryDashboard from "../Components/LoanSummary";
import PaymentDueCard from "../Components/PaymentDueCard";

const Payment = () => {
  return (
    <>
      <PaymentDueCard />
      <LoanSummaryDashboard />
    </>
  );
};

export default Payment;
