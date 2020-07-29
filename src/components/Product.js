import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Product.css'

class Product extends React.Component {
  state = {
    current_product: []
  }

  handleClick = () => {
    this.setState({ current_product: this.props.product.id })
  }

  render() {
    const { id, brand_name, product_name, image_url } = this.props.product

    return (
      <div className='product-card'>
        <Link to={`/product/${id}`} onClick={this.handleClick}>
          <img className='card-img' src={image_url} alt={product_name} />
        </Link>
        <div className='container'>
          <h3>{brand_name}</h3>
          <h4>{product_name}</h4>
        </div>
      </div>
    )
  }
}

export default Product
