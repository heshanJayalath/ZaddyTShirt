import React, { useState } from "react";
import ManagerSideBar from "../../components/manager/ManagerSIdeBar";
import styles from "../../Styles/Customer/styles";
import ManagerHeader from "../../components/manager/ManagerHeader";
import ManagerDashboardMain from "../../components/manager/ManagerDashboardMain";

const ManagerDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <ManagerHeader />

      <div className="md:flex">
        <div className="md:w-[335px] w-full sticky 800px:mt-0 ms-4">
          <ManagerSideBar active={1}/>
        </div>
        <div
          className={`${styles.section} my-8 rounded-lg flex bg-[#f5f5f5] py-10`}
        >

          <div className="w-full mr-8">
            <ManagerDashboardMain />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManagerDashboardPage;
