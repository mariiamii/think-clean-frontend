import React from 'react'
import Product from './Product'

const Category = (props) => {
    let arrayOfCategoryProductComponents = props.products.map((product) => {
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
            <div id="product-collection">
                {arrayOfCategoryProductComponents}
            </div>
        </section>
    )
}

export default Category
