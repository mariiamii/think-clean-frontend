// import React from 'react';

// export default () => {
//     return <h2>Think Clean</h2>
// }

import React, { Component } from 'react'
import Signup from './Signup.js'
import Login from './Login.js'

export class Home extends Component {
  state = {
    on: true
  }

  toggle = () => this.setState({on: !this.state.on})

  render() {
    const { addOneUserToArray, findUser } = this.props

    return (
      <div className="user"> 
        {
        this.state.on 
        ? 
        <Login match={this.props} findUser={findUser}/> 
        : 
        <Signup addOneUserToArray={addOneUserToArray} match={this.props} /> 
        }
        <button onClick={this.toggle}>
          {
          this.state.on 
          ? 
          "Sign up instead"
          : 
          "Login in instead"
          }
        </button>
      </div>
    )
  }
}

export default Home
