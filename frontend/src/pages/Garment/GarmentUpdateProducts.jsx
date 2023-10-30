import React, { useEffect, useState } from 'react'
import GarmentDashboardHeader from '../../components/Garment/Layouts/GarmentDashboardHeader'
import GarmentDashboardSideBar from '../../components/Garment/Layouts/GarmentDashboardSideBar'
import UpdateProduct from '../../components/Garment/new/UpdateProduct'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GarmentUpdateProducts = () => {

  const { allProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
  }, [data, allProducts]);

  return (
    <div>
        <GarmentDashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <GarmentDashboardSideBar active={4} />
            </div>
            <div className="w-full justify-center flex">
                <UpdateProduct data={data} />
            </div>
          </div>
    </div>
  )
}

export default GarmentUpdateProducts