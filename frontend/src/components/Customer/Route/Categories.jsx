import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../Styles/Customer/styles";
import { categoriesData } from "../../../Static/Customer/data";

const Categories = ({ material }) => {
  const navigate = useNavigate();
    if(material !=='All'){
      console.log(material)
      return (
        <>
      <div
        className={`${styles.section} bg-blue-50 p-6 rounded-lg `}
        id="categories"
      >
        <div className="">
          <div className='font-medium text-2xl mb-2'>
          <h2>Categories</h2>
          </div>

          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                //i.title
                navigate(`/products2?material=${material}&category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden mb-2 "
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[14px] leading-[1.3] text-sm font-medium text-gray-900 dark:text-gray-900 hover:text-blue-800 `}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[80px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
    )

  }else
  return (
    <>
      <div
        className={`${styles.section} bg-blue-50 p-6 rounded-lg `}
        id="categories"
      >
        <div className="">
          <div className="font-medium text-2xl mb-2">
            <h2>Categories</h2>
          </div>

          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                //i.title
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden mb-2 "
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5
                    className={`text-[14px] leading-[1.3] text-sm font-medium text-gray-900 dark:text-gray-900 hover:text-blue-800 `}
                  >
                    {i.title}
                  </h5>
                  <img
                    src={i.image_Url}
                    className="w-[80px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
