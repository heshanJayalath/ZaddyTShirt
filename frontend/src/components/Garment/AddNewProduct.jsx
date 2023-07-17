import React, { useState } from "react";
import { RxUpload } from "react-icons/rx";

const AddNewProduct = () => {
    const [productImage, setproductImage] = useState(null);
    const [uploadTxt, setUploadTxt] = useState("Upload Product Image");
    const [productName, setproductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [material,setmaterial]=useState("");
    const [colour, setColour]=useState("");
    const [thikness, setThikness]= useState("");
  
    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      setproductImage(file);
      setUploadTxt(null);
    };
    const handleCategoryChange = (event) => {
      setProductCategory(event.target.value);
    };
    const handleMaterialChange=(event)=>{
      setmaterial(event.target.value);
    }
  
    return (
      <section className="bg-gray-50  min-h-screen items-center md:px-10 px-5 justify-center">
        <div className="bg-gray-100 md:mt-20 md:mx-40 m-5 min-h-screen rounded-2xl shadow-lg max-w-full px-16 py-10  items-center">
          <div class="flex flex-col items-center">
            <h3 className="font-bold md:text-4xl text-xl text-[#002D74]">
              Add New Product
            </h3>
            <p className="md:text-xl text-sm mt-4 my-8 text-[#002D74]">
              Add your new product ....
            </p>
          </div>
          <form>
            {/* first part */}
            <div className="md:flex  md:w-full">
              {/* image  */}
  
              <div className="md:w-2/5 md:px-10 text-center px-6 mt-10 items-center justify-center  mb-6 md:mb-2">
                <label
                  htmlFor="file-input"
                  className="md:w-full h-96 flex items-center justify-center py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  {/* <span>Upload Product Photo</span> */}
  
                  {productImage ? (
                    <img
                      src={URL.createObjectURL(productImage)}
                      alt="avatar"
                      className="h-full w-full object-cover "
                    />
                  ) : (
                    <RxUpload className="h-12 w-12" />
                  )}
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
                <span className="text-center">{uploadTxt}</span>
              </div>
  
              <div className="md:w-3/5 w-full px-4 mt-10 items-center mb-12 md:mb-2">
                <div className="w-full relative md:mb-2 mb-2">
                  <input
                    className="p-3 mt-2 rounded-xl border  w-full"
                    type="text"
                    name="Product Name"
                    autoComplete="productname"
                    required
                    placeholder=" Product name"
                    value={productName}
                    onChange={(e) => setproductName(e.target.value)}
                  />
                </div>
                <div className="w-full relative md:mb-2 mb-2">
                  <select
                    className="p-3 mt-2 rounded-xl border  w-full"
                    name="shirtCategory"
                    id="shirtCategory"
                    onChange={handleCategoryChange}
                    value={productCategory}
                  >
                    <option value="">T-Shirt Category</option>
                    <option value="crewneck">Crew Neck</option>
                    <option value="vneck">V-Neck</option>
                    <option value="hooded">Hooded</option>
                    <option value="longSleeveCrewNeck">
                      Long Sleeve Crew Neck
                    </option>
                    <option value="longSleevePolo">Long Sleeve Polo</option>
                  </select>
                </div>
  
                <div className="w-full relative md:mb-2 mb-2">
                  <select
                    className="p-3 mt-2 rounded-xl border  w-full"
                    name="meterial"
                    id="meterial"
                    onChange={handleMaterialChange}
                    value={material}
                  >
                    <option value="">Select Meterial</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Fannel">Flannel</option>
                    <option value="Silk">Silk</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
  
                <div className="w-full relative md:mb-4 mb-2">
                  <input
                    className="p-3 mt-2 rounded-xl border  w-full"
                    type="text"
                    name="colour"
                    autoComplete="colour"
                    required
                    placeholder="Red"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  />
                </div>
  
                <div className="w-full relative md:mb-5 mb-3">
                  <input
                    className="p-3 mt-2 rounded-xl border  w-full"
                    type="text"
                    name="thikness"
                    autoComplete="thikness"
                    required
                    placeholder="thikness"
                    value={thikness}
                    onChange={(e)=> setThikness(e.target.value)}
                  />
                </div>
  
                <p className="md:mb-2 m-2"> Available Sizes</p>
  
                <div className="md:flex m-2 mb-4 w-4/5">
                  <div className="flex md:w-1/2 mb-2">
                    <div className="w-full relative flex ">
                      <label for="xs" className="mx-1">
                        {" "}
                        XS{" "}
                      </label>
                      <input type="checkbox" id="xs" name="xs" value="xs" />
                    </div>
                    <div className="w-full relative flex">
                      <label for="s" className="mx-1">
                        {" "}
                        S{" "}
                      </label>
                      <input type="checkbox" id="s" name="s" value="s" />
                    </div>
                    <div className="w-full relative flex">
                      <label for="m" className="mx-1">
                        {" "}
                        M{" "}
                      </label>
                      <input type="checkbox" id="m" name="m" value="m" />
                    </div>
                  </div>
  
                  <div className="flex md:w-1/2 mb-2">
                    <div className="w-full relative flex  ">
                      <label for="l" className="mx-1">
                        {" "}
                        L{" "}
                      </label>
                      <input type="checkbox" id="l" name="l" value="l" />
                    </div>
                    <div className="w-full relative flex ">
                      <label for="xl" className="mx-1">
                        {" "}
                        XL{" "}
                      </label>
                      <input type="checkbox" id="xl" name="xl" value="xl" />
                    </div>
  
                    <div className="w-full relative flex ">
                      <label for="xxl" className="mx-1">
                        {" "}
                        XXL{" "}
                      </label>
                      <input type="checkbox" id="xxl" name="xxl" value="xxl" />
                    </div>
                  </div>
                </div>
  
                <p className="md:mb-2 m-2"> Product Delivery Cost </p>
  
                <div className="md:flex w-full">
                  <div className="w-full relative md:mr-4 md:mb-5 mb-3">
                    <input
                      className="p-3 mt-2 rounded-xl border  w-full"
                      type="text"
                      name="Colombo_Suburbs"
                      autoComplete="Colombo & Suburbs"
                      required
                      placeholder="Colombo & Suburbs"
                    />
                  </div>
  
                  <div className="w-full relative md:ml-4 md:mb-5 mb-3">
                    <input
                      className="p-3 mt-2 rounded-xl border  w-full"
                      type="text"
                      name="Outstation"
                      autoComplete="Outstation"
                      required
                      placeholder="Outstation"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* second part */}
            <div className="  md:w-full">
              <p className="md:mb-2 m-2"> Product Delivery Time </p>
  
              <div className="md:flex w-full">
                <div className="w-full relative md:mr-4 md:mb-5 mb-3">
                  <input
                    className="p-3 mt-2 rounded-xl border  w-full"
                    type="text"
                    name="Colombo_Suburbs"
                    autoComplete="Colombo & Suburbs"
                    required
                    placeholder="Colombo & Suburbs"
                  />
                </div>
  
                <div className="w-full relative md:ml-4 md:mb-5 mb-3">
                  <input
                    className="p-3 mt-2 rounded-xl border  w-full"
                    type="text"
                    name="Outstation"
                    autoComplete="Outstation"
                    required
                    placeholder="Outstation"
                  />
                </div>
              </div>
  
              <div className="w-full relative md:mb-5 mb-3">
                <textarea className="p-2 mt-2 rounded-xl border w-full h-36"></textarea>
              </div>
  
              <div>
                <div class="flex items-center mr-4">
                  <label
                    for="purple-checkbox "
                    class="ml-2 text-sm my-4 font-medium text-gray-900 dark:text-gray-700"
                  >
                    Request 3D Model
                  </label>
                  <input
                    checked
                    id="purple-checkbox"
                    type="checkbox"
                    value="true"
                    class="w-5 h-5 m-2 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <dir className="text-center">
                <button
                  className="bg-[#002D74] rounded-md w-5/12 text-white  py-3 hover:scale-105 duration-300"
                  type="submit"
                >
                  Add Product
                </button>
              </dir>
            </div>
          </form>
        </div>
      </section>
    );
  };

export default AddNewProduct
