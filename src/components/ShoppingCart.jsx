import React from 'react'
import {products} from "../assets/data/listOfData"

const ShoppingCart = () => {

    const productsQuantity = products.reduce((currentQuantity, item) => {
        return item.quantity + currentQuantity
    }, 0)

  return (
    <div>
        <h1>Ukupno produkta: {productsQuantity}</h1>
    </div>
  )
}

export default ShoppingCart