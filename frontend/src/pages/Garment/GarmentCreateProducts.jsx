import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import CreateProduct from '../../components/Garment/new/CreateProduct'
const GarmentCreateProducts = () => {
  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <GarmentDashboardSideBar active={4} />
            </div>
            <div className="w-full justify-center flex">
                <CreateProduct />
            </div>
          </div>
    </div>
  )
}

export default GarmentCreateProducts