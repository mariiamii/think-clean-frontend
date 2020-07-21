import React from 'react'

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

    render() {
        return(
            <div>
               {this.state.productInfo.brand_name}
               {this.state.productInfo.description}
               {this.state.productInfo.website}
               
               <a href={this.state.productInfo.website} target="_blank"><button>Go to website</button></a>
            </div>
        )
    }
}

export default ClickedProduct
