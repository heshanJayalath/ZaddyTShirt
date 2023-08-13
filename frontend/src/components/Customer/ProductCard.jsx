import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../Styles/Customer/styles';
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import ProductDetailsCard from './ProductDetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { backend_url } from '../../server';
import { toast } from 'react-toastify';
import { addTocart } from '../../redux/actions/cart';

const ProductCard = ({ data, isEvent }) => {
    const{cart} = useSelector((state)=>state.cart)
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();

    const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);
        if (isItemExists) {
            toast.error("Item already in cart")
        } else {
            if (data.stock < 1) {
                toast.error("Product stock limited!");
            } else {
                const cartData = { ...data, qty: 1 }
                dispatch(addTocart(cartData));
                toast.success("Item added to cart successfully")
            }
        }
    }

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
                                {data.originalPrice ? "Rs." + data.originalPrice : null}
                            </h4>
                        </div>
                        <span className='font-[400] text-[17px] text-[#68d284]'>
                            {data.sold_out} sold
                        </span>
                    </div>
                </Link>
                <div>
                    
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
                        onClick={() => addToCartHandler(data._id)}
                        color='#333'
                        title='Add to Cart'
                    />
                    {

                        open ? (
                            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
                        ) : null
                    }
                </div>
            </div>

        </>
    )
}

export default ProductCard