import React, { useEffect, useRef, useState } from "react";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../Styles/Customer/styles";
import AdminDashboardGrid from "../Admin/AdminDashboardGrid";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfOwner } from "../../redux/actions/order";
import { getAllOwnerGarments } from "../../redux/actions/garment";
import { MdBorderClear,MdViewTimeline } from "react-icons/md";
const OwnerDashboardMain = () => {
  const pdfRef=useRef();
  const downloadPDF = ()=>{
    const input =pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData=canvas.toDataURL('image/png');
      const pdf = new jspdf('p','mm','a4',true);
      const pdfWidth=pdf.internal.pageSize.getWidth();
      const pdfHight=pdf.internal.pageSize.getHeight();
      const imgWidth=canvas.width;
      const imgHeight=canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth,pdfHight/imgHeight);
      const imgx= (pdfWidth-imgWidth*ratio)/2;
      const imgy= 30;
      pdf.addImage(imgData,'PNG',imgx,imgy,imgWidth*ratio,imgHeight*ratio);
      pdf.save('Report');

    });
  };
  const dispatch = useDispatch();

  const { ownerOrders, ownerOrderLoading } = useSelector(
    (state) => state.order
  );
  const { garment } = useSelector((state) => state.garment);

  useEffect(() => {
    dispatch(getAllOrdersOfOwner());
    dispatch(getAllOwnerGarments());
  }, []);

 
  const adminEarning =
    ownerOrders && ownerOrders.reduce((acc, item) => acc + item.totalPrice, 0);
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

  let profit = 0;
  let diliveredOrders = 0;
  let refundOrders = 0;
  const row = [];
  let count = 0;
  ownerOrders &&
    ownerOrders.forEach((item) => {
      count++;
      if (item.status === "Delivered") {
        diliveredOrders += 1;
      }

      if (item.status !== "Refund Success") {
        console.log(item);
        if (item.totalPrice > 0 && item.totalPrice < 2000) {
          profit = profit + item.totalPrice * 0.15;
          //console.log(item.totalPrice, 0.15);
        } else if (item.totalPrice >= 2000 && item.totalPrice < 3000) {
          profit = profit + item.totalPrice * 0.13;
          //console.log(item.totalPrice, 0.13);
        } else if (item.totalPrice >= 3000 && item.totalPrice < 4000) {
          profit = profit + item.totalPrice * 0.11;
          // console.log(item.totalPrice, 0.11);
        } else if (item.totalPrice >= 4000 && item.totalPrice < 5000) {
          profit = profit + item.totalPrice * 0.09;
          //console.log(item.totalPrice, 0.09);
        } else if (item.totalPrice >= 5000) {
          profit = profit + item.totalPrice * 0.07;
          //console.log(item.totalPrice, 0.07);
        }
      } else {
        refundOrders += 1;
        console.log(item, ".....................");
        if (item.totalPrice > 0 && item.totalPrice < 2000) {
          profit = profit - item.totalPrice * 0.15;
          //console.log(item.totalPrice, 0.15);
        } else if (item.totalPrice >= 2000 && item.totalPrice < 3000) {
          profit = profit - item.totalPrice * 0.13;
          // console.log(item.totalPrice, 0.13);
        } else if (item.totalPrice >= 3000 && item.totalPrice < 4000) {
          profit = profit - item.totalPrice * 0.11;
          //console.log(item.totalPrice, 0.11);
        } else if (item.totalPrice >= 4000 && item.totalPrice < 5000) {
          profit = profit - item.totalPrice * 0.09;
          // console.log(item.totalPrice, 0.09);
        } else if (item.totalPrice >= 5000) {
          profit = profit - item.totalPrice * 0.07;
          //console.log(item.totalPrice, 0.07);
        }
      }

      row.push({
        id: count,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: "Rs. " + item?.totalPrice,
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
      });
    });

  let finalProfit = profit.toFixed(2);
  let processingOrders = (count) - diliveredOrders;
  return (
    <div className="flex w-full justify-center content-center mr-6">
      {ownerOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-[75%] p-4"  ref={pdfRef}>
          <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
          <div className="w-full md:flex items-center justify-between">
            <div className="w-full mb-4 800px:w-[30%] hover:scale-103 transition-shadow duration-300 ease-in-out hover:shadow-lg
             hover:shadow-blue-300  min-h-[20vh] bg-white shadow rounded px-2 py-3 mr-4">
              <div className=" md:items-center py-4">
                <div className="flex">
                  <AiOutlineMoneyCollect
                    size={30}
                    className="mr-2 ms-4"
                    fill="#00000085"
                  />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 mt-1 !font-[400] text-[#00000085]`}
                  >
                    Total Earning
                  </h3>
                </div>

                <h5 className="pt-2 pl-[36px] ms-8 text-[22px] font-[500]">
                  Rs {adminBalance}
                </h5>
              </div>

              <div className=" md:items-center py-4">
                <div className="flex">
                  <AiOutlineMoneyCollect
                    size={30}
                    className="mr-2 ms-4"
                    fill="#00000085"
                  />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 mt-1 !font-[400] text-[#00000085]`}
                  >
                    Total Profit
                  </h3>
                </div>

                <h5 className=" ms-8 pl-[36px] text-[22px] font-[500]">
                  Rs {finalProfit}
                </h5>
              </div>
            </div>

            <div className="w-full mb-4 ps-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-3 mr-4 hover:scale-103 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300">
              <div className="items-center  py-4">
                <div className="flex">
                  <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    All Orders
                  </h3>
                  {/* <Link to="/manager-orders">
                    <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
                  </Link> */}
                </div>

                <h5 className="pt-2 text-center md:pe-36 pl-[36px] text-[22px] font-[500]">
                  {ownerOrders && ownerOrders.length}
                </h5>
                {/* <Link to="/manager-garments">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
              </Link> */}
              </div>

              <div className="items-center py-3">
                <div className="flex">
                  <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    Processing Orders
                  </h3>
                </div>

                <h5 className="pt-2 text-center md:pe-36 pl-[36px] text-[22px] font-[500]">
                  {processingOrders}
                </h5>
                {/* <Link to="/manager-garments">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
              </Link> */}
              </div>
            </div>

            <div className="w-full ps-4 mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-3 hover:scale-103 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300">
              <div className="items-center py-4">
                <div className="flex">
                  <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    Dilevered Orders
                  </h3>
                </div>

                <h5 className="pt-2 text-center md:pe-36 pl-[36px] text-[22px] font-[500]">
                  {diliveredOrders}
                </h5>
                {/* <Link to="/manager-garments">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
              </Link> */}
              </div>

              <div className="items-center py-3">
                <div className="flex">
                  <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                  <h3
                    className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                  >
                    Refund Orders
                  </h3>
                </div>

                <h5 className="pt-2 text-center md:pe-36 pl-[36px] text-[22px] font-[500]">
                  {refundOrders}
                </h5>
                {/* <Link to="/manager-garments">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
              </Link> */}
              </div>
            </div>
          </div>

          <div className="w-full md:flex mt-2 mb-4 justify-between py-8 800px:w-full bg-white shadow rounded px-8">
            <div className="hover:scale-102 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300 p-4 rounded-md">
              <div className="flex items-center">
                <MdViewTimeline size={20} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Garments
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {garment && garment.length}
              </h5>
              <Link to="/owner-garments">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Garment</h5>
              </Link>
            </div>

            <div className="hover:scale-102 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300 p-4 rounded-md">
              <div className="flex items-center">
                <MdViewTimeline size={20} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Orders
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {/* {garment && garment.length} */}
              </h5>
              <Link to="/owner-orders">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
              </Link>
            </div>


            <div className="hover:scale-102 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300 p-4 rounded-md">
              <div className="flex items-center">
                <MdViewTimeline size={20} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Products
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {/* {garment && garment.length} */}
              </h5>
              <Link to="/owner-products">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Products </h5>
              </Link>
            </div>


            <div className="hover:scale-102 transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300 p-4 rounded-md">
              <div className="flex items-center">
                <MdViewTimeline size={20} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Customers
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {/* {garment && garment.length} */}
              </h5>
              <Link to="/owner-users">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Customers </h5>
              </Link>
            </div>
          </div>

          <br />
          <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={7}
              disableSelectionOnClick
              autoHeight
            />
          </div>
        </div>
        
      )}
      <div>
      <button type="button" onClick={downloadPDF}
      class="w-36 text-white bg-gradient-to-r fixed from-blue-500 
      via-blue-600 to-blue-700 hover:bg-gradient-to-br 
      shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bottom-8 ">Generate Report</button>

      </div>
    </div>
  );
};

export default OwnerDashboardMain;
