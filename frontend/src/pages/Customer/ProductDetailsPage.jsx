import React, { useEffect, useState } from 'react'
import Header from '../../components/Customer/Header';
import Footer from '../../components/Customer/Footer';
import ProductDetails from '../../components/Customer/ProductDetails';
import SuggestedProduct from '../../components/Customer/SuggestedProduct';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
  }, [data, allProducts]);

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