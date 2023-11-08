import {React ,useState } from 'react'
import { AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlinePassword, MdOutlineTrackChanges } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { TbAddressBook } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom'
import styles from "../../Styles/Customer/styles";
import { RxCross1 } from "react-icons/rx";
import {  FaRegCreditCard } from 'react-icons/fa';
import {server} from '../../server'
import axios from 'axios';
import {toast} from 'react-toastify'
import { BiCustomize } from 'react-icons/bi';

const ProfileSideBar = ({ active, setActive }) => {
    const [open, setOpen] = useState(false);
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
    const logoutPopup=(value)=>{
        setOpen(value)
    }
    return (
        <div className='w-full bg-blue-20 shadow-md shadow-blue-300 pb-4 p-4 pt-8'>
            <div
                className="flex  justify-center hover:shadow-sm  py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(1)}
            >
                <RxPerson size={20} color={active === 1 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 1 ? "text-[red]" : ""} 800px:block`}
                >
                    Profile
                </span>
            </div>
            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(2)}
            >
                <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 2 ? "text-[red]" : ""} 800px:block `}
                >
                    Orders
                </span>
            </div>
            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(3)}
            >
                <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 3 ? "text-[red]" : ""} 800px:block `}
                >
                    Refunds
                </span>
            </div>
            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(4) || navigate("/inbox")}
            >
                <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 4 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Inbox
                </span>
            </div>

            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(5)}
            >
                <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 5 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Track Order
                </span>
            </div>

            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(6)}
            >
                <MdOutlinePassword size={20} color={active === 6 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 6 ? "text-[red]" : ""
                        } 800px:block `}
                >
                   Change Password
                </span>
            </div>

            <div
                className="flex justify-center hover:shadow-sm py-2 md:justify-start cursor-pointer w-full mb-4"
                onClick={() => setActive(7)}
            >
                <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
                <span
                    className={`hover:text-red-600 pl-3 ${active === 7 ? "text-[red]" : ""
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
                    className={`hover:text-red-600 pl-3 ${active === 8 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Custom-Orders
                </span>
            </div>
            <div
                className="flex justify-center md:justify-start cursor-pointer w-full mb-8"
                onClick={() => setActive(9) || logoutPopup(true)}
            >
                <AiOutlineLogout size={20} color={active === 9 ? "red" : ""} />
                <span
                    className={`pl-3 ${active === 9 ? "text-[red]" : ""
                        } 800px:block `}
                >
                    Logout
                </span>
            </div>
            {open && (
                    <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center hover:shadow-sm py-2 justify-center h-screen">
                        <div className="w-[25%] 800px:w-[40%] min-h-[20vh] bg-[#f9f9f99a]  hover:bg-[#f9f9f9c4] rounded shadow p-5">
                            <div className="w-full flex justify-end cursor-pointer">
                                <RxCross1 size={20} onClick={() => setOpen(false)} />
                            </div>
                            <h3 className="text-[20px] text-center py-3 font-normal font-Poppins text-[#000000cb]">
                                Are you sure you want to logout?
                            </h3>
                            <div className="w-full flex gap-2  pt-3 items-center justify-center">                   
                                <button onClick={() => {
                                    setOpen(false);
                                    setActive(1)
                                    logoutHandler();
                                     }
                                    } type="button" class="text-red-700  hover:text-white border font-semibold border-red-700 hover:bg-red-800  
                                focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                dark:border-red-500 focus:shadow-md focus:shadow-red-600 dark:text-red-700 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    confirm
                                    </button>

                                    <button onClick={() => {
                                    setOpen(false);
                                    setActive(1)
                                     }
                                    }  type="button" class="text-blue-900 hover:text-white border border-gray-800 hover:bg-gray-900 
                                     focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                    dark:border-gray-600 focus:shadow-md focus:shadow-gray-600 dark:text-gray-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                        cancel</button>

                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default ProfileSideBar