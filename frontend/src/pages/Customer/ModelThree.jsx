import React from 'react'
import Model from '../../components/Customer/Model'
import { useSelector } from 'react-redux';

const ModelThree = () => {
  const { allProducts } = useSelector((state) => state.products);
    console.log("model details", allProducts);
  return (
    <div>
        <Model allProducts={allProducts}/>
    </div>
  )
}

export default ModelThree