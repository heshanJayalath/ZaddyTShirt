import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../Styles/Customer/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import ConfirmationDialog from "../ConfirmationDialog";
import { deleteCustomOrder } from "../../redux/actions/customorder";


const AllCustomOrders = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [customorderId, setCustomOrderId] = useState("");

    useEffect(() => {
        axios.get(`${server}/customorder/manager-all-custom-orders`, { withCredentials: true }).then((res => {
            setData(res.data.customorders);
        }))
    }, []);

    const handleDelete = async (id) => {
        await axios
        .delete(`${server}/customorder/delete-custom-order/${id}`, { withCredentials: true })
        .then((res) => {
          toast.success(res.data.message);
        });
        window.location.reload(true); 
      };

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7, hide: true },
        { field: "count", headerName: "Order-Number", minWidth: 150, flex: 0.7, },
        {
            field: "name",
            headerName: "Ordername",
            minWidth: 30,
            maxWidth:30,
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            minWidth: 80,
            flex: 0.6,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            type: "number",
            minWidth: 80,
            flex: 0.3,
        },

        {
            field: "status",
            headerName: "Status",
            minWidth: 80,
            flex: 0.5,
        },
        {
            field: "assigned",
            headerName: "Assigned Garment",
            minWidth: 80,
            flex: 0.7,
        },
        {
            field: "orderDate",
            headerName: "Ordered Date",
            minWidth: 80,
            flex: 0.8,
        },
        {
            field: "Preview",
            flex: 0.4,
            minWidth: 80,
            headerName: "",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/customorder/${params.id}`}>
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
            minWidth: 80,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Button>
                            <AiOutlineDelete size={20} onClick={() => setCustomOrderId(params.id) || setOpen(true)} />
                        </Button>
                    </>
                );
            },
        },
    ];

    const row = [];
    let count = 0;
    data &&
        data.forEach((item) => {
            count++;
            const createdAt = new Date(item.createdAt); // Convert createdAt to a Date object
            const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const formattedDate = createdAt.toLocaleDateString(undefined, dateOptions);
            const assigned = item.garment?.companyName || 'N/A';
            row.push({
                count: count,
                id: item._id,
                name: item.name,
                email: item.email,
                quantity: item.productCount,
                status: item.status,
                assigned: assigned,
                orderDate: formattedDate,
            });
        });

    return (
        <>
            <div className="w-[80%] flex justify-center pt-5">
                <div className="w-[97%]">
                <h3 className="text-[22px] font-Poppins pb-2">All Custom orders</h3>
                    <div className="w-full min-h-[45vh] bg-white rounded">
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
                                        onClick={() => setOpen(false) || handleDelete(customorderId)}
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

export default AllCustomOrders;