import React from 'react'
import '../css/Home.css'

const Home = (props) => {
  const image = require('../images/bg-2.jpg');
  const divStyle = {
    width: '100%',
    height: '1100px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }

  return(
    <div className='bg' style={divStyle}>
      <h1 className='header' align='center'>Think Clean</h1>
    </div>  
  )
}

export default Home
