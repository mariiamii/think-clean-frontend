import React from 'react'

class Product extends React.Component {
  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({ details: !this.state.details })
  }
  
  renderFront = () => {
    const { image_url, brand_name, product_name } = this.props.product
    return (
        <>
          <img className="card-img" src={image_url} alt={product_name} />
          <div>{brand_name}</div>
          <div>{product_name}</div>
          <button className='favorite-btn' onClick={this.handleFavorite}>{'<3'}</button>
        </>
    )
  }

  renderBack = () => {
    const { description, website } = this.props.product
    return (
      <>
        <div className="card-back-text">{description}</div>
        <div className="card-back-text">{website}</div>
      </>
    )
  }

  render() {
    const { details } = this.state
    return (
      <div className="product-card" onClick={this.toggleDetails} >
        {details ? this.renderBack() : this.renderFront()}
      </div>
    )
  }
}

export default Product

// const Product = (props) => {
//   return (
//     <ul>
//       <li>{props.product.brand_name}</li>
//       <li>{props.product.product_name}</li>
//       <img src={props.product.image_url} alt={props.product.product_name} />
//       <li>{props.product.description}</li>
//       <li>{props.product.website}</li>
//     </ul>
//   )
// }
