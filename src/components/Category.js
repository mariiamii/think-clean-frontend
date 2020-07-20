import React from 'react'
import Product from './Product'

const Category = (props) => {
    // console.log(props.products, "category prop")
    
    // let { products } = props.categories

    // let array = Array.from(props.products)
    // console.log(array)
    // console.log(props.products.products)

    let arrayOfCategoryProductComponents = props.skincare.products.map((product) => {
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
