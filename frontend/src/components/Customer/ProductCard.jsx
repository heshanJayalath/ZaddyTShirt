import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../Styles/Customer/styles';
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import ProductDetailsCard from './ProductDetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { backend_url } from '../../server';

const ProductCard = ({ data,isEvent }) => {
    // console.log("images:", data.images[0]);
    // const {wishlist} = useSelector((state)=>state.wishlist)
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();
    console.log("open", open);
    // console.log("test1",data._id)
    // const d = data.name;
    // const product_name = d.replace(/[\s]+/g, "-");
    return (
        <>
            <div className='w-fulll h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
                <div className='flex justify-end'>
                </div>
                <Link to={`/product/${data._id}`}>
                    <img src={`${backend_url}/${data.images && data?.images[0]}`} alt='image'
                        className='w-full h-[170px] object-contain' />
                </Link>
                <Link to='/'>
                    <h5 className={`${styles.shop_name}`}>Zaddy</h5>
                </Link>
                <Link to={`/product/${data._id}`}>
                    <h4 className='pb-3 font-[500]'>
                        {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
                    </h4>
                    <div className='flex'>
                        <AiFillStar
                            className='mr-2 cursor-pointer'
                            size={20}
                            color='#f6ba00'
                        />
                        <AiFillStar
                            className='mr-2 cursor-pointer'
                            size={20}
                            color='#f6ba00'
                        />
                        <AiFillStar
                            className='mr-2 cursor-pointer'
                            size={20}
                            color='#f6ba00'
                        />
                        <AiFillStar
                            className='mr-2 cursor-pointer'
                            size={20}
                            color='#f6ba00'
                        />
                        <AiOutlineStar
                            className='mr-2 cursor-pointer'
                            size={20}
                            color='#f6ba00'
                        />
                    </div>
                    <div className='py-2 flex items-center justify-between'>
                        <div className='flex'>
                            <h5 className={`${styles.productDiscountPrice}`}>
                                Rs.{data.originalPrice === 0
                                    ? data.originalPrice : data.discountPrice}
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ? "Rs."+data.originalPrice : null}
                            </h4>
                        </div>
                        <span className='font-[400] text-[17px] text-[#68d284]'>
                            {data.sold_out} sold
                        </span>
                    </div>
                </Link>
                <div>
                    {click ? (
                        <AiFillHeart
                            className='cursor-pointer absolute right-2 top-5'
                            size={22}
                            onClick={() => setClick(!click)}
                            color={click ? 'red' : "#333"}
                            title='Remove from Wishlist'
                        />
                    ) : (
                        <AiOutlineHeart
                            className='cursor-pointer absolute right-2 top-5'
                            size={22}
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title='Add to Wishlist'
                        />
                    )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setOpen(!open)}
                        color='#333'
                        title='Quick View'
                    />
                    <AiOutlineShoppingCart
                        size={22}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => setOpen(!open)}
                        color='#333'
                        title='Add to Cart'
                    />
                    {
                       
                        open? (
                            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
                        ):null
                    }
                </div>
            </div>

        </>
    )
}

export default ProductCard