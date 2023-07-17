import React from "react";
import uparrow from '../../Assets/Garment/report/uparrow.png'

const GarmentViewReport = () => {
  return (
    <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
      <div className=" w-full text-center mt-12 mb-10">
        <h1 className="font-bold text-cyan-900 text-xl"> ACCOUNT REPORT </h1>
      </div>

      <div className="w-full md:flex px-16 py-8">
        <div className="w-full md:w-1/4  rounded-xl bg-white px-6 py-8  m-4">
          <h2 className="text-slate-600 font-medium text-base mb-6">
            Total Products Sales
          </h2>
          <h1 className="text-center text-green-600 font-semibold text-6xl mb-8">
            132
          </h1>
          <div className="flex justify-center mt-4">
            <h2 className="text-start mt-2 ms-4 me-2">previous 30 days </h2>
            <img
              class="w-4 h-8 mt-1 me-4 object-cover rounded-full"
              src={uparrow}
              alt=""
            />
            <h2 className="font-medium text-slate-600 text-center text-3xl">12</h2>
          </div>
        </div>
        <div className="w-1/4 text-center font-semibold text-lg rounded-lg bg-cyan-200 m-4">
          <h2>Total Sales</h2>
        </div>
        <div className="w-1/4 text-center rounded-lg bg-cyan-200 m-4">
          <h2>Total Sales</h2>
        </div>
        <div className="w-1/4 text-center rounded-lg bg-cyan-200 m-4">
          <h2>Total Sales</h2>
        </div>
      </div>
    </div>
  );
};
export default GarmentViewReport;
