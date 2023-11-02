import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {  materialData } from "../../Static/Customer/data";
import { toast } from "react-toastify";
import { createCustomOrder } from "../../redux/actions/customorder";
import FormData from "form-data";



const CustomProduct = () => {
  const { user } = useSelector((state) => state.user);
  // const { garment } = useSelector((state) => state.garment);
  const { success, error } = useSelector((state) => state.customorder);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [productCount, setProductCount] = useState();
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [colour, setColour] = useState("");
  const [xscount, setXscount] = useState();
  const [scount, setScount] = useState();
  const [mcount, setMcount] = useState();
  const [lcount, setLcount] = useState();
  const [xlcount, setXlcount] = useState();
  const [xxlcount, setXxlcount] = useState();
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (error) {
      console.log("error: ", error);
      toast.error(error);
    }
    if (success) {
      toast.success("Custom order created successfully!");
      navigate("/");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("email", user.email);
    newForm.append("name", name);
    newForm.append("material", material);
    newForm.append("productCount", productCount);
    newForm.append("xscount", xscount);
    newForm.append("scount", scount);
    newForm.append("mcount", mcount);
    newForm.append("lcount", lcount);
    newForm.append("xlcount", xlcount);
    newForm.append("xxlcount", xxlcount);
    newForm.append("colour", colour);
    newForm.append("description", description);
    newForm.append("address", address);
    newForm.append("userId", user._id);



    dispatch(createCustomOrder(newForm));
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };




  return (
    <div className="w-[80%] md:w-[50%] bg-white mt-16 shadow-md shadow-blue-500  rounded-[4px] overflow-y-scroll p-3">
      <h5 className="text-[30px] font-Poppins text-center">
        Order Custom Product
      </h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Order name / Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter order name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Material <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            name="meterial"
            id="meterial"
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
          >
            <option value="">Select Meterial</option>
            {materialData &&
              materialData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />

        <div>
          <label className="pb-2">
            Products Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="productCount"
            value={productCount}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setProductCount(e.target.value)}
            placeholder="Enter the total shirt Quntity"
          />
        </div>


        <br />
        <div className="">
          <h2>Total Products Quantity</h2>
          <br />
          <div className="flex w-full gap-4">

            <div className="w-4/12">
              <label className="pb-2">
                XS Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="xscount"
                value={xscount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setXscount(e.target.value)}
                placeholder="Enter your Extra Small product count..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                S Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="scount"
                value={scount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setScount(e.target.value)}
                placeholder="Enter your small product count..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                M Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="mcount"
                value={mcount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setMcount(e.target.value)}
                placeholder="Enter your Medium product count..."
              />
            </div>

          </div>
          <div>
            <br />
            <div className="flex w-full gap-4">

              <div className="w-4/12">
                <label className="pb-2">
                  L Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="lcount"
                  value={lcount}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setLcount(e.target.value)}
                  placeholder="Enter your Large product Count..."
                />
              </div>

              <div className="w-4/12">
                <label className="pb-2">
                  XL Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="xlcount"
                  value={xlcount}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setXlcount(e.target.value)}
                  placeholder="Enter your Extra Large product count..."
                />
              </div>

              <div className="w-4/12">
                <label className="pb-2">
                  XXL Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="xxlcount"
                  value={xxlcount}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setXxlcount(e.target.value)}
                  placeholder="Enter your Double Extra Large product count..."
                />
              </div>

            </div>
          </div>
        </div>

        <br />

        <br />
        <div>
          <label className="pb-2">
            Colour <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="1"
            type="text"
            name="colour"
            value={colour}
            className="mt-2 appearance-none block w-full p-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setColour(e.target.value)}
            placeholder="Enter the colour code you want to include in your design"
          ></textarea>
        </div>
        <br />

        <div>
          <label className="pb-2">Description</label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your special details about custom order..."
          ></textarea>
        </div>
        <br />

        <div>
          <label className="pb-2">
            Postal Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={address}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your Address..."
          />
        </div>
        <br />


        <div>
          <label className="pb-2">
            Upload T-Shirt Design Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(i)}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                  <AiOutlineCloseCircle
                    size={20}
                    className="absolute top-0 right-0 text-red-500 cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
              ))}
          </div>
          <br />
          <div className="pb-24">
            <input
              type="submit"
              value="Place Custom Order"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 hover:border-blue-200 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomProduct;
