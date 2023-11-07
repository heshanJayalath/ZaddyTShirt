import React from "react";
import CustomProduct from "../../components/Customer/CustomeProduct";
import Header from "../../components/Customer/Header.jsx";
import Footer from "../../components/Customer/Footer.jsx";
import BestDeals from "../../components/Customer/Route/BestDeals.jsx";

const CustomOrders = () => {
  return (
    <div className="bg-white">
      <div >
        <Header />
      </div>
    
      <div className="flex justify-center  ">
     
        <CustomProduct />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomOrders;
