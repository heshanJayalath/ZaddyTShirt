import React from 'react'
import OwnerHeader from '../../components/Owner/OwnerHeader'
import OwnerSIdeBar from '../../components/Owner/OwnerSIdeBar'
import AllCustomers from '../../components/manager/AllCustomers'
const OwnerDashBoardCustomers = () => {
  return (
    <div>
      <OwnerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <OwnerSIdeBar active={4} />
          </div>
          <AllCustomers />
        </div>
      </div>
    </div>
  )
}

export default OwnerDashBoardCustomers