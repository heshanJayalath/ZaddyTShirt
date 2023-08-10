import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllEvents from '../../components/Garment/new/AllEvents'

const GarmentAllEvents = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <GarmentDashboardSideBar active={5} />
            </div>
            <div className="w-full justify-center flex">
                <AllEvents />
            </div>
          </div>
    </div>
  )
}

export default GarmentAllEvents