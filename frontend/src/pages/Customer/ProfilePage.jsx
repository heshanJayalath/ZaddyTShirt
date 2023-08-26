import React, { useState } from "react";
import Header from "../../components/Customer/Header";
import ProfileSideBar from "../../components/Customer/ProfileSideBar";
import ProfileContent from "../../components/Customer/ProfileContent";
import styles from "../../Styles/Customer/styles";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader";


const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="md:block hidden">
        <Header/>
      </div>
      <div className="md:hidden block z-10">
        <ResponsiveHeader />
      </div>
      <div className="ps-72 py-4 bg-blue-50">
        <h2 className="">
          <span className="text-gray-400">Home/</span>{" "}
          <span className="text-gray-700 font-medium">My Account </span>
        </h2>
      </div>
      <div className={`${styles.section} md:flex bg-white py-10`}>
        <div className="md:w-72 w-full sticky 800px:mt-0 ">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <div className="w-full md:mt-0 mt-4 md:w-9/12 md:pl-8">
          <ProfileContent active={active} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
