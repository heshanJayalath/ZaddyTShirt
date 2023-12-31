import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfGarment } from "../../redux/actions/order";
import { getAllProductsGarment } from "../../redux/actions/product";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineCloseCircle, AiOutlineMoneyCollect, AiOutlinePlusCircle } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../Styles/Customer/styles";
import { MdBorderClear } from "react-icons/md";
import FormData from "form-data";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const GarmentViewReport = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { garment } = useSelector((state) => state.garment);
  const { products } = useSelector((state) => state.products);

  const [deliveredOrder, setDeliveredOrder] = useState(null);
  const [releventServiceChargeData, setReleventServiceChargeData] = useState(null)
  const [showCharges, setShowChargers] = useState(false);
  const [garmentName, setGarmentName] = useState();
  const [fee, setFee] = useState();
  const [images, setImages] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(getAllOrdersOfGarment(garment._id));
    dispatch(getAllProductsGarment(garment._id));
  }, [dispatch]);

  useEffect(() => {
    axios.get(`${server}/servicecharge/garment-all-service-charges`).then((res) => {
      setData(res.data.serviceCharges);
      console.log("Dar:", data)
    })
  }, [])

  useEffect(() => {
    if (data && garment) {
      const filteredServiceCharges = data.filter(charge => ((charge.name === garment?.companyName) && (charge.status === 'invoice')));
      console.log("Filtered Service Charges:", filteredServiceCharges);
      filteredServiceCharges?.map((item) => {
        setReleventServiceChargeData(item);
      });

      console.log('rellllllll',releventServiceChargeData);
    }
  }, [data, garment]);


  const orderData =
    orders && orders.filter((item) => item.status === "Delivered");

  // console.log(garment)
  let totalEarnings = orderData &&
    orderData.reduce((acc, item) => acc + item.totalPrice, 0);

  // const serviceCharge = totalEarnings * 0.1;
  let availableBalance = totalEarnings?.toFixed(2) || 0;


  // let serviceChargers = availableBalance * 0.1;

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const config = { headers: { "Content-Type": "multipart/form-data" } };


    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append('garmentName', releventServiceChargeData?.name);
    formData.append('fee', releventServiceChargeData?.fee);
    formData.append('status', 'Pending');
    formData.append('garmentId', garment._id);
    formData.append('garment', JSON.stringify(garment));

    axios.put(`${server}/servicecharge/update-service-payment/${releventServiceChargeData._id}`, formData, config)
      .then((res) => {
        window.location.reload(true);
        toast.success(res.data.message);
        setGarmentName("");
        setFee();
        setImages([]);
      }).catch((err) => {
        toast.error(err.response.data.message);
      })
  }


  const columns = [
    // { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    { field: "orderid", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];
  let number = 0;


  orders &&
    orders.forEach((item) => {
      number += 1;
      row.push({
        id: item._id,
        orderid: number,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: "Rs. " + item.cart.reduce((acc, item) => acc + item.discountPrice * item.qty, 0),
        status: item.status,
      });
    });

  return (
    <div className="w-full p-8">
      <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
      <div className="w-full flex items-center justify-between">
        <div className="w-full mb-4  min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Account Balance{" "}
              <span className="text-[16px]">(with 10% service charge)</span>
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            Rs.{availableBalance}
          </h5>


          {releventServiceChargeData?.status === "invoice" && (<h5
            className="p-4  font-medium rounded-md text-center text-[#fff] bg-red-600 cursor-pointer"
            onClick={() => {
              setShowChargers(true);
            }}
          >
            Payable amount : {releventServiceChargeData?.fee}

          </h5>
          )}
        </div>
        {/* w-[30%] */}
        <div className="w-full mb-4  min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <MdBorderClear size={30} className="mr-2" fill="#00000085" />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {orders && orders.length}
          </h5>
          <Link to="/garment-dashboard-orders">
            <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
          </Link>
        </div>

        <div className="w-full mb-4 min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Products
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {products && products.length}
          </h5>
          <Link to="/garment-dashboard-products">
            <h5 className="pt-4 pl-2 text-[#077f9c]">View Products</h5>
          </Link>
        </div>
      </div>
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>

      {showCharges && (
        <div className="w-full flex justify-center">
          <div className="relative bg-slate-400 rounded-lg z-0 w-[80%] flex m-auto justify-center">
            <form className="w-full ps-16 p-8"
              onSubmit={handleSubmit}
            >
              <div class="mb-6  w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Garment Name
                </label>
                <input
                  type="text"
                  id="garamentName"
                  value={releventServiceChargeData?.name}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="serviceCharge"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Charge
                </label>
                <input
                  type="text"
                  id="serviceCharge"
                  value={releventServiceChargeData?.fee}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                     dark:focus:border-blue-500"
                  required
                />
              </div>

              <label className="pb-2">
                Upload Bank Slip{" "}
                <span className="text-red-500">*</span>
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

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
            <AiOutlineClose
              onClick={() => {
                setShowChargers(false);
              }}
              className="me-4 mt-4 text-2xl origin-top-right cursor-pointer hover:text-red-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GarmentViewReport;
