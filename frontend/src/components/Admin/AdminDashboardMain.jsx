import React, { useEffect, useState } from "react";
import styles from "../../Styles/Customer/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from '../../redux/actions/order';
import Loader from "../Loader";
import { getAllGarments } from "../../redux/actions/garment";

const AdminDashboardMain = () => {
    const dispatch = useDispatch();

    const { adminOrders, adminOrderLoading } = useSelector((state) => state.order);
    const { garments } = useSelector((state) => state.garment);

    useEffect(() => {
        dispatch(getAllOrdersOfAdmin());
        dispatch(getAllGarments());
    }, []);

    const adminEarning = adminOrders && adminOrders.reduce((acc, item) => acc + item.totalPrice, 0);


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

    console.log('adminn',adminOrders)
    const row = [];
    let count = 0
    adminOrders &&
        adminOrders.forEach((item) => {
            count++;
            row.push({
                id: count,
                itemsQty:  item.cart.reduce((acc, item) => acc + item.qty, 0),
                total: "Rs. " + item.cart.reduce((acc, item) => acc + item.discountPrice*item.qty, 0),
                status: item?.status,
                createdAt: item?.createdAt.slice(0, 10),
            });
        });

    return (
        <>
            {
                adminOrderLoading ? (
                    <Loader />
                ) : (
                    <div className="w-full p-4">
                        <h3 title="heading" className="text-[22px] font-Poppins pb-2">Overview</h3>
                        <div className="w-full flex items-center justify-between">
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
                                        Total Earning
                                    </h3>
                                </div>
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">Rs {adminBalance}</h5>
                            </div>

                            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                                <div className="flex items-center">
                                    <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                                    <h3
                                        className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                                    >
                                        All Garments
                                    </h3>
                                </div>
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{garments && garments.length}</h5>
                                <Link to="/admin-garments">
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
                                <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminOrders && adminOrders.length}</h5>
                                <Link to="/admin-orders">
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

export default AdminDashboardMain;