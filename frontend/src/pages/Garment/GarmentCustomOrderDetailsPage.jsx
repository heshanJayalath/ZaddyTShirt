import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import Header from '../../components/Customer/Header'
import Footer from '../../components/Customer/Footer'
import GarmentCustomOrderDetails from '../../components/Garment/new/GarmentCustomOrderDetails'

const GarmentCustomOrderDetailsPage = () => {
  return (
    <div>
        <Header/>
        <GarmentCustomOrderDetails/>
        <Footer/>
        
    </div>
  )
}

export default GarmentCustomOrderDetailsPage