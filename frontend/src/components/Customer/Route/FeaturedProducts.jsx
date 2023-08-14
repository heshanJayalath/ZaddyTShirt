import React from 'react'
import styles from '../../../Styles/Customer/styles'
import ProductCard from '../ProductCard'
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
    const {allProducts} = useSelector((state) => state.products);
    // console.log("all Products:", allProducts);
    return (
        <div>
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Featured Products</h1>
          </div>
          <div className="grid grid-cols-2 gap-[20px] md:grid-cols-5 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {
              allProducts && allProducts.length !== 0 &&(
                <>
                 {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
                </>
              )
             }
          </div>
        </div>
      </div>
    )
}

export default FeaturedProducts