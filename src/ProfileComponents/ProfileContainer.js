import React, { Component } from 'react'
import Product from './Product'
import NewProductForm from './NewProductForm'

class ProfileContainer extends Component {
  render() {
    console.log(this.props)

    let {id, username, products} = this.props.user

    let arrayOfProducts = products.map((product) => {
      return <Product key={product.id} product={product} />
    })

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3></h3>

        <ol>
          {arrayOfProducts}
        </ol>

        <NewProductForm />

      </div>
    )
  }
}

export default ProfileContainer
