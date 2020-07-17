import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom' 
import Navbar from './components/Navbar.js'
import MainContainer from './container/MainContainer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className= "nav-bar">
          <Navbar/>
        </div>

        <div className='main-container'>
          <MainContainer/>
        </div>
      </div>
    </Router>
  )
}

export default App

// state = {
  //   products: []
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000/products")
  //   .then(resp => resp.json())
  //   .then((arrayOfProducts) => {
  //     this.setState({
  //       products: arrayOfProducts
  //     })
  //   })
  // }

  // decideWhichProductToRender = (routerProps) => {
  //   let theThingThatTheUserTypedInTheURL = routerProps.match.params.slug

  //   let foundProduct = this.state.product.find((product) => {
  //     return product.slug === theThingThatTheUserTypedInTheURL
  //   })

  //   if (foundProduct) {
  //     return <Product name={foundProduct.name} gif={foundProduct.gif} />
  //   } else {
  //     return <NotFound />
  //   }
  // }

  // ender() {
    // let arrayOfComponents = this.state.products.map((product) => {
    //   return (
    //     <li key={product.id}>
    //       <NavLink to={`/products/${product.slug}`}>
    //         {product.name}
    //       </NavLink>
    //     </li>
    //   )
    // })

    // return (
    //   <div className="App">
    //     {/* <Nav />  */}
    //     <Switch> 
    //       <Route path="/signup" component={SignUp} />
    //       <Route path="/login" component={Login} />
    //       <Route path="/" exact component={Home} />
          /* <Route path="/characters/:slug" render={this.decideWhichCharactersToRender} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} /> */
  //       </Switch>
  //     </div>
  //   )
  // }