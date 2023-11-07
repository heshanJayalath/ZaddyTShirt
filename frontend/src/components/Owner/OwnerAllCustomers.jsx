import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllOwnerUsers } from "../../redux/actions/user";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../Styles/Customer/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const OwnerAllCustomers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllOwnerUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/user/delete-owner-user/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      });

    dispatch(getAllOwnerUsers());
  };

  const columns = [
    {
      field: "id",
      headerName: "User ID",
      minWidth: 150,
      flex: 0.7,
      hide: true,
    },
    { field: "count", headerName: "User Number", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "name",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "role",
      headerName: "User Role",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "joinedAt",
      headerName: "joinedAt",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete User",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setUserId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  let count = 0;
  users &&
    users.forEach((item) => {
      count++;
      row.push({
        count: count,
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
        joinedAt: item.createdAt.slice(0, 10),
      });
    });

  return (
    <div className="w-[80%] flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Users</h3>
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
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center hover:shadow-sm py-2 justify-center h-screen">
            <div className="w-[25%] 800px:w-[40%] min-h-[20vh] bg-[#f9f9f9dd]  hover:bg-[#f9f9f9eb] rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1
                  className="hover:text-red-600"
                  size={20}
                  onClick={() => setOpen(false)}
                />
              </div>
              <h3 className="text-[20px] text-center py-3 font-normal font-Poppins text-[#000000cb]">
                Are you sure you want to remove this user?
              </h3>
              <div className="w-full flex gap-2  pt-3 items-center justify-center">
                <button
                  onClick={() => setOpen(false) || handleDelete(userId)}
                  type="button"
                  class="text-red-700  hover:text-white border font-semibold border-red-700 hover:bg-red-800 focus:ring-4 
        focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
        dark:border-red-500 dark:text-red-700 dark:hover:text-white dark:hover:bg-red-600 "
                >
                  confirm
                </button>

                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  class="text-blue-900 hover:text-white border border-gray-800 hover:bg-gray-900 
            focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
            dark:border-gray-600 dark:text-gray-700 dark:hover:text-white dark:hover:bg-gray-600 "
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerAllCustomers;
