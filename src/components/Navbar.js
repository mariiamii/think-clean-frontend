import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
  return(
      <div>
      {props.user.id !== 0 
        ?
        
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/skincare">Skincare</NavLink>
          </li>
          <li>
            <NavLink to="/makeup">Makeup</NavLink>
          </li>
          <li>
            <NavLink to="/hair">Hair Care</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/all">View All</NavLink>
          </li>
        </ul>
        :
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      }
    </div>  
  )
}

export default NavBar

/******************************************************/
// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'

// export class NavBar extends Component {
//   render() {

//     return(
//       <div className="nav-bar">
//           <NavLink to="/skincare" exact>Skincare</NavLink>
//           <NavLink to="/makeup" exact>Makeup</NavLink>
//           <NavLink to="/hair" exact>Hair Care</NavLink>
//           <NavLink to="/all" exact>All Products</NavLink>
//           <NavLink to="/favorites" exact>Favorites</NavLink>
//       </div>
//     )
//   }
// }

// export default NavBar
