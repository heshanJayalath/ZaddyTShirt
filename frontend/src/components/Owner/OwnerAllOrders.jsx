import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { server } from '../../server'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrdersOfOwner} from '../../redux/actions/order'

const OwnerAllOrders = () => {
    const dispatch = useDispatch();
    const { ownerOrders, managerOrderLoading } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getAllOrdersOfOwner());
    }, []);

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
    ownerOrders &&
    ownerOrders.forEach((item) => {
            count++;
            row.push({
                id: count,
                itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
                total: "Rs."+item?.totalPrice,
                status: item?.status,
                createdAt: item?.createdAt.slice(0, 10),
            });
        });
    return (
        <>
            <div className="w-[78%] mx-8 pt-1 mt-10 bg-white">
            <h3 className="text-[22px] font-Poppins pb-2">All Products</h3>
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />
            </div>
        </>
    )
}

export default OwnerAllOrders