import React from 'react'
import classes from "./Product.module.css"

export const Product = (props) => {
    const product = props.product;
  return (
    <li className={classes.list}>
        <h1>{product.title}</h1>
        <h3>{product.quantity}</h3>
        <h3>{product.price}</h3>
    </li>
  )
}

export default Product