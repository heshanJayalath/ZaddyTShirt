import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { categoriesData, materialData } from "../../Static/Customer/data";
import { toast } from "react-toastify";
import { createProduct } from "../../redux/actions/product";

const CustomProduct = () => {
  const { garment } = useSelector((state) => state.garment);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [colour, setColour] = useState("");
  const [xscount, setxscount] = useState("");
  const [scount, setscount] = useState("");
  const [mcount, setmcount] = useState("");
  const [lcount, setlcount] = useState("");
  const [xlcount, setxlcount] = useState("");
  const [xxlcount, setxxlcount] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    if (error) {
      console.log("error: ", error);
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/garment-dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    console.log("files", files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    // newForm.append("name", name);
    // newForm.append("description", description);
    // newForm.append("category", category);
    // newForm.append("material", material);
    // newForm.append("colour", colour);
    // newForm.append("thickness", thickness);
    // newForm.append("tags", tags);
    // newForm.append("originalPrice", originalPrice);
    // newForm.append("discountPrice", discountPrice);
    // newForm.append("stock", stock);
    // newForm.append("garmentId", garment._id);

    dispatch(createProduct(newForm));
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
            Products Count <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter how mutch products you want..."
          />
        </div>
      
        {/* <div>
                    <label className="pb-2">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full mt-2 border h-[35px] rounded-[5px]"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Choose a category">Choose a category</option>
                        {categoriesData &&
                            categoriesData.map((i) => (
                                <option value={i.title} key={i.title}>
                                    {i.title}
                                </option>
                            ))}
                    </select>
                </div> */}

        <br />
        <div className="">
            <h2>Total Products Counts</h2>
            <br />
          <div className="flex w-full gap-4">
            
            <div className="w-4/12">
              <label className="pb-2">
                XS Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="name"
                value={xscount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setxscount(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                S Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="s_count"
                value={scount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setscount(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                M Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="m_count"
                value={mcount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setmcount(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>

          </div>
          <div>
                <br />
          <div className="flex w-full gap-4">
            
            <div className="w-4/12">
              <label className="pb-2">
                L Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="l_count"
                value={lcount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setlcount(e.target.value)}
                placeholder="Enter your Large product Count..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                XL Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="xl_count"
                value={xlcount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setxlcount(e.target.value)}
                placeholder="Enter your Extra Large product count..."
              />
            </div>

            <div className="w-4/12">
              <label className="pb-2">
                XXL Count <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="xxl_count"
                value={xxlcount}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setxxlcount(e.target.value)}
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
            name="Colour"
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

        {/* <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your product tags..."
          />
        </div>
        <br /> */}
      

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
