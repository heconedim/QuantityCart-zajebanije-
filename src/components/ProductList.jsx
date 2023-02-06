import React from 'react'
import Product from "./Product"
import {products} from "../assets/data/listOfData"

const ProductList = () => {

  const productList = products.map((product) => <Product product = {product}/>);

  return (
    <ul>{productList}</ul>
  )
}

export default ProductList