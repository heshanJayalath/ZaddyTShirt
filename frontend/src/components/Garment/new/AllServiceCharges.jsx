import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../../Styles/Customer/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../../server";
import { useSelector } from "react-redux";


const AllServiceCharges = () => {
    const { garment } = useSelector((state) => state.garment);
    const id = garment._id;
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(`${server}/servicecharge/garment-all-service-charges/${id}`, { withCredentials: true }).then((res => {
            setData(res.data.serviceCharges);
        }))

    }, []);



    const columns = [
        { field: "id", headerName: "Order Id", minWidth: 150, flex: 0.7, hide: true },
        { field: "count", headerName: "charge-Number", minWidth: 150, flex: 0.3, },
        {
            field: "fee",
            headerName: "Fee",
            minWidth: 100,
            flex: 0.7,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 180,
            flex: 0.6,
        },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.5,
        },
        {
            field: "date",
            headerName: "Date",
            minWidth: 130,
            flex: 0.5,
        },



    ];

    const row = [];
    let count = 0
    data &&
        data.map((item) => {
            console.log(item)
            count += 1
            row.push({
                id: item._id,
                count: count,
                fee: item.fee,
                status: item.status,
                date:new Date(item.createdAt).toLocaleDateString()
            });
        });

    return (
        <>
            <div className="w-[95%] flex justify-center pt-5">
                <div className="w-[97%]">
                    <div className="w-full pt-1 mt-10 bg-white">
                        <DataGrid
                            rows={row}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    </div>
                    {open && (
                        <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
                            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
                                <div className="w-full flex justify-end cursor-pointer">
                                    <RxCross1 size={25} onClick={() => setOpen(false)} />
                                </div>
                                <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                                    Are you sure you wanna delete this CustomOrder?
                                </h3>
                                <div className="w-full flex items-center justify-center">
                                    <div
                                        className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                                        onClick={() => setOpen(false)}
                                    >
                                        cancel
                                    </div>
                                    <div
                                        className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                                        onClick={() => setOpen(false)}
                                    >
                                        confirm
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </>


    );
};

export default AllServiceCharges;