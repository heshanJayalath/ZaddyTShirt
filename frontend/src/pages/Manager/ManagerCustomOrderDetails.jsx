import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
import CustomOrderDetails from '../../components/Garment/new/CustomOrderDetails';
import ResponsiveHeader from '../../components/Customer/ResponsiveHeader';

const ManagerCustomOrderDetails = () => {

  return (
    <div>
       <div className='md:block hidden'>
      <Header />
      </div>
      <div className='md:hidden block z-10' >
      <ResponsiveHeader/>
      </div>
      <CustomOrderDetails />
      <Footer />
    </div>
  )
}

export default ManagerCustomOrderDetails