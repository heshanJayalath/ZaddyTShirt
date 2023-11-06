import React from 'react'
import OwnerHeader from '../../components/Owner/OwnerHeader'
import OwnerSIdeBar from '../../components/Owner/OwnerSIdeBar'
import AllCustomers from '../../components/manager/AllCustomers'
import OwnerSystemUsers from '../../components/Owner/OwnerSystemUsers'
const OwnerDashBoardSystemUsers = () => {
  return (
    <div>
      <OwnerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <OwnerSIdeBar active={10} />
          </div>
          < OwnerSystemUsers/>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashBoardSystemUsers