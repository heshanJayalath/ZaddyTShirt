import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import DashboardMessages from '../../components/Garment/DashboardMessages'

const GarmentInboxPage = () => {
  return (
    <div>
    <GarmentDashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-2/12">
        <GarmentDashboardSideBar active={6} />
      </div>
      <div className='w-9/12 my-8'>
       <DashboardMessages />
      </div>
    </div>
  </div>
  )
}

export default GarmentInboxPage