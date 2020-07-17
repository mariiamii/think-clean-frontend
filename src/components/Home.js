import React from 'react'

const Home = () => (
  <div>
    <h1 id="header">Think Clean</h1>
    <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/4-recent-highlights-from-the-clean-beauty-movement/11448612-1-eng-GB/4-recent-highlights-from-the-Clean-Beauty-movement_wrbm_large.jpg" alt="clean-beauty" />
  </div>
)

export default Home

/******************************************************/
// import React from 'react';

// export default () => {
//     return <h2>Think Clean</h2>
// }

// import React, { Component } from 'react'
// import Signup from './Signup.js'
// import Login from './Login.js'

// export class Home extends Component {
//   state = {
//     on: true
//   }

//   toggle = () => this.setState({on: !this.state.on})

//   render() {
//     const { addOneUserToArray, findUser } = this.props

//     return (
//       <div className="user"> 
//         {
//         this.state.on 
//         ? 
//         <Login match={this.props} findUser={findUser}/> 
//         : 
//         <Signup addOneUserToArray={addOneUserToArray} match={this.props} /> 
//         }
//         <button onClick={this.toggle}>
//           {
//           this.state.on 
//           ? 
//           "Sign up instead"
//           : 
//           "Login in instead"
//           }
//         </button>
//       </div>
//     )
//   }
// }

// export default Home