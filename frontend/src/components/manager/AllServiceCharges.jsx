import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersOfManager } from '../../redux/actions/order'
import { getAllProducts } from '../../redux/actions/product'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import axios from 'axios'
import { server } from '../../server'

const AllServiceCharges = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/servicecharge/manager-all-service-charges`, {withCredentials: true}).then((res) => {
        setData(res.data.serviceCharges);
    })
  }, []);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7,hide:true },
    { field: "count", headerName: "SC Number", minWidth: 150, flex: 0.7,},
    {
      field: "name",
      headerName: "Garment",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "fee",
      headerName: "fee",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "payedOn",
      headerName: "payed On",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/manager/service-charge/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
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
      row.push({
        count:count,
        id: item._id,
        name: item?.garment?.companyName,
        fee: "Rs. " + item.fee,
        payedOn: formattedDate,
      });
    });
    return (
        <>
            <div className="w-[78%] mx-8 pt-1 mt-10 bg-white">
            <h3 className="text-[22px] font-Poppins pb-2">All Service Chargers</h3>
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

export default AllServiceCharges