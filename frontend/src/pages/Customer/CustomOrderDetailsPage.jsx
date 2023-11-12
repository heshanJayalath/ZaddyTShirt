import React from "react";
import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";
import CustomerCustomOrderDetails from "../../components/Customer/CustomerCustomOrderDetails";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader";


const CustomOrderDetailsPage = () => {
  return (
    <div>
      <div className="md:block hidden">
        <Header activeHeading={1} />
      </div>
      <div className="md:hidden block z-10">
        <ResponsiveHeader />
      </div>
      <CustomerCustomOrderDetails />
      <Footer />
    </div>
  );
};

export default CustomOrderDetailsPage;
