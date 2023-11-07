import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllRefundOrders from '../../components/Garment/new/AllRefundOrders'

const GarmentAllRefunds = () => {
  return (
    <div>
    <GarmentDashboardHeader />
    <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <GarmentDashboardSideBar active={7} />
        </div>
        <div className="w-full justify-center flex">
           <AllRefundOrders />
        </div>
      </div>
</div>
  )
}

export default GarmentAllRefunds