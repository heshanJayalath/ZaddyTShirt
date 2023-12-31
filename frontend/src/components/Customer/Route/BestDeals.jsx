import React, { useEffect, useState } from 'react'
import styles from '../../../Styles/Customer/styles';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

const BestDeals = () => {
    const [data, setData] = useState([]);
    const { allProducts } = useSelector((state) => state.products);

    useEffect(() => {
        const allProductsData = allProducts ? [...allProducts] : [];
        const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
        const firstFive = sortedData && sortedData.slice(0, 5);
        setData(firstFive);
    }, [allProducts]);

    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading} mt-5`}>
                    <h1>Best Deals</h1>
                </div>
                <div className='grid grid-cols-2 gap-[20px] md:grid-cols-5 md:gap-[25px] lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                    {
                        data && data.length !== 0 && (
                            <>
                                {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
                            </>
                        )
                    }
                    
                    
                </div>

                
            </div>
        </div>
    )
}

export default BestDeals