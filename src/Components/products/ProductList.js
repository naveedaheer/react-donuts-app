import React from 'react';
import ProductSummary from './ProductSummary'
import {Link} from 'react-router-dom'
import {
    useCallback
  } from "react";
  
const ProductList = (props) =>{
    
    const {products} = props;

    function addToCart(pro) {
        console.log("pro", pro)
        // window.localStorage.setItem('product', pro);
    }

    return(
        <div className="product-list">
            {products && products.map( product => {
                return (
                    <div style={{display : 'contents'}}>
                        <Link to={'/product/' + product.id} key={product.id}  >
                        <ProductSummary  key={product.id} product={product}  />
                        </Link>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>

    )
}

export default ProductList