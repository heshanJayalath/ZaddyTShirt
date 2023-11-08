import React from 'react'
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { backend_url } from '../../../server.js';
import logo from '../../../Assets/Customer/CustomerHomePage/logo_zaddy.svg'

const GarmentDashboardHeader = () => {
    const { garment } = useSelector((state) => state.garment);
    console.log("garment Details: ",garment);
    return (
        <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
            <div>
                <Link to="/">
                    <img className='hover:shadow-md rounded-md hover:shadow-blue-400 px-4 h-20 '
                        src={logo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                
                    {/* <Link to="/garment-dashboard-events" className="800px:block ">
                        <MdOutlineLocalOffer
                            color="#555"
                            size={30}
                            className="mx-5 cursor-pointer"
                        />
                    </Link> */}
                    <Link to="/garment-dashboard-products" className="800px:block ">
                        <FiShoppingBag
                            color="#555"
                            size={30}
                            className="mx-5 hover:shadow-md hover:shadow-blue-800 rounded-md cursor-pointer"
                        />
                    </Link>
                    <Link to="/garment-dashboard-orders" className="800px:block ">
                        <FiPackage color="#555" size={30} className="mx-5 hover:shadow-md hover:shadow-blue-800 rounded-md cursor-pointer" />
                    </Link>
                    <Link to="/garment-dashboard-messages hover:shadow-md hover:shadow-blue-800 rounded-md" className="800px:block ">
                        <BiMessageSquareDetail
                            color="#555"
                            size={30}
                            className="mx-5 hover:shadow-md hover:shadow-blue-800 rounded-md cursor-pointer"
                        />
                    </Link>
                    <Link to={`/garment/${garment._id}`}>
                        <img
                            src={`${backend_url}/${garment.avatar}`}
                            alt=""
                            className="w-[50px] h-[50px]  rounded-full object-cover"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GarmentDashboardHeader