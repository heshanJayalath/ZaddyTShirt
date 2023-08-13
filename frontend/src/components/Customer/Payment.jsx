import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Customer/styles'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [orderData, setOrderData] = useState([]);
    const [open, setOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    // const elements = useElements();

    useEffect(() => {
        const orderData = JSON.parse(localStorage.getItem("latestOrder"));
        console.log("orderData", orderData);
        setOrderData(orderData);
    }, []);

    return (
        <div className="w-full flex flex-col items-center py-8">
            <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
                <div className="w-full 800px:w-[65%]">
                    <PaymentInfo
                        user={user}
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
                <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
                    <CartData orderData={orderData} />
                </div>
            </div>
        </div>
    )
}



const PaymentInfo = ({ user,open, setOpen}) => {
    const [select, setSelect] = useState(1);

    return (
        <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
            {/* select buttons */}
            <div>
                <div className="flex w-full pb-5 border-b mb-2">
                    <div
                        className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                        onClick={() => setSelect(1)}
                    >
                        {select === 1 ? (
                            <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                        ) : null}
                    </div>
                    <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                        Pay with Debit/credit card
                    </h4>

                    {/* pay with card */}
                    {
                        select === 1 ? (
                            <div className="w-full flex border-b">
                                <form className="w-full" 
                                // onSubmit={paymentHandler}
                                >
                                    <div className="w-full flex pb-3">
                                        <div className="w-[50%]">
                                            <label className="block pb-2">Name On Card</label>
                                            <input
                                                required
                                                placeholder={user && user.name}
                                                className={`${styles.input} !w-[95%] text-[#444]`}
                                                value={user && user.name}
                                            />
                                        </div>
                                        <div className="w-[50%]">
                                            <label className="block pb-2">Exp Date</label>
                                            {/* <CardExpiryElement /> */}
                                        </div>
                                    </div>
                                    <div className="w-full flex pb-3">
                                        <div className="w-[50%]">
                                            <label className="block pb-2">Card Number</label>
                                            {/* <CardNumberElement /> */}
                                        </div>
                                        <div className="w-[50%]">
                                            <label className="block pb-2">CVV</label>
                                            {/* <CardCvcElement /> */}
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className={`${styles.button} !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
                                    />
                                </form>
                            </div>
                        ) : null
                    }
                </div>
                <br />

                {/* Paypal Payment */}
                <div>
                    <div className="flex w-full pb-5 border-b mb-2">
                        <div
                            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
                            onClick={() => setSelect(2)}
                        >
                            {select === 2 ? (
                                <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
                            ) : null}
                        </div>
                        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
                            Pay with Paypal
                        </h4>
                    </div>

                    {/* pay with payement */}
                    {select === 2 ? (
                        <div className="w-full flex border-b">
                            <div
                                className={`${styles.button} !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
                                onClick={() => setOpen(true)}
                            >
                                Pay Now
                            </div>
                            {
                                open && (
                                    <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
                                        <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                                            <div className="w-full flex justify-end p-3">
                                                <RxCross1
                                                    size={30}
                                                    className="cursor-pointer absolute top-3 right-3"
                                                    onClick={() => setOpen(false)}
                                                />
                                            </div>
                                            {/* <PayPalScriptProvider >
                                                <PayPalButtons />
                                            </PayPalScriptProvider> */}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ) : null}
                </div>

                <br />

            </div>
        </div>
    )
};


const CartData = ({ orderData }) => {
    const shipping = orderData?.shipping?.toFixed(2);
    return (
        <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
                <h5 className="text-[18px] font-[600]">${orderData?.subTotalPrice}</h5>
            </div>
            <br />
            <div className="flex justify-between">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
                <h5 className="text-[18px] font-[600]">Rs. {shipping}</h5>
            </div>
            <br />
            <div className="flex justify-between border-b pb-3">
                <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
                <h5 className="text-[18px] font-[600]">{orderData?.discountPrice ? "Rs." + orderData.discountPrice : "-"}</h5>
            </div>
            <h5 className="text-[18px] font-[600] text-end pt-3">
                . Rs{orderData?.totalPrice}
            </h5>
            <br />
        </div>

    )
}


export default Payment