import React from "react";
import CustomProduct from "../../components/Customer/CustomeProduct";
import Header from "../../components/Customer/Header.jsx";
import Footer from "../../components/Customer/Footer.jsx";

const CustomOrders = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="flex justify-center mb-12 ">
        <CustomProduct />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomOrders;
