import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllProducts from '../../components/Garment/new/AllProducts'

const GarmentAllProducts = () => {
    return (
        <div>
            <GarmentDashboardHeader />
            <div className="flex  justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <GarmentDashboardSideBar active={3} />
                </div>
                <div className="w-full justify-center flex">
                    <AllProducts/>
                </div>
            </div>
        </div>
    )
}

export default GarmentAllProducts