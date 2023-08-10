import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../../../Styles/Customer/styles';
import ProductCard from '../../Customer/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsGarment } from '../../../redux/actions/product';
import { getAlleventsGarment } from '../../../redux/actions/event';

const GamrmentProfileData = ({ isGarmentOwner }) => {

  const { events } = useSelector((state) => state.events);
  const { products } = useSelector((state)=>state.products);
  const {id} = useParams();
  const dispatch = useDispatch();
// console.log("products",products.images[0]);
  const [active, setActive] = useState(1);

  useEffect(()=>{
    dispatch(getAllProductsGarment(id));
    dispatch(getAlleventsGarment(id));
  },[dispatch]);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${active === 1 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${active === 2 ? "text-red-500" : "text-[#333]"
                } cursor-pointer pr-[20px]`}
            >
              Running Events
            </h5>
          </div>

        </div>
        <div>
          {isGarmentOwner && (
            <div>
              <Link to="/garment-dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {products &&
            products.map((i, index) => (
              <ProductCard data={i} key={index} isGarment={true} />
            ))}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {events &&
              events.map((i, index) => (
                <ProductCard
                  data={i}
                  key={index}
                  isGarment={true}
                  isEvent={true}
                />
              ))}
          </div>
          {events && events.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Events have for this shop!
            </h5>
          )}
        </div>
      )}


    </div>
  )
}

export default GamrmentProfileData