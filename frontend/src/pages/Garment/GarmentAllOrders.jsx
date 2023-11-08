import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllOrders from '../../components/Garment/new/AllOrders'

const GarmentAllOrders = () => {
  return (
    <div>
            <GarmentDashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-1/6">
                  <GarmentDashboardSideBar active={2} />
                </div>
                <div className="w-5/6 px-8 justify-center flex">
                   <AllOrders />
                </div>
              </div>
        </div>
  )
}

export default GarmentAllOrders