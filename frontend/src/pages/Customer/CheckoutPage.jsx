import React from "react";
import Header from "../../components/Customer/Header";
import CheckoutSteps from "../../components/Customer/CheckoutSteps";
import Checkout from "../../components/Customer/Checkout";
import Footer from "../../components/Customer/Footer";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader";

const CheckoutPage = () => {
  return (
    <div>
      <div className="md:block hidden">
        <Header />
      </div>
      <div className="md:hidden block z-10">
        <ResponsiveHeader />
      </div>
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
