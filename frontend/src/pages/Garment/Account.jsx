import React from "react";
import Header from "../../components/Customer/Header.jsx";
import AccountDropDown from "../../components/Garment/AccountDropDown";
import Footer from "../../components/Customer/Footer.jsx";
import {Outlet } from "react-router-dom";

function Account() {
  return (
    <section className="bg-gray-50 min-h-screen items-center justify-center">
      <div>
        <Header activeHeading={1} />
      </div>
      <div className="bg-cyan-200">
        <AccountDropDown />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </section>
  );
}

export default Account;
