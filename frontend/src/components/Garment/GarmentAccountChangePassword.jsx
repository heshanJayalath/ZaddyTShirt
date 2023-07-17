import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const GarmentAccountChangePassword = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);

  return (
    <div className="bg-gray-100 md:m-5 m-5 min-h-screen rounded-2xl shadow-lg max-w-full py-2  items-center">
      <div className=" w-full text-center mt-12 mb-10">
        <h1 className="font-bold text-cyan-900 text-xl"> CHANGE PASSWORD </h1>
      </div>
      <div className="md:flex w-full p-8 items-center justify-between">
        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Current Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>

        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold w-full text-slate-700 py-4">
            New Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible1 ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            {visible1 ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible1(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible1(true)}
              />
            )}
          </div>
        </div>

        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Fonfirm Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible2 ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {visible2 ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible2(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible2(true)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-12  px-14 mx-1">
        <Link to="../allproduct">
          <button
            className="bg-[#002D74] md:w-3/12 w-full md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
            type="submit"
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};
export default GarmentAccountChangePassword;
