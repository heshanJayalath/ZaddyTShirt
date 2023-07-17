import React from "react";
import { Link } from "react-router-dom";

const GarmetnAccountDetailsEdit = () => {
  return (
    <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
      <div className=" w-full text-center mt-12 mb-10">
        <h1 className="font-bold text-cyan-900 text-xl"> ACCOUNT DETAILS </h1>
      </div>

      <div className="w-full mt-4 mb-8">
        <div className="mx-8 w-full mb-4 ">
          <h2 className="font-bold text-gray-700 text-lg"> Comapny Details</h2>
        </div>

        <div className="md:flex w-full md:px-8">
        
            <div className="w-full text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4 ">
                Company Name
              </h5>
              <input
                className="p-2 rounded-md"
                type="text"
                value="Heshan Ravindu"
                name=""
                id=""
              />
            </div>

            <div className="w-full text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Bussiness Registration Number
              </h5>
              <input
                className="p-2 rounded-md"
                type="text"
                value="168613548416466"
                name=""
                id=""
              />
            </div>

            <div className="w-full text-center md:text-start  md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Company E-mail
              </h5>
              <input
                className="p-2 rounded-md"
                type="email"
                value="heshanravindu1999@gmail.com"
                name=""
                id=""
              />
            </div>

            <div className="w-full text-center md:text-start md:w-3/12">
              <h5 className="font-semibold text-slate-700 py-4">
                Company Contact Number
              </h5>
              <input
                className="p-2 rounded-md"
                type="email"
                value="0766546654"
                name=""
                id=""
              />
            </div>
         
        </div>
      

      <div className="md:flex w-full my-6 md:px-8">
        <div className="w-full text-center md:text-start md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">Address </h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="269/m, Asgiriya"
            name=""
            id=""
          />
        </div>
        <div className="w-full text-center md:text-start md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">City </h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="Gampaha"
            name=""
            id=""
          />
        </div>
      </div>
      </div>

      <div className="mx-8 w-full mt-16 mb-4 ">
        <h2 className="font-bold text-gray-700 text-lg"> Owner Details</h2>
      </div>

      <div className="md:flex w-full my-4 px-8">
        <div className="w-full text-center md:text-start md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Owner Frist Name
          </h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="Heshan "
            name=""
            id=""
          />
        </div>

        <div className="w-full text-center md:text-start md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Owner Second Name
          </h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="Ravindu"
            name=""
            id=""
          />
        </div>

        <div className="w-full text-center md:text-start  md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">Owner E-mail</h5>
          <input
            className="p-2 rounded-md"
            type="email"
            value="heshanravindu1999@gmail.com"
            name=""
            id=""
          />
        </div>

        <div className="w-full text-center md:text-start md:w-3/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Company Contact Number
          </h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="0766546654"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="mt-16 mx-8">
            <Link to='../account-details'>
            <button
        
        className="bg-[#002D74] w-3/12  md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
        type="submit"
      >
        Update
      </button>
            </Link> 
      
        

      </div>
    </div>
  );
};
export default GarmetnAccountDetailsEdit;
