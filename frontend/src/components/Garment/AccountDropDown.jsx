import React, { useState } from "react";
import iconAvatar from "../../Assets/Garment/accuont/avatargirl.png";
import { Link } from "react-router-dom";

export const AccountDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class=" flex p-2 px-5 items-center space-x-4 bg-cyan-200">
      <div>
        <div className="flex">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className=" block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-500 focus:border-white"
          >
            <img
              class="w-full h-full object-cover rounded-full"
              src={iconAvatar}
              alt=""
            />
          </button>
          <div class="font-medium mx-4 dark:text-slate-800">
            <div>Welcome</div>
            <div class="text-sm mt-1 text-gray-500 dark:text-gray-900">
              Heshan
            </div>
          </div>
        </div>

        {isOpen && (
          <div className=" mt-2 w-45 bg-cyan-200 rounded-lg py-1 shadow-xl ">
            <Link to="allproduct" onClick={() => setIsOpen(false)}>
              <div className="block px-4 py-2 pt-3 text-gray-800 hover:text-white hover:bg-indigo-500">
                ALL PRODUCTS
              </div>
            </Link>

            <Link to="view-report" onClick={() => setIsOpen(false)}>
              <div className="block px-4 py-2 pt-3 text-gray-800 hover:text-white hover:bg-indigo-500">
                VIEW REPORT
              </div>
            </Link>

            <Link
              to="account-details"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-500"
            >
              ACCOUNT DETAILS
            </Link>

            <Link to="payment-details" onClick={() => setIsOpen(false)}>
              <div
                href="#"
                className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500"
              >
                PAYMENT DETAILS
              </div>
            </Link>

            <Link to="change-password" onClick={() => setIsOpen(false)}>
              <div className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500">
                CHANGE PASSWORD
              </div>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500"
            >
              LOGOUT
            </Link>
          </div>
        )}
      </div>
      <div className=" w-9/12 flex items-center justify-center">
        <h1 className="ml-4 text-2xl font-bold text-gray-700">
          {" "}
          Garment Account
        </h1>
      </div>
    </div>
  );
};
export default AccountDropDown;
