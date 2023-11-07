import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import DashboardMessages from '../../components/Garment/DashboardMessages'

const GarmentInboxPage = () => {
  return (
    <div>
    <GarmentDashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] w-[330px]">
        <GarmentDashboardSideBar active={6} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default GarmentInboxPage