import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import Footer from '../../components/Customer/Footer'
import CustomerOrderDetails from '../../components/Customer/CustomerOrderDetails'

const OrderDetailsPage = () => {
    return (
        <div>
            <GarmentDashboardHeader />
            <CustomerOrderDetails />
            <Footer />
        </div>
    )
}

export default OrderDetailsPage