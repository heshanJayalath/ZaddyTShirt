import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
import ProductDetails from '../../components/Customer/ProductDetails';
import SuggestedProduct from '../../components/Customer/SuggestedProduct';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  // const { name } = useParams();
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const productName = name.replace(/-/g, "-");

  // console.log(productName);
  useEffect(() => {
    // const data = allProducts.find((i)=> i.name === productName);
    // setData(data);
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {
        data && <SuggestedProduct data={data} />
      }
      <Footer />
    </div>
  )
}

export default ProductDetailsPage