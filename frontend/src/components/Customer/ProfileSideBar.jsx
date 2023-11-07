import React from 'react'
import { AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlinePassword, MdOutlineTrackChanges } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { TbAddressBook } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom'
import {  FaRegCreditCard } from 'react-icons/fa';
import {server} from '../../server'
import axios from 'axios';
import {toast} from 'react-toastify'
import { BiCustomize } from 'react-icons/bi';

const ProfileSideBar = ({ active, setActive }) => {
    const navigate = useNavigate();
    const logoutHandler = () =>{
        axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
            toast.success(res.data.message);
            window.location.reload(true);
            navigate("/login");         
        }).catch((error)=>{
            console.log(error.response.data.message);
        })
    }
    return (
        <div className='w-full bg-blue-20 shadow-md shadow-blue-300 rounded-[10px] p-4 pt-8'>
            <div
                className="flex  justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(1)}
            >
                <RxPerson size={20} color={active === 1 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 1 ? "text-[red]" : ""} 800px:block`}
                >
                    Profile
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(2)}
            >
                <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 2 ? "text-[red]" : ""} 800px:block `}
                >
                    Orders
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(3)}
            >
                <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 3 ? "text-[red]" : ""} 800px:block `}
                >
                    Refunds
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(4) || navigate("/inbox")}
            >
                <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 4 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Inbox
                </span>
            </div>

            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(5)}
            >
                <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 5 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Track Order
                </span>
            </div>

            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(6)}
            >
                <MdOutlinePassword size={20} color={active === 6 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 6 ? "text-[red]" : ""
                        } 800px:block `}
                >
                   Change Password
                </span>
            </div>

            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(7)}
            >
                <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 7 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Address
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(8)}
            >
                <BiCustomize size={20} color={active === 8 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 8 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Custom-Orders
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(9) || logoutHandler()}
            >
                <AiOutlineLogout size={20} color={active === 9 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 9 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Logout
                </span>
            </div>
        </div>
    )
}

export default ProfileSideBar