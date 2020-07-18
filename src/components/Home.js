import React from 'react'
import NewProductForm from './NewProductForm'

const Home = (props) => {
  return(
      <div>
      {props.user.id !== 0 
        ?
        <div>
          <h1 id="header">Think Clean</h1>
          <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/4-recent-highlights-from-the-clean-beauty-movement/11448612-1-eng-GB/4-recent-highlights-from-the-Clean-Beauty-movement_wrbm_large.jpg" alt="clean-beauty" />
          <ul>
              <NewProductForm />
          </ul>
        </div>
        :
        <div>
          <h1 id="header">Think Clean</h1>
          <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/4-recent-highlights-from-the-clean-beauty-movement/11448612-1-eng-GB/4-recent-highlights-from-the-Clean-Beauty-movement_wrbm_large.jpg" alt="clean-beauty" />
        </div>
      }
    </div>  
  )
}

export default Home
