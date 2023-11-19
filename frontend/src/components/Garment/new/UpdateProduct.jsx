import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { categoriesData, materialData } from '../../../Static/Customer/data';
import { toast } from 'react-toastify'
import { createProduct } from "../../../redux/actions/product";
import { backend_url } from '../../../server';
import { RxAvatar } from 'react-icons/rx';
import da from 'date-fns/esm/locale/da/index.js';


const UpdateProduct = ({data}) => {
    const { garment } = useSelector((state) => state.garment);
    const { success, error } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [size, setSize] =useState("")
    const [material, setMaterial] = useState("");
    const [colour, setColour] = useState("");
    const [thickness, setThickness] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [stock, setStock] = useState();
    const [model, setModel] = useState(null);
    const [imgMain,setImagMain]=useState(0)

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
        setImages((prevImages) => [...prevImages, ...files])
    }

    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newForm = new FormData();

        images.forEach((image) => {
            newForm.append("images", image);
        });
        newForm.append("name", name+" "+size);
        newForm.append("description", description);
        newForm.append("category", category);
        newForm.append("material", material);
        newForm.append("colour", colour);
        newForm.append("thickness", thickness);
        newForm.append("tags", tags);
        newForm.append("originalPrice", originalPrice);
        newForm.append("discountPrice", discountPrice);
        newForm.append("stock", stock);
        newForm.append("garmentId", garment._id);
        newForm.append("model", model)

        dispatch(createProduct(newForm));

    }


    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }

    const handleModelChange = (e) => {
        const file = e.target.files[0];
        setModel(file);
    }

    return (
        <div className="w-[60%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
            <h5 className="text-[30px] mb-10 font-Poppins text-center">Update Product</h5>
            {/* create product form */}
            <form onSubmit={handleSubmit}>

            <div>
              {data &&
                  <div  className="mt-4 flex justify-center md:mt-6">
                    <img
                      src={`${backend_url}/${data.images && data?.images[imgMain]}`}
                      alt=""
                      className="max-h-[300px] shadow-md max-w-md md:max-w-sm  md:py-14 rounded-lg overflow-hidden  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    />
                  </div>
                }
            </div>

                <br />
                <div>
                    <label className="pb-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={data&&data.name}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your product name..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full mt-2 border h-[35px] rounded-[5px]"
                        value={data&&data.category}
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
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Size <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full mt-2 border h-[35px] rounded-[5px]"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="Choose a category">Choose Size</option>
                        <option value="Extra Small">Extra Small</option>
                        <option value="Smallm"> Small</option>
                        <option value="Medium">Medium </option>
                        <option value="Large"> Large</option>
                        <option value="Extra Large"> Extra Large</option>
                        
            
                    </select>
                </div>

                <br />
                <div>
                    <label className="pb-2">
                        Thickness <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={data&&data.thickness}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setThickness(e.target.value)}
                        placeholder="Enter your product name..."
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
                        value={data&&data.material}
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
                        Colour <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        cols="30"
                        required
                        rows="2"
                        type="text"
                        name="Colour"
                        value={colour}
                        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setColour(e.target.value)}
                        placeholder="Enter the colours you want to include in your design"
                    ></textarea>
                </div>
                <br />

                <div>
                    <label className="pb-2">
                        Description
                    </label>
                    <textarea
                        cols="30"
                        required
                        rows="8"
                        type="text"
                        name="description"
                        value={data&&data.description}
                        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter your product description..."
                    ></textarea>
                </div>
                <br />

                <div>
                    <label className="pb-2">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        value={data&&data.tags}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter your product tags..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Original Price <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={data&&data.originalPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="Enter your product price..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Price (With Discount) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={data&&data.discountPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDiscountPrice(e.target.value)}
                        placeholder="Enter your product price with discount..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Product Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={data&&data.stock}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter your product stock..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Upload Images <span className="text-red-500">*</span>
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



                    <label className="pb-2">
                        Upload 3D Model
                    </label>
                    {
                        model ? (
                            <img
                                src={URL.createObjectURL(model)}
                                alt='model'
                            />
                        ) : (
                            null
                        )

                    }

                    <input
                        type="file"
                        name="model"
                        id="uploadModel"
                        className='hidden'
                        accept='.glb'
                        onChange={handleModelChange}
                    />
                    <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="uploadModel">
                            <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                        </label>
                    </div>




                    <br />
                    <div>
                        <input
                            type="submit"
                            value="Create"
                            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct