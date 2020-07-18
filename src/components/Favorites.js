import React from 'react'
import Product from './Product'

const Favorites = (props) => {
  let { name, products } = props.user

  let arrayOfFavoritedProducts = products.map((product) => {
    return <Product key={product.id} product={product} />
  })

  return (
    <div>
      <h2>{name}&apos;s Favorites</h2>

      <ol>
        {arrayOfFavoritedProducts}
      </ol>

    </div>
  )
}

export default Favorites
