import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllOrders from '../../components/Garment/new/AllOrders'

const GarmentAllOrders = () => {
  return (
    <div>
    <GarmentDashboardHeader />
    <div className="md:flex items-start justify-between w-full">
      <div className="md:w-2/12 ">
        <GarmentDashboardSideBar active={2} />

      </div>

      <div className='w-10/12 pt-10 me-4 ms-12'>
        <AllOrders />
      </div>

    </div>
  </div>
  )
}

export default GarmentAllOrders