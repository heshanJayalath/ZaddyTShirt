import React from "react";
import {
  IoCashOutline,
  IoBagHandle,
  IoPieChart,
  IoPeople,
  IoCart,
} from "react-icons/io5";
import { GiDress } from "react-icons/gi";

export default function AdminDashboardGrid() {
  return (
    <div className=" w-full mb-16">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">Dashboard </h1>
      </div>
      <div className="md:flex gap-16 py-4 px-16 w-full"></div>
      <div className="md:flex md:gap-16 pb-16 px-16 w-full">
        <div className="py-16">
        <BoxWrapper>
          <div className="flex w-full items-center rounded-md  p-8 justify-center">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-yellow-400">
              <IoPeople className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-2xl mt-8 text-gray-500 font-medium">
                Total Customers
              </span>
              <div className="flex items-center">
                <strong className="text-2xl mt-4 text-gray-700 font-semibold">
                  12313
                </strong>
                <span className="text-lg mt-4 text-green-500 pl-2">-30</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        </div>
        
        <div>
        <BoxWrapper>
          <div className="flex w-full items-center rounded-md p-8 justify-center">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-green-600">
              <IoCart className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-2xl mt-8 text-gray-500 font-medium">
                Total Orders
              </span>
              <div className="flex items-center">
                <strong className="text-2xl mt-4 text-gray-700 font-semibold">
                  16432
                </strong>
                <span className="text-lg mt-4 text-green-500 pl-2">-43</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        </div>
       
      </div>

      <div className="md:flex gap-16 px-16 w-full">
        <div className="pb-16">
        <BoxWrapper>
          <div className="flex w-full items-center rounded-md p-8 justify-center">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-orange-300">
              <GiDress className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-2xl mt-8 text-gray-500 font-medium">
                Total Garments
              </span>
              <div className="flex items-center">
                <strong className="text-2xl mt-4 text-gray-700 font-semibold">
                  123
                </strong>
                <span className="text-lg mt-4 text-green-500 pl-2">+10</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        </div>
        <div>
        <BoxWrapper>
          <div className="flex w-full items-center rounded-md p-8 justify-center">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-slate-400">
              <IoBagHandle className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-2xl mt-8 text-gray-500 font-medium">
                Total Products
              </span>
              <div className="flex items-center">
                <strong className="text-2xl mt-4 text-gray-700 font-semibold">
                  1643
                </strong>
                <span className="text-lg mt-4 text-green-500 pl-2">+40</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        </div>
        
       
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
