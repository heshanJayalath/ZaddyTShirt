import React, { useState } from "react";
import Header from "../../components/Customer/Header";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import styles from "../../Styles/Customer/styles";
import AdminContent from "../../components/Admin/AdminContent";
import AdminHeader from "../../components/Admin/Layout/AdminHeader";

const AdminPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <AdminHeader />

      <div className="flex">
      <div className="w-[335px] sticky 800px:mt-0 ms-4">
          <AdminSideBar active={active} setActive={setActive} />
        </div>
      <div
        className={`${styles.section} my-8 rounded-lg flex bg-[#f5f5f5] py-10`}
      >
        
        <div className="w-full mr-8">
          <AdminContent active={active} />
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default AdminPage;
