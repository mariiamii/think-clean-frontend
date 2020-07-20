import React from 'react'
import Product from './Product'

const AllProducts = (props) => {
  let arrayOfProductComponents = props.products.map((product) => {
    return <Product key={product.id} product={product} />
  })

  let handleChange = (event) => {
    props.changeSearchTerm(event.target.value)
  }
  
  return (
    <section>
      <div className="search-box">
          <input type="text" value={props.searchTerm} onChange={handleChange}/>
      </div>
      <div className="results-container">
        {arrayOfProductComponents}
      </div>
    </section>
  )
}

export default AllProducts
