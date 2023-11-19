import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllMyGarmentCustomOrders from '../../components/Garment/new/AllMyGarmentCustomOrders.jsx'
const GarmentMyCustomOrderPage = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex justify-between w-full">
          
            <div className="w-2/12">
              <GarmentDashboardSideBar active={8} />
            </div>
            <div className="w-10/12 mx-4 ms-8 justify-center flex">
                <AllMyGarmentCustomOrders />
            </div>
          </div>
    </div>
  )
}

export default GarmentMyCustomOrderPage