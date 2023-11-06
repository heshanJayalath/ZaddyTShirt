import React from 'react'
import Header from "../../components/Customer/Header.jsx";
import Footer from "../../components/Customer/Footer";
import ResponsiveHeader from '../../components/Customer/ResponsiveHeader';
import PricePredict from "../../components/Customer/PricePredict";

const PricePredictor=()=>{


  return (
    <div >
        <div className='md:block hidden'>
      <Header activeHeading={4} />
      </div>
      <div className='md:hidden block z-10' >
      <ResponsiveHeader/>
      </div>
        <div className="justify-center flex mb-16 mt-8">
        <PricePredict/>
        </div>
     
      <Footer/>
    </div>
  )
}

export default PricePredictor


