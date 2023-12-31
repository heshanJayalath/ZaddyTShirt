import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import AdminDashboardGrid from "../Admin/AdminDashboardGrid";
// import TransactionTotal from "./TransactionTotal";

const OwnerContent = ({ active }) => {
  return (
    <div className="w-full">
      {/* dashboard  */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <AdminDashboardGrid />
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            {/* <form onSubmit={handleSubmit} aria-required={true}>
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
                    <label className="block pb-2">ZIP Code</label>
                    <input
                      type="text"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Address 1</label>
                    <input
                      type="address"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </div>
                  <div className=" w-[100%] 800px:w-[50%]">
                    <label className="block pb-2">Address 1</label>
                    <input
                      type="address"
                      className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                      required
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                  required
                  value="Update"
                  type="submit"
                />
              </form> */}
          </div>
        </>
      )}

      {/* allOrder */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* all products  */}
      {active === 3 && (
        <div>
          <Allproducts />
        </div>
      )}
      {/* all customers  */}
      {active === 4 && (
        <div>
          <Allcustomers />
        </div>
      )}

      {/* all garment  */}
      {active === 5 && (
        <div>
          <AllGarment />
        </div>
      )}
      {/* system users  */}
      {active === 6 && (
        <div>
          <TransactionDetails />
          <br />
          <TransactionTotal />
        </div>
      )}

      {/* setting  */}
      {active === 7 && (
        <div className=" overflow-y-scroll">
          <AccountDetail />
          <ChanegPassword />
        </div>
      )}
      {active === 9 && (
        <div>
          <ManagerDetails />
          <AdminDetails />
        </div>
      )}
      {active === 10 && (
        <div>
          <SpecialRateRqst />
          <FlatRate />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "asdbj",
      orderItems: [
        {
          name: "The basic half sleeve T shirt",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
      userId: "aadad1w",
    },
  ];

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
      field: "userId",
      headerName: "User Id",
      type: "string",
      minWidth: 130,
      flex: 0.7,
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
      field: "Action",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Cancel Order
              </button>
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
        itemsQty: item.orderItems.length,
        total: "Rs." + item.totalPrice + ".00",
        status: item.orderStatus,
        userId: item.userId,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">All Orders </h1>
      </div>

      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const Allproducts = () => {
  const products = [
    {
      _id: "product1",
      productItems: [
        {
          name: "The basic half sleeve T shirt",
        },
      ],

      totalPrice: 120,
      garmentId: "gr101",
    },
  ];

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 130, flex: 0.7 },
    {
      field: "productItems",
      headerName: "Product Name",
      minWidth: 150,
      flex: 0.8,
    },

    {
      field: "garmentId",
      headerName: "Garment Id",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "Action ",
      flex: 2,
      minWidth: 200,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class=" mr-4 hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-blue-700 dark:focus:ring-blue-800">
                Edit Product
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Remove Product
              </button>
            </Link>
            <br />
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        total: "Rs." + item.totalPrice + ".00",
        garmentId: item.garmentId,
        productItems: item.productItems[0].name,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">All Products </h1>
      </div>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const Allcustomers = () => {
  const customers = [
    {
      _id: "customer",
      name: "Heshan ravindu",
      editdetails: 120,
      garmentId: "gr101",
    },
  ];

  const columns = [
    { field: "id", headerName: "Customer ID", minWidth: 130, flex: 0.1 },
    {
      field: "name",
      headerName: "Customer Name",
      minWidth: 150,
      flex: 0.1,
    },

    {
      field: "editdetails",
      headerName: "Edit Details",
      minWidth: 130,
      flex: 0.1,
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

    {
      field: "action ",
      flex: 0.24,
      minWidth: 200,
      headerName: "Action",
      type: "number",

      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class=" mr-4 hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-orange-700 dark:focus:ring-blue-800">
                Chat
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class=" mr-4 hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-orange-500 dark:hover:text-orange-700 dark:focus:ring-orange-800">
                Block Customer
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Remove Customer
              </button>
            </Link>
            <br />
          </>
        );
      },
    },
  ];

  const row = [];

  customers &&
    customers.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">All Customer </h1>
      </div>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllGarment = () => {
  const orders = [
    {
      _id: "asdbjb12ja",
      garmentname: "TT Garment",
      totalProducts: 64,
      editDetails: "Processing",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "garmentname",
      headerName: "Garment Name",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "totalProducts",
      headerName: "Total Products",
      type: "number",
      minWidth: 130,
      flex: 1,
    },

    {
      field: "editDetails",
      headerName: "Edit Details",
      type: "number",
      minWidth: 130,
      flex: 1,

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

    {
      field: "action",
      flex: 3.5,
      minWidth: 150,
      headerName: "Action",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-gray-500 dark:hover:text-orange-700 dark:focus:ring-gray-800">
                View Garment
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-orange-700 dark:focus:ring-blue-800">
                Chat
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-orange-500 dark:hover:text-orange-700 dark:focus:ring-orange-800">
                Block Garment
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Remove Garment
              </button>
            </Link>
            <br />
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
        garmentname: item.garmentname,
        totalProducts: item.totalProducts,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">All Garments </h1>
      </div>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const SpecialRateRqst = () => {
  const orders = [
    {
      _id: "asdbjb12ja",
      garmentname: "TT Garment",
      totalProducts: 64,
      Rate: "8%",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Garment ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "garmentname",
      headerName: "Garment Name",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "totalProducts",
      headerName: "Total Products",
      type: "number",
      minWidth: 130,
      flex: 1,
    },

    {
      field: "Rate",
      headerName: "Requested Rate",
      minWidth: 130,
      flex: 1,
    },

    {
      field: "action",
      flex: 2,
      minWidth: 150,
      headerName: "Action",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <div>
              <input
                type="number"
                id="specialRate"
                placeholder="Enter New Rate Value"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-blue-600 focus:ring-4 focus:outline-none bg-blue-100 mx-2 focus:ring-blue-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-blue-500 dark:hover:text-blue-700 dark:focus:ring-blue-800">
                Set New Rate
              </button>
            </Link>
            <br />
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
        garmentname: item.garmentname,
        totalProducts: item.totalProducts,
        Rate: item.Rate,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <div className=" w-full text-center mb-6">
        <h1 className="font-bold text-cyan-900 text-xl">
          Special Rate Requests{" "}
        </h1>
      </div>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const FlatRate = () => {
  return (
    <div>
      <div className=" justify-between mt-8 ms-14 flex">
        <div className="flex">
          <h2>Current Flat Rate : Rs.</h2>
          <h2>10 %</h2>
        </div>

        <div className="flex place-items-center">
          <div>
            <input
              type="number"
              id="specialRate"
              placeholder="Enter New Flat Rate Value"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <Link to="">
            <button class=" hover:text-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-bold px-5 py-2 text-center dark:text-gray-500 dark:hover:text-orgray-700 dark:focus:ring-gray-800">
              Set New Flat Rate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const TransactionDetails = () => {
  const orders = [
    {
      _id: "asdbjb12ja",
      customerName: "Malinga Jayalath",
      amount: 4555,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Transaction ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      minWidth: 130,
      flex: 1,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 130,
      flex: 1,

      //   renderCell: (params) => {
      //     return (
      //       <>
      //         <Link to={`/user/order/${params.id}`}>
      //           <Button>
      //             <AiOutlineArrowRight size={20} />
      //           </Button>
      //         </Link>
      //       </>
      //     );
      //   },
    },

    {
      field: "action",
      flex: 1.5,
      minWidth: 150,
      headerName: "Action",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class=" hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-orange-700 dark:focus:ring-blue-800">
                View Transaction
              </button>
            </Link>

            <br />
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
        customerName: item.customerName,
        amount: item.amount,
      });
    });

  return (
    <div className="w-full px-5">
      <div className=" w-full items-center justify-between">
        <div className=" w-full text-center mb-6">
          <h1 className="font-bold text-cyan-900 text-xl">
            Customer Transaction{" "}
          </h1>
        </div>
        <div className="pl-8 pt-1">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

const AdminDetails = () => {
  const orders = [
    {
      _id: "asdbjb12ja",
      admin: "Heshan Ravindu",
      viewDetails: "",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Admin ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "admin",
      headerName: "Manager Name",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "viewDetails",
      headerName: "View Details",
      type: "number",
      minWidth: 130,
      flex: 1,

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

    {
      field: "action",
      flex: 2,
      minWidth: 150,
      headerName: "Action",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-orange-700 dark:focus:ring-blue-800">
                Chat
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-orange-500 dark:hover:text-orange-700 dark:focus:ring-orange-800">
                Block Admin
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Remove Admin
              </button>
            </Link>
            <br />
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
        admin: item.admin,
      });
    });

  return (
    <div className="w-full mt-5 px-5">
      <div className=" w-full items-center justify-between">
        <div className=" w-full text-center mb-6">
          <h1 className="font-bold text-cyan-900 text-xl">Admin </h1>
        </div>
        <div className="pl-8 pt-1">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

const ManagerDetails = () => {
  const orders = [
    {
      _id: "asdbjb12ja",
      managername: "Heshan Ravindu",
      editDetails: "",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "managername",
      headerName: "Manager Name",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "editDetails",
      headerName: "Edit Details",
      type: "number",
      minWidth: 130,
      flex: 1,

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

    {
      field: "action",
      flex: 2,
      minWidth: 150,
      headerName: "Action",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-blue-500 dark:hover:text-orange-700 dark:focus:ring-blue-800">
                Chat
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:text-orange-500 dark:hover:text-orange-700 dark:focus:ring-orange-800">
                Block Manager
              </button>
            </Link>
            <Link to={`/user/order/${params.id}`}>
              <button class="  hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm font-semibold  px-5 py-2 text-center dark:text-red-500 dark:hover:text-red-700 dark:focus:ring-red-800">
                Remove Manager
              </button>
            </Link>
            <br />
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
        managername: item.managername,
      });
    });

  return (
    <div className="w-full px-5">
      <div className=" w-full items-center justify-between">
        <div className=" w-full text-center mb-6">
          <h1 className="font-bold text-cyan-900 text-xl">Manager </h1>
        </div>
        <div className="pl-8 pt-1">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

const AccountDetail = () => {
  return (
    <div className="max-w-full py-2  mx-8 mt-16 items-center">
      <div className=" w-full text-center  mb-6">
        <h1 className="font-bold text-cyan-900 text-xl"> Owner DETAILS </h1>
      </div>

      <div className="md:flex w-full my-4 px-8">
        <div className="w-full text-center md:text-start md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">Owner Name</h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="Heshan "
            name=""
            id=""
          />
        </div>

        <div className="w-full text-center md:text-start  md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">E-mail</h5>
          <input
            className="p-2 rounded-md"
            type="email"
            value="heshanravindu1999@gmail.com"
            name=""
            id=""
          />
        </div>

        <div className="w-full text-center md:text-start md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">Contact Number</h5>
          <input
            className="p-2 rounded-md"
            type="text"
            value="0766546654"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="mt-12 mb-16  mx-8">
        <Link to="../account-details">
          <button
            className="bg-[#002D74] w-3/12  md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
            type="submit"
          >
            Update
          </button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

const ChanegPassword = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);

  return (
    <div className="">
      <div className=" w-full text-center mt-14 mb-6">
        <h1 className="font-bold text-cyan-900 text-xl"> CHANGE PASSWORD </h1>
      </div>
      <div className="md:flex w-full p-8 items-center justify-between">
        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Current Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>

        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold w-full text-slate-700 py-4">
            New Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible1 ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            {visible1 ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible1(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible1(true)}
              />
            )}
          </div>
        </div>

        <div className="w-full px-8 md:w-4/12">
          <h5 className="font-semibold text-slate-700 py-4">
            Fonfirm Password
          </h5>
          <div className="relative my-4">
            <input
              className="p-2 rounded-xl border w-full"
              type={visible2 ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {visible2 ? (
              <AiOutlineEye
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible2(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-3 cursor-pointer"
                size={20}
                onClick={() => setVisible2(true)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="  px-14 mx-2">
        <Link to="../allproduct">
          <button
            className="bg-[#002D74] md:w-3/12 w-full md:rounded-md rounded-md font-semibold text-white p-3 hover:scale-105 duration-300"
            type="submit"
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

const TransactionTotal = () => {
  return (
    <div>
      <div className=" justify-between ms-14 flex">
        <div className="flex">
          <h2>Total Transaction Amount : Rs.</h2>
          <h2>45000</h2>
        </div>

        <Link to="">
          <button class=" hover:text-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-base font-bold px-5 py-2 text-center dark:text-gray-500 dark:hover:text-orgray-700 dark:focus:ring-gray-800">
            Generate Report
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerContent;
