import React from 'react'
import Lottie from 'lottie-react';
import anime from '../../Assets/Animations/animation_lll50bn1.json'
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  )
}

const Success = () => {
  
  return (
    <div className='flex flex-col items-center justify-center'>
       <Lottie loop={false} animationData={anime} style={{width:"400px"}}/>
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful!
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage