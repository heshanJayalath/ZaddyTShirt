import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader.jsx'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar.jsx'
import AllGarmentCustomOrders from '../../components/Garment/new/AllGarmentCustomOrders.jsx';

const GarmentCustomOrderPage = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <GarmentDashboardSideBar active={5} />
            </div>
            <div className="w-full justify-center flex">
                <AllGarmentCustomOrders />
            </div>
          </div>
    </div>
  )
}

export default GarmentCustomOrderPage