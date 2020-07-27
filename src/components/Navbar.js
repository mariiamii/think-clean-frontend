import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = (props) => {
  return (
      <div className='nav-div'>
      {props.user.id !== 0 
        ?
        <ul className='nav-ul'>
          <li className='nav-li'>
            <NavLink className='navlink' to='/'>Home</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/skincare'>Skincare</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/makeup'>Makeup</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/hair'>Hair Care</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/products'>All Products</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/add'>Add New Product</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
        :
        <ul className='nav-ul'>
          <li className='nav-li'>
            <NavLink className='navlink' to='/register'>Register</NavLink>
          </li>
          <li className='nav-li'>
            <NavLink className='navlink' to='/login'>Login</NavLink>
          </li>
        </ul>
      }
    </div>  
  )
}

export default NavBar
