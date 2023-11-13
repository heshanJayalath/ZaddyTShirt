import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import styles from "../../Styles/Customer/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCustomOrdersOfUser } from "../../redux/actions/customorder";
import { backend_url } from "../../server";

const CustomerCustomOrderDetails = () => {
  const { orders } = useSelector((state) => state.customorder);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [imgMain, setimgMain]=useState(0);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllCustomOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);
  console.log(data);

  return (
    <div className={`py-4 px-4`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Custom Order Details</h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
          Order ID:
          <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on :<span>{" " + data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      <br />
      <br />
      <div className="w-full md:mx-16 gap-4 md:flex">
        <div className=" md:w-2/6 justify-center flex ">
          <div>
              <h4 className="pt-3 text-[20px] font-[600]">Order Images</h4>
            <div className="flex p-4 rounded-lg mx-2 hover:shadow-lg hover:shadow-black/30 shadow-lg justify-center">

              <img
                src={`${backend_url}/${data.images && data?.images[imgMain]}`}
                alt=""
                className=" max-h-[500px] min-h-[400px] h-auto overflow-hidden 
                transition-shadow duration-300 ease-in-out "
              />
            </div>
            <div className="flex p-2 w-full">
              {data &&
                data.images.map((i, index) => (
                  <div key={index} className=" w-1/2 flex justify-center items-center 
                  rounded-lg hover:shadow-lg hover:shadow-gray-500 shadow-lg px-2 ">
                    <img
                    onClick={()=>{
                        setimgMain(index)
                    }}
                      src={`${backend_url}/${
                        data.images && data?.images[index]
                      }`}
                      alt=""
                      className="rounded-lg  
                      shadow-none transition-shadow duration-300 ease-in-out  hover:shadow-black/30"
                    />
                    
                  </div>
                ))}
                
            </div>
          </div>
        </div>
        {/* <div className="1/2 flex justify-center"> */}
          
                      
        <div className="md:w-4/6 w-full ps-16 md:ps-28 md:pr-8">
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


                      

          {/* <div className=" ps-16 w-full text-left">
                <h5 className="pt-3 text-[18px]">
                    Total Price: <strong>Rs. {data?.price}</strong>
                </h5>
                <div className="w-full flex items-center">
                    <div className="w-full ">
                        <div>
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Shipping Address:  {data?.address}
                        </h4>
                        </div>
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Shipping Address:  {data?.address}
                        </h4>
                      
                        <br />
                        <br />
                      
                      
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Order Name:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.name}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Total Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.productCount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Material:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.material}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            XS Qunatity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.xscount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            S Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.scount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            M Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.mcount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            L Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.lcount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            XL Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.xlcount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            XXL Quantity:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.xxlcount}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Colour:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.colour}
                        </h4>
                        <br/>
                        <br/>
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Description:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.description}
                        </h4>
                        <div className="w-full">
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Status:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            Pending
                        </h4>
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Company Name responsible for Order:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            Hiroshima
                        </h4>
                    </div>
                    </div>
                   
                </div>

            </div> */}

        {/* </div> */}
      </div>
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
  );
};

export default CustomerCustomOrderDetails;
