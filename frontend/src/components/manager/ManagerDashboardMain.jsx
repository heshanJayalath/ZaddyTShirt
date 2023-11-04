import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMoneyCollect } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../Styles/Customer/styles";
import AdminDashboardGrid from "../Admin/AdminDashboardGrid";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfManager} from "../../redux/actions/order";
import { getAllManagerGarments } from "../../redux/actions/garment";
import { MdBorderClear } from "react-icons/md";
// import TransactionTotal from "./TransactionTotal";

const ManagerDashboardMain = () => {
  const dispatch = useDispatch();

  const { managerOrders, managerOrderLoading } = useSelector((state) => state.order);
  const { garment } = useSelector((state) => state.garment);

  useEffect(() => {
    dispatch(getAllOrdersOfManager());
    dispatch(getAllManagerGarments());
  }, []);

  const adminEarning = managerOrders && managerOrders.reduce((acc, item) => acc + item.totalPrice, 0);
  const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order Number", minWidth: 150, flex: 0.7 },

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
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];
  const row = [];
  let count = 0
  managerOrders &&
  managerOrders.forEach((item) => {
      count++;
      row.push({
        id: count,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: "Rs. " + item?.totalPrice,
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
      });
    });
  return (
    <>
      {
        managerOrderLoading ? (
          <Loader />
        ) : (
          <div className="w-[80%] p-4">
            <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
            <div className="w-full flex items-center justify-between">
              <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] mr-4 bg-white shadow rounded px-2 py-5">
                <div className="flex items-center">
                  <AiOutlineMoneyCollect
                    size={30}
                    className="mr-2"
                    fill="#00000085"
                  />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    Total Earning
                  </h3>
                </div>
                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">Rs {adminBalance}</h5>
              </div>

              <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] mr-4 bg-white shadow rounded px-2 py-5">
                <div className="flex items-center">
                  <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    All Garments
                  </h3>
                </div>
                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{garment && garment.length}</h5>
                <Link to="/manager-garments">
                  <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
                </Link>
              </div>

              <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                <div className="flex items-center">
                  <AiOutlineMoneyCollect
                    size={30}
                    className="mr-2"
                    fill="#00000085"
                  />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    All Orders
                  </h3>
                </div>
                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{managerOrders && managerOrders.length}</h5>
                <Link to="/manager-orders">
                  <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
                </Link>
              </div>
            </div>

            <br />
            <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
            <div className="w-full min-h-[45vh] bg-white rounded">
              <DataGrid
                rows={row}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
              />
            </div>
          </div>
        )
      }
    </>
  );
};
export default ManagerDashboardMain;
