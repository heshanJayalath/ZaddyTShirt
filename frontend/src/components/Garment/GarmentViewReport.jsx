import React from "react";
import uparrow from "../../Assets/Garment/report/uparrow.png";
import { Link } from "react-router-dom";
import TransactionChart from "./TransactionChart";
import SellerProfilePieChart from "./SellerPieChart";

const GarmentViewReport = () => {
  return (
    <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
      <div className=" w-full text-center mt-12 mb-6">
        <h1 className="font-bold text-cyan-900 text-xl"> Dashboard </h1>
      </div>

      <div className="w-full md:flex px-12 py-8">
        <div className="w-full md:w-1/4  rounded-xl bg-white px-6 py-8  m-4">
          <h2 className="text-slate-600 font-medium text-base mb-6">
            Total Products Sales
          </h2>
          <h1 className="text-center text-green-600 font-semibold text-5xl mb-8">
            132
          </h1>
          <div className="flex justify-start place-items-baseline mt-4">
            <h2 className="text-start mt-2 ms-4 me-2">previous 30 days </h2>
            <img
              class="w-4 h-8 mt-1 me-4 object-cover rounded-full"
              src={uparrow}
              alt=""
            />
            <h2 className="font-medium text-slate-600 text-center text-3xl">
              12
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/4 rounded-xl bg-white px-6 py-8  m-4">
          <h2 className="text-slate-600 font-medium text-base mb-6">
            Total Income
          </h2>
          <h1 className="text-center text-green-600 font-semibold text-5xl mb-8">
            Rs.45000
          </h1>
          <div className="flex justify-start place-items-baseline mt-4">
            <h2 className="text-start mt-2 ms-4 me-2">previous 30 days </h2>
            <img
              class="w-4 h-8 mt-1 me-4 object-cover rounded-full"
              src={uparrow}
              alt=""
            />
            <h2 className="font-medium text-slate-600 text-center text-2xl">
              8000
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/4 rounded-xl bg-white px-6 py-8  m-4">
          <h2 className="text-slate-600 font-medium text-base mb-6">
            Total Profit
          </h2>
          <h1 className="text-center text-green-600 font-semibold text-5xl mb-8">
            Rs.40000
          </h1>
          <div className="flex justify-start place-items-baseline mt-4">
            <h2 className="text-start mt-2 ms-4 me-2">previous 30 days </h2>
            <img
              class="w-4 h-8 mt-1 me-4 object-cover rounded-full"
              src={uparrow}
              alt=""
            />
            <h2 className="font-medium text-slate-600 text-center text-2xl">
              7200
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/4 rounded-xl bg-white px-6 py-8  m-4">
          <h2 className="text-slate-600 font-medium text-base mb-6">
            Growth Rate
          </h2>
          <h1 className="text-center text-green-600 font-semibold text-5xl mb-8">
            8.95%
          </h1>
          <div className="flex justify-start place-items-baseline mt-4">
            <h2 className="text-start mt-2 ms-4 me-2">previous 30 days </h2>
            <img
              class="w-4 h-8 mt-1 me-4 object-cover rounded-full"
              src={uparrow}
              alt=""
            />
            <h2 className="font-medium text-slate-600 text-center text-2xl">
              1.3%
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full mb-12 space-x-6 px-2 md:px-16 md:flex">
        <div className=" md:w-9/12">
          <TransactionChart />
        </div>
        <div className=" md:w-3/12 ">
          <SellerProfilePieChart />
        </div>

      </div>

      <div className="w-full mb-12">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-16">
          <h2 className="text-center mb-4 text-gray-700 font-medium">Total Seles of Each Category</h2>
          <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase py-2 bg-white dark:text-gray-700">
              <tr className="border-b dark:border-gray-300 my-2">
                <th scope="col" class="px-6 py-3">
                  Product Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity sold
                </th>
                <th scope="col" class="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class=" border-b bg-white dark:border-gray-300">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Men's Polo T Shirt
                </th>
                <td class="px-6 py-4">Blue</td>
                <td class="ps-12 py-4">45</td>
                <td class="px-6 py-4">85000</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class=" border-b bg-white dark:border-gray-300">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Men's Polo T Shirt
                </th>
                <td class="px-6 py-4">Blue</td>
                <td class="ps-12 py-4">45</td>
                <td class="px-6 py-4">85000</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class=" border-b bg-white dark:border-gray-300">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Men's Polo T Shirt
                </th>
                <td class="px-6 py-4">Blue</td>
                <td class="ps-12 py-4">45</td>
                <td class="px-6 py-4">85000</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class=" border-b bg-white dark:border-gray-300">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Men's Polo T Shirt
                </th>
                <td class="px-6 py-4">Blue</td>
                <td class="ps-12 py-4">45</td>
                <td class="px-6 py-4">85000</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

     
    </div>
  );
};
export default GarmentViewReport;
