import React from 'react'
import Category from './Category'

class CategoryWarehouse extends React.Component {
    state = {
        searchTerm: '',
        categories: {
            id: 0,
            name: '',
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/categories/1')
        .then((resp) => resp.json())
        .then((skincareData) => console.log(skincareData, "state before render")
        // this.setState({ products: skincareData })
        )
    }

    // changeSearchTerm = (termFromChild) => {this.setState({ searchTerm: termFromChild })}

    // filteredCategoryArray = () => {
    //     let theArrayToReturn = this.state.categories.products.filter((categoryPojo) => {
    //     return (
    //         categoryPojo.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    //         ||
    //         categoryPojo.product_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    //         )
    //     })
    //     return theArrayToReturn
    // }

    render() {
        console.log(this.state.categories.products, "state after render")
        return(
            <div>
                 {/* <Category 
                    categories={this.filteredCategoryArray()} 
                    searchTerm={this.state.searchTerm} 
                    changeSearchTerm={this.changeSearchTerm} 
                 /> */}
            </div>
        )
    }
}

export default CategoryWarehouse



//   renderCategory = (routerProps) => {
//     return <AllProducts
//       products={this.filteredCategoryArray()} 
//       searchTerm={this.state.searchTerm} 
//       changeSearchTerm={this.changeSearchTerm} 
//     />
//   }