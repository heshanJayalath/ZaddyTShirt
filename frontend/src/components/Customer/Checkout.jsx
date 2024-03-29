import React, { useState } from "react";
import styles from "../../Styles/Customer/styles";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

import md5 from 'crypto-js/md5';

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SUCCESS_URL = "/"
  const CANCEL_URL = "/checkout"

  window.payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
      // reset cart
      navigate(SUCCESS_URL);
  };

  // Payment window closed
  window.payhere.onDismissed = function onDismissed() {
    // Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
    navigate(CANCEL_URL)
  };

  // Error occurred
  window.payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:"  + error);
      navigate(CANCEL_URL)
  };

  const generateOrderId = () => {
    return 'INV' + zipCode + user?.id;
  }

  const paymentSubmit = () => {
    // let merchantSecret  = 'MzgwNDY3MjUzOTMzMTIyNTQyMjkzMjY3OTM1NTI4MzY1OTQ3ODU3Nw==';
    // let merchantId      = '1224854';
    // let orderId         = generateOrderId();
    // let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
    // let totalPriceFormated  = parseFloat( totalPrice ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
    // let currency        = 'LKR';
    // let hash            = md5(merchantId + orderId + totalPriceFormated + currency + hashedSecret).toString().toUpperCase();
  
    // var payment = {
    //   "sandbox": true,
    //   "merchant_id": merchantId,    // Replace your Merchant ID
    //   "return_url": undefined,     // Important
    //   "cancel_url": undefined,     // Important
    //   "notify_url": "http://sample.com/notify",
    //   "order_id": orderId,
    //   "items": "T-shirt",
    //   "amount": totalPrice,
    //   "currency": "LKR",
    //   "hash": hash, // *Replace with generated hash retrieved from backend
    //   "first_name": user && user.name,
    //   "last_name": "",
    //   "email": user && user.email,
    //   "phone": user && user.phoneNumber,
    //   "address": user && user.address,
    //   "city": city,
    //   "country": country,
    //   "delivery_address": user && user.address,
    //   "delivery_city": city,
    //   "delivery_country": country,
    //   "custom_1": "",
    //   "custom_2": ""
    // };
    if (address1 === "" || address2 === "" || zipCode === null || country === "" || city === "") {
      toast.error("Please choose your delivery address!")
    } else {
      const shippingAddress = {
        address1,
        address2,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice,
        subTotalPrice,
        shipping,
        shippingAddress,
        user,
      }

      // update local storage with the updated orders array
      localStorage.setItem("latestOrder", JSON.stringify(orderData));
      navigate("/payment");
    

      // window.payhere.startPayment(payment);
    }
  };

  const paymentSubmit2 = () => {
    let merchantSecret  = 'MzgwNDY3MjUzOTMzMTIyNTQyMjkzMjY3OTM1NTI4MzY1OTQ3ODU3Nw==';
    let merchantId      = '1224854';
    let orderId         = generateOrderId();
    let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
    let totalPriceFormated  = parseFloat( totalPrice ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
    let currency        = 'LKR';
    let hash            = md5(merchantId + orderId + totalPriceFormated + currency + hashedSecret).toString().toUpperCase();
  
    var payment = {
      "sandbox": true,
      "merchant_id": merchantId,    // Replace your Merchant ID
      "return_url": undefined,     // Important
      "cancel_url": undefined,     // Important
      "notify_url": "http://sample.com/notify",
      "order_id": orderId,
      "items": "T-shirt",
      "amount": totalPrice,
      "currency": "LKR",
      "hash": hash, // *Replace with generated hash retrieved from backend
      "first_name": user && user.name,
      "last_name": "",
      "email": user && user.email,
      "phone": user && user.phoneNumber,
      "address": user && user.address,
      "city": city,
      "country": country,
      "delivery_address": user && user.address,
      "delivery_city": city,
      "delivery_country": country,
      "custom_1": "",
      "custom_2": ""
    };
    if (address1 === "" || address2 === "" || zipCode === null || country === "" || city === "") {
      toast.error("Please choose your delivery address!")
    } else {
      const shippingAddress = {
        address1,
        address2,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice,
        subTotalPrice,
        shipping,
        shippingAddress,
        user,
      }

      // update local storage with the updated orders array
      localStorage.setItem("latestOrder", JSON.stringify(orderData));
      navigate("/payment");
    

      window.payhere.startPayment(payment);
    }
  };

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  // this is shipping cost variable
  const shipping = subTotalPrice * 0.1;

  const totalPrice = (subTotalPrice + shipping).toFixed(2);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
            totalPrice={totalPrice}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData
            totalPrice={totalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
          />
        </div>
      </div>

      <div className="flex gap-8">
      <div
        className={`${styles.button} bg-blue-900 w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Cash On Delivery</h5>
      </div>

      <div
        className={`${styles.button} bg-red-900 w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit2}
      >
        <h5 className="text-white">Online Payment</h5>
      </div>

      </div>
    
    </div>
  );
};

const ShippingInfo = ({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
  totalPrice
}) => {

  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
      <h5 className="text-[18px] font-[500]">Shipping Address</h5>
      <br />
      <form>
        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Full Name</label>
            <input
              type="text"
              value={user && user.name}
              required
              className={`${styles.input} !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Email Address</label>
            <input
              type="email"
              value={user && user.email}
              required
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Phone Number</label>
            <input
              type="number"
              required
              value={user && user.phoneNumber}
              className={`${styles.input} !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Country</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your country
              </option>
              {Country &&
                Country.getAllCountries().map((item) => {
                  if (item.name === "Sri Lanka") {
                    return (
                      <option
                        className="block pb-2"
                        key={item.isoCode}
                        value={item.isoCode}
                      >
                        {item.name}
                      </option>
                    )
                  }
                })}
            </select>
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">City</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your City
              </option>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Address1</label>
            <input
              type="address"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className={`${styles.input} !w-[95%]`}
            />
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Address2</label>
            <input
              type="address"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div>
        </div>
      </form>
      <h5
        className="text-[18px] cursor-pointer inline-block"
        onClick={() => setUserInfo(!userInfo)}
      >
        Choose From saved address
      </h5>
      {userInfo && (
        <div>
          {user &&
            user.addresses.map((item, index) => (
              <div className="w-full flex mt-1">
                <input
                  type="checkbox"
                  className="mr-3"
                  value={item.addressType}
                  onClick={() =>
                    setAddress1(item.address1) ||
                    setAddress2(item.address2) ||
                    setZipCode(item.zipCode) ||
                    setCountry(item.country) ||
                    setCity(item.city)
                  }
                />
                <h2>{item.addressType}</h2>
              </div>
            ))}
        </div>
        
      )}
      
    </div>
  );
};

const CartData = ({
  totalPrice,
  shipping,
  subTotalPrice,
}) => {
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">Rs.{subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">Rs.{shipping.toFixed(2)}</h5>
      </div>
      <br />
      <h5 className="text-[18px] font-[600] text-end pt-3">Rs.{totalPrice}</h5>
      <br />
    </div>
  );
};

export default Checkout;