import React, { useEffect, useState } from 'react'
import { backend_url } from '../../server'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { MdOutlineTrackChanges, MdTrackChanges } from 'react-icons/md'
import { RxCross1 } from "react-icons/rx"
import { Link } from 'react-router-dom';
import styles from '../../Styles/Customer/styles';
import { Button } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { loadUser, updatUserAddress, updateUserInformation, deleteUserAddress } from '../../redux/actions/user';
import { toast } from 'react-toastify';
import axios from 'axios';
import { server } from '../../server';
import { Country, State } from 'country-state-city';
import { getAllOrdersOfUser } from '../../redux/actions/order';
import { getAllCustomOrdersOfUser } from '../../redux/actions/customorder';

const ProfileContent = ({ active }) => {

  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage)
    }
  }, [error, successMessage])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, password, phoneNumber))
  }

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const formData = new FormData();

    formData.append("image", e.target.files[0]);

    await axios.put(`${server}/user/update-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then((response) => {
      window.location.reload();
    }).catch((error) => {
      toast.error(error);
    })
  }

  return (
    <div className='w-full pb-20'>
      {/* profile  */}
      {
        active === 1 && (
          <>
            <div className='flex justify-center w-full'>
              <div className='relative'>
                <img src={`${backend_url}/${user?.avatar}`} className='w-[150px] z-[10] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"' alt='' />
                <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                  <input type="file" id="image"
                    className='hidden'
                    onChange={handleImage} />
                  <label htmlFor='image'>
                    <AiOutlineCamera />
                  </label>
                </div>
              </div>

            </div>

            <div className='w-full px-5'>
              <form onSubmit={handleSubmit} aria-required={true}>
                <div className='w-full 800px:flex block pb-3'>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Full Name</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Email</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Phone Number</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Enter your Password to save the changes</label>
                    <input
                      type="password"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>



                </div>
                <input
                  className={`w-[250px] h-[40px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  required
                  value="Update"
                  type="submit"
                />
              </form>
            </div>
          </>
        )
      }

      {/* Order */}
      {
        active === 2 && (
          <div>
            <AllOrders />
          </div>
        )
      }

      {/* Refund Order  */}
      {
        active === 3 && (
          <div>
            <AllRefundOrders />
          </div>
        )
      }

      {/* Track order  */}
      {
        active === 5 && (
          <div>
            <TrackOrder />
          </div>
        )
      }
      {/* Payment Method  */}
      {
        active === 6 && (
          <div>
            <ChangePassword />
          </div>
        )
      }

      {/* User Address  */}
      {
        active === 7 && (
          <div>
            <Address />
          </div>
        )
      }
      {/* custom-orders */}
      {
        active === 8 && (
          <div>
            <CustomOrders />
          </div>
        )
      }
    </div>
  )
}

const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id))
  }, [])

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

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
            <Link to={`/user/order/${params.id}`}>
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

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.cart.length,
      total: "Rs." + item.totalPrice + ".00",
      status: item.status,

    })
  });
  console.log(orders);
  return (
    <div className='pl-8 pt-1'>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight />
    </div>
  )
}

const AllRefundOrders = () => {

  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const eligibleOrders = orders && orders.filter((item) => item.status === "Processing refund");


  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

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
            <Link to={`/user/order/${params.id}`}>
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

  eligibleOrders &&
    eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "Rs. " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  )
}

const TrackOrder = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

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
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "Rs. " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="w-full px-5">
      <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className=" w-[100%] 800px:w-[50%] mt-5">
            <label className="block pb-2">Enter your old password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Enter your new password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Enter your confirm password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className={`w-[95%] h-[40px] text-white bg-gradient-to-r from-blue-500 via-blue-600 
              to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none mt-8 focus:ring-blue-300 
              dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer`}
              required
              value="Update"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

