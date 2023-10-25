import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../server';
import FormData from "form-data";
import { toast } from 'react-toastify';
import { BiHomeAlt2 } from 'react-icons/bi';


const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios.post(`${server}/user/create-user`, newForm, config)
      .then((res) => {

        console.log("user data:", res.data);

        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAvatar("");
      }).catch((err) => {
        toast.error(err.response.data.message);
      })
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are not a member, Please Register</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="name"
              autoComplete='name'
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              autoComplete='email'
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={visible ? "password" : "text"}
                name="password"
                placeholder="Password"
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {visible ? (<AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(false)}
              />) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-3 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(true)}
                />)}
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={visible ? "password" : "text"}
                name="confirmPassword"
                placeholder="Confirm-Password"
                autoComplete='confirm-password'
                required value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {visible ? (<AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(false)}
              />) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-3 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(true)}
                />)}
            </div>
            <div className='mt-2 flex items-center'>
              <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                {
                  avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt='avatar'
                      className='h-full w-full object-cover rounded-full'
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )
                }
              </span>
              <label htmlFor='file-input'
                className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
              >
                <span>Upload Profile Photo</span>
                <input
                  type='file'
                  name='avatar'
                  id='file-input'
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className='sr-only'
                />
              </label>
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type='submit'>Register</button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Register with Google
          </button>


          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <Link to="/login"><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
          </div>
        </div>


        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://img.freepik.com/premium-vector/never-give-up-t-shirt-design_832611-3.jpg" />
        </div>

      </div>
      <div style={{ position: 'absolute', left: '0', top: '0', margin: '10px', color: "#fff", background: "#000", padding: "10px", borderRadius:"10px" }}>
        <Link to="/" className='flex'>
          <BiHomeAlt2 size={20} />
          Home
        </Link>
      </div>
    </section>
  )
}

export default Signup