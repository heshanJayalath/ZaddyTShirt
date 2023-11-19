import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { getAllOrdersOfGarment } from "../../../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllOrders = () => {
    const { orders, isLoading } = useSelector((state) => state.order);
    const { garment } = useSelector((state) => state.garment);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrdersOfGarment(garment._id));
    }, [dispatch]);

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
    let count=0
    orders &&
        orders.forEach((item) => {
            console.log(item)
            count+=1
            row.push({
                id: item._id,
                orderid:count,
                itemsQty:  item.cart.reduce((acc, item) => acc + item.qty, 0),
                total: "Rs. " + item.cart.reduce((acc, item) => acc + item.discountPrice*item.qty, 0),
                status: item.status,
            });
        });

    return (
        <div>
       
            {isLoading ? (
                <Loader/>
            ) : (
                <div className="w-full justify-center content-center pt-1 mt-5 bg-white">
                     <h1 >All Orders</h1>
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                    />
                </div>
            )}
        </div>
    );
};

export default AllOrders;