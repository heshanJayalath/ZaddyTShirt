import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllRefundOrders from '../../components/Garment/new/AllRefundOrders'

const GarmentAllRefunds = () => {
  return (
   <div>
    <GarmentDashboardHeader />
    <div className="md:flex items-start justify-between gap-2 w-full">
      <div className="md:w-2/12 ">
        <GarmentDashboardSideBar active={7} />

      </div>

      <div className='w-10/12 mx-4 flex justify-center'>
        <AllRefundOrders />
      </div>

    </div>
  </div>
  )
}

export default GarmentAllRefunds