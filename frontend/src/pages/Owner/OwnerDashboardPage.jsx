import React, { useState } from "react";
import OwnerSIdeBar from "../../components/Owner/OwnerSIdeBar";
import styles from "../../Styles/Customer/styles";
import OwnerHeader from "../../components/Owner/OwnerHeader";
import OwnerDashboardMain from "../../components/Owner/OwnerDashboardMain";

const OwnerDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <OwnerHeader />

      <div className="md:flex">
        <div className="md:w-[335px] w-full sticky 800px:mt-0 ms-4">
          <OwnerSIdeBar active={1}/>
        </div>
        <div
          className={`${styles.section} my-8 rounded-lg flex bg-[#f5f5f5] py-10`}
        >

          <div className="w-full flex justify-center items-center">
            <OwnerDashboardMain/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OwnerDashboardPage;
