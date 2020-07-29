import React from 'react'
import Product from './Product'
import '../css/AllProducts.css'

const AllProducts = (props) => {
  let arrayOfProductComponents = props.products.map((product) => {
    return <Product key={product.id} product={product} />
  })

  let handleChange = (event) => {
    props.changeSearchTerm(event.target.value)
  }
  
  return (
    <section className='section'>
      <div className="search-box">
          <input className='products-input' type="text" placeholder='Filter by brand or product name...' value={props.searchTerm} onChange={handleChange}/>
      </div>
      <div className="results-container">
        {arrayOfProductComponents}
      </div>
    </section>
  )
}

export default AllProducts
