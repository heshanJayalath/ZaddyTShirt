import React from 'react'
import logo from '../../Assets/Customer/CustomerHomePage/logo_zaddy.svg'
import { Link } from 'react-router-dom';

const OwnerHeader = () => {
  return (
    <div>
      <div className="w-full h-[80px] bg-white shadow static top-0 left-0 z-30 flex items-center  px-4">
            <div className='w-6/12'>
                <Link to="/">
                    <img className='px-4 w-24'
                        src={logo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex items-center text-center w-6/12">
            <h1 className='font-medium  text-gray-600'>Owner Dashbord</h1>
            </div>
        </div>
    </div>
  )
}

export default OwnerHeader
