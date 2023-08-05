import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";
import { GiDress } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const AdminSideBar = ({ active, setActive }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 1 ? "text-[red]" : ""} 800px:block`}
        >
          Dashboard
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 2 ? "text-[red]" : ""} 800px:block `}
        >
          All Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineShoppingCart size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 3 ? "text-[red]" : ""} 800px:block `}
        >
          All Products
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4)}
      >
        <HiOutlineUserGroup size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 4 ? "text-[red]" : ""} 800px:block `}
        >
          All Customers
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <GiDress size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 5 ? "text-[red]" : ""} 800px:block `}
        >
          All Garments
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <HiOutlineUsers size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 6 ? "text-[red]" : ""} 800px:block `}
        >
          System Users
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <GrUserSettings size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 7 ? "text-[red]" : ""} 800px:block `}
        >
          Settings
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || logoutHandler()}
      >
        <AiOutlineLogout size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 8 ? "text-[red]" : ""} 800px:block `}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AdminSideBar;
