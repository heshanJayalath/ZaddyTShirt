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
    <div>
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
      <div>
        <h1>Images:</h1>
        {
          data && data.images.map((i, index) => (
            <div>
              <img
                src={`${backend_url}/${data.images && data?.images[index]}`}
                alt='' className='h-[200px] overflow-hidden mr-3 mt-3'

              />
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default CustomOrderDetails