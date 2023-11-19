import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../../server';
import { useNavigate, useParams } from 'react-router-dom';
import { backend_url } from '../../server';
import { serviceChargeStatus } from '../../Static/Customer/data';
import styles from '../../Styles/Customer/styles';
import { toast } from 'react-toastify';
const ManagerServiceChargeComponent = () => {
    const [data, setData] = useState();
    const { id } = useParams();
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(
            `${server}/servicecharge/manager-all-service-charges`, { withCredentials: true }
        ).then((res) => {
            setData(res.data.serviceCharges);
        })
    }, []);
    // {console.log("All SC:", data)}

    const handleChangeStatus = async (e) => {
        await axios
            .put(`${server}/servicecharge/update-service-charge-status/${id}`, {
                status,
            },
                { withCredentials: true }
            ).then((res) => {
                toast.success("Service Status Updated!");
                navigate('/manager-service-charges');
            }).catch((error) => {
                toast.success(error.response.data.message)
            })
    }

    const releventData = data && data.find((item) => item._id === id)
    return (
        <div className='flex justify-center mb-16 mt-16 '>
            
            <div className='shadow-md p-10 px-16  bg-slate-50'>
            <h1 className='mb-10 text-center font-semibold text-2xl font-mono text-gray-800'>Service Charge Invoice</h1>
                <div className='w-full text-base font-mono font-semibold text-md flex  justify-start' >
                    <h1>Company Name : </h1>
                    <h1> {releventData?.name}</h1>
                </div>
                <div className='flex font-mono text-md justify-end mb-8'>
                    <div>Fees : </div>
                    <div>Rs.{parseFloat(releventData?.fee).toFixed(2)}</div>
                </div>
                <div className='font-mono'>
                    <div>Payment Slip</div>
                    <div className='mt-4 bg-slate-50'>
                        <img
                            src={`${backend_url}/${releventData?.images[0]}`}
                            className='w-[400px]'
                        />
                    </div>
                </div>
                {
                    releventData?.status === "Pending" && (
                        <div>
                            <div>
                                Payment Status
                            </div>
                            <div>


                                <>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
                                    >
                                        <option value="">Select Status</option>
                                        {
                                            serviceChargeStatus &&
                                            serviceChargeStatus.map((i) => (
                                                <option value={i.title} key={i.title}>
                                                    {i.title}
                                                </option>
                                            ))
                                        }
                                    </select>

                                    <div onClick={handleChangeStatus} className={`${styles.button} bg-red-400 text-white`}>
                                        Update Status
                                    </div>
                                </>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ManagerServiceChargeComponent