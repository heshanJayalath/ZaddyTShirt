import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../server';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const GarmentLogin = () => {
    const navigate = useNavigate();
    const [companyEmail, setCompanyEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${server}/garment/login-garment`, {
            companyEmail,
            password,
        }, { withCredentials: true }).then((res) => {
            toast.success("Login Success!");
            navigate("/");
            window.location.reload(true);
        }).catch((err) => {
            toast.error(err.response.data.message);
        });
    }
    return (
        <div>
            <form className=" justify-center items-center content-center " onSubmit={handleSubmit}>
                <div className="md:flex  gap-4">


                    <div className="md:w-1/2 md:pl-5 md:pr-10 pl-5 pr-5">
                        <h5 className="p-2 font-bold md:text-2xl text-base text-[#002D74]">
                            Company Details
                        </h5>
                        <div className="relative ">
                            <input
                                className="p-2 mt-2 rounded-xl border  w-full"
                                type="text"
                                name="companyEmail"
                                autoComplete="Company Email"
                                value={companyEmail}
                                onChange={(e) => setCompanyEmail(e.target.value)}
                                required
                                placeholder=" Company Email"
                            />
                        </div>

                        <div className="relative my-4">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="text"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>


                    </div>
                </div>
                <div className="text-center mt-8">
                    <button
                        className="bg-[#002D74] w-6/12  md:rounded-xl rounded-md text-white p-3 hover:scale-105 duration-300"
                        type="submit"
                    >
                        Company Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default GarmentLogin