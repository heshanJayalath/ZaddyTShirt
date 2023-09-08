import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Customer/styles'
import { BsFillBagFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { backend_url } from '../../server'
import { getAllOrdersOfUser } from '../../redux/actions/order'
import { RxCross1 } from 'react-icons/rx'

const CustomerOrderDetails = () => {

  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id))
  }, [dispatch]);

  const orderUpdateHandler = () => {

  }

  const refundOrderUpdateHandler = () => {

  }

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>

      </div>
      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
          Order ID: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src={`${backend_url}/${item.images[0]}`}
              alt=""
              className="w-[80x] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091]">
                Rs.{item.discountPrice} x {item.qty}
              </h5>
            </div>
            {
              data?.status === "Delivered" && (
                <div className={`${styles.button} text-white`}
                  onClick={() => setOpen(true) || setSelectedItem(item)}>
                  Write a review
                </div>
              )
            }
          </div>
        ))}

      {/* review popup */}
      {
        open && (
          <div className="w-full fixed top-0 left-0 h-screen bg-[#0005] z-50 flex items-center justify-center">
            <div className="w-[50%] h-min bg-[#fff] shadow rounded-md p-3">
              <div className="w-full flex justify-end p-3">
                <RxCross1
                  size={30}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <h2 className="text-[30px] font-[500] font-Poppins text-center">
                Give a Review
              </h2>
              <br />
              <div className="w-full flex">
                <img
                  src={`${backend_url}/${selectedItem?.images[0]}`}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <div>
                  <div className="pl-3 text-[20px]">{selectedItem?.name}</div>
                  <h4 className="pl-3 text-[20px]">
                    Rs.{selectedItem?.discountPrice} x {selectedItem?.qty}
                  </h4>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        )
      }
      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>Rs.{data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <div className="w-full flex items-center">
        <div className="w-full w-[60%]">
          <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
          <h4 className="pt-3 text-[20px]">
            {data?.shippingAddress.address1 +
              " " +
              data?.shippingAddress.address2}
          </h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.country}</h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.city}</h4>
          <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
        </div>
        <div className="w-full w-[40%]">
          <h4 className=" text-[20px]">Payment Info:</h4>
          <h4>
            Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
          </h4>
        </div>
      </div>
      <br />
      <br />
      <Link to="/">
        <div className={`${styles.button} text-white`}>
          Send Message
        </div>
      </Link>
    </div>
  )
}

export default CustomerOrderDetails