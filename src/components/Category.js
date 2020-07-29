import React from 'react'
import Product from './Product'
import '../css/Category.css'

const Category = (props) => {
    let arrayOfCategoryProductComponents = props.products.map((product) => {
        return <Product key={product.id} product={product} />
    })

    let handleChange = (event) => {
        props.changeSearchTerm(event.target.value)
    }

    return (
        <section className='section'>
            <div className="search-box">
                <input className='products-input' placeholder='Filter by brand or product name...' type="text" value={props.searchTerm} onChange={handleChange}/>
            </div>
            <div className="category-container">
                {arrayOfCategoryProductComponents}
            </div>
        </section>
    )
}

export default Category
