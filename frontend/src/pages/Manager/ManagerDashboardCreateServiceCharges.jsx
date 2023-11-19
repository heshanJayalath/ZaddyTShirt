import React from 'react'
import ManagerHeader from '../../components/manager/ManagerHeader'
import ManagerSideBar from '../../components/manager/ManagerSIdeBar'
import CreateServiceCharges from '../../components/manager/CreateServiceCharges.jsx';
const ManagerDashboardCreateServiceCharges = () => {
  return (
    <div>
      <ManagerHeader />
      <div className="w-full flex">
        <div className="md:flex items-start p-8 md:p-0 justify-between w-full">
          <div className="md:w-2/12 w-full ">
            <ManagerSideBar active={7} />
          </div>
          <div className='w-full flex justify-center'>
            {/* <h1>Service Charge Invoice</h1> */}
          <CreateServiceCharges />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboardCreateServiceCharges