import React from "react";
import Header from "../../components/Customer/Header.jsx";
import AccountDropDown from "../../components/Garment/AccountDropDown";

function Account() {
  return (
    <section className="bg-gray-50 min-h-screen items-center justify-center">
     
      
      <div>
        <Header activeHeading={1} />
      </div>
      <div className="bg-cyan-200">
        <AccountDropDown />
      </div>
      <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">

      <div>
        <h1 className="text-center m-5"> ALL PRODUCTS</h1>
        <h6 className="p-1 px-20 bg-cyan-200 rounded-md"> SELECT ALL</h6>
      </div>
      </div>




    </section>
  );
}

export default Account;
