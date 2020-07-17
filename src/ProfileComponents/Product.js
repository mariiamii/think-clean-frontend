import React from 'react'

const Product = (props) => {
  return(
    <ul>
      <li>{props.product.brand_name}</li>
      <li>{props.product.product_name}</li>
      <img src={props.product.image_url} alt={props.product.product_name} />
      <li>{props.product.description}</li>
      <li>{props.product.website}</li>
    </ul>
  )
}

export default Product
