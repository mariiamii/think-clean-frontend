import React, { Component } from 'react'

class NewProductForm extends Component {
  state = {
    brand_name: "",
    product_name: "",
    description: "",
    image_url: "",
    category: "Skincare",
    website: ""
  }

  handleChange = event => {this.setState({ [event.target.name]: event.target.value })}

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(console.log)
    // .then((newlyCreatedProduct) => {
    //   this.props.addNewProduct(newlyCreatedProduct)
    //   // this.setState({
    //   //   brand_name: ""
    //   // })
    // })
  }

  // handleChange = (event) => {
  //   let {brand_name, value} = event.target

  //   this.setState({
  //     [brand_name]: value
  //   })
  // }

  render() {
    return (
      <section>
        <h2>Submit a clean product for review.</h2>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='brand-name'>Brand Name:</label>
          <input type="text" autoComplete="off" name="brand_name" value={this.state.brand_name} onChange={this.handleChange} />

          <label htmlFor='product-name'>Product Name:</label>
          <input type="text" autoComplete="off" name="product_name" value={this.state.product_name} onChange={this.handleChange} />

          <label htmlFor='description'>Description:</label>
          <input type="text" autoComplete="off" name="description" value={this.state.description} onChange={this.handleChange} />

          <label htmlFor='image'>Image:</label>
          <input type="ulr" autoComplete="off" name="image_url" value={this.state.image_url} onChange={this.handleChange} />

          <label htmlFor='category'>Category:</label>
          <select name='category' value={this.state.category} onChange={this.handleChange}>
            <option value='Skincare'>Skincare</option>
            <option value='Makeup'>Makeup</option>
            <option value='Hair'>Hair</option>
          </select>

          <label>Website:</label>
          <input type="text" autoComplete="off" name="website" value={this.state.website} onChange={this.handleChange} />

          <input type="submit" value="Create New Product" />

        </form>
      </section>
    )
  }
}

export default NewProductForm
