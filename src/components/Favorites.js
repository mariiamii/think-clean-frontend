import React from 'react'
import Product from './Product'

const Favorites = (props) => {
  let arrayOfFavoritedProducts = props.products.map((product) => {
    return <Product key={product.id} product={product} />
  })

  let handleChange = (event) => {
    props.changeSearchTerm(event.target.value)
  }

  return (
    <section>
      <h2>{props.user.name}&apos;s Favorites</h2>

      <div className="search-box">
          <input type="text" value={props.searchTerm} onChange={handleChange}/>
      </div>

      <div className="results-container">
        {arrayOfFavoritedProducts}
      </div>

    </section>
  )
}

export default Favorites
