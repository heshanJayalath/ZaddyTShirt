import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header'
import styles from '../../Styles/Customer/styles'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../../Static/Customer/data'
import ProductCard from '../../components/Customer/ProductCard'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Footer from '../../components/Customer/Footer'
import ResponsiveHeader from '../../components/Customer/ResponsiveHeader'

const ProductsPage2 = () => {
    const [searchParams] = useSearchParams();
    const categoryData = searchParams.get("category");
    const materialData = searchParams.get("material")
    const [data, setData] = useState([]);
    const{allProducts, isLoading} = useSelector((state)=>state.products);


    useEffect(() => {
        if (categoryData === null) {
            const d = searchParams.get("categoryData");
            setData(d);
        } else {
            const d = allProducts && allProducts.filter((i) => i.material === materialData && i.category === categoryData);
            setData(d);
        };
        // window.scrollTo(0,0)
    },[allProducts]);

    return (
        <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
        <div className='md:block hidden'>
      <Header activeHeading={3} />
      </div>
      <div className='md:hidden block z-10' >
      <ResponsiveHeader/>
      </div>
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
    )
  }
  </>
    )
}

export default ProductsPage2