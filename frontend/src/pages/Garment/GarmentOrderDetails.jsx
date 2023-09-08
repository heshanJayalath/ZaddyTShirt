import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import Footer from '../../components/Customer/Footer'
import OrderDetails from '../../components/Garment/new/OrderDetails'

const GarmentOrderDetails = () => {
    return (
        <div>
            <GarmentDashboardHeader />
            <OrderDetails />
            <Footer />
        </div>
    )
}

export default GarmentOrderDetails