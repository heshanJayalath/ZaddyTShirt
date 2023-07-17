import React from "react";
import { Link } from "react-router-dom";

const GarmentAccountPaymentDetails = () => {
  return (
    <div className="bg-gray-100 md:m-5 m-5 p-10 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
      <div className=" w-full text-center mt-12 mb-10">
        <h1 className="font-bold text-cyan-900 text-xl"> Payment DETAILS </h1>
      </div>

      <div className="w-full mt-4 mb-8">
        <div className="md:flex w-full justify-center items-center md:px-8">

          <div className="w-full text-center  p-8 md:text-start md:w-6/12">
            <h5 className="font-semibold text-slate-700 py-4 ">Select Bank</h5>
            <div className="w-full relative mt-2 mb-2">
              <select
                className="p-3 rounded-xl border  w-full"
                name="meterial"
                id="meterial"
              >
                <option value="">Select Bank</option>
                <option value="Cotton">Commercial Bank</option>
                <option value="Fannel">Sampath Bank</option>
                <option value="Silk">HNB Bank</option>
                
              </select>
            </div>

          </div>

          <div className="w-full text-center p-8 md:text-start  md:w-6/12">
            <h5 className="w-full font-semibold text-slate-700 py-4">
              Account Holder Name
            </h5>
            <input
              className="p-3 rounded-md w-full"
              
              type="email"
              value="R.A.H.R.Senarath"
              name=""
              id=""
            />
          </div>

         
        </div>

        <div className="md:flex w-full justify-center items-center md:px-8">

        <div className="w-full text-center p-8 md:text-start  md:w-6/12">
            <h5 className="w-full font-semibold text-slate-700 py-4">
              Account Number
            </h5>
            <input
              className="p-3 rounded-md w-full"
              
              type="email"
              value="3641623546163546645654"
              name=""
              id=""
            />
          </div>

          <div className="w-full text-center p-8 md:text-start  md:w-6/12">
            <h5 className="w-full font-semibold text-slate-700 py-4">
              Confirm Account Number
            </h5>
            <input
              className="p-3 rounded-md w-full"
              
              type="email"
              value="166861326846316841"
              name=""
              id=""
            />
          </div>

         
        </div>

      </div>

      <div className="mt-8 mb-10 p-16">
        <Link to='../allproduct'>
        <button
          className="bg-[#002D74] md:w-3/12 w-full  md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
          type="submit"
        >
          Update
        </button>
        </Link>
      </div>
    </div>
  );
};
export default GarmentAccountPaymentDetails;
