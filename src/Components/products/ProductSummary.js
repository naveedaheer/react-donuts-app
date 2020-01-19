import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import productImage from "../../images/product/product1.jpg"
//import ProductDetails from './ProductDetails'

const ProductSummary = ({product}) =>{
    return(
        <div className="product" >
          <div>
          {
product.imageURL ? 
          <img className="product-image" src={product.imageURL} /> : <img className="product-image" src={productImage} />
          }  
          </div>
          <p className="product-title"> {product.title} </p>
        </div>      

    )
  }

export default ProductSummary