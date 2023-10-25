import React from 'react'
import ManagerHeader from '../../components/manager/ManagerHeader'
import ManagerSideBar from '../../components/manager/ManagerSIdeBar'
import AllGarments from '../../components/manager/AllGarments'
const ManagerDashboardGarment = () => {
  return (
    <div>
      <ManagerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <ManagerSideBar active={5} />
          </div>
          <AllGarments />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboardGarment