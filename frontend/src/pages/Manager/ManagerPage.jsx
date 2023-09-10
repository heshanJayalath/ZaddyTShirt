import React, { useState } from "react";
import ManagerSideBar from "../../components/manager/ManagerSIdeBar";
import styles from "../../Styles/Customer/styles";
import ManagerContent from "../../components/manager/ManagerContent";
import ManagerHeader from "../../components/manager/ManagerHeader";

const ManagerPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <ManagerHeader />

      <div className="md:flex">
      <div className="md:w-[335px] w-full sticky 800px:mt-0 ms-4">
          <ManagerSideBar active={active} setActive={setActive} />
        </div>
      <div
        className={`${styles.section} my-8 rounded-lg flex bg-[#f5f5f5] py-10`}
      >
        
        <div className="w-full mr-8">
          <ManagerContent active={active} />
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default ManagerPage;
