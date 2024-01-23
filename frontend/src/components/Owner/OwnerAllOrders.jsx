import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { server } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfOwner } from "../../redux/actions/order";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

const OwnerAllOrders = () => {
  const dispatch = useDispatch();
  const { ownerOrders, managerOrderLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getAllOrdersOfOwner());
  }, []);

  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHight / imgHeight);
      const imgx = (pdfWidth - imgWidth * ratio) / 2;
      const imgy = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgx,
        imgy,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Report");
    });
  };

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
  let count = 0;
  ownerOrders &&
    ownerOrders.forEach((item) => {
      count++;
      row.push({
        id: count,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: "Rs." + item?.totalPrice,
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
      });
    });
  return (
    <div className="w-[80%]">
      <div className="w-[90%] mx-8 pt-1 mb-16 mt-10 bg-white ref={pdfRef}">
        <h3 className="text-[22px] font-Poppins pb-2">All Products</h3>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
      {/* <div>
        <button
          type="button"
          onClick={downloadPDF}
          class="w-36 text-white bg-gradient-to-r right-0 fixed from-blue-500 
      via-blue-600 to-blue-700 hover:bg-gradient-to-br 
      shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bottom-8 "
        >
          Generate Report
        </button>
      </div> */}
    </div>
  );
};

export default OwnerAllOrders;
