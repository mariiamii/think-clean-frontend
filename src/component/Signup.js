// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
// import React, { useState } from 'react';

//MINE
// class SignUp extends React.Component {
//   state = {
//     name: "",
//     username: "",
//     password: ""
//   }

//   handleInput = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     let history = useHistory()

//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         name: this.state.name,
//         username: this.state.username,
//         password: this.state.password
//       })
//     })
//     .then(resp => resp.json())
//     .then((newUser) => {
//       this.props.addOneUserToArray(newUser)
//     })
//     .then(resp => history.push("/login/"))
//     .then(newUser => console.log("You're all signed up, please log in!"))
//     .then(resp => history.push("/login/"))
//   }
  
//   render() {
//     console.log(this.props.addOneUserToArray)

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="f_name">Name</label>
//         <input
//           type="text"
//           name="name"
//           autoComplete="off"
//           value={this.state.name}
//           onChange={this.handleInput}
//         />
//         <label htmlFor="f_username">Username</label>
//         <input
//           type="text"
//           name="username"
//           autoComplete="off"
//           value={this.state.username}
//           onChange={this.handleInput}
//         />
//         <label htmlFor="f_password">Password</label>
//         <input
//           type="text"
//           name="password"
//           autoComplete="off"
//           value={this.state.password}
//           onChange={this.handleInput}
//         />
//         {/* <NavLink to="/login">  */}
//           <input type="submit" value="Sign Up" />
//         {/* </NavLink>  */}
//       </form>
// //     )
//   }
// }

// export default SignUp
/*****************************************************************************/
// //RAMZY
// const SignUp = (props) => {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();
//   // const [message, setMessage] = useState('');

//   const signup = (e) => {
//     e.preventDefault()
//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             accepts: "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             username: username,
//             password: password
//         })
//     })
//         .then(resp => resp.json())
//         .then(newUser => console.log("You're all signed up, please log in!"))
//         .then(resp => history.push("/login/"))
//   }

//   return (
//     <form onSubmit={signup}>
//       <label htmlFor="f_name">Name</label>
//       <input
//         type="text"
//         name="name"
//         autoComplete="off"
//         // value={this.state.name}
//         onChange={e => setName(e.target.value)}
//       />
//       <label htmlFor="f_username">Username</label>
//       <input
//         type="text"
//         name="username"
//         autoComplete="off"
//         // value={this.state.username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <label htmlFor="f_password">Password</label>
//       <input
//         type="text"
//         name="password"
//         autoComplete="off"
//         // value={this.state.password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       {/* <NavLink to="/login">  */}
//         <input type="submit" value="Sign Up" />
//       {/* </NavLink>  */}
//   </form>

// )
// }

// export default SignUp
/*****************************************************************************/
//NEW
import React, { Component } from 'react'

export class Signup extends Component {
  state = {
    name: '', 
    username: '', 
    password: '',
    confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()  

    if(this.state.password === this.state.confirmation) {
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(resp => resp.json())
      .then(newUser=> this.props.addOneUserToArray(newUser))
    } else {
      alert("The passwords do not match. Please try again.")
    }
    this.setState({
      name: '', 
      username: '', 
      password: ''
    })
    this.props.match.history.push("/signup")
  }

  render() {
    const { name, username, password, confirmation } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <br></br>

          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name="name" 
              value={name} 
              placeholder="Input name"
              onChange={this.handleChange} 
            />
          </div>
          <br></br>

          <div>
            <label htmlFor="username">Username: </label>
            <input 
              type="text" 
              name="username" 
              value={username} 
              placeholder="Create username"
              onChange={this.handleChange} 
            />
          </div>
          <br></br>
          
          <div>
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              name="password"
              value={password} 
              placeholder="Create password"
              onChange={this.handleChange} 
            />
          </div>
          <br></br>

          <div>
            <label htmlFor="password">Confirm Password: </label>
            <input 
              type="password" 
              name="confirmation" 
              value={confirmation}
              placeholder="Confirm your password" 
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <input  type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default Signup
