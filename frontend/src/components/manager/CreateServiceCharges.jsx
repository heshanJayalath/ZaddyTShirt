import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../../server'
import FormData from "form-data";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CreateServiceCharges = () => {
    // const { garment } = useSelector((state) => state.garment);

    const [data, setData] = useState([]);
    const [companyNames, setCompanyNames] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [fee, setFee] = useState();
    const [name, setName] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${server}/garment/manager-all-garments`, { withCredentials: true }).then((res) => {
            setData(res.data?.garment);
            // const distinctNames = [...new Set(data.map(charge => charge?.companyName))];
            // setCompanyNames(distinctNames);
            // console.log("distinctNames:", companyNames);
        }).catch((error) => {
            console.log("Error fetching data: ", error);
        })
    }, []);
    
    useEffect(() => {
        const distinctNames = [...new Set(data.map(charge => charge?.companyName))];
        setCompanyNames(distinctNames);
        console.log("distinctNames:", distinctNames);
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const newForm = new FormData();

        images.forEach((image) => {
            newForm.append("images", images);
        });
        newForm.append("garmentId", "Null")
        newForm.append("garmentName", name);
        newForm.append("status", "invoice");
        newForm.append("fee", fee);
        newForm.append("garment", "object")

        axios.post(`${server}/servicecharge/create-service-payment`, newForm, config)
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setFee(0);
                navigate("/manager/dashboard")
            }).catch((err) => {
                toast.error(err.response.data.message);
            });
    }

    return (
        <div className=" w-[100%]  md:w-[50%] bg-slate-50 mt-12 py-16 mb-8 shadow-md  rounded-[6px]  p-10">
            <h5 className="text-[30px] font-Poppins text-center">
                Create Invoice
            </h5>
            {/* create service charge form */}
            <form
                onSubmit={handleSubmit}
            >

                <div>
                    <label className="pb-2">
                        Company Name: <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full bg-slate-50 mt-2 border h-[35px] rounded-[5px]"
                        name="companyName"
                        id="companyName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    >
                        <option value="">Select Company</option>
                        {companyNames?.map((name) => (
                            <option value={name} key={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <br />

                <div>
                    <label className="pb-2">
                        Fee(Rs.) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="fee"
                        value={fee}
                        className="mt-2 bg-slate-50 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setFee(e.target.value)}
                        placeholder="Enter the total shirt Quntity"
                    />
                </div>

                <input
                    type="submit"
                    value="Send Invoice"
                    className="mt-4 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 hover:border-blue-200 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:border-blue-500 sm:text-sm"
                />
            </form>
        </div>
    )
}

export default CreateServiceCharges