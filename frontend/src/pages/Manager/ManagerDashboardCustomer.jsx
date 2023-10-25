import React from 'react'
import ManagerHeader from '../../components/manager/ManagerHeader'
import ManagerSideBar from '../../components/manager/ManagerSIdeBar'
import AllCustomers from '../../components/manager/AllCustomers'
const ManagerDashboardCustomer = () => {
  return (
    <div>
      <ManagerHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <ManagerSideBar active={4} />
          </div>
          <AllCustomers />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboardCustomer