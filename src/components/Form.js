import React from 'react'

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

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>

        <label htmlFor='full-name'>Full Name: </label>
        <input type='text' autoComplete='off' name='name' value={name} onChange={this.handleChange}/>

        <label htmlFor='username'>Username: </label>
        <input type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>

        <label htmlFor='password'>Password: </label>
        <input type='password' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>

        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

export default Form
