import React from "react";
import { Link } from "react-router-dom";

const GarmentAccountDetails = () => {
  return (
    <div>
      <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
        <div className=" w-full text-center mt-12 mb-10">
          <h1 className="font-bold text-cyan-900 text-xl"> ACCOUNT DETAILS </h1>
        </div>

        <div className="w-full mt-4 mx-8 mb-8">
          <div className="mx-8 w-full mb-4 ">
            <h2 className="font-bold text-gray-700 text-lg">
              {" "}
              Comapny Details
            </h2>
          </div>

          <div className="md:flex w-full px-8">
            <div className="w-full mb-4 text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4 text-lg">
                Company Name
              </h5>
              <p>ABC Company</p>
            </div>

            <div className="w-full mb-4 text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Bussiness Registration Number
              </h5>
              <p>168613548416466</p>
            </div>

            <div className="w-full mb-4 text-center md:text-start  md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Company E-mail
              </h5>
              <p>heshanravindu1999@gmail.com</p>
            </div>

            <div className="w-full mb-4 text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Company Contact Number
              </h5>
              <p>0766546654</p>
            </div>
          </div>

          <div className="md:flex w-full md:my-6 px-8">
            <div className="w-full mb-4 text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">Address </h5>
              <p>269/m, Asgiriya</p>
            </div>
            <div className="w-full mb-4 text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">City </h5>
              <p>Gampaha</p>
            </div>
          </div>

          <div className="mx-8 w-full mt-16 mb-4 ">
            <h2 className="font-bold text-gray-700 text-lg"> Owner Details</h2>
          </div>

          <div className="md:flex w-full my-4 px-8">
            <div className="w-full text-center mb-4 md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">Owner Name</h5>
              <p>Heshan Ravindu</p>
            </div>

            <div className="w-full text-center mb-4 md:text-start  md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Owner E-mail
              </h5>
              <p>heshanravindu1999@gmail.com</p>
            </div>

            <div className="w-full text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Company Contact Number
              </h5>
              <p>0766546654</p>
            </div>
          </div>

          <div className="mt-16 mx-8">
            <Link to={"account-details-edit"}>
              <button
                className="bg-[#002D74] w-3/12  md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
                type="submit"
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GarmentAccountDetails;
