import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backend_url } from '../../../server'
import Loader from '../../Loader';
import { Link, useParams } from 'react-router-dom'
import styles from '../../../Styles/Customer/styles';
import axios from 'axios';
import { server } from '../../../server';
import { getAllProductsGarment } from '../../../redux/actions/product';
import { RxCross1 } from "react-icons/rx";

const GarmentInfo = ({ isGarmentOwner }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const {products} = useSelector((state)=>state.products);
  const {id} = useParams();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  useEffect(()=>{
    dispatch(getAllProductsGarment(id));
    setIsLoading(true);
    axios.get(`${server}/garment/get-garment-info/${id}`).then((res)=>{
      console.log(res.data.garment);
      setData(res.data.garment);
      setIsLoading(false);
    }).catch((error)=>{
      console.log(error);
      setIsLoading(false);
    })
  },[]);

  const logoutHandler = async () => {
    axios.get(`${server}/garment/logout`, { withCredentials: true });
    window.location.reload();
  }
  const logoutPopup=(value)=>{
    setOpen(value)
}

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="w-full p-4 py-5">
              <div className="w-full p-2">
                <img
                  src={`${backend_url}/${data?.avatar}`}
                  alt=""
                  className="w-[150px] h-[150px] object-cover rounded-full"
                />
              </div>
              <h3 className=" py-2 text-[20px]">{data?.companyName}</h3>
              <p className="text-[16px] text-[#000000a6] p-[5px]  items-center">
                {data?.companyEmail}
              </p>
            </div>
            <div className="p-3">
              <h5 className="font-[600]">Address</h5>
              <h4 className="text-[#000000a6]">{data?.companyAddress}</h4>
            </div>
            <div className="p-3">
              <h5 className="font-[600]">Phone Number</h5>
              <h4 className="text-[#000000a6]">{data?.companyContact}</h4>
            </div>
            <div className="p-3">
              <h5 className="font-[600]">Total Products</h5>
              <h4 className="text-[#000000a6]">10</h4>
            </div>
            <div className="p-3">
              <h5 className="font-[600]">Shop Ratings</h5>
              <h4 className="text-[#000000b0]">12/5</h4>
            </div>
            <div className="p-3">
              <h5 className="font-[600]">Joined On</h5>
              <h4 className="text-[#000000b0]">{data?.createdAt.slice(0, 10)}</h4>
            </div>
            {isGarmentOwner && (
              <div className="py-3 px-4">
                <Link to="/settings">
                  <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                    <span className="text-white rounded-md hover:px-28 p-2 hover:shadow-md hover:shadow-red-600">Edit Shop</span>
                  </div>
                </Link>
                <div className={`${styles.button}   !w-full !h-[42px] !rounded-[5px]`}
                  onClick={()=>{setOpen(true)}}

                >
                  <span className="text-white rounded-md hover:px-28 p-2 hover:shadow-md hover:shadow-red-600"> Log Out   </span>
                </div>


                {open && (
                    <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center hover:shadow-sm py-2 justify-center h-screen">
                        <div className="w-[25%] 800px:w-[40%] min-h-[20vh] bg-[#f9f9f99a]  hover:bg-[#f9f9f9c4] rounded shadow p-5">
                            <div className="w-full flex justify-end cursor-pointer">
                                <RxCross1 size={20} onClick={() => setOpen(false)} />
                            </div>
                            <h3 className="text-[20px] text-center py-3 font-normal font-Poppins text-[#000000cb]">
                                Are you sure you want to logout?
                            </h3>
                            <div className="w-full flex gap-2  pt-3 items-center justify-center">                   
                                <button onClick={() => {
                                    setOpen(false);
                                    
                                    logoutHandler();
                                     }
                                    } type="button" class="text-red-700  hover:text-white border font-semibold border-red-700 hover:bg-red-800  
                                focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                dark:border-red-500 focus:shadow-md focus:shadow-red-600 dark:text-red-700 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    confirm
                                    </button>

                                    <button onClick={() => {
                                    setOpen(false);
                                   
                                     }
                                    }  type="button" class="text-blue-900 hover:text-white border border-gray-800 hover:bg-gray-900 
                                     focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                    dark:border-gray-600 focus:shadow-md focus:shadow-gray-600 dark:text-gray-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                        cancel</button>

                            </div>
                        </div>
                    </div>
                )}

              </div>

              
            )}
          </div>
        )
      }
    </>

  );
}

export default GarmentInfo