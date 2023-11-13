import React from 'react'
import Header from '../../components/Customer/Header'
import Footer from '../../components/Customer/Footer'
import ManagerServiceChargeComponent from '../../components/manager/ManagerServiceChargeComponent.jsx'

const ManagerServiceCharge = () => {
  return (
    <div>
        <Header/>
            <ManagerServiceChargeComponent/>
        <Footer/>
    </div>
  )
}

export default ManagerServiceCharge