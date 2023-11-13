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
        <>
            <div>
                <div>
                    <div>Company Name:</div>
                    <div>{releventData?.name}</div>
                </div>
                <div>
                    <div>Fees:</div>
                    <div>Rs.{releventData?.fee}.00</div>
                </div>
                <div>
                    <div>Payment Slip:</div>
                    <div>
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
        </>
    )
}

export default ManagerServiceChargeComponent