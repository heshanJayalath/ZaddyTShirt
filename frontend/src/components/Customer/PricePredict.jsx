import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { categoriesData, materialData } from "../../Static/Customer/data";
import { toast } from "react-toastify";
import cuf from "../../Assets/predictor/cuff.webp";
import scprint from "../../Assets/predictor/print.jpeg"
import { createProduct } from "../../redux/actions/product";
import axios from "axios";
import bg from "../../Assets/Customer/CustomerHomePage/bg21.png";
import bg2 from "../../Assets/Customer/CustomerHomePage/bg22.png"

const PricePredict = () => {
  //   const { garment } = useSelector((state) => state.garment);
  //   const { success, error } = useSelector((state) => state.products);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const [material, setMaterial] = useState("");
  const [productcount, setproductcount] = useState([]);
  const [button, setbutton] = useState([]);
  const [embroid, setembroid] = useState([]);
  const [sleeveType, setsleeveType] = useState("");
  const [collarType, setcollarType] = useState("");
  const [collarMaterial, setcollarMaterial] = useState("");
  const [neckType, setNecktype] = useState("");
  const [cuff, setCuff] = useState("");
  const [doublesleeve, setDoubleSleave] = useState("");
  const [pipping, setPipping] = useState("");
  const [screen, setscreen] = useState("");
  const [generatedPrice, setGeneratedPrice] = useState(0);
  const [loading, setloading] = useState("Genarate Price");

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading("Generating Price.....");
    setDoubleSleave("No");
  };

  const handleClick = () => {
    axios
      .post("http://127.0.0.1:5000/pricepredictor", {
        name: "Heshan",
        age: 23,
        material: material,
        productcount: productcount,
        button: button,
        embroid: embroid,
        sleeveType: sleeveType,
        collarType: collarType,
        collarMaterial: collarMaterial,
        neckType: neckType,
        cuff: cuff,
        doublesleeve: doublesleeve,
        pipping: pipping,
        screen: screen,
      })
      .then((response) => {
        setGeneratedPrice(response.data.payload);
        setloading("Genarate Price");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-cover flex m-auto  justify-center ">
       <div className="relative">
      <div className="absolute inset-0 bg-sky-800 opacity-50"></div>

      <div className="flex">
      <img
          className="  w-1/2 object-cover object-center"
          src={bg}
          alt="nature image"
        />
         <img
          className="  w-1/2 object-cover object-center"
          src={bg2}
          alt="nature image"
        />
      </div>
      <div className="flex">
      <img
          className="  w-1/2 object-cover object-center"
          src={bg2}
          alt="nature image"
        />
         <img
          className="  w-1/2 object-cover object-center"
          src={bg}
          alt="nature image"
        />
      </div>
      <div className="flex">
      <img
          className="  w-1/2 object-cover object-center"
          src={bg}
          alt="nature image"
        />
         <img
          className="  w-1/2 object-cover object-center"
          src={bg2}
          alt="nature image"
        />
      </div>
      <div className="flex">
      <img
          className="  w-1/2 object-cover object-center"
          src={bg}
          alt="nature image"
        />
         <img
          className="  w-1/2 object-cover object-center"
          src={bg2}
          alt="nature image"
        />
      </div>

{/*         
        <img
          className=" bg-cover  w-full object-cover object-center"
          src={bg}
          alt="nature image"
        />
        
        <img
          className=" bg-cover  w-full object-cover object-center"
          src={bg}
          alt="nature image"
        />
       
        <img
          className=" bg-cover  w-full object-cover object-center"
          src={bg}
          alt="nature image"
        /> */}
      </div>
    <div className="w-[80%] absolute md:w-[50%] bg-white mt-16 shadow-md shadow-blue-500  rounded-[4px] overflow-y-scroll p-8">
      <h5 className="text-[30px] font-Poppins text-center">Price Predictor</h5>

      <form onSubmit={handleSubmit}>
        <br />

        <div>
          <label className="pb-2">
            Material <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            name="meterial"
            id="meterial"
            required
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
          >
            <option value="">Select Meterial</option>
            <option value="Cotton Pique">Cotton Pique</option>
            <option value="Single Jursey">Single Jursey</option>
            <option value="Wetlook">Wetlook</option>
          </select>
        </div>
        <br />

        <div>
          <label className="pb-2">
            Products Count <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="name"
            required
            value={productcount}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setproductcount(e.target.value)}
            placeholder="Enter how mutch products you want..."
          />
        </div>

        <div className="">
          <br />
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <label className="pb-2">
                Button Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="name"
                required
                value={button}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setbutton(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>

            <div className="w-1/2">
              <label className="pb-2">
                Embroid Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="s_count"
                value={embroid}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setembroid(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>
          </div>
        </div>

        <br />
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <label className="pb-2">
              Sleeve Type <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={sleeveType}
              onChange={(e) => setsleeveType(e.target.value)}
            >
              <option value="Choose a category">Choose a category</option>
              <option value="Long Sleeve">Long Sleeve</option>
              <option value="Short Sleeve">Short Sleeve</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="pb-2">
              Collar Type <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={collarType}
              onChange={(e) => setcollarType(e.target.value)}
            >
              <option value="Choose a category">Choose a Collar</option>
              <option value="No Collar">No Collar</option>
              <option value="Chinese Collar">Chinese Collar</option>
              <option value="Full Collar">Full Collar</option>
            </select>
          </div>
        </div>

        <br />
        <div className="w-full flex gap-4">
          <div className="w-1/2">
            <label className="pb-2">
              Collar Material <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={collarMaterial}
              onChange={(e) => setcollarMaterial(e.target.value)}
            >
              <option value="No Coller">No Coller</option>
              <option value="Fabric">Fabric Collar</option>
              <option value="Knit">Knit Collar</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="pb-2">
              Neck Type <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={neckType}
              onChange={(e) => setNecktype(e.target.value)}
            >
              <option value="Crew Neck">Crew Neck</option>
              <option value="Polo Neck">Polo Neck</option>
              <option value="V-Neck">V-Neck</option>
            </select>
          </div>
        </div>

        <br />

        <div className=" w-full px-10 ">
          <div className="md:flex w-full content-between place-content-between ">
            <div className="md:w-1/3 w-full items-center mb-4 ">
              <h3 className="mb-1">Cuff</h3>
              <div class="flex items-center mb-4">
                <input
                  id="cuff_yes"
                  type="radio"
                  name="cuff"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  value="Yes"
                  onChange={(e) => setCuff(e.target.value)}
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  Cuff Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="cuff_no"
                  type="radio"
                  value="No"
                  onChange={(e) => setCuff(e.target.value)}
                  name="cuff"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  Cuff No
                </label>
              </div>
            </div>

            <div className="md:w-1/3 w-full mb-4">
              <h3 className="mb-1">Pipping</h3>
              <div class="flex items-center mb-4">
                <input
                  id="pipping_yes"
                  type="radio"
                  value="Yes"
                  name="pipping"
                  onChange={(e) => setPipping(e.target.value)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  Pipping Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="pipping_no"
                  type="radio"
                  value="No"
                  onChange={(e) => setPipping(e.target.value)}
                  name="pipping"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  pipping No
                </label>
              </div>
            </div>

            <div className="md:w-1/3 w-full mb-4">
              <h3 className="mb-1">Screen Print</h3>
              <div class="flex items-center mb-4">
                <input
                  id="screen_print_yes"
                  type="radio"
                  value="Yes"
                  onChange={(e) => setscreen(e.target.value)}
                  name="screen_print"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="screen_print_no"
                  type="radio"
                  value="No"
                  onChange={(e) => setscreen(e.target.value)}
                  name="screen_print"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  No
                </label>
              </div>
            </div>

            {/* <div className="w-1/2">
              <h3 className="mb-1">Double Sleeve</h3>
              <div class="flex items-center mb-4">
                <input
                  id="double_sleeve_yes"
                  type="radio"
                  name="double sleeve"
                  value="Yes"
                  onChange={(e) => setDoubleSleave(e.target.value)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="double_sleeve_no"
                  type="radio"
                  value="No"
                  onChange={(e) => setDoubleSleave(e.target.value)}
                  name="double sleeve"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="cuff"
                  class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-800"
                >
                  No
                </label>
              </div>
            </div> */}
          </div>
        </div>

        <br />

        <br />
        <div className="pb-10">
          <input
            type="submit"
            value={loading}
            onClick={handleClick}
            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 hover:border-blue-200 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:border-blue-500 sm:text-sm"
          />
          <div className="flex justify-center mt-10 text-xl text-gray-800 font-bold">
            <h1>Rs. {generatedPrice}</h1>
          </div>
        </div>
      </form>
      <div className="  mx-auto  w-full flex">
        <div className="w-1/2 mt-4">
        <img src={cuf} alt="" className=" mx-auto w-[100px] md:w-[250px]" />
        <p className="text-center text-sm">
          A cuff is a layer of fabric at the lower <br /> edge of the sleeve of
          a T-shirt,
        </p>
        <p className="font-bold  text-center">Cuff</p>
        </div>
        <div className="w-1/2" >
        <img src={scprint} alt="" className=" mx-auto w-[100px] md:w-[140px]" />
        <p className="text-center text-sm">
          Screen printing is printing  <br/> designs or graphics on a t-shirt
        </p>
        <p className="font-bold  text-center">Screen Print</p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default PricePredict;
