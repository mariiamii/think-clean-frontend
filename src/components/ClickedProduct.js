import React from 'react'
import '../css/ClickedProduct.css'

class ClickedProduct extends React.Component {
    state = {
        productId: this.props.currentProduct,
        productInfo: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3000/products/${this.props.routerProps.match.params.id}`)
        .then(resp => resp.json())
        .then(product => {
            this.setState({
                productInfo: product
            })
        })
    }

    handleFavorite = () => {
        fetch('http://localhost:3000/favorites', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: 1,
                product_id: this.props.routerProps.match.params.id
            })
        })
        .then(resp => resp.json())
        .then((favoritedItem) => 
        console.log(favoritedItem, "favorited item")
        // {
        //     this.props.addFavoritedProduct(favoritedItem)
        // }
        )
    }

    render() {
        const { brand_name, product_name, description, website} = this.state.productInfo
        
        return(
            <div>
               <h2 className='brand-name'>{brand_name}</h2>
               <h4 className='product-name'>{product_name}</h4>
               <img className='product-image'src={this.state.productInfo.image_url} alt={product_name} />
               <p className='description'>{description}</p>
               <br />
               <a href={website} target="_blank"><button className='website-btn'>Go to website</button></a>
               <button className='fav-btn' onClick={this.handleFavorite}>Favorite</button>
            </div>
        )
    }
}

export default ClickedProduct
