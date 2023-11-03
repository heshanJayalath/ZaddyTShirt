import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
import CustomOrderDetails from '../../components/Garment/new/CustomOrderDetails';

const ManagerCustomOrderDetails = () => {

  return (
    <div>
        <Header/>
          <CustomOrderDetails/>
        <Footer/>
    </div>
  )
}

export default ManagerCustomOrderDetails