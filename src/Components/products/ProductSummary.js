import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//import ProductDetails from './ProductDetails'


const ProductSummary = ({product}) =>{
  
    return(
<div className="product" >
  <div className="product-image">
  </div>
  <p className="product-title"> {product.title} </p>
  <button>Add to Cart</button>
</div>      

    )
  }


export default ProductSummary