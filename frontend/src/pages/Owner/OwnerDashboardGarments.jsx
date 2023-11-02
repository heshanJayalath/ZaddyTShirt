import React from 'react'
import OwnerSIdeBar from '../../components/Owner/OwnerSIdeBar'
import OwnerHeader from '../../components/Owner/OwnerHeader'
import AllGarments from '../../components/manager/AllGarments'
const OwnerDashboardGarments = () => {
  return (
    <div>
      <OwnerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <OwnerSIdeBar active={5} />
          </div>
          <AllGarments />
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboardGarments