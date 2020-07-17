import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
  render() {

    return(
      <div className="nav-bar">
          <NavLink to="/skincare" exact>Skincare</NavLink>
          <NavLink to="/makeup" exact>Makeup</NavLink>
          <NavLink to="/hair" exact>Hair Care</NavLink>
          <NavLink to="/all" exact>All Products</NavLink>
          <NavLink to="/favorites" exact>Favorites</NavLink>
      </div>
    )
  }
}

export default NavBar
