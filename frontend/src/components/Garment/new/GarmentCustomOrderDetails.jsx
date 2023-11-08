import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCustomOrders, getAllCustomOrdersOfGarment } from '../../../redux/actions/customorder';
import { backend_url } from '../../../server';
import styles from '../../../Styles/Customer/styles';
import axios from 'axios';
import { server } from '../../../server';
import { toast } from 'react-toastify';
import { GarmentOptions, statusData } from '../../../Static/Customer/data';


const GarmentCustomOrderDetails = () => {
  const { allCustomOrders } = useSelector((state) => state.customorder);
  const { garment } = useSelector((state) => state.garment);
  console.log("now garment:", garment);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllCustomOrders())
  }, [dispatch]);

  const customOrderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/customorder/update-custom-order-status/${id}`,
        {
          price,
          status,
          garment,
        },
        { withCredentials: true }
      ).then((res) => {
        toast.success("Custom Order Updated!");
        navigate('/garment-dashboard-custom-orders');
      }).catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  const handleDeliveryStatus = async (e) => {
    await axios
      .put(
        `${server}/customorder/update-custom-order-delivety-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      ).then((res) => {
        toast.success("Custom Order Updated!");
        navigate('/garment-dashboard-custom-orders');
      }).catch((error) => {
        toast.error(error.response.data.message);
      });
  }
  const data = allCustomOrders && allCustomOrders.find((item) => item._id === id);



  return (
    <>
      <div className="w-full">
        <div className="w-full mt-4 md:flex md:px-4">
          <div className="md:w-2/6 md:ps-32 w-full justify-center items-center">
            <div className=" mt-8 ps-16  mb-4 md:mb-8 rounded-sm px-4 md:px-8 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
              <h3 className="text-base md:text-lg font-semibold leading-7 text-gray-900">
                Custom T-Shirt Order
              </h3>
              <p className="mt-1 text-sm md:text-base max-w-md md:max-w-2xl text-gray-500">
                Custom T-shirt details.
              </p>
            </div>

            {/* <h1>Images:</h1> */}
            <div>
              {data &&
                data.images.map((i, index) => (
                  <div key={index} className="mt-4 md:mt-6">
                    <img
                      src={`${backend_url}/${data.images && data?.images[index]}`}
                      alt=""
                      className="h-auto max-w-md md:max-w-sm  md:py-14 rounded-lg overflow-hidden shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    />
                  </div>
                ))}
            </div>

          </div>

          <div className="sm:w-3/6 w-full ps-16 md:ps-28 md:pr-8">
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div class=" sm:ps-8 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Order Name
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.name}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Total Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.productCount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Material
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.material}
                  </dd>
                </div>
                <div class="shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    XS Qunatity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.xscount}
                  </dd>
                </div>
                <div class="shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    S Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.scount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    M Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.mcount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    L Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.lcount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200    px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    XL Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.xlcount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    XXL Quantity
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.xxlcount}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm sm:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Colour
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {data?.colour}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="w-full mb-8 md:mb-24 md:ps-20 ps-16 md:pl-4">
          <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
              Address
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
              {data?.address}
            </dd>
          </div>

          <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
              {data?.description}
            </dd>
          </div>
          <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
              Order Status:
            </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0 font-bold">
              {data?.status}
            </dd>
          </div>
          {
            (data?.status === "Approved by Manager"|| data?.status === "Processing" || data?.status === "Transferred to delivery partner" || data?.status === "Delivered") && (
              <div class=" bg-gray-200 shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                  Price:
                </dt>
                <dd class="mt-1 font-bold text-sm leading-6  text-gray-700 md:col-span-2 md:mt-0">
                  Rs.{data?.price}.00
                </dd>
              </div>
            )
          }
          {data?.status === "Pending" && (

            <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                Do you wants to take apply for this order?
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">

                <form onSubmit={customOrderUpdateHandler}>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
                  >
                    <option value="">Select Status</option>
                    {
                      statusData &&
                      statusData.map((i) => (
                        <option value={i.title} key={i.title}>
                          {i.title}
                        </option>
                      ))
                    }

                  </select>
                  <br />
                  <br />
                  {status === 'Apply' ? (<div>
                    <label>Estimated Price(10% profit will Deducted from the Sale)</label>
                    <input type='number'
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>) : (null)}
                  <input
                    className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#E94560] font-[600] !h-[45px] text-[18px]`}
                    value='Submit'
                    type="submit" />
                </form>
              </dd>

            </div>

          )}

          {
            (data?.status === "Approved by Manager" || data?.status === "Processing" || data?.status === "Transferred to delivery partner")  &&(
              <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                  Custom Order Status:
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
                  >
                    <option value="">Select Status</option>
                    {
                      GarmentOptions &&
                      GarmentOptions.map((i) => (
                        <option value={i.title} key={i.title}>
                          {i.title}
                        </option>
                      ))
                    }

                  </select>
                  <div className={`${styles.button} bg-red-400 text-white`}
                    onClick={handleDeliveryStatus}
                  >
                    Update Status
                  </div>
                </dd>
              </div>
            )
          }
        </div>


      </div>
    </>
  );

}

export default GarmentCustomOrderDetails