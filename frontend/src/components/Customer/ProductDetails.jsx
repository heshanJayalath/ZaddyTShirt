import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../Styles/Customer/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { backend_url } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsGarment } from "../../redux/actions/product";
import {toast} from 'react-toastify';
import {addTocart} from "../../redux/actions/cart"

const ProductDetails = ({ data }) => {
  console.log("data:", data)
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const {cart} = useSelector((state)=>state.cart);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsGarment(data && data.garment._id));
  }, [dispatch, data])

  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleMessageSubmit = () => {
    navigate("/index?coversation=506ebjverasd")
  }

  const addToCartHandler = (id)=>{
    const isItemExists = cart && cart.find((i)=>i._id === id);
    if(isItemExists){
      toast.error("Item already in cart")
    }else{
      const cartData = {...data, qty:count}
      dispatch(addTocart(cartData));
      toast.success("Item added to cart successfully")
    }
  }
  return (
    <div className='bg-white'>
      {
        data ? (
          <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
            <div className='w-full py-5'>
              <div className='flex w-full 800px:block gap-5'>
                <div className='w-full 800px:w-[50%]'>
                  <img src={`${backend_url}/${data.images && data?.images[select]}`} alt='' className='w-[80%]' />
                  <div className='w-full flex'>
                    {
                      data && data.images.map((i,index) => (
                        <div className={`${select ===  index? "border" : "null"} cursor-pointer`}>
                          <img
                            src={`${backend_url}/${data.images && data?.images[index]}`}
                            alt='' className='h-[200px] overflow-hidden mr-3 mt-3'
                            onClick={() => setSelect(index )}
                          />
                        </div>

                      ))
                    }
                  </div>

                </div>
                <div className='w-full 800px:w-[50%] pt-5'>
                  <h1 className={`${styles.productTitle}`}>
                    {data.name}
                  </h1>
                  <p>{data.description}</p>
                  <div className='flex pt-3'>
                    <h4 className={`${styles.productDiscountPrice}`}>
                      Rs.{data.discountPrice}
                    </h4>
                    <h3 className={`${styles.price}`}>
                      {data.originalPrice ? "Rs." + data.originalPrice : null}
                    </h3>
                  </div>

                  <div className='flex items-center mt-12 justify-between pr-3'>
                    <div>
                      <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out'
                        onClick={decrementCount}>
                        -
                      </button>
                      <span className='bg-gray-200 text-gray-800 font-medium px-4 py-[11px]'>{count}</span>
                      <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out'
                        onClick={incrementCount}>
                        +
                      </button>
                    </div>
                    <div>
                      {click ? (
                        <AiFillHeart
                          className='cursor-pointer '
                          size={30}
                          onClick={() => setClick(!click)}
                          color={click ? 'red' : "#333"}
                          title='Remove from Wishlist'
                        />
                      ) : (
                        <AiOutlineHeart
                          className='cursor-pointer '
                          size={30}
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title='Add to Wishlist'
                        />
                      )}
                    </div>
                  </div>
                  <div className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`} 
                  onClick={()=>addToCartHandler(data._id)}
                  >
                    <span className='text-white flex items-center'>
                      Add to Cart <AiOutlineShoppingCart className='ml-1' />
                    </span>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>

              </div>

            </div>
            <ProductDetailsInfo data={data} />
          </div>
        ) : (
          null
        )
      }
    </div>
  )
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex border-b pt-10 pb-2 justify-around">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>

      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          <p>No Reviews Yet</p>
        </div>
      ) : null}

    </div>
  );
};

export default ProductDetails