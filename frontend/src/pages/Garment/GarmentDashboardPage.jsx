import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader';
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar';

const GarmentDashboardPage = () => {
  return (
    <div>
      <GarmentDashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <GarmentDashboardSideBar active={1} />
        </div>
        {/* <GarmentDashboardHero /> */}
      </div>
    </div>
  )
}

export default GarmentDashboardPage