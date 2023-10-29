import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../Static/Customer/data";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Customer/CustomerHomePage/logo_zaddy.svg";
import prizeCHart from "../../Assets/Customer/CustomerHomePage/sizechart.jpeg";
import SizeModel from "../Customer/SizeModel";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-1 lg:grid-cols-3 gap-4 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <div className="flex gap-6">
            <div className="w-5/12 pt-2">
              <img
                className="w-50 h-50 items-center justify-center"
                src={Logo}
                alt=""
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div>
              <p className="m-4">
                All the T-shirts needeed to be perfect look.
              </p>
            </div>
          </div>

          <div className="flex items-center ml-4 mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
        <ul className="text-center mt-2 pl-16 sm:text-start">
          <h1 className="mb-1 font-semibold">Home</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <img
          onClick={() => setOpen(!open)}
          class="w-80 mt-2 max-w-lg transition-all duration-800 md:ml-0 m-auto flex rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src={prizeCHart}
          alt="image description"
        />
        
        {open ? (
          <SizeModel open={open} setOpen={setOpen} />
        ) : null}

        {/* <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Information</h1>
                    {footercompanyLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Support</h1>
                    {footerSupportLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul> */}
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 CST- Group3. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
