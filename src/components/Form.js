import React from 'react'
import '../css/Form.css'

class Form extends React.Component {
  state = {
    name: '',
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.handleSubmit(this.state)
  }

  handleChange = (event) => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { formName } = this.props
    const { name, username, password } = this.state

    const image = require('../images/bg-2.jpg');
    const divStyle = {
      width: '100%',
      height: '1100px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
    }

    return (
      <form className="form" style={divStyle} onSubmit={this.handleSubmit}>
        <h1 className='header'>{formName}</h1>
        
        <label className='form-label' htmlFor='full-name'>Full Name: </label>
        <input className='form-input' type='text' autoComplete='off' name='name' value={name} onChange={this.handleChange}/>

        <label className='form-label' htmlFor='username'>Username: </label>
        <input className='form-input' type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>

        <label className='form-label' htmlFor='password'>Password: </label>
        <input className='form-input' type='password' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>

        <input className='form-input' type='submit' value='Submit'/>
      </form>
    )
  }
}

export default Form
