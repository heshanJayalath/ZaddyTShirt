import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { categoriesData, productData } from "../../Static/Customer/data";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import styles from "../../Styles/Customer/styles";
import DropDown from "./DropDown";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { backend_url } from "../../server";

const ResponsiveNaveBar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "Best Selling", link: "/best-selling" },
    { name: "Products", link: "/products" },
    { name: "Custom-Orders", link: "/custom-orders" },
    { name: "FAQ", link: "/faq" },
  ];
  const [open, setOpen] = useState(false);

  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(false);
  const { isGarment } = useSelector((state) => state.garment);
  const [openCart, setOpenCart] = useState(false);
  

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div
      className={`${
        active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
      } border-t-2 border-blue-400 shadow-blue-500 shadow-md w-full mb-1 top-0 left-0`}
    >
      <div className="md:flex items-center justify-between bg-white pb-1 px-4">
        <div className="font-bold text-base cursor-pointer flex items-center gap-1">
          <div>
            <div
              onClick={() => setDropDown(!dropDown)}
              className="relative h-[60px] bottom-0 mt-[10px] w-[270px]  1000px:block"
            >
              <BiMenuAltLeft size={30} className="absolute top-4  " />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-20 top-6 cursor-pointer"
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
        </div>
        {/* Menu icon */}

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active === true ? "absolute right-32 top-6" : null
            } absolute mt-1 right-32 top-24 cursor-pointer`}
          >
            {isAuthenticated ? (
              <Link to="/profile">
                <img
                  src={`${backend_url}/${user.avatar}`}
                  className="w-[32px] h-[32px] rounded-full"
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/login">
                <CgProfile size={30} className=" rgb(255 2555 255 / 83%)" />
              </Link>
            )}
          </div>
        </div>

        <div
          className={`${
            active === true ? "absolute right-16 top-6" : null
          } cursor-pointer mr-[15px] mt-1 absolute right-16 top-24`}
          onClick={() => setOpenCart(true)}
        >
          <AiOutlineShoppingCart
            size={30}
            className=" rgb(255 2555 255 / 83%)"
          />
          <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
            {cart && cart.length}
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`${
            active === true ? "absolute right-8 top-6" : null
          } mt-1 right-8 top-24 cursor-pointer md:hidden w-7 h-7 absolute z-20`}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
        
          className={`pb-12 absolute z-10 mt-6 md:static bg-white  left-0 w-full pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 absolute" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

         <div className={`${styles.button}`}>
            <Link
              to={`${isGarment ? "/garment-dashboard" : "/create-garment"}`}
            >
              <h1 className="text-[#fff] flex items-center">
                {isGarment ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>

        </ul>
        {/* button */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
      </div>
    </div>
  );
};

export default ResponsiveNaveBar;
