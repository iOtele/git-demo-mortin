import React from "react";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Getloan from "../Components/Getloan";
import Section from "../Components/Section";
import LoanCalculator from "../Components/LoanCalculator";
import Sponsor from "../Components/Sponsor";
import ContactForm from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Getloan />
      <Section />
      <Sponsor />
      <LoanCalculator />
      <ContactForm />
    </div>
  );
};

export default Home;
