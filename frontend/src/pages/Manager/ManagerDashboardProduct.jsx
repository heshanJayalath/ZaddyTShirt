import React from 'react'
import ManagerHeader from '../../components/manager/ManagerHeader'
import ManagerSideBar from '../../components/manager/ManagerSIdeBar'
import AllProducts from '../../components/manager/AllProducts'
const ManagerDashboardProduct = () => {
  return (
    <div>
      <ManagerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <ManagerSideBar active={3} />
          </div>
          <AllProducts />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboardProduct