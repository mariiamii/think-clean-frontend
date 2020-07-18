import React from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.findUser(event, this.state.username, this.props.match)
  }
  
  render() {
    console.log("made it")
    const {username, password} = this.state

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={username} 
            onChange={this.handleChange}
          />
        </div>
        <br></br>

        <div>
          <label htmlFor="password">Password: </label>
          <input 
            type="text" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <input className="auth" type="submit" value="Login" />
      </form>
      </div>
    )
  }
}

export default Login
