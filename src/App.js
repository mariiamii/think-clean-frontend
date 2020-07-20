import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Favorites from './components/Favorites'
import AllProducts from './components/AllProducts'
import NewProductForm from './components/NewProductForm'
import Category from './components/Category'
// import CategoryWarehouse from './components/CategoryWarehouse'

class App extends React.Component {
  state = {
    skincare: [],
    products: [],
    searchTerm: '',
    user: {
      id: 0,
      name: '',
      username: '',
      products: []
    }
    // categories: {
    //   id: 0,
    //   name: '',
    //   products: []
    // }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then((resp) => resp.json())
    .then((productsData) => this.setState({ products: productsData }))

    fetch('http://localhost:3000/categories/1')
    .then((resp) => resp.json())
    .then((skincareData) => this.setState({skincare: skincareData}, function() {
      console.log(this.state.skincare, "setState")}))
    // console.log(skincareData, "state before render")
      // this.setState({ 
      //   categories: {
      //     products: skincareData
      //   }
      // }, function() {
      //   console.log(this.state.categories.products, "setState")
      // })
    // )
  }

  handleLoginSubmit = (userInfo) => {
    console.log('Login form has been submitted')
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then((resp) => resp.json())
    .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log('Register form has been submitted')
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then((resp) => resp.json())
    .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.id) {
      this.setState({ user: resp }, () => {this.props.history.push('/')})
    } else {
      alert(resp.message)
    }
  }

  renderForm = (routerProps) => {
    if (routerProps.location.pathname === '/login'){
      return <Form
        formName='Login Form'
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === '/register') {
      return <Form
        formName='Registration Form'
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderHome = (routerProps) => {
    return <Home 
      user={this.state.user}
    />
  }

  renderFavorites = (routerProps) => {
    return <Favorites 
      user={this.state.user}
      products={this.filteredFavoritesArray()}
      searchTerm={this.state.searchTerm} 
      changeSearchTerm={this.changeSearchTerm} 
    />
  }

  renderProducts = (routerProps) => {
    // if (routerProps.location.pathname === '/products'){
      return <AllProducts 
        products={this.filteredProductsArray()} 
        searchTerm={this.state.searchTerm} 
        changeSearchTerm={this.changeSearchTerm} 
      />
    // } 
    // else if (routerProps.location.pathname === '/skincare') {
    //   return <Category
    //     products={this.state.skincare}
    //     products={this.filteredCategoryArray()} 
    //     searchTerm={this.state.searchTerm} 
    //     changeSearchTerm={this.changeSearchTerm} 
    //   />
    // }
  }

  renderCategory = (routerProps) => {
    return <Category
      products={this.state.skincare} 
      // searchTerm={this.state.searchTerm} 
      // changeSearchTerm={this.changeSearchTerm} 
    />
  }

  addNewProduct = (newProduct) => {
    this.setState({ products: [...this.state.products, newProduct] })
  }

  changeSearchTerm = (termFromChild) => {this.setState({ searchTerm: termFromChild })}

  filteredProductsArray = () => {
    let theArrayToReturn = this.state.products.filter((productPojo) => {
      return (
        productPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        productPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })
    return theArrayToReturn
  }

  filteredFavoritesArray = () => {
    let theArrayToReturn = this.state.user.products.filter((productPojo) => {
      return (
        productPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        productPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })
    return theArrayToReturn
  }

  // filteredCategoryArray = () => {
  //   let theArrayToReturn = this.state.categories.products.filter((categoryPojo) => {
  //     return (
  //       categoryPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //         ||
  //       categoryPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //       )
  //   })
  //   return theArrayToReturn
  // }

  //adding products associated to a user
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
    // console.log(this.state.categories.products, "state after render")
    return (
      <div className='App'>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path='/register' render={ this.renderForm } />
          <Route path='/login' render={ this.renderForm } />
          <Route path='/products' render={ this.renderProducts } />
          <Route path='/skincare' render={ () => <Category skincare={this.state.skincare} /> } />
          {/* <Route path='/categories/1' component={ CategoryWarehouse } /> */}
          <Route path='/favorites' render={ this.renderFavorites } />
          <Route path='/add' render={ () => <NewProductForm addNewProduct={this.addNewProduct} />} />
          <Route path='/' exact component={this.renderHome} />
          <Route render={ () => <p>Sorry! Page not Found.</p> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
