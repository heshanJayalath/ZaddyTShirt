import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllMyGarmentCustomOrders from '../../components/Garment/new/AllMyGarmentCustomOrders.jsx'
const GarmentMyCustomOrderPage = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <GarmentDashboardSideBar active={8} />
            </div>
            <div className="w-full justify-center flex">
                <AllMyGarmentCustomOrders />
            </div>
          </div>
    </div>
  )
}

export default GarmentMyCustomOrderPage