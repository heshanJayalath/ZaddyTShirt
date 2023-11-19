import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader.jsx'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar.jsx'
import AllGarmentCustomOrders from '../../components/Garment/new/AllGarmentCustomOrders.jsx';

const GarmentCustomOrderPage = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex items-center  w-full">
            <div className="">
              <GarmentDashboardSideBar active={5} />
            </div>
            <div className="w-full px-4 ">
                <AllGarmentCustomOrders />
            </div>
          </div>
    </div>
  )
}

export default GarmentCustomOrderPage