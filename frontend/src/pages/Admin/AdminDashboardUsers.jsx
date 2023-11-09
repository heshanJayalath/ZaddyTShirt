import React from 'react'
import AdminHeader from '../../components/Admin/Layout/AdminHeader'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AllUsers from '../../components/Admin/AllUsers'

const AdminDashboardUsers = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-1/6">
          <AdminSideBar active={4} />
        </div>
        <div className='w-5/6 px-12'>

        <AllUsers />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardUsers