import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header'
import styles from '../../Styles/Customer/styles'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../../Static/Customer/data'
import ProductCard from '../../components/Customer/ProductCard'
import { useSelector } from 'react-redux'
import Loader from '../Loader'
import Footer from './Footer'

const BestSellingPage = () => {
    const [data, setData] = useState([]);
    const { allProducts, isLoading } = useSelector((state) => state.products);

    useEffect(() => {
        const allProductsData = allProducts ? [...allProducts] : [];
        const sortedDate = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
        setData(sortedDate);
    },[allProducts]);

    return (
        <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
    )
   }
   </>
    )
}

export default BestSellingPage