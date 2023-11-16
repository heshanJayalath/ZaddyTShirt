import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineFolderAdd, AiOutlineGift } from 'react-icons/ai'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineDashboardCustomize, MdOutlineLocalOffer } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { VscNewFile } from 'react-icons/vsc'
import { CiMoneyBill, CiSettings } from 'react-icons/ci'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { HiOutlineReceiptRefund } from 'react-icons/hi'
import { TbReportMoney } from 'react-icons/tb'

const GarmentDashboardSideBar = ({ active }) => {
  return (
    <div className='w-full'>
      <div className="md:w-full min-w-max w-full md:h-[70vh] h-[50vh] bg-white shadow-sm shadow-blue-200 overflow-y-scroll sticky top-0 left-0 z-10">
        {/* single item */}
        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard" className="w-full flex items-center">
            <RxDashboard
              size={30}
              color={`${active === 1 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 1 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Dashboard
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard-orders" className="w-full flex items-center">
            <FiShoppingBag
              size={30}
              color={`${active === 2 ? "crimson" : "#555"}`}
            />
            <h5
              className={`800px:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              All Orders
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard-products" className="w-full flex items-center">
            <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              All Products
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link
            to="/garment-dashboard-create-product"
            className="w-full flex items-center"
          >
            <AiOutlineFolderAdd
              size={30}
              color={`${active === 4 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Create Product
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link
            to="/garment-dashboard-custom-orders"
            className="w-full flex items-center"
          >
            <CiMoneyBill
              size={30}
              color={`${active === 5 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 5 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Custom Orders
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard-messages" className="w-full flex items-center">
            <BiMessageSquareDetail
              size={30}
              color={`${active === 6 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 6 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Shop Inbox
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard-refunds" className="w-full flex items-center">
            <HiOutlineReceiptRefund
              size={30}
              color={`${active === 7 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Refunds
            </h5>
          </Link>
        </div>
        <div className="w-full flex items-center p-4">
          <Link to="/garment-dashboard-my-custom-orders" className="w-full flex items-center">
            <MdOutlineDashboardCustomize
              size={30}
              color={`${active === 8 ? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 8 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              My Custom Orders
            </h5>
          </Link>
        </div>
        <div className="w-full flex items-center p-4">
          <Link to="/garment-all-service-charges" className="w-full flex items-center">
            <TbReportMoney
              size={30}
              color={`${active === 9? "crimson" : "#555"}`}
            />
            <h5
              className={` 800px:block pl-2 text-[18px] font-[400] ${active === 9 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Service Charges Summary
            </h5>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default GarmentDashboardSideBar