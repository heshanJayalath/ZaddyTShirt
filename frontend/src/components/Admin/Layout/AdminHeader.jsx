import React from 'react'
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { backend_url } from '../../../server.js';
import logo from '../../../Assets/Customer/CustomerHomePage/logo_zaddy.svg'

const AdminHeader = () => {
    const { garment } = useSelector((state) => state.garment);
    console.log("garment Details: ",garment);
    return (
        <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center  px-4">
            <div className='w-6/12'>
                <Link to="/">
                    <img className='px-4 w-24'
                        src={logo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex items-center text-center w-6/12">
            <h1 className='font-medium  text-gray-600'>Admin Panel</h1>
            </div>
        </div>
    )
}

export default AdminHeader