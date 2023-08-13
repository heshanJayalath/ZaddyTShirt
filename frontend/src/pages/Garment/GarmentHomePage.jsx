import React from "react";
import styles from "../../Styles/Customer/styles";
import GarmentInfo from "../../components/Garment/new/GarmentInfo";
import GamrmentProfileData from "../../components/Garment/new/GamrmentProfileData";
import Header from "../../components/Customer/Header";
import Footer from "../../components/Customer/Footer";

const GarmentHomePage = () => {
  return (
    <div>
<Header />
<div className="ps-72 py-4 bg-blue-50">
<h2 className=""><span className="text-gray-400">Home/</span> <span className="text-gray-700 font-medium">Garment Profile </span></h2>
</div>

      <div className={`${styles.section} bg-white my-4 rounded-lg` }>
        <div className="w-full md:flex py-10 justify-between">
          <div className="mb-8 w-full md:w-[25%] bg-white rounded-[8px] shadow-md shadow-blue-300 overflow-y-scroll md:overflow-hidden h-[50vh] md:h-auto sticky top-10 left-0">
            <GarmentInfo isGarmentOwner={true} />
          </div>
          <div className="w-full md:w-[72%] rounded-[4px]">
            <GamrmentProfileData isGarmentOwner={true} />
          </div>
        </div>
      </div>
<Footer/>
      
    </div>
  );
};

export default GarmentHomePage;
