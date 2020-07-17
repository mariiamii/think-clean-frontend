import React from 'react'

class CategoryContainer extends React.Component {
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

  render() {
    // let arrayOfComponents = this.state.products.map((product) => {
    //   return (
    //     <li key={product.id}>
    //       <NavLink to={`/products/${product.slug}`}>
    //         {product.name}
    //       </NavLink>
    //     </li>
    //   )
    // })
  }
}

export default CategoryContainer