import React from 'react'
import '../css/NewProductForm.css'

class NewProductForm extends React.Component {
  state = {
    brand_name: '',
    product_name: '',
    description: '',
    image_url: '',
    category: 'Skincare',
    website: '',
    category_id: ''
  }

  handleCategoryChange = (event) => {
    if (event.target.value === "Skincare") {
      this.setState({category_id: 1})
      this.setState({category: event.target.value})
    } else if (event.target.value === "Makeup") {
      this.setState({category_id: 2})
      this.setState({category: event.target.value})
    } else if (event.target.value === "Hair") {
      this.setState({category_id: 3})
      this.setState({category: event.target.value})
    }
  }

  handleChange = (event) => {this.setState({ [event.target.name]: event.target.value })}

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((resp) => resp.json())
    .then((newProduct) => {
      console.log(newProduct)
      this.props.addNewProduct(newProduct)
      this.setState({
        brand_name: '',
        product_name: '',
        description: '',
        image_url: '',
        category_id: '',
        website: ''
      })
    })
  }

  render() {
    return (
      <section className='new-container'>
        <h2>Submit a clean product for review.</h2>
        <form className='new-form-con' onSubmit={this.handleSubmit}>

          <label className='new-label' htmlFor='brand-name'>Brand Name:</label>
          <input className='new-input' type='text' autoComplete='off' name='brand_name' value={this.state.brand_name} onChange={this.handleChange} />

          <label className='new-label' htmlFor='product-name'>Product Name:</label>
          <input className='new-input' type='text' autoComplete='off' name='product_name' value={this.state.product_name} onChange={this.handleChange} />

          <label className='new-label' htmlFor='description'>Description:</label>
          <input className='new-input' type='text' autoComplete='off' name='description' value={this.state.description} onChange={this.handleChange} />

          <label className='new-label' htmlFor='image'>Image:</label>
          <input className='new-input' type='text' autoComplete='off' name='image_url' value={this.state.image_url} onChange={this.handleChange} />

          <label className='new-label' htmlFor='category'>Category:</label>
          <select name='category' value={this.state.category} onChange={this.handleCategoryChange}>
            <option className='new-option' value='Skincare'>Skincare</option>
            <option className='new-option' value='Makeup'>Makeup</option>
            <option className='new-option' value='Hair'>Hair</option>
          </select>

          <label className='new-label'>Website:</label>
          <input className='new-input' type='text' autoComplete='off' name='website' value={this.state.website} onChange={this.handleChange} />

          <input className='new-input' type='submit' value='Create New Product' />

        </form>
      </section>
    )
  }
}

export default NewProductForm
