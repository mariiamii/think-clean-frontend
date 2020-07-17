import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom' 
import Home from '../component/Home'

class MainContainer extends Component {
  state = {
    users: [],
    currentUser: [],
    products: [],
    favorites: [],
    userProducts: [],
    categories: []
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(arrayOfUsers => {
      this.setState({
        users: arrayOfUsers
      })
    })

    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => this.setState({ products }))

    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(categories => this.setState({ categories }))  

    fetch('http://localhost:3000/favorites')
    .then(res => res.json())
    .then(favorites => this.setState({ favorites }))  
  }
  
  findUser = (event, username, match) => {
    event.preventDefault()

    if (this.state.users.find(user => user.username === username)) {
      let user = this.state.users.find(user => user.username === username)

      this.setState({currentUser: user})
      match.history.push("/")
    } else {
      alert("Your login was unsucessful. Please try again, or sign up.")
    }
  }

  addOneUserToArray = (newUser) => {
    let copyOfList = [...this.state.users, newUser]

    this.setState({
      users: copyOfList
    })
  }

  render() {
    return (
      <div className= "main-container">
        <div className="banner"> 
          <h1>Think Clean</h1>
        </div>
        <Switch>
          <Route exact path='/signup' render={routerProps => 
            <Home findUser={this.findUser} addOneUserToArray={this.addOneUserToArray} {...routerProps}/>}
          />
        </Switch>
      </div>   
    )
  }
}

export default MainContainer
