import React from 'react'
import Header from '../../components/Customer/Header'
import CheckoutSteps from '../../components/Customer/CheckoutSteps'
import Footer from '../../components/Customer/Footer'
import Payment from '../../components/Customer/Payment'

const PaymentPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#f6f9fc]'>
       <Header />
       <br />
       <br />
       <CheckoutSteps active={2} />
       <Payment />
       <br />
       <br />
       <Footer />
    </div>
  )
}

export default PaymentPage