import React from "react";
import styles from "../../../Styles/Customer/styles";
import { materialData } from "../../../Static/Customer/data";
import { useNavigate } from "react-router-dom";
import { Radio } from "@material-ui/core";

const Material = ({ setMaterial }) => {
 

  const matCheckall = () => {
    setMaterial("All");
  };
  return (
    <div className={`${styles.section} bg-blue-50 p-6 rounded-lg mb-12`}>
      <div className="font-medium text-2xl mb-3">
        <h2>Materials</h2>
      </div>
      <div className="mb-2">
      <input
        type="radio"
        id="all"
        name="material"
      
        onChange={matCheckall}
        className="hover:text-gray-800 mr-2 text-blue-900 dark:text-blue-900"
      ></input>
      <label
        for="all"
        id="all"
        className=" cursor-pointer text-[14px] leading-[1.3] text-base font-medium hover:text-lg text-blue-900 dark:text-blue-900 hover:text-gray-800"
      >
        All
      </label>
      </div>
     
      {materialData &&
        materialData.map((i) => {
          const handleSubmit = (i) => {
            // setMaterial(i.title)
            // navigate(`/products2?category=${i.title}`);
          };

          const matCheck = () => {
            setMaterial(i.title);
          };
          return (
            <div
              className=" flex items-center justify-between cursor-pointer overflow-hidden mb-3"
              key={i.id}
              onClick={() => handleSubmit(i)}
            >
              {/* hover:text-gray-800 text-blue-900 dark:text-blue-900 */}
              <div className="flex ">
                <input
                  type="radio"
                  id={i.id}
                  name="material"
                  onChange={matCheck}
                  className="hover:text-gray-800 mr-2 text-blue-900 dark:text-blue-900"
                ></input>
                <label
                  for={i.id}
                  id={i.i}
                  className=" cursor-pointer text-[14px] leading-[1.3] text-base font-medium hover:text-lg text-blue-900 dark:text-blue-900 hover:text-gray-800"
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
