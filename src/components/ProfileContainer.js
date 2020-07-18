import React, { Component } from 'react'
import Product from './Product'
// import NewProductForm from './NewProductForm'

class ProfileContainer extends Component {
  render() {
    console.log(this.props)

    let {id, name, username, products} = this.props.user

    let arrayOfProducts = products.map((product) => {
      return <Product key={product.id} product={product} />
    })

    return (
      <div>
        <h2>{name}&apos;s Favorites</h2>

        <ol>
          {arrayOfProducts}
        </ol>

        {/* <NewProductForm /> */}

      </div>
    )
  }
}

export default ProfileContainer
