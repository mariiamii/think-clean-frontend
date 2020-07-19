import React from 'react'
import Product from './Product'

const AllProducts = (props) => {
  let arrayOfProductComponents = props.products.map(product => {
    return <Product key={product.id} product={product} />
  })
  
  return (
    <div id="product-collection">
      {arrayOfProductComponents}
    </div>
  )
}

export default AllProducts
