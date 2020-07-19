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
            <NavLink to="/skincare">Skincare</NavLink>
          </li>
          <li>
            <NavLink to="/makeup">Makeup</NavLink>
          </li>
          <li>
            <NavLink to="/hair">Hair Care</NavLink>
          </li>
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add New Product</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        :
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      }
    </div>  
  )
}

export default NavBar