const Address = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "office",
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === "" || country === "" || city === "") {
      toast.error("Please fill all the fields!");
    } else {
      dispatch(
        updatUserAddress(
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType
        )
      );
      setOpen(false);
      setCountry("");
      setCity("");
      setAddress1("");
      setAddress2("");
      setZipCode(null);
      setAddressType("");
    }
  }

  const handleDelete = (item) => {
    const id = item._id;
    dispatch(deleteUserAddress(id));
  };
  return (
    <div className='w-full px-5'>
      {
        open && (
          <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
            <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
              <div className="w-full flex justify-end p-3">
                <RxCross1
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <h1 className="text-center text-[25px] font-Poppins">
                Add New Address
              </h1>
              <div className="w-full">

                <form aria-required onSubmit={handleSubmit} className="w-full">
                  <div className="w-full block p-4">
                    <div className="w-full pb-2">
                      <label className="block pb-2">Country</label>
                      <select
                        name=""
                        id=""
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-[95%] border h-[40px] rounded-[5px]"
                      >
                        <option value="" className="block border pb-2">
                          choose your country
                        </option>
                        {Country &&
                          Country.getAllCountries().map((item) => {
                            if (item.name === "Sri Lanka") {
                              return (
                                <option
                                  className="block pb-2"
                                  key={item.isoCode}
                                  value={item.isoCode}
                                >
                                  {item.name}
                                </option>
                              )
                            }
                          })}
                      </select>
                    </div>

                    <div className="w-full pb-2">
                      <label className="block pb-2">Choose your City</label>
                      <select
                        name=""
                        id=""
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-[95%] border h-[40px] rounded-[5px]"
                      >
                        <option value="" className="block border pb-2">
                          choose your city
                        </option>
                        {State &&
                          State.getStatesOfCountry(country).map((item) => (
                            <option
                              className="block pb-2"
                              key={item.isoCode}
                              value={item.name}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="w-full pb-2">
                      <label className="block pb-2">Address 1</label>
                      <input
                        type="address"
                        className={`${styles.input}`}
                        required
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                      />
                    </div>
                    <div className="w-full pb-2">
                      <label className="block pb-2">Address 2</label>
                      <input
                        type="address"
                        className={`${styles.input}`}
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>

                    <div className="w-full pb-2">
                      <label className="block pb-2">Zip Code</label>
                      <input
                        type="number"
                        className={`${styles.input}`}
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>

                    <div className="w-full pb-2">
                      <label className="block pb-2">Address Type</label>
                      <select
                        name=""
                        id=""
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}
                        className="w-[95%] border h-[40px] rounded-[5px]"
                      >
                        <option value="" className="block border pb-2">
                          Choose your Address Type
                        </option>
                        {addressTypeData &&
                          addressTypeData.map((item) => (
                            <option
                              className="block pb-2"
                              key={item.name}
                              value={item.name}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className=" w-full pb-2">
                      <input
                        type="submit"
                        className={`${styles.input} mt-5 cursor-pointer`}
                        required
                        readOnly
                      />
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        )
      }
      <div className='flex w-full items-center justify-between'>
        <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
          My Addresses
        </h1>
        <div className={`${styles.button}  text-white bg-gradient-to-r from-blue-500 via-blue-600 
              to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none mt-8 focus:ring-blue-300 
              dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer`}
          onClick={() => setOpen(true)}>
          <span className='text-[#fff]'>Add New
          </span>
        </div>
      </div>
      <br />
      {
        user && user.addresses.map((item, index) => (
          <div className='w-full mt-4 h-[70px] bg-white rounded-[4px] flex items-center px-3 shadow justify-between pr-10'>
            <div className='flex items-center'>
              <h5 className='pl-5 font-[600]'>{item.addressType}</h5>
            </div>
            <div className='pl-8 flex items-center'>
              <h6>{item.address1} {", "}{item.address2}</h6>
            </div>
            <div className='pl-8 flex items-center'>
              <h6>{user && user.phoneNumber}</h6>
            </div>
            <div className='min-w-[10%] flex items-center justify-between pl-8'>
              <AiOutlineDelete size={25} className='cursor-pointer' onClick={() => handleDelete(item)} />
            </div>
          </div>
        ))
      }
      {
        user && user.addresses.length === 0 && (
          <h5 className='text-center pt-10 text-[18px]'>
            You do not have any saved address!
          </h5>
        )
      }
    </div >
  )
}

const CustomOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.customorder);
  console.log("custom-orders:", orders);
  console.log("user._id: ", user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCustomOrdersOfUser(user._id));
  }, [])

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.2, hide: true },
    { field: "count", headerName: "Order-Number", minWidth: 150, flex: 0.7, },
    {
      field: "name",
      headerName: "Ordername",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "orderDate",
      headerName: "Ordered Date",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "Preview",
      flex: 0.4,
      minWidth: 100,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/custom-order/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },

    {
      field: "Delete",
      flex: 0.4,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button>
              <AiOutlineDelete size={20}  />
            </Button>
          </>
        );
      },
    },
  ];
  const row = [];
  let count = 0;
  orders &&
    orders.forEach((item) => {
      count++;
      const createdAt = new Date(item.createdAt); // Convert createdAt to a Date object
      const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = createdAt.toLocaleDateString(undefined, dateOptions);
      row.push({
        count: count,
        id: item._id,
        name: item.name,
        quantity: item.productCount,
        status: "Pending",
        orderDate: formattedDate,
      });
    });
  return (
    <>
      <div className="w-[100%] mx-8 pt-1 mt-10 bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );

}

export default ProfileContent