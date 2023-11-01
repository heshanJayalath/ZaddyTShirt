import React from 'react'
import ManagerHeader from '../../components/manager/ManagerHeader'
import OwnerSIdeBar from '../../components/Owner/OwnerSIdeBar'
import OwnerHeader from '../../components/Owner/OwnerHeader'
import AllProducts from '../../components/manager/AllProducts'
const OwnerDashBoardProducts = () => {
  return (
    <div>
      <OwnerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <OwnerSIdeBar active={3} />
          </div>
          <AllProducts />
        </div>
      </div>
    </div>
  )
}

export default OwnerDashBoardProducts