import React from "react";
import GarmentProductCard from "../../components/Garment/GarmentProductCard.jsx";
import { Link } from "react-router-dom";

const GarmentAllProduct = () => {
  return (
    <div>
      <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
        <div>
          <h1 className="text-center text-lg font-bold m-5"> ALL PRODUCTS</h1>
          <div className="flex place-content-between">
            <div class="flex  mx-14 items-center">
              <input
                id="purple-checkbox"
                type="checkbox"
                value="true"
                class="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="purple-checkbox "
                class="ml-2 text-sm my-4 font-medium text-gray-900 dark:text-gray-700"
              >
                SELECT ALL PRODUCTS
              </label>
            </div>
            <div className="mx-8">
              <Link to='add-new-product'>
              <button class=" mx-4 text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add New Product
              </button>
              </Link>
              <button class=" text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-800">
                Delete Products
              </button>
            </div>
          </div>

          <div className="px-2 w-full items-center justify-center">
            <div className="md:flex w-full items-center justify-center">
              <GarmentProductCard />
              <GarmentProductCard />
              <GarmentProductCard />
              <GarmentProductCard />
            </div>
            <div className="md:flex w-full items-center justify-center">
              <GarmentProductCard />
              <GarmentProductCard />
              <GarmentProductCard />
              <GarmentProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GarmentAllProduct;
