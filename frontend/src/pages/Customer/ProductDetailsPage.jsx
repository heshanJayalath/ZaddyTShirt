import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
import ProductDetails from '../../components/Customer/ProductDetails';
import SuggestedProduct from '../../components/Customer/SuggestedProduct';
import { useParams } from 'react-router-dom';
import { productData } from '../../Static/Customer/data';

const ProductDetailsPage = () => {
    const {name} = useParams();
    const [data,setData] = useState(null);
    const productName = name.replace(/-/g," ");

    console.log(productName);
    useEffect(()=>{
        const data = productData.find((i)=> i.name === productName);
        setData(data);
    },[]);

  return (
    <div>
        <Header />
        <ProductDetails data={data} />
        {
          data && <SuggestedProduct data={data}/>
        }
        <Footer/>
    </div>
  )
}

export default ProductDetailsPage