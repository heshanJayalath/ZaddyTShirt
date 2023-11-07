import React, { useEffect, useState } from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import styles from '../../Styles/Customer/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCustomOrdersOfUser } from '../../redux/actions/customorder'
import { backend_url } from '../../server'

const CustomerCustomOrderDetails = () => {

    const { orders } = useSelector((state) => state.customorder);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);


    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllCustomOrdersOfUser(user._id));
    }, [dispatch]);

    const data = orders && orders.find((item) => item._id === id);

    return (
        <div className={`py-4 min-h-screen ${styles.section}`}>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <BsFillBagFill size={30} color="crimson" />
                    <h1 className="pl-2 text-[25px]">Custom Order Details</h1>
                </div>
            </div>
            <div className="w-full flex items-center justify-between pt-6">
                <h5 className="text-[#00000084]">
                    Order ID:
                    <span>
                        #{data?._id?.slice(0, 8)}
                    </span>
                </h5>
                <h5 className="text-[#00000084]">
                    Placed on:
                    <span>
                        {data?.createdAt?.slice(0, 10)}
                    </span>
                </h5>
            </div>

            <br />
            <br />
            <div className="border-t w-full text-right">
                <h5 className="pt-3 text-[18px]">
                    Total Price: <strong>Rs.10000.00</strong>
                </h5>
                <div className="w-full flex items-center">
                    <div className="w-full w-[60%]">
                        <h4 className='pt-3 text-[20px] font-[600]'>
                            Shipping Address:
                        </h4>
                        <h4 className="pt-3 text-[20px]">
                            {data?.address}
                        </h4>
                        <br />
                        <br />
                        <h4 className='pt-3 text-[20px] font-[600]'>Order Images</h4>
                        <h4>
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
                    </div>
                    <div className="w-full w-[40%]">
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
        </div>
    )
}

export default CustomerCustomOrderDetails