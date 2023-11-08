import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCustomOrders } from '../../../redux/actions/customorder';
import { backend_url } from '../../../server';
import { ManagerApprovalData } from '../../../Static/Customer/data';
import styles from '../../../Styles/Customer/styles';
import { server } from '../../../server';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiFillCheckSquare, AiFillCloseSquare, AiOutlineSafety } from 'react-icons/ai';

const CustomOrderDetails = () => {
  const { allCustomOrders } = useSelector((state) => state.customorder);
  const [status, setStatus] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllCustomOrders())
  }, [dispatch]);

  const customOrderUpdateManagerHandler = async (e) => {

    await axios
      .put(
        `${server}/customorder/manager-update-custom-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      ).then((res) => {
        toast.success("Custom Order Manager Approved Success!");
        navigate('/manager-custom-order');
      }).catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  const data = allCustomOrders && allCustomOrders.find((item) => item._id === id);


  return (
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
        {(data?.status === "Apply" || data?.status === "Approved by Manager" || data?.status === "Rejected" || data?.status === "Processing" || data?.status === "Transferred to delivery partner"|| data?.status === "Delivered")
          ? (
            <>
              <hr />
              <div>
                <h1>Applied Garment Details</h1>
                <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                    Company Name:
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    {data?.garment?.companyName}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                    Company Email:
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    {data?.garment?.companyEmail}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                    Company Address:
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    {data?.garment?.companyAddress}
                  </dd>
                </div>
                <div class="  shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                    Company Contact:
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 md:mt-0">
                    {data?.garment?.companyContact}
                  </dd>
                </div>
                <div class=" bg-gray-200 shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                    Estimated Price:
                  </dt>
                  <dd class="mt-1 font-bold text-sm leading-6  text-gray-700 md:col-span-2 md:mt-0">
                    Rs.{data?.price}.00
                  </dd>
                </div>
                {
                  data?.status === "Apply" && (
                    <div class=" bg-gray-200 shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt class="text-sm md:ps-36 font-medium leading-6 text-gray-900">
                        Approve the Company <span className='text-red-400'>{data?.garment?.companyName}</span>'s Request
                      </dt>
                      <dd class="mt-1 font-bold text-sm leading-6  text-gray-700 md:col-span-2 md:mt-0">
                        <form onSubmit={customOrderUpdateManagerHandler}>
                          <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
                          >
                            <option value="">Select Status</option>
                            {
                              ManagerApprovalData &&
                              ManagerApprovalData.map((i) => (
                                <option value={i.title} key={i.title}>
                                  {i.title}
                                </option>
                              ))
                            }

                          </select>
                          <input
                            className={`${styles.button} text-white bg-red-500`}
                            type="submit"
                            value="Submit"
                          />

                        </form>
                      </dd>
                    </div>
                  )
                }
                {
                  data?.status === "Approved by Manager" && (
                    <div class=" bg-gray-200 shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 text-center	 ">
                      <div className={`${styles.button} bg-green-400 text-white`}><AiFillCheckSquare/>Approved</div>
                    </div>
                )}
                {
                  data?.status === "Rejected" && (
                    <div class=" bg-gray-200 shadow-none rounded-sm md:ps-8 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-gray-200   px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 text-center	 ">
                      <div className={`${styles.button} bg-red-400 text-white`}><AiFillCloseSquare/>Rejected</div>
                    </div>
                )}
              </div>

            </>
          ) : (null)}
      </div>



    </div>
  );

}

export default CustomOrderDetails