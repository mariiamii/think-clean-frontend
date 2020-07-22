import React from 'react'
import { Link } from 'react-router-dom'
import ClickedProduct from './ClickedProduct'

class Product extends React.Component {
  state = {
    currentProduct: []
  }

  handleClick = () => {
    this.setState({ currentProduct: this.props.product.id })
  }

  render() {
    const { id, brand_name, product_name, image_url } = this.props.product

    return (
      <div>
        <Link to={`/product/${id}`} onClick={this.handleClick}>
          <img src={image_url} alt={product_name} />
        </Link>
        <h3>{brand_name}</h3>
        <h4>{product_name}</h4>
      </div>
    )
  }
}

export default Product
