import React from "react";
import styles from "../../../Styles/Customer/styles";
import { materialData } from "../../../Static/Customer/data";

const Material = () => {
  return (
    <div className={`${styles.section} bg-blue-50 p-6 rounded-lg mb-12`}>
      <div className="font-medium text-2xl mb-3">
        <h2>Materials</h2>
      </div>

      {materialData &&
        materialData.map((i) => {
          //   const handleSubmit = (i) => {
          //     navigate(`/products?category=${i.title}`);
          //   };
          return (
            <div
              className=" flex items-center justify-between cursor-pointer overflow-hidden mb-3"
              // key={i.id}
              //   onClick={() => handleSubmit(i)}
            >
              <div className="flex">
                <input
                  id={i.i}
                  type="checkbox"
                  value=""
                  class="w-4 h-4 mt-0.5 hover:text-blue-800 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 dark:bg-blue-700 dark:border-blue-800"
                />
                <label
                  for="default-checkbox"
                  class="ml-4 text-sm font-medium text-gray-900 dark:text-gray-900 hover:text-blue-800"
                >
                  {i.title}
                </label>

                {/* <input
                  className="mr-4 border-4 border-blue-500"
                  type="checkbox"
                  name={i.title}
                  id={i.id}
                />
                <h5 className="">{i.title}</h5> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Material;
