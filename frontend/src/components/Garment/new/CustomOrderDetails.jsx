import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCustomOrders } from '../../../redux/actions/customorder';
import { backend_url } from '../../../server';

const CustomOrderDetails = () => {
  const { allCustomOrders } = useSelector((state) => state.customorder);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllCustomOrders())
  }, [dispatch]);

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
      </div>

      {/* <div>
          <div>
            <h1>Order Name :</h1>
            <p>{data?.name}</p>
          </div>
          <div>
            <h1>Total Quantity:</h1>
            <p>{data?.productCount}</p>
          </div>
          <div>
            <h1>Material:</h1>
            <p>{data?.material}</p>
          </div>
          <div>
            <h1>XS Qunatity: </h1>
            <p>{data?.xscount}</p>
          </div>
          <div>
            <h1>S Quantity:</h1>
            <p>{data?.scount}</p>
          </div>
          <div>
            <h1>M Quantity:</h1>
            <p>{data?.mcount}</p>
          </div>
          <div>
            <h1>L Quantity:</h1>
            <p>{data?.lcount}</p>
          </div>
          <div>
            <h1>XL Quantity:</h1>
            <p>{data?.xlcount}</p>
          </div>
          <div>
            <h1>XXL Quantity:</h1>
            <p>{data?.xxlcount}</p>
          </div>
          <div>
            <h1>Colour:</h1>
            <p>{data?.colour}</p>
          </div>
          <div>
            <h1>Description:</h1>
            <p>{data?.description}</p>
          </div>
          <div>
            <h1>Shipping Address:</h1>
            <p>{data?.address}</p>
          </div>
        </div> */}
    </div>
  );

}

export default CustomOrderDetails