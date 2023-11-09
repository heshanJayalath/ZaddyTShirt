import React from 'react'
import AdminHeader from '../../components/Admin/Layout/AdminHeader';
import AdminSideBar from '../../components/Admin/AdminSideBar';
import AllGarments from '../../components/Admin/AllGarments';

const AdminDashboardGarments = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-1/6">
          <AdminSideBar active={3} />
        </div>
        <div className='w-5/6 px-12'>

        <AllGarments/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardGarments