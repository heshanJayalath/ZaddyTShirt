import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/Customer/styles";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsGarment } from "../../redux/actions/product";
import { toast } from "react-toastify";
import { addTocart } from "../../redux/actions/cart";
import Ratings from "./Ratings";
import axios from "axios";
import { server } from "../../server";

const ProductDetails = ({ data }) => {
  console.log("data:", data);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsGarment(data && data.garment._id));
  }, [dispatch, data]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const garmentId = data.garment._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          garmentId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };


  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart");
    } else {
      const cartData = { ...data, qty: count };
      dispatch(addTocart(cartData));
      toast.success("Item added to cart successfully");
    }
  };
  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="  my-8">
              <h1 className={`${styles.productTitle}  ps-8`}>{data.name}</h1>{" "}
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"/>
            </div>
            


            <div className="flex w-full 800px:block gap-5">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={`${backend_url}/${data.images && data?.images[select]}`}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  {data &&
                    data.images.map((i, index) => (
                      <div
                        className={`${
                          select === index ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={`${backend_url}/${
                            data.images && data?.images[index]
                          }`}
                          alt=""
                          className="h-[150px] overflow-hidden mr-3 mt-3"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
              <h1 className={`py-4 font-medium text-xl`}>Garment Factory : {data.garment['companyName']} </h1>
                <h1 className={`py-4 font-medium text-xl`}>{data.name}</h1>

                <li className='py-2 font-normal text-lg'>Category : {data.category&&data.category}</li>
                <li className='py-2 font-normal text-lg'>Material:{data.material&&data.material}</li>
                <li className='py-2 font-normal text-lg'>Thickness :{data.thickness&&data.thickness}</li>
                <li className='py-2 font-normal text-lg'>Delivery : Estimated 3-5 Working Days</li>
                <li className='py-2 font-normal text-lg'>Payment Options : Card or Cash on Delivery at Checkout.</li>
                {/* <p>{data.description}</p> */}
                <div className="flex pt-6">
                  <h4 className={`text-4xl font-bold text-red-600`}>
                    Rs.{data.discountPrice}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? "Rs." + data.originalPrice : null}
                  </h3>
                </div>

                <div className="flex items-center mt-16 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-1 px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-10 mt-16">

                <button
                  className='text-white text-base bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                  hover:bg-gradient-to-br  focus:outline-none 
                   shadow-lg shadow-purple-500/50 dark:shadow-md hover:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg 
                   px-8  text-center  mb-4'
                  onClick={() => addToCartHandler(data._id)}
                  >
                  <span className="text-white py-3 flex items-center">
                    Add to Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </button>

                <button
                   className=' text-white text-base bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                   hover:bg-gradient-to-br  focus:outline-none shadow-lg shadow-purple-500/50 dark:shadow-md hover:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg 
                    px-6  text-center  mb-4'
                  onClick={handleMessageSubmit}
                  >
                  <span className="text-white py-3 flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </button>
                  </div>


              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
        </div>
      ) : null}
    </div>
  );
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
            Product Description
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
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${backend_url}/${item.user.avatar}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
