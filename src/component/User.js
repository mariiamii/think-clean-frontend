// import React, { Component } from 'react'
// import SignUp from './SignUp.js'
// import Login from './Login.js'

// export class User extends Component {
//   state ={
//     on: true
//   }

//   toggle = () => this.setState({on: !this.state.on})


//   render() {
//     const { addUser } = this.props
//     return (
//       <div className="user"> 
//         {/* <h1>
//         <img alt=''src={require("../img/logo.JPG")}/>
//         </h1> */}
//         {this.state.on? <Login match={this.props} findUser={this.props.findUser}/> : <SignUp addUser={addUser} match={this.props} /> }
//         <button onClick={this.toggle}>{this.state.on? "Sign up instead": "Login in instead"}</button>
//       </div>
//     )
//   }
// }

// export default User

// class User extends React.Component {
//   state = {
//     users: []
//   }

//   componentDidMount(){
//     fetch("http://localhost:3000/users")
//     .then(resp => resp.json())
//     .then((arrayOfUsers) => {
//       this.setState({
//         users: arrayOfUsers
//       })
//     })
//   }

//   addOneUserToArray = (newUser) => {
//     let copyOfList = [...this.state.users, newUser]

//     this.setState({
//       users: copyOfList
//     })
//   }

//   render() {
//     return (
//       <div className="User">
//         <SignUp 
//           addOneUserToArray={this.addOneUserToArray}
//         />
//         <Login />
//       </div>
//     )
//   }
// }

// export default User








import React, { Component } from 'react'

export class Users extends Component {
  render() {

    const {name, username} = this.props.user
    return (
      <div className="user-container">
        <div className='user-card'>
          {/* <img src={image} alt='pic'/> */}
          <div className="user-info">
            <h4><b>{name}</b></h4> 
            <h4><b>{username}</b></h4> 
          </div>
        </div>
      </div>
    )
  }
}

export default Users
