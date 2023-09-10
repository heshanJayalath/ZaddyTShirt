import React, { useState } from "react";
import styles from "../../Styles/Customer/styles";
import OwnerSideBar from "../../components/Owner/OwnerSIdeBar";
import OwnerHeader from "../../components/Owner/OwnerHeader";
import OwnerContent from "../../components/Owner/OwnerContent";

const OwnerPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <OwnerHeader/>

      <div className="md:flex">
      <div className="md:w-[335px] w-full sticky 800px:mt-0 ms-4">
          <OwnerSideBar active={active} setActive={setActive} />
        </div>
      <div
        className={`${styles.section} my-8 rounded-lg flex bg-[#f5f5f5] py-10`}
      >        
        <div className="w-full mr-8">
          <OwnerContent active={active} />
        </div>
      </div>
      </div>
    
    </div>
  );
};


export default OwnerPage
