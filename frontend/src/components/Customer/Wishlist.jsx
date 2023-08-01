import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs'
import styles from '../../Styles/Customer/styles';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const Wishlist = ({ setOpenWishlist }) => {
    const cartData = [
        {
            name: "The basic half-sleeve T-shirt",
            description: "test",
            price: "1000",
        },
        {
            name: "The basic half-sleeve T-shirt",
            description: "test",
            price: "2000",
        },
        {
            name: "The basic half-sleeve T-shirt",
            description: "test",
            price: "1500",
        },
    ]
    return (
        <div className='fixed top-0 z-10 left-0 w-full bg-[#00000056] h-screen'>
            <div className='fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
                <div>
                    <div className='flex w-full justify-end pt-5 pr-5'>
                        <RxCross1
                            size={25}
                            className="cursor-pointer"
                            onClick={() => setOpenWishlist(false)} />
                    </div>
                    {/* Items Length */}
                    <div className={`${styles.noramalFlex} p-4`}>
                        <AiOutlineHeart size={25} />
                        <h5 className='pl-2 text-[20px] font-[500]'>
                            3 items
                        </h5>
                        {/* cart single Items */}
                        <br />
                        <div className='w-full border-t'>
                            {
                                cartData && cartData.map((i, index) => (
                                    <WishlistSingle key={index} data={i} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const WishlistSingle = ({ data }) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;

    return (
        <div className='border-b p-4'>
            <div className='w-full flex items-center'>
                <RxCross1 className='cursor-pointer'/>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4vWYV-TV-_fJ4j0vevGRkKZZ49GtdrY2N8Gmwi_UlxdfAW44_ZnigXmnEaZjTg4iVnw&usqp=CAU"
                    alt=""
                    className="w-[80px] h-[80px] ml-2"
                />
                <div className='pl-[5px]'>
                    <h1>{data.name}</h1>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>
                        Rs.{totalPrice}
                    </h4>
                </div>
                <div>
                    <BsCartPlus size={20} className='ml-2 cursor-pointer' title='Add to Cart' />
                </div>
            </div>
        </div>
    )
}

export default Wishlist