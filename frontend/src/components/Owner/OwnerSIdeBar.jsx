import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
  HiOutlineCash,
  HiOutlineUsers,
} from "react-icons/hi";
import { GiDress } from "react-icons/gi";
import { RiUserSettingsLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const OwnerSIdeBar = ({ active }) => {
  // const navigate = useNavigate();
  // const logoutHandler = () => {
  //   axios
  //     .get(`${server}/user/logout`, { withCredentials: true })
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       window.location.reload(true);
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message);
  //     });
  // };
  return (
    <div className="w-full md:w-2/12 md:mx-0 bg-white shadow-sm rounded-[10px] fixed md:h-auto h-60 pl-4 pt-8 overflow-y-scroll">
      <div
        className="flex  text-gray-600 items-center cursor-pointer w-full mb-8">
        <Link to="/owner/dashboard" className="w-full flex items-center">
          <RxPerson size={30} color={active === 1 ? "red" : ""} />
          <span
            className={` text-lg pl-3 ${active === 1 ? " text-[red]" : ""} 800px:block`}
          >
            Dashboard
          </span>
        </Link>
      </div>
      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8">
        <Link to="/owner-orders" className="w-full flex items-center">
          <HiOutlineShoppingBag size={30} color={active === 2 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 2 ? "text-[red]" : ""} 800px:block `}
          >
            All Orders
          </span>
        </Link>
      </div>
      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8">
        <Link to="/owner-products" className="w-full flex items-center">
          <HiOutlineShoppingCart size={30} color={active === 3 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 3 ? "text-[red]" : ""} 800px:block `}
          >
            All Products
          </span>
        </Link>
      </div>
      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8">
        <Link to="/owner-users" className="w-full flex items-center">

          <HiOutlineUserGroup size={30} color={active === 4 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 4 ? "text-[red]" : ""} 800px:block `}
          >
            All Customers
          </span>
        </Link>
      </div>

      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8"
      >
        <Link to="/owner-garments" className="w-full flex items-center">

          <GiDress size={30} color={active === 5 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 5 ? "text-[red]" : ""} 800px:block `}
          >
            All Garments
          </span>
        </Link>
      </div>

      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8"
      >
        <Link to="/manager-transaction" className="w-full flex items-center">

          <HiOutlineCash size={30} color={active === 6 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 6 ? "text-[red]" : ""} 800px:block `}
          >
            Transactions
          </span>
        </Link>
      </div>

      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8"

      >
        <HiOutlineUsers size={30} color={active === 9 ? "red" : ""} />
        <span
          className={`pl-3 text-lg ${active === 9 ? "text-[red]" : ""} 800px:block `}
        >
          System Users
        </span>
      </div>

      <div
        className="flex text-gray-600 items-center cursor-pointer w-full mb-8"
      >
        <Link to="/profile" className="w-full flex items-center">

          <RiUserSettingsLine size={30} color={active === 7 ? "red" : ""} />
          <span
            className={`pl-3 text-lg ${active === 7 ? "text-[red]" : ""} 800px:block `}
          >
            Settings
          </span>
        </Link>
      </div>
      
    </div>
  );
};

export default OwnerSIdeBar;
