import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbacks } from "../../../Static/Customer/data";
import { backend_url } from "../../../../../frontend/src/server.js";
import heshan_avatar from "../../../Assets/Customer/avatar/hesha_av.jpeg";
import mali from "../../../Assets/Customer/avatar/mali.png";
import vala from "../../../Assets/Customer/avatar/vala.png";
import { useSelector } from "react-redux";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        background: "#00FFFF",
      }}
      onClick={onClick}
    />
  );
}

function Feedbacks() {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedDate = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedDate);
  }, [allProducts]);
  const feedbackss = [];
  const productname = [];
  // console.log("data.....................................", data[0].reviews);
  data.forEach((element) => {
    element.reviews.length !== 0 &&
      element.reviews.map((i) => {
        i = { ...i };
        i.productName = element.name;
        var newArray = Array.from(
          { length: i.rating },
          (_, index) => index + 1
        );
        var newArray2 = Array.from(
          { length: 5 - i.rating },
          (_, index) => index + 1
        );
        console.log(newArray);
        i.rating = newArray;
        i.unrating = newArray2;
        feedbackss.push(i);
      });
  });
  // data.forEach((element) => {
  //   element.reviews.length !== 0 &&
  //       productname.push(element.name);

  // });

  console.log("feed", feedbackss);
  // console.log("name", productname);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-60 mb-32 ">
      <h1 className="text-center mt-4 mb-2 text-2xl font-bold text-gray-800">
        What Our Customers Say...
      </h1>
      <h1 className="text-center mb-4 text-mg font-medium text-gray-800">
        User Reviews & Ratings
      </h1>
      <Slider {...settings}>
        <div className="">
          {feedbackss && feedbackss.length > 0 && (
            <>
              <div className=" bg-white p-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-20 h-20 rounded-2xl "
                      src={`${backend_url}/${feedbackss[0].user.avatar}`}
                      alt=""
                    />
                    <div class="font-medium dark:text-gray-700">
                      <div>{feedbackss[0].user.name}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {feedbackss[0].productName}
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4">
                    {feedbackss[0].rating.map((rating, index) => (
                      <svg
                        key={index}
                        class="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}

                    {feedbackss[0].unrating.map((rating, index) => (
                       <svg
                       class="w-4 h-4 text-gray-200 dark:text-gray-600"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 22 20"
                     >
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                    ))}

                   
                  </div>
                  <p className="pr-16 pl-4">{feedbackss[0].comment}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="">
          {feedbackss && feedbackss.length > 1 && (
            <>
              <div className=" bg-white p-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-20 h-20 rounded-2xl "
                      src={`${backend_url}/${feedbackss[1].user.avatar}`}
                      alt=""
                    />
                    <div class="font-medium dark:text-gray-700">
                      <div>{feedbackss[1].user.name}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {feedbackss[1].productName}
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4">
                    {feedbackss[1].rating.map((rating, index) => (
                      <svg
                        key={index}
                        class="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}

                    {feedbackss[1].unrating.map((rating, index) => (
                       <svg
                       class="w-4 h-4 text-gray-200 dark:text-gray-600"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 22 20"
                     >
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                    ))}

                   
                  </div>
                  <p className="pr-16 pl-4">{feedbackss[1].comment}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="">
          {feedbackss && feedbackss.length > 2 && (
            <>
              <div className=" bg-white p-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-20 h-20 rounded-2xl "
                      src={`${backend_url}/${feedbackss[2].user.avatar}`}
                      alt=""
                    />
                    <div class="font-medium dark:text-gray-700">
                      <div>{feedbackss[2].user.name}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {feedbackss[2].productName}
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4">
                    {feedbackss[2].rating.map((rating, index) => (
                      <svg
                        key={index}
                        class="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}

                    {feedbackss[2].unrating.map((rating, index) => (
                       <svg
                       class="w-4 h-4 text-gray-200 dark:text-gray-600"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 22 20"
                     >
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                    ))}

                   
                  </div>
                  <p className="pr-16 pl-4">{feedbackss[2].comment}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* <div className="">
          {feedbackss && feedbackss.length > 0 && (
            <>
              <div className=" bg-white p-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-20 h-20 rounded-2xl "
                      src={`${backend_url}/${feedbackss[0].user.avatar}`}
                      alt=""
                    />
                    <div class="font-medium dark:text-gray-700">
                      <div>{feedbackss[0].user.name}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {feedbackss[0].productName}
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4">
                    {feedbackss[0].rating.map((rating, index) => (
                      <svg
                        key={index}
                        class="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}

                    {feedbackss[0].unrating.map((rating, index) => (
                       <svg
                       class="w-4 h-4 text-gray-200 dark:text-gray-600"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 22 20"
                     >
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                    ))}

                   
                  </div>
                  <p className="pr-16 pl-4">{feedbackss[0].comment}</p>
                </div>
              </div>
            </>
          )}
        </div>
      */}
      </Slider>
    </div>
  );
}

export default Feedbacks;
