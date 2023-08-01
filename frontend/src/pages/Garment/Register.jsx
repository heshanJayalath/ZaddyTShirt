import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { server } from '../../server';
import FormData from "form-data";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [brNumber, setBrNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [city, setCity] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("username", username);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("companyName", companyName);
    newForm.append("brNumber", brNumber);
    newForm.append("companyEmail", companyEmail);
    newForm.append("companyAddress", companyAddress);
    newForm.append("city", city);
    newForm.append("companyContact", companyContact);

    axios.post(`${server}/garment/create-garment`, newForm, config)
      .then((res) => {
        
        console.log("garment data:",res.data);

        toast.success(res.data.message);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAvatar("");
        setCompanyName("");
        setBrNumber("");
        setCompanyEmail("");
        setCompanyAddress("");
        setCity("");
        setCompanyContact("");

      }).catch((err) => {
        toast.error(err.response.data.message);
      })
  }

  return (
    <section className="bg-gray-50  min-h-screen items-center justify-center">
      <div className="bg-gray-100 md:m-20 m-5 min-h-screen rounded-2xl shadow-lg max-w-full px-16 py-10  items-center">
        <div class="flex flex-col items-center">
          <h2 className="font-bold md:text-4xl text-xl text-[#002D74]">
            Garment Registration
          </h2>
          <p className="md:text-xl text-sm mt-4 my-8 text-[#002D74]">
            If you want to become a seller, Please Register
          </p>
        </div>

        <form className=" justify-center items-center content-center " onSubmit={handleSubmit}>
          <div className="md:flex  gap-4">
            <div className="md:w-1/2 md:pl-10 md:pr-5 pl-5 pr-5 ">
              <h5 className="p-2 font-bold md:text-2xl text-base text-[#002D74]">
                Owner Details
              </h5>
              <div className="relative">
                <input
                  className="p-2 mt-2 rounded-xl border  w-full"
                  type="text"
                  name="username"
                  autoComplete="username"
                  required
                  placeholder="Owner Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border  w-full"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Personal Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

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

              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={visible ? "password" : "text"}
                  name="confirmPassword"
                  placeholder="Confirm-Password"
                  autoComplete="confirm-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

              <div className="mt-10 flex items-center mb-12 md:mb-2">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-12 w-12" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload Company Logo</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-5 md:pr-10 pl-5 pr-5">
              <h5 className="p-2 font-bold md:text-2xl text-base text-[#002D74]">
                Company Details
              </h5>
              <div className="relative ">
                <input
                  className="p-2 mt-2 rounded-xl border  w-full"
                  type="text"
                  name="companyName"
                  autoComplete="Company username"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  placeholder=" Company name"
                />
              </div>

              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  name="brNumber"
                  value={brNumber}
                  onChange={(e) => setBrNumber(e.target.value)}
                  required
                  placeholder="BR Number"
                />
              </div>

              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="email"
                  name="companyEmail"
                  autoComplete="email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  required
                  placeholder="Company Email"
                />
              </div>

              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  name="companyAddress"
                  placeholder="add line1 add line2 add line3"
                  autoComplete="add1"
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  value={companyAddress}
                  required
                />
              </div>
              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  autoComplete="city"
                  required
                />
              </div>
              <div className="relative my-4">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  name="companyContact"
                  value={companyContact}
                  onChange={(e) => setCompanyContact(e.target.value)}
                  placeholder="Company Contact"
                  autoComplete="add3"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              className="bg-[#002D74] w-6/12  md:rounded-xl rounded-md text-white p-3 hover:scale-105 duration-300"
              type="submit"
            >
              Register Company
            </button>
          </div>
        </form>
        <div className="mt-5 text-xs flex items-center justify-center text-[#002D74]">
          <p className="p-5">Already have an account?</p>
          <Link to="/login-garment">
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
