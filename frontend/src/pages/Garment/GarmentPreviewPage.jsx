import React from "react";
import Footer from "../../components/Customer/Footer";
import GarmentInfo from "../../components/Garment/new/GarmentInfo";
import Header from "../../components/Customer/Header";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader";
import GamrmentProfileData from "../../components/Garment/new/GamrmentProfileData";

const ShopPreviewPage = () => {
  
  return (
    <div >
      <div className='md:block hidden'>
      <Header visibility={false}/>
      </div>
      <div className='md:hidden block z-10' >
      <ResponsiveHeader />
      </div>
      <div className="md:ps-68 ps-6 py-4 bg-blue-50">
        <h2 className="">
          <span className="text-gray-700 font-medium">View Garment Profile </span>
        </h2>
      </div>
      <div className= 'md:flex md:p-12 bg-white my-4 rounded-lg'>
          <div className="mb-8 md:w-1/5 bg-white rounded-[8px] shadow-md shadow-blue-300 overflow-y-scroll md:overflow-hidden h-[30vh] md:h-auto sticky top-10 left-0">
          <GarmentInfo isOwner={false} />
        </div>
        <div className="md:w-3/4 bg-white md:pl-20  mt-5">
          <GamrmentProfileData isOwner={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPreviewPage;
