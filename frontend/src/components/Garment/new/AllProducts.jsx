import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsGarment,deleteProduct } from '../../../redux/actions/product';
import Loader from '../../Loader';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ConfirmationDialog from '../../ConfirmationDialog';

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { garment } = useSelector((state) => state.garment)
  const dispatch = useDispatch();

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProductsGarment(garment._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    setSelectedProductId(id);
    setConfirmationOpen(true);
  }

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProduct(selectedProductId));
      setConfirmationOpen(false);
      window.location.reload();
    }
  };

  const handleCancelDelete = () => {
    setConfirmationOpen(false);
  };
  
  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
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
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button>
              <AiOutlineDelete size={20} onClick={() => handleDelete(params.id)} />
            </Button>
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
        name: item.name,
        price: "Rs. " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[77%] mx-8 pt-1 mt-10 bg-white ">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            autoHeight
          />
        </div>
       
      )}
      <ConfirmationDialog
        open={isConfirmationOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  )
}

export default AllProducts