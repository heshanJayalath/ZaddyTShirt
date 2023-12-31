import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

const GarmentLogin = () => {
  const navigate = useNavigate();
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${server}/garment/login-garment`,
        {
          companyEmail,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <section className="bg-gray-50 flex min-h-screen items-center justify-center">
      <div className="bg-gray-100 md:m-20 m-5 min-h-screen rounded-2xl shadow-lg md:w-4/12 px-16 py-10  items-center">
        <div class="flex flex-col items-center">
          <h2 className="font-bold mt-6 md:text-4xl text-xl text-[#002D74]">
            Garment Login
          </h2>
          <p className="md:text-xl text-sm mt-4 my-8 text-[#002D74]">
            Login for your seller account
          </p>
        </div>
        <div className=" place-content-center w-full flex">
          <form className="w-full" onSubmit={handleSubmit}>
            <div>
              <div className="relative my-6">
                <input
                  className="p-2 rounded-xl border  w-full"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Garment Email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </div>

              <div className="relative my-8">
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

              <button
                className="bg-[#002D74] mt-4 w-full rounded-xl text-white py-2 hover:scale-105 duration-300"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 mb-10 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        {/* <button className="bg-white border py-2 w-full rounded-xl mt-4 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    Login with Google
                </button> */}

        <div className="mt-10 mb-2 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
          <a href="#">Forgot your password?</a>
        </div>

        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
          <p>Don't have a seller account?</p>
          <Link to="/create-garment">
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Become Seller
            </button>
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            margin: "10px",
            color: "#fff",
            background: "#000",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Link to="/" className="flex">
            <BiHomeAlt2 size={20} />
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GarmentLogin;
