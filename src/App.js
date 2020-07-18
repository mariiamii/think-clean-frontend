import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Favorites from './components/Favorites'

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
        this.props.history.push("/")
      })
    } else {
      alert(resp.message)
    }
  }

  renderForm = (routerProps) => {
    // console.log("made it to render form")
    // console.log(routerProps)

    if (routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Registration Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderFavorites = (routerProps) => {
    return <Favorites user={this.state.user}/>
  }

  renderHome = (routerProps) => {
    return <Home user={this.state.user}/>
  }

  //products associated to a user
  // addNewProduct = (newProduct) => {
  //   let copyOfUserProducts = [...this.state.user.products, newProduct]
  //   let copyOfUser = {
  //     ...this.state.user,
  //     products: copyOfUserProducts
  //   }

  //   this.setState({
  //     user: copyOfUser
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/favorites" render={ this.renderFavorites } />
          <Route path="/" exact component={this.renderHome} />
          <Route render={ () => <p>Sorry! Page not Found.</p> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

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

// render() {
//   let arrayOfComponents = this.state.products.map((product) => {
//     return (
//       <li key={product.id}>
//         <NavLink to={`/products/${product.slug}`}>
//           {product.name}
//         </NavLink>
//       </li>
//     )
//   })

//   return (
//     <div className="App">
//       <Switch> 
//         <Route path="/signup" component={SignUp} />
//         <Route path="/login" component={Login} />
//         <Route path="/" exact component={Home} />
//         /* <Route path="/characters/:slug" render={this.decideWhichCharactersToRender} />
//         <Route path="/" exact component={Home} />
//         <Route component={NotFound} /> */
//         </Switch>
//     </div>
//   )
// }
