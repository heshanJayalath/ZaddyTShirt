import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import AllProducts from '../../components/Garment/new/AllProducts'

const GarmentAllProducts = () => {
    return (
        <div>
            <GarmentDashboardHeader />
            <div className="flex  justify-between w-full">
                <div className="w-1/6 800px:w-[330px]">
                    <GarmentDashboardSideBar active={3} />
                </div>
                <div className="w-5/6 px-12 justify-center flex">
                    <AllProducts/>
                </div>
            </div>
        </div>
    )
}

export default GarmentAllProducts