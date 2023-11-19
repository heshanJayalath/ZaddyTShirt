import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { useDispatch, useSelector } from 'react-redux'
import { getAllOwnerProducts } from '../../redux/actions/product'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import axios from 'axios'
import { server } from '../../server'

const OwnerAllProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${server}/product/owner-all-products`, {withCredentials: true}).then((res) => {
            setData(res.data.products);
        })
      }, []);
  
    const columns = [
      { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7,hide:true },
      { field: "count", headerName: "Product Number", minWidth: 150, flex: 0.7,},
      {
        field: "name",
        headerName: "Name",
        minWidth: 180,
        flex: 1.4,
      },
      {
        field: "price",
        headerName: "Price",
        minWidth: 100,
        flex: 0.6,
      },
      {
        field: "Stock",
        headerName: "Stock",
        type: "number",
        minWidth: 80,
        flex: 0.5,
      },
  
      {
        field: "sold",
        headerName: "Sold out",
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
              <Link to={`/product/${params.id}`}>
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
        row.push({
          count:count,
          id: item._id,
          name: item.name,
          price: "Rs. " + item.discountPrice,
          Stock: item.stock,
          sold: item?.sold_out,
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

export default OwnerAllProduct