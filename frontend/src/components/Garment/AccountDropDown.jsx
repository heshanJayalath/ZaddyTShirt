import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import iconAvatar from "../../Assets/Garment/accuont/avatargirl.png";


export const AccountDropDown = () => {
  const [isOpen, setIsOpen] =useState(false)
  return (
    <div class=" flex p-2 px-5 items-center space-x-4 bg-cyan-200">
    <div>
      <div className="flex">
        <button onClick={()=> setIsOpen((prev)=>!prev)} className=" block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-500 focus:border-white">
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
         <div className=" fixed mt-2 w-45 bg-gray-200 rounded-lg py-1 shadow-xl ">
         <a
           href="#"
           className="block px-4 py-2 pt-3 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           ALL PRODUCTS
         </a>
         <a
           href="#"
           className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           GARMENT DETAILS
         </a>
         <a
           href="#"
           className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           OWNER DETAILS
         </a>
         <a
           href="#"
           className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           PAYMENT DETAILS
         </a>
         <a
           href="#"
           className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           CHANGE PASSWORD
         </a>
         <a
           href="#"
           className="block px-4 py-2 pb-3 text-gray-800 hover:text-white hover:bg-indigo-500"
         >
           LOGOUT
         </a>
       </div>

      )}

     
    </div>
  </div>
  )


 
}
export default  AccountDropDown
