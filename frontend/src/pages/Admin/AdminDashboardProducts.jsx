import React from 'react'
import AdminHeader from '../../components/Admin/Layout/AdminHeader';
import AdminSideBar from '../../components/Admin/AdminSideBar';
import AllProducts from '../../components/Admin/AllProducts';

const AdminDashboardProducts = () => {
  return (
    <div>
      <AdminHeader />
      
        <div className="flex justify-between w-full">
          <div className="w-1/6 ">
            <AdminSideBar active={5} />
          </div>
          <div className="w-5/6 px-12">
        
          <AllProducts />
          </div>
          
      
      </div>
    </div>
  )
}

export default AdminDashboardProducts