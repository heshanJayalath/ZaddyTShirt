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
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={3} />
        </div>
        <AllGarments/>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardGarments