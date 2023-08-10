import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import CreateEvent from '../../components/Garment/new/CreateEvent';

const GarmentCreateEvents = () => {
    return (
        <div>
            <GarmentDashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className="w-[330px]">
                    <GarmentDashboardSideBar active={6} />
                </div>
                <div className="w-full justify-center flex">
                    <CreateEvent />
                </div>
            </div>
        </div>
    )
}

export default GarmentCreateEvents