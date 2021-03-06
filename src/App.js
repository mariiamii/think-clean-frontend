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
import ClickedProduct from './components/ClickedProduct'

class App extends React.Component {
  state = {
    products: [],
    favorites: [],
    skincare: {
      products: []
    },
    makeup: {
      products: []
    },
    hair: {
      products: []
    },
    user: {
      id: 0,
      name: '',
      username: '',
      products: [] //favorited products by the user
    },
    searchTerm: ''
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:3000/products'),
      fetch('http://localhost:3000/favorites'),
      fetch('http://localhost:3000/categories/1'),
      fetch('http://localhost:3000/categories/2'),
      fetch('http://localhost:3000/categories/3'),
      fetch('http://localhost:3000/categories/3'),
    ])
    .then(([resp1, resp2, resp3, resp4, resp5]) => Promise.all([
      resp1.json(), 
      resp2.json(), 
      resp3.json(), 
      resp4.json(),
      resp5.json()
    ]))
    .then(([data1, data2, data3, data4, data5]) => this.setState({
      products: data1,
      favorites: data2,
      skincare: data3,
      makeup: data4,
      hair: data5
    })) 
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

  renderProducts = (routerProps) => {
    return <AllProducts 
      products={this.filteredProductsArray()} 
      searchTerm={this.state.searchTerm} 
      changeSearchTerm={this.changeSearchTerm} 
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

  renderSkincare = (routerProps) => {
    return <Category
      products={this.filteredSkincareArray()} 
      searchTerm={this.state.searchTerm} 
      changeSearchTerm={this.changeSearchTerm} 
    />
  }

  renderMakeup = (routerProps) => {
    return <Category
      products={this.filteredMakeupArray()} 
      searchTerm={this.state.searchTerm} 
      changeSearchTerm={this.changeSearchTerm} 
    />
  }

  renderHair = (routerProps) => {
    return <Category
      products={this.filteredHairArray()} 
      searchTerm={this.state.searchTerm} 
      changeSearchTerm={this.changeSearchTerm} 
    />
  }

  renderClickedProduct = (routerProps) => {
    return <ClickedProduct
      user={this.state.user}
      routerProps={routerProps}
      addFavoritedProduct={this.addFavoritedProduct}
    />
  }
  
  addNewProduct = (newProduct) => {
    this.setState({ products: [...this.state.products, newProduct] })
  }

  addFavoritedProduct = (favoritedProduct) => {
    this.setState({ favorites: [...this.state.favorites, favoritedProduct] })
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

  filteredSkincareArray = () => {
    let theArrayToReturn = this.state.skincare.products.filter((categoryPojo) => {
      return (
        categoryPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        categoryPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })
    return theArrayToReturn
  }

  filteredMakeupArray = () => {
    let theArrayToReturn = this.state.makeup.products.filter((categoryPojo) => {
      return (
        categoryPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        categoryPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })
    return theArrayToReturn
  }

  filteredHairArray = () => {
    let theArrayToReturn = this.state.hair.products.filter((categoryPojo) => {
      return (
        categoryPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        categoryPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
    })
    return theArrayToReturn
  }
  
  render() {
    return (
      <div className='App'>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path='/register' render={ this.renderForm } />
          <Route path='/login' render={ this.renderForm } />
          <Route path='/products' render={ this.renderProducts } />
          <Route path='/product/:id' render={ this.renderClickedProduct } />
          <Route path='/skincare' render={ this.renderSkincare }/>
          <Route path='/makeup' render={ this.renderMakeup }/>
          <Route path='/hair' render={ this.renderHair }/>
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
