import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader';
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar';
import AllServiceCharges from '../../components/Garment/new/AllServiceCharges';

const GarmentDashboardPage = () => {
  return (
    <div>
      <GarmentDashboardHeader />
      <div className="md:flex items-start justify-between w-full">
        <div className="md:w-2/12 ">
          <GarmentDashboardSideBar active={9} />

        </div>

        <div className='w-10/12'>
          <AllServiceCharges />
        </div>

      </div>
    </div>
  )
}

export default GarmentDashboardPage