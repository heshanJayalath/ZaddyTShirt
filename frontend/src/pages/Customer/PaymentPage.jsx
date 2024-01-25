import React from "react";
import Header from "../../components/Customer/Header";
import CheckoutSteps from "../../components/Customer/CheckoutSteps";
import Footer from "../../components/Customer/Footer";
import Payment from "../../components/Customer/Payment";
import ResponsiveHeader from "../../components/Customer/ResponsiveHeader.jsx";
import md5 from 'crypto-js/md5';

const PaymentPage = () => {
  let merchantSecret  = 'MzgwNDY3MjUzOTMzMTIyNTQyMjkzMjY3OTM1NTI4MzY1OTQ3ODU3Nw==';
  let merchantId      = '1224854';
  let orderId         = 'id_001';
  let amount          = 1000;
  let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
  let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
  let currency        = 'LKR';
  let hash            = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();
  return (
    <div className="w-full min-h-screen bg-[#f6f9fc]">
    <div className="md:block hidden">
      <Header activeHeading={1} />
    </div>
    <div className="md:hidden block z-10">
      <ResponsiveHeader />
    </div>
    <br />
    <br />
    <CheckoutSteps active={2} />
    <Payment />
    <br />
    <br />
    <Footer />
      {/* <div>
        <form method="post" action="https://sandbox.payhere.lk/pay/checkout">   
            <input type="hidden" name="merchant_id" value={merchantId}/>
            <input type="hidden" name="return_url" value="http://sample.com/return"/>
            <input type="hidden" name="cancel_url" value="http://sample.com/cancel"/>
            <input type="hidden" name="notify_url" value="http://sample.com/notify"/>  
            <br/><br/>Item Details<br/>
            <input type="text" name="order_id" value={orderId}/>
            <input type="text" name="items" value="T-Shirt"/>
            
            <input type="text" name="currency" value={currency}/>
            <input type="text" name="amount" value={amount}/>  
            <br/><br/>Customer Details<br/>
            <input type="text" name="first_name" value="Saman"/>
            <input type="text" name="last_name" value="Perera"/>
            <input type="text" name="email" value="chathuradinushka97@gmail.com"/>
            <input type="text" name="phone" value="0771234567"/>
            <input type="text" name="address" value="No.1, Galle Road"/>
            <input type="text" name="city" value="Colombo"/>
            <input type="hidden" name="country" value="Sri Lanka"/>
            <input type="hidden" name="hash" value={hash}/>
            <input type="submit" className="btn bg-white" value="Buy Now"/>   
        </form> */}
    </div>
      
  );
};

export default PaymentPage;
