import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import {withRouter} from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {
      id: 0,
      name: "",
      username: "",
      products: []
    }
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.id) {
      this.setState({
        user: resp
      }, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(resp.message)
    }
  }

  renderForm = (routerProps) => {
    console.log("made it to render form")
    console.log(routerProps)

    if (routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user}/>
  }

  addNewProduct = (newProduct) => {
    let copyOfProducts = [...this.state.user.products, newProduct]
    let copyOfUser = {
      ...this.state.user,
      products: copyOfProducts
    }

    this.setState({
      user: copyOfUser
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

/******************************************************/
// //WORKING
// import React from 'react'
// import {BrowserRouter as Router} from 'react-router-dom' 
// import Navbar from './components/Navbar.js'
// import MainContainer from './container/MainContainer'
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className= "nav-bar">
//           <Navbar/>
//         </div>

//         <div className='main-container'>
//           <MainContainer/>
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App

/******************************************************/
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