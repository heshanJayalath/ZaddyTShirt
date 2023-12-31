import React from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import Footer from '../../components/Customer/Footer'
import OwnerAllOrders from '../../components/Owner/OwnerAllOrders'
import OwnerHeader from '../../components/Owner/OwnerHeader'
import OwnerSIdeBar from '../../components/Owner/OwnerSIdeBar'

const OwnerAllOrdersPage = () => {
    return (
        <div>
        <OwnerHeader />
        <div className="w-full flex">
          <div className="flex items-start justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <OwnerSIdeBar active={2} />
            </div>
            <OwnerAllOrders />
          </div>
        </div>
      </div>
    )
}

export default OwnerAllOrdersPage