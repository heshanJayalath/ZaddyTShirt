import React, { useState } from "react";
import Header from "../../components/Customer/Header.jsx";
import Hero from "../../components/Customer/Route/Hero.jsx";
import Categories from "../../components/Customer/Route/Categories.jsx";
import BestDeals from "../../components/Customer/Route/BestDeals.jsx";
import FeaturedProduct from "../../components/Customer/Route/FeaturedProducts.jsx";
import Sponsored from "../../components/Customer/Route/Sponsored.jsx";
import Footer from "../../components/Customer/Footer.jsx";
import SpecialOpptions from "../../components/Customer/Route/SpecialOpptions.jsx";
import Material from "../../components/Customer/Route/Material.jsx";
import Feedbacks from "../../components/Customer/Route/Feedbacks.jsx";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader.jsx";



const CustomerHomePage = () => {
  const [material, setMaterial]=useState('All')
  return (
    <div>
      
      <div className='md:block hidden'>
      <Header activeHeading={1} />
      </div>
      <div className='md:hidden block z-10' >
      <ResponsiveHeader/>
      </div>
      
      

      <Hero />

      <SpecialOpptions />

      <div className="md:hidden mt-4 relative z-0">
      <Material setMaterial={setMaterial}/>
      </div>

      <div className="flex w-full">
        <div className="w-2.5/12 hidden md:block z-0">
          <Categories material={material}/>
          <Material setMaterial={setMaterial} />
        </div>
        <div className="w-9.5/12 z-0">
           <BestDeals />
          <FeaturedProduct />
        </div>
      </div>
      <div className="mx-8 mb-8">
      <Feedbacks />
      {/* <Sponsored /> */}
      </div>
      

      <Footer />
    </div>
  );
};

export default CustomerHomePage;
